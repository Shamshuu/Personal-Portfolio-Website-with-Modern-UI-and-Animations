import { useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaJs,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithubcopilot,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
];

const projects = [
  {
    title: "Agentic Nutrition Planner",
    description:
      "Built an AI-driven multi-agent workflow that generates personalized nutrition and meal plans from dietary constraints and user goals. It also estimates nutrition from uploaded images with calorie and cost forecasting.",
    stack: ["Python", "Streamlit", "SQLite"],
    github: "https://github.com/Shamshuu/Agentic-Nutrition-Planner",
  },
  {
    title: "Payment Gateway Simulation",
    description:
      "Designed REST APIs for order creation, payment processing, and hosted checkout flows. Simulated real-world bank latency with success/failure handling and containerized the system using Docker.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github:
      "https://github.com/Shamshuu/Payment-Gateway-with-Multi-Method-Processing-and-Hosted-Checkout",
  },
  {
    title: "Multi-Tenant SaaS Application",
    description:
      "Implemented tenant-aware authentication with role-based access control and secure data isolation across organizations. Built modular REST APIs for tenant onboarding, user management, and scalable workflows.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github:
      "https://github.com/Shamshuu/Multi-Tenant-SaaS-Platform-with-Project-and-Task-Management--24A95A1211",
  },
];

const Reveal = ({ children, y = 24, delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, reduceMotion ? 0 : -130]);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app-shell">
      <motion.div className="parallax-orb" style={{ y: parallaxY }} />

      <header className="navbar">
        <a href="#hero" className="brand">
          Shamshudeen
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <Reveal>
            <p className="kicker">Software Developer</p>
            <h1>Shamshudeen Shaik</h1>
            <p className="hero-tagline">
              Aspiring Software Developer passionate about building impactful applications.
            </p>
            <p className="hero-bio">
              I am an Information Technology student focused on full-stack development, DSA, and
              backend systems.
            </p>
            <a className="cta-btn" href="#projects">
              View My Projects
            </a>
          </Reveal>
        </section>

        <section id="about" className="section">
          <Reveal>
            <h2>About Me</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card about-card">
              {imageError ? (
                <div className="avatar">SS</div>
              ) : (
                <img
                  className="profile-photo"
                  src="/profile-photo.jpg"
                  alt="Shamshudeen Shaik"
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
              )}
              <p>
                I am an Information Technology student with a strong interest in software
                development, problem-solving, and building practical applications. I have
                experience with Java, DSA, frontend development, and backend technologies like
                Node.js and MongoDB through academic and personal projects.
              </p>
              <p>
                I am currently focused on full-stack development, sharpening coding interview
                skills, and building systems such as ticket booking workflows and a multi-tenant
                SaaS platform.
              </p>
              <p>
                My goal is to grow into a software engineer who builds scalable products with
                meaningful user impact while continuously learning modern engineering practices.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="section">
          <Reveal>
            <h2>Skills</h2>
          </Reveal>
          <motion.div
            className="skills-grid"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={skill.name}
                  className="glass-card skill-card"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon className="skill-icon" />
                  <span>{skill.name}</span>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="projects" className="section">
          <Reveal>
            <h2>Projects</h2>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} y={30} delay={index * 0.1}>
                <article className="glass-card project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub Repository
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <Reveal>
            <h2>Contact</h2>
          </Reveal>
          <div className="contact-layout">
            <Reveal y={20}>
              <div className="glass-card contact-info">
                <p>Let us build something great together.</p>
                <a href="mailto:shamshu2004@gmail.com">
                  <FaEnvelope />
                  shamshu2004@gmail.com
                </a>
                <a href="https://github.com/Shamshuu" target="_blank" rel="noreferrer">
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shamshudeen-shaik-b2181231b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal y={20} delay={0.1}>
              <form className="glass-card contact-form" action="mailto:shamshu2004@gmail.com">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
                <button type="submit">Send Message</button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">© {year} Shamshudeen Shaik. Built with React and Framer Motion.</footer>
    </div>
  );
}

export default App;
