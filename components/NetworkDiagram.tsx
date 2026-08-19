"use client";

import { motion } from "framer-motion";

// A stylized VPC-style topology: nodes + connecting paths, drawn on load.
// This is the hero's signature visual — a nod to Aditya's networking/VPC work,
// not a generic decorative graphic.

const nodes = [
  { id: "igw", x: 260, y: 20, label: "IGW" },
  { id: "alb", x: 260, y: 100, label: "ALB" },
  { id: "ec2a", x: 130, y: 190, label: "EC2" },
  { id: "ec2b", x: 260, y: 190, label: "EC2" },
  { id: "ec2c", x: 390, y: 190, label: "EC2" },
  { id: "db", x: 260, y: 280, label: "DB" },
];

const edges: [string, string][] = [
  ["igw", "alb"],
  ["alb", "ec2a"],
  ["alb", "ec2b"],
  ["alb", "ec2c"],
  ["ec2a", "db"],
  ["ec2b", "db"],
  ["ec2c", "db"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 520 320"
      className="w-full h-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodeMap[a];
        const to = nodeMap[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#2A3B5E"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: "easeInOut" }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={22}
            fill="url(#nodeGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 2.4, delay: 1 + i * 0.15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={8}
            className="fill-surface"
            stroke="#2DD4BF"
            strokeWidth={1.5}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
          />
          <motion.text
            x={n.x}
            y={n.y + 34}
            textAnchor="middle"
            className="fill-ink-faint font-mono"
            fontSize="10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.12 }}
          >
            {n.label}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
