export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  customImageUrl?: string;
  imageUrl?: string;
}

export interface WorkExperience {
  title: string;
  items: string[];
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
    title: "Trump of the day",
    description:
      "Designed and developed a real-time news aggregation platform focused on Trump's presidency, integrating automated news scraping and an AI-powered summarization system. Implemented a custom news ranking algorithm to prioritize high-quality, engaging content while minimizing redundancy. Enabled user interaction through upvotes, downvotes, and a commenting system to enhance engagement and discussion. ",
    technologies: [
      "React JS",
      "Node.js",
      "Netlify",
      "TypeScript",
      "PostgresQL",
    ],
    link: "https://trumpoftheday.com",
    imageUrl: "https://www.google.com/s2/favicons?sz=256&domain_url=https://trumpoftheday.com",
  },
  {
    title: "Cosmic Risk Management System | Finrise Softech Pvt Ltd",
    description:
      "Designed and developed six Python microservices to optimize trade data processing, reducing latency by 40% and improving scalability. Enhanced PostgreSQL performance for real-time trade calculations and integrated WebSockets for instant stock price updates via the Zerodha API. Automated database backups and data verification with CLI tools and shell scripts, cutting manual errors by 70%. Managed CI/CD pipelines, Docker orchestration, and Kafka-based event streaming for seamless deployment and efficient real-time data processing.",
    technologies: [
      "Python",
      "C",
      "WebSocket",
      "Shell",
      "Kafka",
      "Agile",
      "PostgresQL",
    ],
  },
  {
    title: "Mask R-CNN Greeny",
    description:
      "This computer vision application leverages Mask R-CNN for high-precision instance segmentation to achieve a professional green screen effect. By isolating human subjects within video frames and replacing the background, the project demonstrates proficiency in deep learning architectures and real-time video processing. The implementation focuses on handling edge-case silhouettes and maintaining temporal consistency across frames, providing a robust tool for automated background removal without specialized hardware.",
    technologies: ["Python", "TensorFlow 2", "Mask R-CNN", "OpenCV"],
    link: "https://github.com/divij-pawar/mrcnn-greeny",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/mrcnn-greeny",
    customImageUrl:
      "https://raw.githubusercontent.com/divij-pawar/mrcnn-greeny/refs/heads/main/demo/1_g.gif",
  },
  {
    title: "LangChain RAG Demo",
    description:
      "This project implements a scalable Retrieval-Augmented Generation (RAG) architecture designed to minimize hallucinations in large language models. It features a complete pipeline for document ingestion, text chunking, and vector embedding storage within ChromaDB. By utilizing a FastAPI backend and a Streamlit interface, the system allows users to perform semantic searches and receive context-aware responses, showcasing the integration of vector databases with modern LLM frameworks.",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "FastAPI",
      "Streamlit",
      "Whoosh",
    ],
    link: "https://github.com/divij-pawar/Laangchain-rag",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/Laangchain-rag",
  },
  {
    title: "Nutrition Analysis Chatbot",
    description:
      "An AI-driven diagnostic tool that parses food ingredient data to identify allergens and nutritional value using the Zephyr-7B model. The application integrates the Open Food Facts API to retrieve real-time product data, which is then processed to provide users with structured insights into food safety and quality. The project highlights technical skills in prompt engineering, API integration, and deploying large-scale transformer models via an accessible Gradio web interface.",
    technologies: [
      "Jupyter Notebook",
      "Python",
      "Zephyr-7B",
      "Open Food Facts API",
      "Gradio",
      "Transformers",
    ],
    link: "https://github.com/divij-pawar/nutr-analysis",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/nutr-analysis",
  },
  {
    title: "DB Check Utility",
    description:
      "Developed as a mission-critical CLI tool for Enterprise Risk Management Systems, this utility automates health checks and data validation across complex database environments. It performs deep-dive integrity scans to ensure consistency between ledger entries and physical quantities, significantly reducing the risk of calculation errors in financial reporting. The utility streamlines backend operations by providing developers with immediate diagnostic feedback on database health and logical schema mismatches.",
    technologies: ["Python", "SQL"],
    link: "https://github.com/divij-pawar/DB-check-utility",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/DB-check-utility",
    customImageUrl:"https://raw.githubusercontent.com/divij-pawar/DB-check-utility/main/outputs_screenshots/mtm-unmatched.PNG"
  },
  {
    title: "News Snippet Generator",
    description:
      "This full-stack web application streamlines social media content creation by programmatically extracting metadata from news URLs to generate visual snippets. Built with a modern Next.js and TypeScript architecture, the tool parses Open Graph data and renders it into a clean, shareable image format. The project demonstrates advanced frontend capabilities, including dynamic server-side rendering, logical parsing of unstructured web metadata, and a focus on responsive, user-centric design.",
    technologies: ["TypeScript", "Next.js", "React"],
    link: "https://github.com/divij-pawar/news-snippet-gen",
    imageUrl: "https://opengraph.githubassets.com/1/divij-pawar/news-snippet-gen",
    customImageUrl:
      "https://raw.githubusercontent.com/divij-pawar/news-snippet-gen/refs/heads/main/public/example.png",
  },
];

export const workExperience: WorkExperience[] = [
  {
    title:
      "Student Assistant Specialist - System Operations and Reporting | Office of the Registrar at UMass Lowell, Lowell",
    items: [
      "Designed, developed, and delivered multiple Oracle Analytics reports and interactive dashboards for Registrar teams, enabling data-driven insights and improving decision-making",
      "Identified and resolved ERP system errors, reducing inefficiencies in departmental operations and optimizing the use of university infrastructure",
      "Automated several manual workflows using Python scripts, eliminating repetitive tasks and significantly improving staff efficiency",
    ],
    technologies: ["Python", "Oracle Analytics Cloud", "Oracle PeopleSoft", "Microsoft Excel", "VBA"],
  },
  {
    title: "Software Developer Engineer | Fin Rise Softech Pvt Ltd, Mumbai",
    items: [
      "Developed six Python microservices for an Equity/Options Risk Management System, reducing trade data processing time by 40% and enhancing scalability",
      "Optimized database performance by refining PostgreSQL I/O operations, resulting in faster query speeds and improved real-time trade calculations",
      "Implemented real-time data streaming by integrating web sockets for stock price updates from the Zerodha trading platform, ensuring immediate market responsiveness",
      "Engineered Python CLI tools and shell scripts to automate database backups and data verification processes, reducing manual intervention and errors by 70%",
      "Coordinated integration efforts and managed CI/CD pipelines with Git/GitHub to facilitate seamless project deployment and cross-functional collaboration",
      "Administered hardware resources and orchestrated Docker containers alongside optimizing Kafka-based event streaming for effective real-time data processing",
    ],
    technologies: ["Python", "C", "Postgres", "Docker", "Shell", "Kafka"],
  },
  {
    title: "Data Analyst Intern | Amore Gourmet Gelato, Mumbai",
    items: [
      "Extracted, cleaned, and processed sales data from aggregators (Swiggy, Zomato, Shopify), enabling the generation of comprehensive sales reports that improved decision-making and forecasted inventory needs with greater accuracy, utilizing PL/SQL, Python, Tableau, and Excel",
      "Analyzed customer data from multiple sources to optimize outlet site selection and conduct market analysis, resulting in a 30% increase in successful openings and enhanced territory management strategies, using Python and Tableau",
      "Collaborated with cross-functional teams to integrate software solutions across POS, inventory, and finance systems, streamlining operational workflows and reducing processing time by 25%",
    ],
    technologies: ["Excel", "Python", "Tableau", "PL/SQL"],
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
