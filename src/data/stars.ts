export type Star = {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  size: number;
  section: string;
  taglines: string[];
  content: unknown;
};

export const STARS: Star[] = [
  {
    id: "helios",
    name: "HELIOS",
    position: [0, 0, 0],
    color: "#FFE87C",
    size: 0.5,
    section: "home",
    taglines: ["The core.", "Always evolving."],
    content: {title: "About Me",
  description:
    "Third-year B.Tech CSE student at VIT Bhopal. Passionate about AI Engineering, Backend Systems and building intelligent applications.",}
  },

  {
    id: "bellatrix",
    name: "BELLATRIX",
    position: [12, 6, 0],
    color: "#88CCFF",
    size: 0.3,
    section: "Projects",
    taglines: ["AI projects, hackathons and open-source work."],
    content: {title: "Projects",
  projects: [
    "DocuMind AI",
    "AccentTrainer",
    "RuntimeForge",
    "Trinethra",
    "Food AI Safety System",
    "GigFlow CRM",
  ]}
  },

  {
    id: "vega",
    name: "VEGA",
    position: [-12, 7,0],
    color: "#AAFFCC",
    size: 0.3,
    section: "Skills",
    taglines: ["Fast Learner"],
    content: { title: "Skills",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "AI Agents",
    "LangChain",
    "FastAPI",
    "Tesseract OCR",
  ]}
  },

  {
    id: "sirius",
    name: "SIRIUS",
    position: [-10, -7, 0],
    color: "#FFFFFF",
    size: 0.3,
    section: "Education",
    taglines: ["Forever Learning"],
    content: { title: "Education",
    university: "VIT Bhopal",
    degree: "B.Tech CSE",
    cgpa: "8.08",
    school:"Mother Teresa Mission Higher Secondary School, Kanpur",
    degreeSchool: "High School",
    percentage: "95.4%", }
},
    

  {
    id: "polaris",
    name: "POLARIS",
    position: [10, -6, 0],
    color: "#FFD700",
    size: 0.3,
    section: "Certifications",
    content: { title: "Journey",
  achievements: [
    "6 Hackathons Joined",
    "Open Source Contributor",
    "AI Internship Projects",
    "Full Stack Applications"
  ]},
    taglines: ["Visionary"]
  }
];