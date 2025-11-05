// Centralized SEO metadata configuration for Oviedo Hearing Center

export const businessInfo = {
  name: "Oviedo Hearing Center",
  legalName: "Oviedo Hearing Center LLC",
  description: "Expert hearing care in Oviedo, FL since 2002. Licensed hearing aid specialist providing comprehensive hearing evaluations, hearing aid fittings, and ongoing support.",
  phone: "(407) 366-7766",
  phoneLink: "+14073667766",
  email: "oviedohearing@gmail.com",
  address: {
    street: "110 Burnsed Pl Suite 1000",
    city: "Oviedo",
    state: "FL",
    stateCode: "Florida",
    zip: "32765",
    country: "United States"
  },
  hours: {
    monday: "9:00 AM - 3:00 PM",
    tuesday: "9:00 AM - 3:00 PM",
    wednesday: "9:00 AM - 3:00 PM",
    thursday: "9:00 AM - 3:00 PM",
    friday: "Closed",
    saturday: "Closed",
    sunday: "Closed"
  },
  coordinates: {
    latitude: "28.6700",
    longitude: "-81.2087"
  },
  googleMapsUrl: "https://www.google.com/maps?cid=14472029919860026218",
  googleReviewUrl: "https://www.google.com/maps?cid=14472029919860026218",
  foundedYear: "2002",
  priceRange: "$$",
  rating: "5.0",
  reviewCount: "50+"
};

export const seoPages = {
  home: {
    title: "Oviedo Hearing Center | Hearing Aids in Oviedo FL",
    description: "Trusted hearing care in Oviedo, FL since 2002. Expert hearing evaluations, hearing aid fittings & repairs. Licensed specialists serving Seminole County. Call (407) 366-7766.",
    keywords: "hearing aids Oviedo FL, audiologist Oviedo, hearing test near me, hearing aid specialist Oviedo, hearing loss testing Seminole County, hearing care Florida",
    canonical: "https://www.oviedohearing.com/"
  },
  about: {
    title: "About Our Hearing Specialists | Oviedo Hearing Center",
    description: "Meet Cynthia Quinn, Licensed Hearing Aid Specialist with 20+ years experience serving Oviedo, FL. Personalized hearing care you can trust since 2002.",
    keywords: "hearing aid specialist Oviedo, audiologist Oviedo FL, licensed hearing specialist, hearing care team",
    canonical: "https://www.oviedohearing.com/about"
  },
  services: {
    title: "Hearing Services in Oviedo, FL | Evaluations & Fittings",
    description: "Comprehensive hearing services: hearing evaluations, hearing aid fittings, maintenance, and ongoing support. Serving Oviedo & Seminole County, FL.",
    keywords: "hearing evaluation Oviedo, hearing test FL, hearing aid fitting, hearing aid repair Oviedo, hearing maintenance",
    canonical: "https://www.oviedohearing.com/services"
  },
  contact: {
    title: "Contact Oviedo Hearing Center | Schedule Your Consultation",
    description: "Schedule your free hearing consultation at Oviedo Hearing Center. Located at 110 Burnsed Pl, Oviedo FL. Call (407) 366-7766 or book online today.",
    keywords: "hearing consultation Oviedo, schedule hearing test, hearing clinic Oviedo FL, audiologist appointment",
    canonical: "https://www.oviedohearing.com/contact"
  },
  testimonials: {
    title: "Patient Reviews | Oviedo Hearing Center Testimonials",
    description: "Read reviews from satisfied patients at Oviedo Hearing Center. 5-star rated hearing care in Oviedo, FL. See why patients trust us for their hearing health.",
    keywords: "hearing center reviews Oviedo, audiologist reviews FL, hearing aid testimonials, patient reviews",
    canonical: "https://www.oviedohearing.com/testimonials"
  },
  resources: {
    title: "Hearing Care Resources & FAQs | Oviedo Hearing Center",
    description: "Helpful resources about hearing health, insurance coverage, and what to expect at your appointment. Expert answers from Oviedo's trusted hearing specialists.",
    keywords: "hearing aid insurance coverage, hearing care FAQs, hearing test questions, audiologist resources",
    canonical: "https://www.oviedohearing.com/resources"
  }
};

// Generate LocalBusiness structured data
export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.oviedohearing.com/#organization",
  "name": businessInfo.name,
  "legalName": businessInfo.legalName,
  "description": businessInfo.description,
  "url": "https://www.oviedohearing.com",
  "telephone": businessInfo.phone,
  "email": businessInfo.email,
  "priceRange": businessInfo.priceRange,
  "foundingDate": businessInfo.foundedYear,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessInfo.address.street,
    "addressLocality": businessInfo.address.city,
    "addressRegion": businessInfo.address.stateCode,
    "postalCode": businessInfo.address.zip,
    "addressCountry": businessInfo.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": businessInfo.coordinates.latitude,
    "longitude": businessInfo.coordinates.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": businessInfo.rating,
    "reviewCount": businessInfo.reviewCount
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.coordinates.latitude,
      "longitude": businessInfo.coordinates.longitude
    },
    "geoRadius": "40000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hearing Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hearing Evaluations",
          "description": "Comprehensive hearing tests and assessments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hearing Aid Fittings",
          "description": "Professional hearing aid selection and fitting services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hearing Aid Maintenance & Repairs",
          "description": "Expert maintenance and repair services for all hearing aid brands"
        }
      }
    ]
  },
  "sameAs": [
    businessInfo.googleMapsUrl
  ]
});
