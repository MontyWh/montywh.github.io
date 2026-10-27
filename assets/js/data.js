const portfolioData = {
  profile: {
    name: "Monty",
    initials: "M",
    tagline: "Software & Security Engineer",
    location: "United Kingdom",
    status: "Open to opportunities",
    heroBio: [
      "Welcome to my portfolio. I design and build high-performance software systems, interactive web and audio applications, and secure infrastructure.",
      "Explore my featured projects, technical competencies, and professional background below."
    ],
    about: [
      "I am a software and security-focused engineer passionate about building reliable systems, secure applications, and interactive digital experiences.",
      "My work spans across systems engineering, web architectures, game development, audio software, and cybersecurity principles—focusing on clean architecture and real-world performance."
    ]
  },

  projects: [
    {
      title: "Audio Engine & DSP Framework",
      description: "High-performance real-time audio processing software built with C++ and JUCE, featuring custom DSP algorithms and low-latency audio routing.",
      category: "Game & Audio",
      tags: ["C++", "JUCE", "DSP", "Audio Engineering"],
      github: "https://github.com/montywh",
      live: "#"
    },
    {
      title: "Interactive 3D Web Environment",
      description: "Immersive browser-based experience leveraging modern web graphics, shaders, and optimized component design.",
      category: "Web Development",
      tags: ["JavaScript", "Three.js", "HTML/CSS", "WebGL"],
      github: "https://github.com/montywh",
      live: "#"
    },
    {
      title: "Secure Network & Threat Analyzer",
      description: "Cybersecurity tool designed for packet inspection, vulnerability scanning, and secure protocol enforcement.",
      category: "Cyber Security",
      tags: ["Cyber Security", "Networking", "Python", "Linux"],
      github: "https://github.com/montywh",
      live: "#"
    },
    {
      title: "Multiplayer Simulation Game",
      description: "A physics-driven simulation built in Unity using C# with networked multiplayer state synchronization and spatial audio.",
      category: "Game & Audio",
      tags: ["C#", "Unity", "FMOD", "Game Dev"],
      github: "https://github.com/montywh",
      live: "#"
    },
    {
      title: "Core Systems & CLI Toolkit",
      description: "Cross-platform command-line utilities and systems automation tools engineered for speed and low memory overhead.",
      category: "Software & Systems",
      tags: ["C++", "C#", "Systems", "CLI"],
      github: "https://github.com/montywh",
      live: "#"
    }
  ],

  skills: [
    {
      category: "Software Development & Systems",
      items: ["Object-Oriented Programming (C++, C#, Python)", "Data Structures & Algorithms", "Concurrency & Memory Management", "API & System Architecture"]
    },
    {
      category: "Web & Frontend Engineering",
      items: ["Modern JavaScript / TypeScript", "HTML5 & Responsive CSS", "3D Web Graphics (Three.js / WebGL)", "Web App UI/UX"]
    },
    {
      category: "Game Development & Audio / DSP",
      items: ["Game Engines (Unity & Real-time 3D)", "Digital Signal Processing (DSP)", "Audio Frameworks (JUCE, FMOD)", "Physics & State Simulation"]
    },
    {
      category: "Cyber Security & IT Infrastructure",
      items: ["Network Security & Packet Analysis", "Vulnerability Assessment & Hardening", "Linux Administration & Shell Scripting", "Git & CI/CD Workflows"]
    }
  ],

  experience: [
    {
      role: "Software & Security Engineer",
      organization: "Tech Solutions Inc.",
      period: "2024 — Present",
      description: "Building secure, high-performance applications, implementing system security audits, and optimizing core software components."
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science & Cybersecurity",
      institution: "University Name",
      period: "2020 — 2024",
      description: "Specialized in software systems, secure coding practices, and computer networking."
    }
  ],

  contact: [
    { label: "GitHub", url: "https://github.com/montywh", value: "@montywh" },
    { label: "LinkedIn", url: "https://linkedin.com", value: "Connect" },
    { label: "Email", url: "mailto:hello@example.com", value: "Send Email" }
  ]
};