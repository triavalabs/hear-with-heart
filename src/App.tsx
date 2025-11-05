import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SEOHead from "./components/SEOHead";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ResourcesPage from "./pages/ResourcesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<><SEOHead page="home" /><Index /></>} />
          <Route path="/about" element={<><SEOHead page="about" /><AboutPage /></>} />
          <Route path="/services" element={<><SEOHead page="services" /><ServicesPage /></>} />
          <Route path="/resources" element={<><SEOHead page="resources" /><ResourcesPage /></>} />
          <Route path="/testimonials" element={<><SEOHead page="testimonials" /><TestimonialsPage /></>} />
          <Route path="/contact" element={<><SEOHead page="contact" /><ContactPage /></>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
