import { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  BookOpen,
  Briefcase,
  Trophy,
  Coffee,
  BookMarked,
} from "lucide-react";

import { projects, workExperience, publications } from "./data";
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
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#020617]">
        {/* Top spotlight - Teal 700 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_0%,#0f766e,transparent)] opacity-60"></div>
        {/* Bottom-right accent - Blue 800 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_600px_at_100%_100%,#1e40af,transparent)] opacity-50"></div>
        {/* Bottom-left accent - Teal accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_500px_500px_at_0%_100%,#0d9488,transparent)] opacity-40"></div>
      </div>
      <header
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
          isScrolled ? "h-16 sm:h-20 bg-slate-950/80 backdrop-blur-md" : "h-32 sm:h-44 md:h-52"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 h-full">
          <div
            className={`flex ${
              isScrolled ? "flex-row items-center" : "flex-col items-center"
            } h-full transition-all duration-500`}
          >
            <img
              src="dp.jpg"
              alt="Profile"
              className={`rounded-full border-2 border-cyan-400 shadow-xl transition-all duration-500 ${
                isScrolled ? "w-14 h-14 sm:w-20 sm:h-20 mr-3 sm:mr-4" : "w-24 h-24 sm:w-40 sm:h-40 mt-6 sm:mt-10 mb-2 sm:mb-5"
              }`}
            />
            <div className={`text-center ${isScrolled ? "text-left" : ""}`}>
              <h1
                className={`font-bold transition-all duration-500 ${
                  isScrolled ? "text-base sm:text-xl mb-0" : "text-2xl sm:text-4xl mb-1 sm:mb-2"
                }`}
              >
                Divij Pawar
              </h1>
              <p
                className={`text-cyan-300 transition-all duration-500 ${
                  isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-xl"
                }`}
              >
                Distributed Systems | Data Engineering | Cloud Infrastructure
              </p>
            </div>
            <div
              className={`flex space-x-3 sm:space-x-4 ${isScrolled ? "ml-auto" : "mt-2 sm:mt-4"}`}
            >
              <a
                href="https://github.com/divij-pawar"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/divijpawar"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:workdivij@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto pt-64 sm:pt-72 md:pt-80 pb-12">
        {/* Status section */}
        <section className="mb-16 relative z-10 mt-32 sm:mt-16">
          <div className="section-title">
            <Coffee className="w-6 h-6 text-cyan-400 mr-2" />
            <h3>
              Hi! I’m currently building{" "}
              <a
                href="https://social-aura.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                social-aura.netlify.app
              </a>{" "}
              and working to be a Databricks Certified Data Engineer Professional
            </h3>
          </div>
          <div className="card p-4 sm:p-6">
            <p className="text-gray-300 text-sm sm:text-base">
              Following the completion of my Master's degree,
              I am focused on engineering production-grade machine learning pipelines and full-stack applications. 
              Here are some of my recent projects:
            </p>
            <ul className="text-gray-300 list-disc list-inside text-sm sm:text-base space-y-2">
            <li>
              <strong>Social Aura</strong> – A full-stack React/Python tool for digital footprint analysis and online presence evaluation.
            </li>
            <li>
              <strong>Production RAG Pipeline</strong> – A scalable MLOps system using vector databases for high-throughput document indexing and retrieval.
            </li>
            <li>
              <strong>Trump of the Day</strong> – A real-time data dashboard aggregating high-frequency news to track political and media trends.
            </li>
            <li>
              <strong>Nutrition Label Analysis</strong> – An AI tool using LLMs to parse and structure nutritional data from unstructured sources.
            </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="section-title">
            <Briefcase className="w-6 h-6 text-cyan-400 mr-2" />
            <h2>Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => {
              const displayImageUrl = project.customImageUrl ?? project.imageUrl;

              return (
                <div key={project.title} className="card p-4 sm:p-6">
                  {displayImageUrl &&
                    (project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-4 group"
                      aria-label={`Open ${project.title}`}
                      title={`Open ${project.title}`}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-slate-800/60 bg-slate-950/20">
                        <img
                          src={displayImageUrl}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (
                              project.imageUrl &&
                              e.currentTarget.src !== project.imageUrl
                            ) {
                              e.currentTarget.src = project.imageUrl;
                            }
                          }}
                          className="w-full h-44 sm:h-48 object-cover transition-opacity duration-200 group-hover:opacity-90"
                        />
                        <div className="absolute top-3 right-3 rounded-md bg-slate-950/70 border border-slate-800/60 p-2 text-cyan-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="block mb-4">
                      <div className="relative overflow-hidden rounded-lg border border-slate-800/60 bg-slate-950/20">
                        <img
                          src={displayImageUrl}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (
                              project.imageUrl &&
                              e.currentTarget.src !== project.imageUrl
                            ) {
                              e.currentTarget.src = project.imageUrl;
                            }
                          }}
                          className="w-full h-44 sm:h-48 object-cover"
                        />
                      </div>
                    </div>
                  ))}
                  <h3 className="text-base sm:text-xl font-semibold mb-2 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="section-title">
            <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
            <h2>Education</h2>
          </div>
          <div className="card p-4 sm:p-6">
            <div className="mb-6 last:mb-0">
              <h3 className="text-base sm:text-xl font-semibold text-cyan-400">
                Master of Computer Science
              </h3>
              <p className="text-cyan-300 text-sm sm:text-base">
                University of Massachusetts, Lowell • 2024-2025
              </p>
              <p className="mt-2 text-gray-300 text-sm sm:text-base">
                Coursework: Deep Learning: Large Language Models, and Large
                Vision Models, Machine Learning, Algorithms, Computer Network
                and Forensics, Internet of Things
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-semibold text-cyan-400">
                Bachelor of Engineering in Electronics and Telecommunication
                Engineering
              </h3>
              <p className="text-cyan-300 text-sm sm:text-base">
                University of Mumbai, Mumbai • 2016-2021
              </p>
              <p className="mt-2 text-gray-300 text-sm sm:text-base">
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
            <Briefcase className="w-6 h-6 text-cyan-400 mr-2" />
            <h2>Work Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {workExperience.map((experience) => (
              <div key={experience.title} className="card p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">
                  {experience.title}
                </h3>
                <ul className="text-gray-300 mb-4 text-sm sm:text-base space-y-2 list-disc list-inside">
                  {experience.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
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

        <section className="mb-16">
          <div className="section-title">
            <BookMarked className="w-6 h-6 text-cyan-400 mr-2" />
            <h2>Publications</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {publications.map((pub) => (
              <div key={pub.title} className="card p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-semibold mb-2 text-cyan-400">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{pub.authors}</p>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{pub.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">
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
<section className="mb-16 px-4 sm:px-6 md:px-8 py-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-lg shadow-xl -mx-4 sm:-mx-6 md:-mx-8 lg:mx-0">
  <div className="section-title flex items-center mb-8">
    <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-4 flex-shrink-0" />
    <h2 className="text-2xl sm:text-3xl font-semibold text-white">GitHub Stats</h2>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
    {/* Text Section */}
    <div className="flex flex-col items-start text-white w-full md:w-1/2">
      <div className="text-base sm:text-lg mb-4 text-slate-300">
        Here are some statistics from my{" "}
        <a
          href="https://www.github.com/divij-pawar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-2 font-bold transition-colors"
        >
          Github profile
        </a>
        . Feel free to explore the contributions, repositories, and stars I've received!
      </div>
      
      <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full">
        <div className="text-center p-2 rounded-lg bg-slate-800/40">
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400">350+</div>
          <div className="text-slate-400 text-xs sm:text-sm">Contributions</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-slate-800/40">
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400">40+</div>
          <div className="text-slate-400 text-xs sm:text-sm">Repositories</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-slate-800/40">
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400">7</div>
          <div className="text-slate-400 text-xs sm:text-sm">Stars</div>
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
      </main>

      <footer className="bg-zinc-900 text-gray-400 py-8">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base">© 202Divij Pawar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
