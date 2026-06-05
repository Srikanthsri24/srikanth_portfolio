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
  { name: "Web Applications", value: 96, desc: "Modern React, TanStack, Next-gen UX" },
  { name: "AI / ML Solutions", value: 94, desc: "LLMs, vision, analytics, automation" },
  { name: "Mobile App Development", value: 92, desc: "Cross-platform native experiences" },
  { name: "UI / UX Design", value: 95, desc: "Design systems, prototyping, motion" },
  { name: "IoT & Hardware", value: 88, desc: "Sensors, edge devices, telemetry" },
  { name: "DevOps & Deployments", value: 90, desc: "CI/CD, cloud, observability" },
];

export const EXPERIENCE = [
  { title: "Founder & CEO", period: "2020 - Present", org: "VisionariesAI Labs", desc: "Building AI products for education, energy & safety." },
  { title: "Lead AI & Full Stack Developer", period: "2020 - Present", org: "VisionariesAI Labs", desc: "Shipping production AI, web & mobile platforms." },
  { title: "Product Architect", period: "2021 - Present", org: "VisionariesAI Labs", desc: "Architecting Aye Board, ScholAR Labs & LMS." },
  { title: "UI / UX & Brand Lead", period: "2020 - Present", org: "VisionariesAI Labs", desc: "Crafting cohesive design systems across products." },
  { title: "IoT & Hardware Integrator", period: "2022 - Present", org: "VisionariesAI Labs", desc: "Energy monitors, attendance & CCTV systems." },
  { title: "Quality Assurance Lead", period: "2020 - Present", org: "VisionariesAI Labs", desc: "Reliable, tested, secure deployments." },
];

export const ACHIEVEMENTS = [
  { title: "Aye Board Deployed", period: "2024", org: "AI Smart Boards across institutions" },
  { title: "ScholAR Labs Launched", period: "2024", org: "AR & 3D Science for Class 6-12" },
  { title: "AI CCTV Monitoring", period: "2023", org: "Smart surveillance across campuses" },
  { title: "Energy Monitoring Live", period: "2023", org: "Single & three-phase deployments" },
  { title: "Ask.VisionariesAI", period: "2024", org: "AI teaching & learning assistant" },
  { title: "11+ Products Shipped", period: "2020 - Present", org: "From idea to production" },
];

export const SERVICES = [
  { title: "UI / UX Design", icon: "✦",
    desc: "User-centric interfaces that are visually appealing and highly functional. Every interaction is intuitive and engaging." },
  { title: "Web & App Solutions", icon: "◈",
    desc: "End-to-end web and app development tailored to your needs. Scalable, responsive, secure applications that drive results." },
  { title: "AI-Powered Analytics", icon: "◉",
    desc: "Deep insights and predictive analytics to help you make data-driven decisions with advanced AI techniques." },
  { title: "Industry-Specific Solutions", icon: "◆",
    desc: "Tailored software for education, healthcare, finance, and energy — executed with precision and excellence." },
  { title: "Deployment & Maintenance", icon: "▲",
    desc: "Smooth transitions from development to production with ongoing support so your apps perform at their peak." },
  { title: "Quality Assurance", icon: "●",
    desc: "Rigorous testing and validation ensuring the highest quality standards — issues identified and resolved promptly." },
];

export type Category = "All" | "AI" | "EDU" | "IoT" | "WEB" | "APP";

export type Product = {
  id: number;
  name: string;
  tag: string;
  description: string;
  goal: string;
  features: string[];
  status: string;
  clients: string;
  gradient: string;
  category: Exclude<Category, "All">[];
  image: string;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Aye Board – by VisionariesAI",
    tag: "AI Smart Board",
    description:
      "Aye Board is an AI-enabled smart board for digital classrooms, interactive teaching, multimedia lessons, and modern school presentations.",
    goal: "Make classroom teaching more interactive, visual, and technology-driven from Nursery to Class 12.",
    features: ["Interactive smart classroom board", "Digital lesson presentation", "Teacher-friendly tools", "Multimedia teaching support", "AI-assisted learning", "Nursery to 12th"],
    status: "Available",
    clients: "Schools & institutions",
    gradient: "from-sky-500 to-blue-700",
    category: ["AI", "EDU"],
    image: u("1577896851231-70ef18881754"),
  },
  {
    id: 2,
    name: "ScholAR Labs Projects",
    tag: "AR / 3D Labs for Class 6-12",
    description: "AR and 3D-based learning experiences for Science — Physics, Chemistry, and Biology through interactive simulations.",
    goal: "Improve science learning with visual, practical, simulation-based experiences.",
    features: ["Classes 6 to 12", "AR & 3D simulations", "Physics models", "Chemistry visualization", "Biology interactives", "Classroom demos"],
    status: "Available",
    clients: "High-school learning",
    gradient: "from-violet-500 to-fuchsia-600",
    category: ["AI", "EDU"],
    image: u("1532094349884-543bc11b234d"),
  },
  {
    id: 3,
    name: "Complete School Technology Solutions",
    tag: "Nursery to 12th",
    description: "Complete tech solutions for schools — AI curriculum, LMS, smart classrooms, digital tools, and school automation.",
    goal: "Support schools with full digital transformation from early learning to senior secondary.",
    features: ["Nursery to 12th", "AI curriculum", "Smart classroom setup", "LMS & digital learning", "School automation", "Long-term partner"],
    status: "In Production",
    clients: "Complete school setup",
    gradient: "from-emerald-500 to-teal-700",
    category: ["EDU", "WEB"],
    image: u("1503676260728-1c00da094a0b"),
  },
  {
    id: 4,
    name: "AI-Powered CCTV Monitoring",
    tag: "AI CCTV & Safety",
    description: "Analyzes live and recorded footage to detect normal and abnormal activities in real time with instant alerts.",
    goal: "Turn ordinary cameras into proactive security tools with smarter situational awareness.",
    features: ["Multi-camera monitoring", "Abnormal activity detection", "Smart alerts", "Custom rules", "Discipline & safety", "Audit trails"],
    status: "In Production",
    clients: "Deployed across institutions",
    gradient: "from-cyan-500 to-blue-600",
    category: ["AI", "IoT"],
    image: u("1557597774-9d273605dfa9"),
  },
  {
    id: 5,
    name: "Single-Phase Energy Monitoring",
    tag: "Energy – Single Phase",
    description: "For homes and small facilities with app-based control, real-time insights, and instant alerts for irregularities.",
    goal: "Remote control and visibility over energy usage to improve efficiency and stability.",
    features: ["App-based control", "Real-time monitoring", "Instant alerts", "Usage trends", "Mobile-based", "Power efficiency"],
    status: "In Production",
    clients: "Active at multiple sites",
    gradient: "from-yellow-500 to-orange-600",
    category: ["IoT", "APP"],
    image: u("1473341304170-971dccb5ac1e"),
  },
  {
    id: 6,
    name: "Three-Phase Energy Monitoring",
    tag: "Energy – Three Phase",
    description: "Designed for industries and large facilities where balanced energy management and real-time tracking are critical.",
    goal: "Stable distribution across phases with continuous monitoring and alerts.",
    features: ["Three-phase monitoring", "Balanced management", "Real-time alerts", "Usage tracking", "Mobile-based", "Heavy-load reliability"],
    status: "In Production",
    clients: "Used in industrial setups",
    gradient: "from-purple-500 to-pink-600",
    category: ["IoT", "APP"],
    image: u("1581092921461-eab62e97a780"),
  },
  {
    id: 7,
    name: "Universal Management System",
    tag: "Central Device Control",
    description: "Seamless communication, efficient administration, and engaging learning experiences for schools, colleges, and campuses.",
    goal: "Centralize device operations and automation for institutions.",
    features: ["Unified dashboard", "Automation & scheduling", "Role-based access", "Multi-user control", "Activity logs", "Fast operations"],
    status: "In Production",
    clients: "Managing devices daily",
    gradient: "from-green-500 to-teal-600",
    category: ["WEB", "IoT"],
    image: u("1551288049-bebda4e38f71"),
  },
  {
    id: 8,
    name: "Attendance Management System",
    tag: "Face · Fingerprint · RFID",
    description: "Device + software integrating face recognition, fingerprint scanning, and RFID for secure identification and reporting.",
    goal: "Accurate attendance tracking with secure verification for schools and offices.",
    features: ["Face recognition", "Fingerprint", "RFID support", "Reports & logs", "Secure flow", "Scalable hardware+software"],
    status: "In Production",
    clients: "Tracking users reliably",
    gradient: "from-indigo-500 to-purple-600",
    category: ["IoT", "AI"],
    image: u("1633265486064-086b219458ec"),
  },
  {
    id: 9,
    name: "Ask.VisionariesAI",
    tag: "AI Teaching & Learning Assistant",
    description: "AI platform that assists students and teachers with explanations, quizzes, exam creation, evaluation, and instant doubt solving.",
    goal: "Smarter learning with AI-driven teaching support and faster evaluation.",
    features: ["Doubt solving", "Question paper generation", "Quizzes & exams", "Automatic evaluation", "Homework support", "Study materials"],
    status: "In Production",
    clients: "Helping teachers & students",
    gradient: "from-pink-500 to-rose-600",
    category: ["AI", "WEB"],
    image: u("1677442136019-21780ecad995"),
  },
  {
    id: 10,
    name: "Learning Management System (LMS)",
    tag: "Unified School LMS",
    description: "Lessons, assignments, quizzes, projects, and dashboards for students, teachers, and admins — all in one place.",
    goal: "Faster to teach, personalized for learners, easy to monitor for all roles.",
    features: ["Digital lessons", "Assignments & homework", "Quizzes & exams", "Projects & portfolios", "Analytics dashboards", "Admin controls"],
    status: "In Production",
    clients: "Used by schools",
    gradient: "from-blue-500 to-indigo-600",
    category: ["EDU", "WEB"],
    image: u("1522202176988-66273c2fd55f"),
  },
  {
    id: 11,
    name: "AI Curriculum",
    tag: "Nursery to 12th AI Path",
    description: "A structured AI-based curriculum with age-wise learning, activities, coding, robotics, and future-ready skills.",
    goal: "Build future-ready digital skills early through progressive AI learning.",
    features: ["Nursery to 12th", "Age-wise learning", "Hands-on activities", "Coding & robotics", "AI simplified", "Future-ready skills"],
    status: "In Production",
    clients: "Adopted by schools",
    gradient: "from-emerald-500 to-green-600",
    category: ["AI", "EDU"],
    image: u("1581291518857-4e27b48ff24e"),
  },
];

export const TEAM = [
  { role: "AI Developer", name: "Aarav K.", initials: "AK" },
  { role: "Full Stack Developer", name: "Meera S.", initials: "MS" },
  { role: "UI/UX Designer", name: "Rohan V.", initials: "RV" },
  { role: "QA & Deployment Engineer", name: "Priya N.", initials: "PN" },
];

export const TESTIMONIALS = [
  { quote: "VisionariesAI built our smart dental device end-to-end. The execution and attention to detail were outstanding.", name: "Saikiran", title: "Medical Device Specialist", rating: 5 },
  { quote: "They automated our entire JSON workflow with a clean Python framework. Saved us weeks of manual effort every month.", name: "Nisha", title: "Software Engineer", rating: 5 },
  { quote: "Our IoT device went from prototype to production faster than we imagined. Reliable, scalable, and beautifully engineered.", name: "Durga Prasad Polaki", title: "CEO, Dream Technologies", rating: 5 },
];
