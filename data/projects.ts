export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  name: string;
  category: "cloud" | "devops" | "fullstack";
  featured: boolean;
  description: string;
  problem: string;
  tech: string[];
  architecture: string[];
  contribution: string[];
  concepts: string[];
  github: string | null; // null = pending, shows "Repo coming soon"
  demo: string | null;
  image: string | null; // card thumbnail — null = show fallback thumbnail
  gallery?: GalleryImage[]; // optional detail-view screenshot gallery, shown in the project modal
}

export const projects: Project[] = [
  {
    slug: "aws-multi-vpc-networking",
    name: "AWS Multi-VPC Networking & VPC Peering",
    category: "cloud",
    featured: true,
    description:
      "Designed and configured multiple AWS VPCs with isolated public and private subnets, connected via VPC Peering for controlled cross-environment communication.",
    problem:
      "Demonstrates how separate environments — Test and Production — can be isolated into different VPCs while still allowing controlled communication between them when required.",
    tech: ["AWS VPC", "EC2", "Route Tables", "Internet Gateway", "VPC Peering", "Security Groups", "CIDR"],
    architecture: [
      "Test VPC — 10.0.0.0/24",
      "Production VPC — 192.0.0.0/16",
      "Public and private subnets in each VPC",
      "Route tables and Internet Gateways configured per VPC",
      "EC2 instances launched across both VPCs",
      "VPC Peering established with routes for inter-VPC communication",
      "Connectivity verified bidirectionally via ICMP (ping)",
    ],
    contribution: [
      "Designed and configured the full VPC networking setup end-to-end",
      "Built subnets, route tables, and Internet Gateways for both VPCs",
      "Established and tested VPC Peering between environments",
      "Verified bidirectional connectivity between EC2 instances",
    ],
    concepts: [
      "VPC Networking",
      "Public vs Private Subnets",
      "CIDR & IP Addressing",
      "VPC Peering",
      "Network Isolation",
      "Security Groups",
    ],
    github: null,
    demo: null,
    image: "/images/projects/vpc-peering/04-prod-vpc-resource-map.jpg",
    gallery: [
      {
        src: "/images/projects/vpc-peering/01-vpcs-list.jpg",
        alt: "AWS console showing the test-vpc and prod-vpc VPCs, both in Available state",
        caption: "Test and Production VPCs created and available",
        width: 1280,
        height: 288,
      },
      {
        src: "/images/projects/vpc-peering/02-subnets-list.jpg",
        alt: "AWS console listing subnets across both VPCs, including test-public-subnet, prod-public-subnet, and prod-private-subnet",
        caption: "Public and private subnets configured across both VPCs",
        width: 1280,
        height: 570,
      },
      {
        src: "/images/projects/vpc-peering/03-test-vpc-resource-map.jpg",
        alt: "Resource map of test-vpc showing its subnet, route tables, and Internet Gateway connection",
        caption: "test-vpc resource map — subnet, route tables, and IGW",
        width: 1280,
        height: 389,
      },
      {
        src: "/images/projects/vpc-peering/04-prod-vpc-resource-map.jpg",
        alt: "Resource map of prod-vpc showing public and private subnets, route tables, and Internet Gateway",
        caption: "prod-vpc resource map — public/private subnets, route tables, and IGW",
        width: 1280,
        height: 377,
      },
      {
        src: "/images/projects/vpc-peering/05-vpc-peering-connection.jpg",
        alt: "AWS console confirming the VPC peering connection between test-vpc and prod-vpc is established and active",
        caption: "VPC Peering connection established between test-vpc and prod-vpc",
        width: 1280,
        height: 577,
      },
      {
        src: "/images/projects/vpc-peering/06-ec2-instances-running.jpg",
        alt: "AWS EC2 console showing prod-instance and test-instance both in running state",
        caption: "EC2 instances running in each VPC",
        width: 1280,
        height: 572,
      },
      {
        src: "/images/projects/vpc-peering/07-connectivity-test-ping.jpg",
        alt: "Terminal sessions on both EC2 instances showing successful ICMP ping replies across the VPC peering connection",
        caption: "Bidirectional connectivity verified via ICMP ping across the peering connection",
        width: 1280,
        height: 572,
      },
    ],
  },
  {
    slug: "online-shopping-cicd",
    name: "Online Shopping Web App — Dockerized CI/CD Deployment",
    category: "devops",
    featured: true,
    description:
      "Containerized a web application with Docker and built a Jenkins CI/CD pipeline to automate build and deployment to AWS EC2.",
    problem:
      "Demonstrates how an application can be containerized and deployed on AWS with an automated CI/CD pipeline, instead of a manual build-and-deploy process.",
    tech: ["Docker", "Jenkins", "AWS EC2", "Git / GitHub"],
    architecture: [
      "GitHub → Jenkins CI/CD Pipeline → Docker Build → Containerized App → AWS EC2",
      "Jenkins automates the build and deployment workflow",
      "Docker containerizes the application for consistent deployment",
      "AWS EC2 serves as the deployment environment",
    ],
    contribution: [
      "Containerized the web application using Docker",
      "Created and managed Docker images and containers",
      "Configured AWS EC2 for application deployment",
      "Set up a Jenkins CI/CD pipeline to automate build and deployment",
    ],
    concepts: ["Containerization", "CI/CD", "Automated Build & Deployment", "AWS EC2", "Git/GitHub Workflow"],
    github: null,
    demo: null,
    image: "/images/projects/online-shopping/01-jenkins-pipeline.jpg",
    gallery: [
      {
        src: "/images/projects/online-shopping/01-jenkins-pipeline.jpg",
        alt: "Jenkins pipeline stage view for the online_shop_cicd pipeline, showing Code, Build, Test, and Deploy stages across recent successful builds",
        caption: "Jenkins CI/CD pipeline — automated Code, Build, Test, and Deploy stages",
        width: 1280,
        height: 583,
      },
      {
        src: "/images/projects/online-shopping/02-running-application.jpg",
        alt: "The deployed online shopping web application homepage showing a product grid with items, prices, and add-to-cart buttons",
        caption: "Deployed application running after the automated pipeline completes",
        width: 1280,
        height: 583,
      },
    ],
  },
  {
    slug: "portfolioai",
    name: "PortfolioAI — Automated Portfolio Generation from Resume",
    category: "fullstack",
    featured: false,
    description:
      "An AI-powered web app that parses a resume into structured data and generates a customizable digital portfolio with real-time preview.",
    problem:
      "Simplifies creating a professional portfolio from an existing resume, removing the need to manually build and organize portfolio content.",
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    architecture: [
      "User Resume → Resume Parsing → Structured Data → React Portfolio Templates → Real-time Preview",
      "React.js frontend with customizable templates",
      "Node.js / Express.js REST APIs for backend processing",
      "MongoDB for data storage",
    ],
    contribution: [
      "Built the React.js frontend and customizable portfolio templates",
      "Implemented resume parsing into structured data",
      "Built the real-time portfolio preview",
      "Developed REST APIs with Node.js and Express.js, integrated MongoDB",
    ],
    concepts: [
      "Full-Stack Development",
      "REST APIs",
      "Resume Parsing",
      "Database Integration",
      "Real-Time Preview",
    ],
    github: "https://github.com/Chitravansh/PortfolioAI_v1.git",
    demo: "https://portfolio-ai-v1.vercel.app/",
    image: "/images/projects/portfolioai/05-generated-portfolio.jpg",
    gallery: [
      {
        src: "/images/projects/portfolioai/01-landing-page.jpg",
        alt: "PortfolioAI landing page with the headline 'Transform Your Resume Into a Stunning Portfolio' and an Upload Resume button",
        caption: "Landing page — entry point for uploading a resume",
        width: 1600,
        height: 719,
      },
      {
        src: "/images/projects/portfolioai/02-sign-in.jpg",
        alt: "PortfolioAI sign-in screen with options to continue with Google or GitHub, or sign in with email and password",
        caption: "Sign-in screen",
        width: 1600,
        height: 721,
      },
      {
        src: "/images/projects/portfolioai/03-template-gallery.jpg",
        alt: "Template Gallery screen showing multiple portfolio template options including Modern, Minimalist, and Terminal styles",
        caption: "Template gallery for choosing a portfolio layout",
        width: 1600,
        height: 726,
      },
      {
        src: "/images/projects/portfolioai/04-editor-customization.jpg",
        alt: "Portfolio editor screen with a template selection sidebar and a live preview panel showing the generated portfolio content",
        caption: "Editor with template selection and live preview",
        width: 1600,
        height: 724,
      },
      {
        src: "/images/projects/portfolioai/05-generated-portfolio.jpg",
        alt: "Final generated portfolio page showing a profile section, About text, and a Core Competencies list of skills",
        caption: "Generated portfolio — final output",
        width: 1600,
        height: 722,
      },
    ],
  },
];
