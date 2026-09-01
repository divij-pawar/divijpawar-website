import { Project, Publication, Experience, Education, Skill } from '../types';

export const personalInfo = {
  name: "Divij Pawar",
  title: "Distributed Systems · Data Engineering · Agentic AI",
  tagline:
    "I work at the intersection of distributed systems, data infrastructure, and agentic AI — from fintech risk engines processing live trades to autonomous multi-agent marketplaces.",
  photo: "/dp.jpg",
  email: "workdivij@gmail.com",
  linkedin: "https://linkedin.com/in/divijpawar",
  github: "https://github.com/divij-pawar",
  substack: "https://divijpawar.substack.com",
  resumeUrl: "/Resume.pdf",
};

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Master of Computer Science",
    institution: "University of Massachusetts, Lowell",
    location: "Lowell, MA",
    graduationDate: "2025",
    courses: [
      "Deep Learning: LLMs & Large Vision Models",
      "Machine Learning",
      "Algorithms",
      "Computer Network and Forensics",
      "Internet of Things",
    ],
  },
  {
    id: "edu2",
    degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    graduationDate: "2021",
    courses: [
      "Image Processing and Machine Vision",
      "Database Management Systems",
      "Digital Signal Processing",
      "Digital System Design",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "JavaScript", "Java", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Django", "PostgreSQL", "MySQL", "PL/SQL", "REST APIs", "GraphQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD", "Git", "Linux", "Ansible"],
  },
  {
    category: "Data & AI",
    items: ["PyTorch", "TensorFlow", "Numpy", "Scipy", "Matplotlib", "SciKit", "Apache Spark", "Kafka"],
  },
  {
    category: "Technologies",
    items: [
      "Microservices", "Distributed Systems", "Machine Learning", "Natural Language Processing",
      "Data Engineering", "ETL Processes", "Data Visualization", "Real-Time Data Streaming",
      "Scalable System Design", "Big Data", "Artificial Intelligence", "Data Modeling",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Distributed Risk Management System",
    category: "Python · C · ZeroMQ",
    subtitle: "Fin Rise Softech · 2023 · Production",
    status: "complete",
    context:
      "Re-architected a monolithic financial risk engine into a distributed event-driven system. Ran in production serving hundreds of live trading clients throughout the internship.",
    impact: [
      { value: "40%", label: "latency cut" },
      { value: "70%", label: "fewer data errors" },
      { value: "sub-1s", label: "MTM recalculation" },
    ],
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "Six independent services, each owning one domain. Market data enters via **WebSocket fan-out from Zerodha and CQG**, distributed through ZeroMQ pub/sub to risk engines, position calculators, and dashboards in parallel.",
          "Trade events propagate via **PostgreSQL LISTEN/NOTIFY** — eliminates the need for a dedicated message broker at this scale.",
          "**Embedded C routines** bypass CPython's GIL for Mark-to-Market recalculation loops — sub-second position updates across the full client book on every price tick.",
          "MySQL ↔ PostgreSQL **reconciliation tool** runs on a daily schedule, surfacing data integrity mismatches before they affect settlement.",
          "**Python CLI + Bash orchestration** used for migrations (MSSQL → Postgres), failover handling, and daemon lifecycle management for high uptime.",
        ],
      },
    ],
    technologies: ["Python", "C", "ZeroMQ", "WebSockets", "PostgreSQL", "MySQL", "Linux", "REST APIs"],
  },

  {
    id: "proj2",
    title: "Political News Archive Platform",
    category: "Live",
    subtitle: "Personal project · 2024",
    status: "complete",
    link: "https://trumpoftheday.com",
    context:
      "Fully automated news ingestion, ranking, and retrieval system. Runs daily without intervention via GitHub Actions.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Python scraper** runs on a daily GitHub Actions schedule — ingests, deduplicates, and stores articles into PostgreSQL.",
          "Unified a **drifted multi-table schema** that had diverged between the ingestion and ranking pipelines — required careful migration and data reconciliation across both codebases.",
          "**Ranking pipeline** scores articles by engagement signals and recency. REST API with OpenAPI spec handles retrieval and filtering.",
          "**AI summarization pipeline** generates concise article briefings to reduce reading time.",
          "Full stack containerized in **Docker Compose** — React frontend, Express auth API, Python scraper. Google OAuth session management via httpOnly cookies.",
        ],
      },
    ],
    technologies: [
      "Python", "React", "Node.js", "Express",
      "PostgreSQL", "Docker Compose", "GitHub Actions", "Google OAuth", "OpenAPI",
    ],
    images: ["/totd.png"],
  },

  {
    id: "proj3",
    title: "FiverrClaw — AI Agent Marketplace",
    category: "Live",
    subtitle: "Personal project · 2024",
    status: "complete",
    link: "https://fiverrclaw.onrender.com",
    context:
      "Marketplace where autonomous AI agents post tasks they can't complete — and human workers claim them. Inverts the typical freelance model.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Dual auth system** in one middleware layer: API key (Bearer token) for AI agent clients; JWT in httpOnly cookies for human worker sessions.",
          "**6-state job lifecycle state machine**: open → assigned → submitted → awaiting payment → paid → disputed.",
          "**MongoDB aggregation pipeline** powers the trending feed with time-decay scoring.",
          "**Autonomous heartbeat protocol (cron + state machine)** enables agents to persist, wake, and audit job status.",
          "Real-time **negotiation + Q&A threads** allow agents to guide human workers during execution.",
        ],
      },
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js", "JWT", "API Key Auth", "REST API"],
    images: ["/fiverrclaw.png"],
  },

  {
    id: "proj4",
    title: "Mask R-CNN Greeny",
    category: "Computer Vision",
    subtitle: "Personal project",
    status: "complete",
    link: "https://github.com/divij-pawar/mrcnn-greeny",
    github: "https://github.com/divij-pawar/mrcnn-greeny",
    context:
      "Computer vision system for high-precision subject segmentation and real-time background replacement without physical green screens.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Mask R-CNN segmentation pipeline** performs pixel-level subject isolation in video streams.",
          "Optimized for **hard silhouettes and lighting variance** to avoid artifacts typical in naive segmentation.",
          "**Temporal smoothing with OpenCV** reduces flickering across frames for stable real-time output.",
        ],
      },
    ],
    technologies: ["Python", "TensorFlow", "Mask R-CNN", "OpenCV"],
  },

  {
    id: "proj5",
    title: "LangChain RAG Demo",
    category: "LLM Systems",
    subtitle: "Personal project",
    status: "complete",
    link: "https://github.com/divij-pawar/Laangchain-rag",
    github: "https://github.com/divij-pawar/Laangchain-rag",
    context:
      "Retrieval-Augmented Generation pipeline for grounding LLM responses in external knowledge and reducing hallucinations.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Document ingestion + chunking pipeline** stores embeddings in ChromaDB.",
          "**Semantic retrieval via LangChain** injects relevant context into LLM prompts.",
          "**FastAPI + Streamlit interface** provides a low-latency playground for evaluating query performance.",
        ],
      },
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit"],
  },

  {
    id: "proj6",
    title: "Nutrition Analysis Chatbot",
    category: "LLM + APIs",
    subtitle: "Personal project",
    status: "complete",
    link: "https://github.com/divij-pawar/nutr-analysis",
    github: "https://github.com/divij-pawar/nutr-analysis",
    context:
      "AI-powered assistant for analyzing nutrition and allergen risks from real-world product data.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Open Food Facts API integration** pulls real-time ingredient and nutrition data.",
          "**Zephyr-7B prompting pipeline** transforms raw JSON into structured insights.",
          "**Gradio deployment** enables interactive usage on consumer hardware.",
        ],
      },
    ],
    technologies: ["Python", "Transformers", "Gradio", "Open Food Facts API"],
  },

  {
    id: "proj7",
    title: "DB Check Utility",
    category: "CLI Tooling",
    subtitle: "Personal project",
    status: "complete",
    link: "https://github.com/divij-pawar/DB-check-utility",
    github: "https://github.com/divij-pawar/DB-check-utility",
    context:
      "Command-line tool for validating database integrity and detecting financial data inconsistencies.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Deep integrity scans** detect schema mismatches and data drift.",
          "**MTM error detection system** flags calculation inconsistencies early.",
          "**CLI diagnostics with colored diffs** accelerate debugging and triage.",
        ],
      },
    ],
    technologies: ["Python", "SQL"],
  },

  {
    id: "proj8",
    title: "News Snippet Generator",
    category: "Web Tooling",
    subtitle: "Personal project",
    status: "complete",
    link: "https://github.com/divij-pawar/news-snippet-gen",
    github: "https://github.com/divij-pawar/news-snippet-gen",
    context:
      "Tool for extracting Open Graph metadata and generating shareable visual snippets from news URLs.",
    groups: [
      {
        groupLabel: "How it works",
        bullets: [
          "**Open Graph parser** extracts metadata from arbitrary URLs.",
          "**Server-side rendering pipeline** generates preview images dynamically.",
          "**Responsive UI system** ensures consistent rendering across devices.",
        ],
      },
    ],
    technologies: ["TypeScript", "Next.js", "React"],
  },
];

export const experience: Experience[] = [
  {
    id: "exp1",
    title: "Software Development Intern",
    company: "Fin Rise Softech",
    location: "Mumbai, India",
    startDate: "Apr 2023",
    endDate: "Nov 2023",
    context:
      "Fintech startup building real-time risk infrastructure for 500–700 active trading clients daily. Bare-metal Linux, no managed cloud.",
    impact: [
      { value: "40%", label: "latency reduction" },
      { value: "70%", label: "fewer data errors" },
      { value: "6", label: "microservices shipped" },
      { value: "700", label: "live clients served" },
    ],
    groups: [
      {
        groupLabel: "Architecture",
        bullets: [
          "Decomposed a monolithic risk engine into **6 independent Python microservices** — market data ingestion, trade processing, net positions, live P&L, margin calculation, and end-of-day settlement.",
          "Built the IPC layer using **ZeroMQ pub/sub** for high-frequency tick distribution and **PostgreSQL LISTEN/NOTIFY** for trade event propagation — no external message broker required.",
        ],
      },
      {
        groupLabel: "Performance engineering",
        bullets: [
          "Integrated **embedded C routines** into Python services to bypass CPython's GIL — achieved sub-second Mark-to-Market recalculation across the full client book on every price tick.",
          "Implemented **WebSocket fan-out handlers** for Zerodha and CQG, streaming thousands of price ticks per second to downstream risk engines, position calculators, and dashboards.",
        ],
      },
      {
        groupLabel: "Data integrity",
        bullets: [
          "Built a **cross-database reconciliation tool** detecting mismatches between MySQL and PostgreSQL — eliminated daily manual audits, reduced data errors by 70%.",
          "Managed full service lifecycle on bare-metal Linux via shell script orchestration, cron jobs, and daemon restart scripts.",
        ],
      },
    ],
    technologies: [
      "Python", "C", "ZeroMQ", "PostgreSQL", "MySQL",
      "WebSockets", "Zerodha API", "CQG API", "Linux", "REST APIs", "Shell scripting",
    ],
  },
  {
    id: "exp2",
    title: "Student Assistant Specialist",
    company: "Office of the Registrar, UMass Lowell",
    location: "Lowell, MA",
    startDate: "Mar 2024",
    endDate: "Dec 2025",
    context:
      "Built internal data tooling for a university scheduling and commencement operations team managing tens of thousands of students.",
    groups: [
      {
        groupLabel: "Tools built",
        bullets: [
          "Built **classroom utilization heatmaps** in Oracle Analytics Cloud — aggregated scheduling data across all buildings so the scheduling team could right-size room assignments and identify underutilized spaces for reallocation.",
          "Developed a **Python QR code attendance logger** for commencement ceremonies — scanned tickets into structured CSVs, enabling per-department forecasts for seating maps, regalia orders, and venue planning across multiple ceremony dates.",
        ],
      },
    ],
    technologies: ["Python", "Oracle Analytics Cloud", "CSV automation", "QR processing"],
  },
  {
    id: "exp3",
    title: "Data Analyst Intern",
    company: "Amore Gourmet Gelato",
    location: "Mumbai, India",
    startDate: "Jun 2022",
    endDate: "Oct 2022",
    context:
      "Multi-outlet F&B brand selling across Swiggy, Zomato, and Shopify simultaneously. Later secured ₹80L on Shark Tank India S2 — contributed supporting analysis to that pitch.",
    groups: [
      {
        groupLabel: "Data engineering",
        bullets: [
          "Replaced a legacy **PL/SQL reporting script** with a modular Python ETL pipeline — ingested and normalized sales data from three structurally different platform exports into a unified schema.",
          "Generated automated **daily inventory and accounting reports** across all outlets, replacing a manual spreadsheet process that previously took hours per cycle.",
          "Delivered outlet-level **unit economics and performance breakdowns** used directly in the Shark Tank India pitch preparation.",
        ],
      },
    ],
    technologies: ["Python", "PL/SQL", "PostgreSQL", "Swiggy API", "Zomato API", "Shopify API", "pandas"],
  },
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Generative Adversarial Neural Networks: A Review",
    authors: ["Fabian Barreto", "Divij Pawar", "Janhavi Patil", "Prince Sah"],
    venue: "International Journal of All Research Education and Scientific Methods (IJARESM)",
    year: "2021",
    abstract:
      "Artificial Intelligence has subtly integrated into daily life, with Generative Adversarial Networks (GANs) enabling computers to be creative. Unlike discriminative models used for classification, GANs are generative models that learn tasks unsupervised but train using a generator-discriminator framework. Research on GANs has explored applications like synthesizing human faces, landscapes, and music. Recently, GANs have been studied for security, leveraging adversarial learning to detect attacks. Key models like GPGAN, WGAN, CGAN, CPGAN, StyleGAN, and PolyGAN are used in fields such as Natural Language Processing, Computer Vision, and Domain Transformation, driving advancements in AI-generated content.",
    externalUrl: "https://www.ijaresm.com/generative-adversarial-neural-networks-a-review",
  },
];

// Add photos here (put files in public/gallery/) to populate the Gallery section.
export const galleryImages: { src: string; caption: string }[] = [];
