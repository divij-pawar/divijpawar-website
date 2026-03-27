export interface Project {
  title: string;
  description?: string;
  bullets: string[];
  technologies: string[];
  link?: string;
  customImageUrl?: string;
  imageUrl?: string;
}

export interface WorkExperience {
  title: string;
  bullets: string[];
  technologies: string[];
}

export interface Publication {
  title: string;
  authors: string;
  description: string;
  year: string;
  link: string;
  venue: string;
}

export interface SkillsMap {
  [category: string]: string[];
}

export const skillsData: SkillsMap = {
  Languages: [
    "Python",
    "C",
    "C++",
    "JavaScript",
    "Java",
    "TypeScript",
    "SQL",
    "Bash",
  ],
  Frontend: ["React", "Next.js", "Vue.js", "HTML", "CSS"],
  Backend: [
    "Node.js",
    "Django",
    "PostgreSQL",
    "MySQL",
    "PL/SQL",
    "REST APIs",
    "GraphQL",
  ],
  DevOps: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Jenkins",
    "CI/CD",
    "Git",
    "Linux",
    "Ansible",
  ],
  DataAndAI: [
    "PyTorch",
    "TensorFlow",
    "Numpy",
    "Scipy",
    "Matplotlib",
    "SciKit",
    "Apache Spark",
    "Kafka",
  ],
  Technologies: [
    "Microservices",
    "Distributed Systems",
    "Machine Learning",
    "Natural Language Processing",
    "Data Engineering",
    "ETL Processes",
    "Data Visualization",
    "Real-Time Data Streaming",
    "Scalable System Design",
    "Big Data",
    "Artificial Intelligence",
    "Data Modeling",
  ],
};

export const getSkills = (category: string): string[] => {
  return skillsData[category] || [];
};

export const projects: Project[] = [
  {
    title: "Cosmic Risk Management System | Finrise Softech Pvt Ltd",
    bullets: [
      "**Architected event-driven RMS micro-daemons** by transitioning a monolithic trade data flow into a decoupled micro-daemon architecture, owning the roadmap from schema design through production deployment.",
      "**Engineered ZeroMQ + Postgres LISTEN/NOTIFY services** (Trade-Transfer, Broadcaster, Net-Position) to support sub-second trade processing and live MTM calculations.",
      "**Developed a Cross-DB Integrity Suite (MySQL ↔ PostgreSQL)** to automate validation, optimizing DBA workflows by auditing calculation correctness and data-transfer accuracy during high-volume migrations.",
      "**Built WebSocket market-data handlers (Zerodha/CQG)** to ingest, normalize, and fan out thousands of ticks/second to downstream risk engines and UI dashboards.",
      "**Delivered Python CLI tooling for migrations + failover** (MSSQL → Postgres) to harden EOD settlement workflows and reduce operator load for non-technical teams.",
      "**Owned Bash + Linux daemon orchestration for 99.9% uptime** by implementing automated restart flows and monitoring for intraday risk controls."
    ],
    technologies: [
      "Python",
      "ZeroMQ",
      "PostgreSQL",
      "WebSockets",
      "Linux IPC",
      "Event-Driven Architecture",
      "Bash",
      "C (Embedded)",
      "MySQL",
      "Data Integrity"
    ]
  },
  {
    title: "FiverrClaw🦞",
    description:
      "**Built a reverse-gig marketplace** enabling autonomous AI agents to outsource physical/digital tasks to humans.",
    bullets: [
      "**Architected the Reverse-Gig marketplace workflow** to flip the human–AI dynamic, enabling agents to hire humans as “hands” for UI navigation, phone calls, and real-world verification.",
      "**Engineered an Autonomous Heartbeat Protocol (cron + state machine)** to let agents persist, wake, and audit job status independently from OPEN → PAID.",
      "**Implemented a secure API-driven verification loop** for job posting, Base64 image review, and budget control via approve/reject flows.",
      "**Built real-time negotiation + Q&A (threads + ranking)** so agents can clarify requirements and guide human contractors during execution.",
      "**Shipped autonomous-mode documentation (SKILL.md + HEARTBEAT.md)** to standardize agent onboarding, task execution, and self-persistence patterns."
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Cron",
      "REST API",
      "State Machines"
    ],
    link: "https://fiverrclaw.up.railway.app/",
    imageUrl: "https://opengraph.githubassets.com/divij-pawar/fiverrclaw",
    customImageUrl: "fiverrclaw.png"
  },
  {
    title: "Mask R-CNN Greeny",
    description:
      "**Built Mask R-CNN segmentation** for high-precision subject isolation and background replacement.",
    bullets: [
      "**Implemented Mask R-CNN for pixel-level segmentation** to isolate subjects in video streams for automated background removal.",
      "**Optimized mask generation for hard silhouettes + lighting** to avoid needing physical green-screen hardware.",
      "**Improved temporal consistency with OpenCV** to minimize flicker artifacts during real-time processing."
    ],
    technologies: ["Python", "TensorFlow 2", "Mask R-CNN", "OpenCV"],
    link: "https://github.com/divij-pawar/mrcnn-greeny",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/mrcnn-greeny",
    customImageUrl: "https://raw.githubusercontent.com/divij-pawar/mrcnn-greeny/refs/heads/main/demo/1_g.gif",
  },
  {
    title: "Trump of the day",
    description:
      "**Built a real-time news platform** with automated scraping and AI summarization.",
    bullets: [
      "**Developed a custom news-ranking algorithm** to filter redundancy and prioritize high-engagement content from scraped sources.",
      "**Integrated an AI summarization pipeline** to generate concise briefings and reduce end-user reading time.",
      "**Built a full-stack interaction layer (PostgreSQL + TypeScript)** with upvotes, downvotes, and threaded comments."
    ],
    technologies: ["React JS", "Node.js", "Netlify", "TypeScript", "PostgresQL"],
    link: "https://trumpoftheday.com",
    imageUrl: "https://raw.githubusercontent.com/divij-pawar/trump-of-the-day/refs/heads/main/public/snapshot.png",
    customImageUrl: "totd.png"
  },
  {
    title: "LangChain RAG Demo",
    description:
      "**Built a RAG pipeline** for context-aware LLM responses with reduced hallucinations.",
    bullets: [
      "**Built a document ingestion + chunking pipeline** to store vector embeddings in ChromaDB from unstructured text.",
      "**Integrated LangChain semantic search to reduce hallucinations** by grounding responses in retrieved context.",
      "**Deployed FastAPI + Streamlit** to provide a low-latency playground for evaluating RAG query performance."
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit", "Whoosh"],
    link: "https://github.com/divij-pawar/Laangchain-rag",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/Laangchain-rag",
  },
  {
    title: "Nutrition Analysis Chatbot",
    description:
      "**Built a nutrition + allergen analysis assistant** using transformer models and live product data.",
    bullets: [
      "**Integrated the Open Food Facts API** to pull real-time ingredient data for automated allergen detection.",
      "**Engineered Zephyr-7B prompting for structured insights** transforming raw JSON into clear safety and nutrition summaries.",
      "**Deployed via Gradio and optimized inference** for smooth usage on consumer-grade hardware."
    ],
    technologies: ["Jupyter Notebook", "Python", "Zephyr-7B", "Open Food Facts API", "Gradio", "Transformers"],
    link: "https://github.com/divij-pawar/nutr-analysis",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/nutr-analysis",
  },
  {
    title: "DB Check Utility",
    description:
      "**Built a DB integrity CLI** for automated health checks and validation in financial systems.",
    bullets: [
      "**Developed deep-scan integrity checks** to detect schema mismatches and data drift between ledgers and DB records.",
      "**Automated MTM error detection to cut audit time** by flagging calculation issues early in the reporting cycle.",
      "**Designed instant CLI diagnostics with colored diffs** to highlight unmatched database entries and speed up triage."
    ],
    technologies: ["Python", "SQL"],
    link: "https://github.com/divij-pawar/DB-check-utility",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/DB-check-utility",
    customImageUrl: "https://raw.githubusercontent.com/divij-pawar/DB-check-utility/main/outputs_screenshots/mtm-unmatched.PNG"
  },
  {
    title: "News Snippet Generator",
    description:
      "**Built a snippet generator** to extract and render web metadata into shareable visuals.",
    bullets: [
      "**Built an Open Graph metadata parser (Next.js + TypeScript)** to extract title/preview data from news URLs.",
      "**Implemented server-side rendering to generate shareable images** from unstructured web metadata.",
      "**Optimized responsive preview UX** for consistent snippet rendering across mobile and desktop."
    ],
    technologies: ["TypeScript", "Next.js", "React"],
    link: "https://github.com/divij-pawar/news-snippet-gen",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/news-snippet-gen",
    customImageUrl: "https://raw.githubusercontent.com/divij-pawar/news-snippet-gen/refs/heads/main/public/example.png",
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Student Assistant Specialist - System Operations and Reporting | Office of the Registrar at UMass Lowell",
    bullets: [
      "**Developed Oracle Analytics dashboards** to monitor enrollment trends and deliver automated, data-driven reporting to the Registrar.",
      "**Resolved PeopleSoft ERP logic bottlenecks** by identifying and patching issues that blocked departmental throughput.",
      "**Automated reporting workflows with Python** to eliminate repetitive data entry and save several hours/week."
    ],
    technologies: ["Python", "Oracle Analytics Cloud", "Oracle PeopleSoft", "Microsoft Excel", "VBA"],
  },
  {
    title: "Software Developer Engineer | Fin Rise Softech Pvt Ltd, Mumbai",
    bullets: [
      "**Architected six Python microservices** for a high-frequency RMS, **improving trade processing by 40%**.",
      "**Optimized PostgreSQL I/O via tuning + indexing** to accelerate real-time trade calculations and reduce query latency.",
      "**Integrated Zerodha WebSockets for <500ms reactions** to live market ticks and price fluctuations.",
      "**Built Python CLI automation to cut ops errors by 70%** for database backups and integrity verification.",
      "**Orchestrated Docker + Kafka event streaming** to support high-throughput financial data distribution."
    ],
    technologies: ["Python", "C", "Postgres", "Docker", "Shell", "Kafka"],
  },
  {
    title: "Data Analyst Intern | Amore Gourmet Gelato, Mumbai",
    bullets: [
      "**Engineered a Python ETL pipeline** to replace a legacy **PL/SQL** script, automating the **normalization** of disparate sales CSVs from Swiggy, Zomato, and Shopify.",
      "**Programmed reconciliation logic** to compare sales data against stock procurement, ensuring **100% data integrity** for accounting balance sheets and reducing processing time by **90%**.",
      "**Developed a time-series dashboard** using **Tableau** and Google Sheets to visualize growth KPIs, directly guiding outlet site selections that drove a **30% revenue increase**."
    ],
    technologies: ["Python", "Tableau", "Excel", "Google Sheets"],
},
];

export const publications: Publication[] = [
  {
    title: "Generative Adversarial Neural Networks: A Review",
    authors: "Fabian Barreto, Divij Pawar, Janhavi Patil, Prince Sah",
    description:
      "Artificial Intelligence has subtly integrated into daily life, with Generative Adversarial Networks (GANs) enabling computers to be creative. Unlike discriminative models used for classification, GANs are generative models that learn tasks unsupervised but train using a generator-discriminator framework. Research on GANs has explored applications like synthesizing human faces, landscapes, and music. Recently, GANs have been studied for security, leveraging adversarial learning to detect attacks. Key models like GPGAN, WGAN, CGAN, CPGAN, StyleGAN, and PolyGAN are used in fields such as Natural Language Processing, Computer Vision, and Domain Transformation, driving advancements in AI-generated content.",
    year: "2021",
    link: "https://www.ijaresm.com/generative-adversarial-neural-networks-a-review",
    venue:
      "International Journal of All Research Education and Scientific Methods (IJARESM)",
  },
];
