export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  current: boolean;
  primary: boolean;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "DevOps Intern",
    company: "Ayaan Infotech",
    duration: "Jun 2026 — Present",
    location: "Hybrid (WFO & WFH)",
    current: true,
    primary: true,
    points: [
      "Gaining hands-on experience with core AWS services including EC2, IAM, and VPC as part of ongoing cloud and DevOps training.",
      "Deployed and configured EC2 instances within a custom VPC, implementing a 3-tier architecture to separate application layers.",
      "Configured Application Load Balancer, Target Groups, and Auto Scaling Groups to improve availability and scalability.",
      "Monitored AWS resources using CloudWatch and managed Security Groups, AMIs, and EBS volumes.",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "Labmentix",
    duration: "Jun 2025",
    location: "Remote",
    current: false,
    primary: false,
    points: [
      "Developed and maintained web applications using the MERN stack and Next.js, improving performance.",
      "Designed REST APIs, deployed applications on Netlify and AWS, and tested endpoints using Thunder Client.",
    ],
  },
];
