import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./index.css";
import pizzamenu from "./pizza-menu.png";
import eatnsplit from "./eat-n-split.png";
import usepopcorn from "./use-popcorn.png";
import preview from "./preview.png";

export default function App() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="gradient">
      <div className="container">
        <Navbar color={color} />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ color }) {
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
      <p>
        <a href="#">About</a>
      </p>
      <p>
        <a href="#skills">Skills</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
    </nav>
  );
}

function Header() {
  return (
    <section className="header">
      <div className="headerContent">
        <h1 className="title">
          Hi, I'm <span className="title-name">Saheel Sarker</span>
        </h1>
        <p className="subtitle">(👨🏻‍💻Developer + 🚀Entrepreneur)</p>
        <p className="about-me">
          I'm an entrepreneur and a passionate developer with experience in
          creating responsive and user-friendly web applications. I specialize
          in React.js and enjoy turning complex problems into simple, beautiful,
          and intuitive designs. 
        </p>
        <p className="about-me">
          As an entrepreneur, I thrive on identifying unique challenges and
          building innovative, scalable solutions. My ventures include
          developing apps and platforms that address real-world problems,
          combining technical expertise with a vision for impactful,
          user-centric products.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="Email"
            data-flow="bottom"
            href="mailto:saheel@ualberta.ca"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          <a
            data-tooltip="LinkedIn"
            data-flow="bottom"
            href="https://www.linkedin.com/in/saheels"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Linkedin size={24} />
          </a>
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/Saheel-Sarker"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div data-tooltip={skill.title} data-flow="bottom" className="hoverCard">
      <img
        className="skillCard"
        src={skill.image}
        alt={skill.title}
        loading="lazy"
      />
    </div>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects" tabIndex={-1}>
        Projects
      </h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`card project${project.id}`}>
      <img
        src={project.image}
        alt={project.title}
        className="cardImage"
        loading="lazy"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        {/* <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature.emoji} {feature.text}
            </li>
          ))}
        </ul> */}
        <div className="buttons">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Live Project ↗️
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub Repo ↗️
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="section">
      <p className="about-me">
        Thank you for checking out my portfolio! If you have any questions or would like to connect, feel free to reach out via email or connect with me on LinkedIn or GitHub. I'm always open to new opportunities and collaborations.
      </p>
    </section>
  );
}

const skills = [
  {
    title: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    image: "https://www.svgrepo.com/show/303600/typescript-logo.svg",
  },
  {
    title: "HTML",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944937.png",
  },
  {
    title: "CSS",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png",
  },
  {
    title: "SQL",
    image: "https://www.svgrepo.com/show/341068/sql.svg",
  },
  {
    title: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
  },
  {
    title: "Java",
    image: "https://www.svgrepo.com/show/184143/java.svg",
  },
  {
    title: "C#",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    title: "C",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    title: "MATLAB",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
  },
  {
    title: ".NET",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
  },
  {
    title: "Angular",
    image: "https://www.svgrepo.com/show/452156/angular.svg",
  },
  {
    title: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    title: "Next.js",
    image: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
  },
  {
    title: "Node.js",
    image: "https://www.svgrepo.com/show/355140/node.svg",
  },
  {
    title: "Express.js",
    image: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    title: "Android SDK",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
  },
  {
    title: "MongoDB",
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    title: "PostgreSQL",
    image: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  {
    title: "Firebase",
    image: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
  },
  {
    title: "MS SQL",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fa/MSSQLS_icon.svg",
  },
  {
    title: "AWS",
    image: "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    title: "Microsoft Azure",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    title: "Git",
    image: "https://www.svgrepo.com/show/373623/git.svg",
  },
  {
    title: "Terraform",
    image: "https://www.svgrepo.com/show/354447/terraform-icon.svg",
  },
];

const projects = [
  {
    id: 1,
    title: "Seqr Safe",
    image: preview,
    technologies: ["Next.js", "Express.js", "MongoDB", "Node.js", "Tailwindcss", "Stripe", "Jwt", "Bcrypt", "Crypto.js", "MailTrap","GitHub"],
    description: "A SaaS app to keep your important credentials, including passwords and credit card information, safe and secure",
    link: "https://seqr-safe.com/",
    github: "https://github.com/Saheel-Sarker/Keep-Safe",
    features: [
      { text: "Dynamic Web App", emoji: "🪄" },
      { text: "API Data Fetching", emoji: "⚡" },
      { text: "Mobile Responsive", emoji: "📱" },
    ],
  },
  {
    id: 2,
    title: "ExpenseApp",
    image: eatnsplit,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "C#", ".NET", "ML.NET", "d3.js", "MS SQL Server", "Azure"],
    description:
      "A web app to track your finances, analyze your spending habits, and forecast your future finances",
    link: "",
    github: "https://github.com/Saheel-Sarker/ExpenseApp-Front-End-Deployment-",
    features: [
      { text: "Dynamic Web App", emoji: "🪄" },
      { text: "Aethetic UI", emoji: "😍" },
      { text: "Mobile Responsive", emoji: "📱" },
    ],
  },
  {
    id: 3,
    title: "Your Scribe",
    image: pizzamenu,
    technologies: ["HTML", "Tailwind", "JavaScript", "React.js", "Node.js", "Xenova", "Github"],
    description: "A web app to transcribe and translate your voice and audio files using AI",
    link: "https://vasudevsoni.github.io/pizza-menu/",
    github: "https://github.com/vasudevsoni/pizza-menu",
    features: [
      { text: "Static Web App", emoji: "🧩" },
      { text: "Aesthetic UI", emoji: "😍" },
      { text: "Mobile Responsive", emoji: "📱" },
    ],
  },
];
