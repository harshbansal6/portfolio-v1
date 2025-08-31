import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    fintom8,
    threejs,
    libratrack,
    stockpilot,
    dailyNewsNetwork,
    datopic,
    portfolio,
    converter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Datopic Technologies Pvt Ltd.",
      icon: datopic,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Software Engineer specializing in Python backend development using FastAPI framework.",
        "Work with both SQL and NoSQL databases for efficient data management and retrieval."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Fintom8",
      icon: fintom8,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Skilled in Google Cloud Platform (GCP) App Engine for deployment and cloud operations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Libratrack",
      description:
        "A comprehensive library management system that allows users to track books, manage inventory, and streamline library operations with an intuitive web interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: libratrack,
      source_code_link: "https://github.com/",
      demo_link: "https://libratrack-v1.netlify.app/",
    },
    {
      name: "StockPilot",
      description:
        "An advanced stock trading and portfolio management application built with Angular, providing real-time market data and comprehensive trading tools for investors.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: stockpilot,
      source_code_link: "https://github.com/harshbansal6/StockPilot",
      demo_link: "https://github.com/harshbansal6/StockPilot",
    },
    {
      name: "Daily News Network",
      description:
        "A comprehensive news aggregation platform that provides users with the latest news from various categories including politics, business, technology, sports, and entertainment.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: dailyNewsNetwork,
      source_code_link: "https://github.com/",
      demo_link: "https://daily-news-network-xhgh.onrender.com/",
    },
    {
      name: "Portfolio",
      description:
        "A modern and responsive personal portfolio website showcasing professional experience, skills, and projects with an elegant design and smooth user experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
      demo_link: "https://harshbansal6.github.io/portfolio/",
    },
    {
      name: "Fintom8 Converter",
      description:
        "An AI-driven e-invoice converter that transforms any invoice document or image into ZUGFeRD e-invoice format, streamlining digital invoice processing.",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ai",
          color: "pink-text-gradient",
        },
      ],
      image: converter,
      source_code_link: "https://github.com/",
      demo_link: "https://fintom8.com/e-invoice-converter/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };