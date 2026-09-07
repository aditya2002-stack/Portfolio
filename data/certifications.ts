export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string | null; // null = pending, shows "Credential coming soon"
  image: string | null;
}

export const certifications: Certification[] = [
  {
    name: "IBM Cloud Essentials V3",
    issuer: "Cognitive Class / IBM",
    date: "October 11, 2023",
    url: "https://courses.cognitiveclass.ai/certificates/11df0c36838449e1ab0976bb32a2e0a8",
    image: "/images/certifications/ibm-cloud-essentials-v3.jpg",
  },
  {
    name: "Complete Core Java + DSA + Build Projects and more..",
    issuer: "Udemy",
    date: "June 20, 2025",
    url: "https://ude.my/UC-6a11a08f-7f20-4cc3-b409-68fd795a9a4e",
    image: "/images/certifications/udemy-core-java-dsa.jpg",
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "December 7, 2024",
    url: "https://drive.google.com/file/d/1fASIMb1IIT-T5F-S_RnoE5ly3QBRbjfc/view?usp=sharing",
    image: "/images/certifications/forage-solutions-architecture.jpg",
  },
];
