/**
 * Schema.org structured data helpers for SEO
 */

// Church/Organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Church", "LocalBusiness"],
  "name": "CAC Itedo Yiyanju",
  "url": "https://cacitedoyiyanju.org",
  "logo": "https://cacitedoyiyanju.org/src/assets/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Church Address Here",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos",
    "postalCode": "100001",
    "addressCountry": "NG"
  },
  "telephone": "+234-8033072838",
  "email": "cacitedoyiyanju@gmail.com",
};

// Event schema generator
export const generateEventSchema = (event: {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  isOnline?: boolean;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "image": event.image || "https://cacitedoyiyanju.org/src/assets/logo.png",
  "startDate": event.startDate,
  "endDate": event.endDate || event.startDate,
  "eventAttendanceMode": event.isOnline
    ? "https://schema.org/OnlineEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": event.isOnline
    ? {
        "@type": "VirtualLocation",
        "url": "https://cacitedoyiyanju.org/listen/video",
      }
    : {
        "@type": "Place",
        "name": event.location,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": event.location,
          "addressLocality": "Lagos",
          "addressCountry": "NG",
        },
      },
  "organizer": {
    "@type": "Organization",
    "name": "CAC Itedo Yiyanju",
    "url": "https://cacitedoyiyanju.org",
  },
});

// Person schema for pastors
export const generatePersonSchema = (person: {
  name: string;
  role: string;
  image?: string;
  email?: string;
  description?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.role,
  "image": person.image,
  "email": person.email,
  "description": person.description,
  "worksFor": {
    "@type": "Organization",
    "name": "CAC Itedo Yiyanju",
  },
});

// FAQPage schema
export const generateFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

// Add schema to page head
export const addSchemaToHead = (schema: Record<string, any>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
