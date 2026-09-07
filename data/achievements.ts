export interface Achievement {
  title: string;
  org: string;
  description: string;
  image: string | null;
  certificateUrl?: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: "Campus Ambassador — THOMSO '25",
    org: "Indian Institute of Technology Roorkee",
    description:
      "Represented THOMSO '25, the annual cultural festival of IIT Roorkee, at my institution — promoting the festival and engaging with the student community.",
    image: null,
    certificateUrl: "/images/achievements/thomso25-campus-ambassador.jpg",
    tags: ["Outreach", "Representation", "Communication"],
  },
  {
    title: "Vice Secretary — Euphony Music Club",
    org: "College Music Club",
    description:
      "Coordinated team members and helped organize club events and performances as part of the club's leadership team.",
    image: null,
    tags: ["Leadership", "Coordination", "Teamwork"],
  },
  {
    title: "3rd Place — Band Competition",
    org: "IIT Roorkee",
    description:
      "Performed with my college band in a competitive event, securing 3rd place.",
    image: null,
    tags: ["Teamwork", "Performance Under Pressure"],
  },
  {
    title: "Publication Acceptance — PortfolioAI",
    org: "IJARSCT",
    description: "PortfolioAI was accepted for publication in IJARSCT.",
    image: null,
    tags: ["Research", "Recognition"],
  },
];
