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
                isScrolled 
                  ? "w-20 h-20 mr-4" 
                  : "w-40 h-40 mt-10 mb-5"
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
            <h2>
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
              </a>
            </h2>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
              Graduate student of CS @ University of Massachusetts, Lowell
            </h3>
            <p className="text-gray-300">
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
              <p className="text-indigo-400">Stanford University • 2018-2020</p>
              <p className="mt-2 text-gray-300">
                Specialized in Artificial Intelligence and Machine Learning
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                Bachelor of Computer Science
              </h3>
              <p className="text-indigo-400">MIT • 2014-2018</p>
              <p className="mt-2 text-gray-300">
                Major in Computer Science, Minor in Mathematics
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {["Frontend", "Backend", "DevOps"].map((category) => (
              <div key={category} className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                  {category}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        Here are some statistics from my <a href="https://www.github.com/divij-pawar" target="_blank" rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}>Github profile</a>. Feel free to explore the contributions, repositories, and stars I've received!
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
              I'm a passionate software engineer with over 5 years of experience
              in full-stack development. I specialize in building scalable web
              applications and microservices architecture. When I'm not coding,
              you can find me contributing to open-source projects, writing
              technical blog posts, or mentoring aspiring developers. I believe
              in clean code, test-driven development, and continuous learning.
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
              <a href="mailto:your.email@example.com" className="link-button">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
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
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function getSkills(category: string) {
  const skills = {
    Frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3",
    ],
    Backend: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
    DevOps: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
  };
  return skills[category as keyof typeof skills] || [];
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management and payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered language translation and sentiment analysis.",
    technologies: ["Next.js", "Python", "TensorFlow", "WebSocket", "Docker"],
    link: "https://github.com/yourusername/ai-chat",
  },
  {
    title: "Developer Portfolio",
    description:
      "A beautiful and responsive portfolio website built with modern web technologies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates and team features.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    link: "https://github.com/yourusername/task-manager",
  },
];
const work_experience = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management and payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"]
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered language translation and sentiment analysis.",
    technologies: ["Next.js", "Python", "TensorFlow", "WebSocket", "Docker"]
  }
];

const publications = [
  {
    title: "Advancing Deep Learning Architectures for Edge Computing",
    authors: "John Doe, Jane Smith, Robert Johnson",
    description:
      "A comprehensive study on optimizing neural networks for resource-constrained devices while maintaining high accuracy.",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2023",
    link: "https://example.com/paper1",
  },
  {
    title: "Scalable Microservices Architecture: A New Approach",
    authors: "John Doe, Michael Brown",
    description:
      "Novel methodology for designing and implementing highly scalable microservices using modern cloud technologies.",
    venue: "IEEE Software Engineering Conference",
    year: "2022",
    link: "https://example.com/paper2",
  },
];

export default App;