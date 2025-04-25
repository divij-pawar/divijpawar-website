import React, { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Code2,
  BookOpen,
  Briefcase,
  User,
  Trophy,
  Coffee,
  BookMarked,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white transition-all duration-500 ${
          isScrolled ? "h-20" : "h-44 sm:h-52"
        }`}
      >
        <div className="container mx-auto px-6 h-full">
          <div
            className={`flex ${
              isScrolled ? "flex-row items-center" : "flex-col items-center"
            } h-full transition-all duration-500`}
          >
            <img
              src="dp.jpg"
              alt="Profile"
              className={`rounded-full border-2 border-indigo-500 shadow-xl transition-all duration-500 ${
                isScrolled ? "w-20 h-20 mr-4" : "w-40 h-40 mt-10 mb-5"
              }`}
            />
            <div className={`text-center ${isScrolled ? "text-left" : ""}`}>
              <h1
                className={`font-bold transition-all duration-500 ${
                  isScrolled ? "text-xl mb-0" : "text-4xl mb-2"
                }`}
              >
                Divij Pawar
              </h1>
              <p
                className={`text-indigo-200 transition-all duration-500 ${
                  isScrolled ? "text-sm" : "text-xl"
                }`}
              >
                Aspiring Software Developement Engineer
              </p>
            </div>
            <div
              className={`flex space-x-4 ${isScrolled ? "ml-auto" : "mt-4"}`}
            >
              <a
                href="https://github.com/divij-pawar"
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/divijpawar"
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:workdivij@gmail.com"
                className="hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-64 sm:pt-72 md:pt-80 pb-12">
        {/* Status section */}
        <section className="mb-16 relative z-10 mt-32 sm:mt-16">
          <div className="section-title">
            <Coffee className="w-6 h-6 text-indigo-400 mr-2" />
            <h3>
              Hi! I am currently working on{" "}
              <a
                href="https://www.trumpoftheday.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                trumpoftheday.com
              </a>{" "}
              and LLMs.
            </h3>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
              Graduate Student, Computer Science @ University of Massachusetts
              Lowell
            </h3>
            <p className="text-gray-300">
              Currently in my third semester at UMass Lowell, working on the
              following projects:
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              <li>
                <strong>Trump of the Day</strong> – A news dashboard analyzing
                President Donald Trump's presidency.
              </li>
              <li>
                <strong>Nutrition Label Analysis with LLM</strong> – Using AI to
                extract and interpret nutritional information.
              </li>
              <li>
                <strong>Causal Inference for COVID-19</strong> – Investigating
                the effects of drugs on COVID-19 outcomes.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="section-title">
            <Briefcase className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="link-button">
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="section-title">
            <BookOpen className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Education</h2>
          </div>
          <div className="card p-6">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-indigo-300">
                Master of Computer Science
              </h3>
              <p className="text-indigo-400">
                University of Massachusetts, Lowell • 2024-2025
              </p>
              <p className="mt-2 text-gray-300">
                Coursework: Deep Learning: Large Language Models, and Large
                Vision Models, Machine Learning, Algorithms, Computer Network
                and Forensics, Internet of Things
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                Bachelor of Engineering in Electronics and Telecommunication
                Engineering
              </h3>
              <p className="text-indigo-400">
                University of Mumbai, Mumbai • 2016-2021
              </p>
              <p className="mt-2 text-gray-300">
                Coursework: Image Processing and Machine Vision, Database
                Management Systems, Digital Signal Processing, Digital System
                Design
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <div className="section-title">
            <Briefcase className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Work Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-` gap-6">
            {work_experience.map((experience) => (
              <div key={experience.title} className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                  {experience.title}
                </h3>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="section-title">
            <Code2 className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Frontend", "Backend", "DevOps", "DataAndAI"].map((category) => (
              <div key={category} className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  {category === "DataAndAI" ? "Data & AI" : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getSkills(category).map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="section-title">
            <BookMarked className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {publications.map((pub) => (
              <div key={pub.title} className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{pub.authors}</p>
                <p className="text-gray-300 mb-4">{pub.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-400">
                    {pub.venue} • {pub.year}
                  </span>
                  <a href={pub.link} className="link-button">
                    Read Paper <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-16 px-4 py-8 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg shadow-lg">
          <div className="section-title flex items-center mb-8">
            <Trophy className="w-8 h-8 text-indigo-100 mr-4" />
            <h2 className="text-3xl font-semibold text-white">GitHub Stats</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex flex-col items-start text-white w-full md:w-1/2">
              <div className="text-lg mb-4">
                Here are some statistics from my{" "}
                <a
                  href="https://www.github.com/divij-pawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Github profile
                </a>
                . Feel free to explore the contributions, repositories, and
                stars I've received!
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">350+</div>
                  <div className="text-gray-300">Public Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">40+</div>
                  <div className="text-gray-300">Public Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">7</div>
                  <div className="text-gray-300">Stars Received</div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
              <img
                src="https://github-readme-stats.vercel.app/api?username=divij-pawar&show_icons=true&theme=shadow_blue&show=prs_merged,prs_merged_percentage"
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mb-16">
          <div className="section-title">
            <User className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>About Me</h2>
          </div>
          <div className="card p-6">
            <p className="text-gray-300 leading-relaxed">
              Experienced in deep learning and software development, with a
              strong foundation in machine learning, large language mod- els,
              and scalable system design. Developed microservices for
              high-frequency trading, optimized PostgreSQL performance, and
              integrated real-time data streaming. Proficient in Python,
              PyTorch, TensorFlow, and NLP techniques. Applied GPT-2 and T5
              models for food classification and text generation.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="section-title">
            <Mail className="w-6 h-6 text-indigo-400 mr-2" />
            <h2>Get in Touch</h2>
          </div>
          <div className="card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:workdivij@gmail.com" className="link-button">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/divijpawar"
                className="bg-indigo-900 text-indigo-200 flex items-center justify-center p-4 rounded-lg hover:bg-indigo-800 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Divij Pawar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function getSkills(category: string) {
  const skills = {
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

  return skills[category as keyof typeof skills] || [];
}

const projects = [
  {
    title: "Trump of the day",
    description:
      "Designed and developed a real-time news aggregation platform focused on Trump’s presidency, integrating automated news scraping and an AI-powered summarization system. Implemented a custom news ranking algorithm to prioritize high-quality, engaging content while minimizing redundancy. Enabled user interaction through upvotes, downvotes, and a commenting system to enhance engagement and discussion. ",
    technologies: [
      "React JS",
      "Node.js",
      "Netlify",
      "TypeScript",
      "PostgresQL",
    ],
    link: "https://trumpoftheday.com",
  },
  {
    title: "Cosmic Risk Management System | Finrise Softech Pvt Ltd",
    description:
      "FinRise Softech Pvt Ltd • Designed and developed six Python microservices to optimize trade data processing, reducing latency by 40% and improving scalability. Enhanced PostgreSQL performance for real-time trade calculations and integrated WebSockets for instant stock price updates via the Zerodha API. Automated database backups and data verification with CLI tools and shell scripts, cutting manual errors by 70%. Managed CI/CD pipelines, Docker orchestration, and Kafka-based event streaming for seamless deployment and efficient real-time data processing.",
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
];
const work_experience = [
  {
    title:
      "Data Analyst - System Operations and Reporting | Office of the Registrar at UMass Lowell, Lowell",
    description:
      "Automated operational workflows by developing Python scripts and integrating VBA and Macros in Excel, enhancing efficiency and reducing manual tasks. Designed interactive dashboards and dynamic reports using Oracle PeopleSoft, Oracle Analytics Cloud, and Tableau with advanced SQL, supporting data-driven decision-making. Streamlined ETL processes and database mana",
    technologies: [
      "MS Excel",
      "VBA Scripting",
      "Python",
      "HTML",
      "JS",
      "Oracle Analytics Cloud",
    ],
  },
  {
    title: "Software Developer Engineer | Fin Rise Softech Pvt Ltd, Mumbai",
    description:
      "Developed six Python microservices for an Equity/Options Risk Management System, reducing trade data processing time by 40% and enhancing scalability. • Optimized database performance by refining PostgreSQL I/O operations, resulting in faster query speeds and improved real-time trade calculations. • Implemented real-time data streaming by integrating web sockets for stock price updates from the Zerodha trading platform, ensuring immediate market responsiveness. • Engineered Python CLI tools and shell scripts to automate database backups and data verification processes, reducing manual intervention and errors by 70%. • Coordinated integration efforts and managed CI/CD pipelines with Git/GitHub to facilitate seamless project deployment and cross-functional collaboration. • Administered hardware resources and orchestrated Docker containers alongside optimizing Kafka-based event streaming for effective real-time data processing.",
    technologies: ["Python", "C", "Postgres", "Docker", "Shell", "Kafka"],
  },
  {
    title: "Data Analyst Intern | Amore Gourmet Gelato, Mumbai",
    description:
      "• Extracted, cleaned, and processed sales data from aggregators (Swiggy, Zomato, Shopify), enabling the generation of comprehensive sales reports that improved decision-making and forecasted inventory needs with greater accuracy, utilizing PL/SQL, Python, Tableau, and Excel. • Analyzed customer data from multiple sources to optimize outlet site selection and conduct market analysis, resulting in a 30% increase in successful openings and enhanced territory management strategies, using Python and Tableau. • Collaborated with cross-functional teams to integrate software solutions across POS, inventory, and finance systems, streamlining operational workflows and reducing processing time by 25%.",
    technologies: ["Excel", "Python", "Tableau", "PL/SQL"],
  },
];

const publications = [
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

export default App;
