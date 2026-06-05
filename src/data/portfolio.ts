export const ROLES = [
  "Full Stack Developer",
  "AI Developer",
  "Web Designer",
  "Web Developer",
  "Front End Developer",
  "Apps Designer",
  "Apps Developer",
];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "Web Application", value: 99 },
  { name: "AI Applications", value: 99 },
  { name: "APP Development", value: 99 },
  { name: "UI / UX", value: 99 },
  { name: "Quality Assurance", value: 99 },
  { name: "Deployments", value: 99 },
];

export const EXPERIENCE = [
  { title: "UI/UX Designer", period: "2020 - Present", org: "VisionariesAI Labs" },
  { title: "Frontend Developer", period: "2020 - Present", org: "VisionariesAI Labs" },
  { title: "Web Designer", period: "2020 - Present", org: "VisionariesAI Labs" },
  { title: "Apps Designer", period: "2020 - Present", org: "VisionariesAI Labs" },
  { title: "AI Developer", period: "2020 - Present", org: "VisionariesAI Labs" },
  { title: "Quality Assurance", period: "2020 - Present", org: "VisionariesAI Labs" },
];

export const ACHIEVEMENTS = [
  { title: "AI Applications", period: "2020 - Present", org: "AI-Powered Analytics Platform" },
  { title: "Innovative Web Applications", period: "2020 - Present", org: "Comprehensive Web Solutions" },
  { title: "Industry-Specific Solutions", period: "2020 - Present", org: "Tailored Software Development" },
  { title: "Technical Expertise", period: "2020 - Present", org: "Full Stack Development" },
  { title: "Advanced AI & ML", period: "2020 - Present", org: "Artificial Intelligence Solutions" },
  { title: "Operational Excellence", period: "2020 - Present", org: "Deployment & Maintenance" },
];

export const SERVICES = [
  { title: "UI/UX Design", price: "Starting from $2999", icon: "✦",
    desc: "User-centric interfaces that are visually appealing and highly functional. Every interaction is intuitive and engaging." },
  { title: "Comprehensive Web or App Solutions", price: "Starting from $2999", icon: "◈",
    desc: "End-to-end web and app development tailored to your needs. Scalable, responsive, and secure applications that drive results." },
  { title: "AI-Powered Analytics Platform", price: "Starting from $2999", icon: "◉",
    desc: "Deep insights and predictive analytics to help you make data-driven decisions with advanced AI techniques." },
  { title: "Industry-Specific Solutions", price: "Starting from $2999", icon: "◆",
    desc: "Tailored software for healthcare, finance, e-commerce and more — executed with precision and excellence." },
  { title: "Deployment & Maintenance", price: "Starting from $2999", icon: "▲",
    desc: "Smooth transitions from development to production with ongoing support so your apps perform at peak." },
  { title: "Quality Assurance", price: "Starting from $2999", icon: "●",
    desc: "Rigorous testing and validation ensuring the highest quality standards — issues identified and resolved promptly." },
];

export type Category = "All" | "WEB" | "APP" | "AI" | "IoT" | "UI/UX";

export const PROJECTS: { title: string; category: Exclude<Category, "All">[]; client: string; lang: string; gradient: string }[] = [
  { title: "Academics Management", category: ["WEB", "AI"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-indigo-500 to-cyan-400" },
  { title: "Attendance Management", category: ["WEB", "AI"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-cyan-400 to-blue-500" },
  { title: "Education Management", category: ["WEB", "UI/UX"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-blue-600 to-violet-500" },
  { title: "Restaurant Management", category: ["WEB", "APP"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-fuchsia-500 to-cyan-400" },
  { title: "VisionariesAI", category: ["AI", "WEB"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-sky-500 to-emerald-400" },
  { title: "Visionary Hub", category: ["WEB", "IoT"], client: "Service Based Application", lang: "React (Frontend), Python (AI & Backend)", gradient: "from-amber-400 to-rose-500" },
];

export const TEAM = [
  { role: "AI Developer", name: "Aarav K.", initials: "AK" },
  { role: "Full Stack Developer", name: "Meera S.", initials: "MS" },
  { role: "UI/UX Designer", name: "Rohan V.", initials: "RV" },
  { role: "QA & Deployment Engineer", name: "Priya N.", initials: "PN" },
];

export const TESTIMONIALS = [
  { quote: "Done Dental related device.", name: "Saikiran", title: "Medical Device Specialist" },
  { quote: "Framework development using Python to automate the work for their JSON files.", name: "Nisha", title: "Software Engineer" },
  { quote: "IOT Device.", name: "Durga Prasad Polaki", title: "CEO (Dream Technologies)" },
];
