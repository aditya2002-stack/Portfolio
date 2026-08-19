// Proficiency levels are intentional — keep them honest when updating.
// "hands-on" | "basic" | "learning"

export type SkillLevel = "hands-on" | "basic" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Cloud (AWS)",
    items: [
      { name: "EC2", level: "hands-on" },
      { name: "VPC & Subnets", level: "hands-on" },
      { name: "S3", level: "hands-on" },
      { name: "Route Tables / IGW / NAT Gateway", level: "hands-on" },
      { name: "Application Load Balancer", level: "hands-on" },
      { name: "Auto Scaling Groups", level: "hands-on" },
      { name: "Security Groups & NACLs", level: "hands-on" },
      { name: "CloudWatch", level: "basic" },
      { name: "IAM", level: "basic" },
      { name: "CloudFormation", level: "basic" },
    ],
  },
  {
    category: "Containers",
    items: [
      { name: "Docker", level: "hands-on" },
      { name: "Dockerfile & Images", level: "hands-on" },
      { name: "Docker Networking & Volumes", level: "hands-on" },
      { name: "Kubernetes", level: "learning" },
    ],
  },
  {
    category: "CI/CD & Automation",
    items: [
      { name: "Jenkins", level: "basic" },
      { name: "GitHub Actions", level: "learning" },
      { name: "CI/CD Concepts", level: "basic" },
    ],
  },
  {
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", level: "learning" },
      { name: "AWS CloudFormation", level: "basic" },
    ],
  },
  {
    category: "Linux & Scripting",
    items: [
      { name: "Linux Administration", level: "hands-on" },
      { name: "systemctl / journalctl", level: "hands-on" },
      { name: "SSH", level: "hands-on" },
      { name: "Log Analysis & Troubleshooting", level: "hands-on" },
      { name: "Bash / Shell Scripting", level: "basic" },
      { name: "EC2 User Data", level: "hands-on" },
    ],
  },
  {
    category: "Networking",
    items: [
      { name: "CIDR & Subnetting", level: "hands-on" },
      { name: "VPC Peering", level: "hands-on" },
      { name: "Load Balancing", level: "hands-on" },
      { name: "DNS / HTTP / HTTPS", level: "hands-on" },
      { name: "TCP/IP Fundamentals", level: "hands-on" },
    ],
  },
  {
    category: "Web Servers",
    items: [
      { name: "Nginx", level: "hands-on" },
      { name: "Reverse Proxy Configuration", level: "hands-on" },
      { name: "SSL / HTTPS", level: "learning" },
    ],
  },
  {
    category: "Monitoring",
    items: [
      { name: "Amazon CloudWatch", level: "basic" },
      { name: "Prometheus", level: "learning" },
      { name: "Grafana", level: "learning" },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", level: "hands-on" },
      { name: "GitHub", level: "hands-on" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: "basic" },
      { name: "MongoDB", level: "basic" },
    ],
  },
];

// Kept intentionally separate and secondary — supporting background, not the main focus.
export const supportingSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
];
