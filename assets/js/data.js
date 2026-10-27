const portfolioData = {
  profile: {
    name: "Monty",
    initials: "M",
    tagline: "Software Developer | IT Systems & Audio Technology Graduate",
    location: "Bristol & Bath, UK",
    status: "BSc (Hons) 2:1 Graduate — UWE Bristol",
    heroBio: [
      "Recent graduate in Audio and Music Technology (BSc Hons) at the University of the West of England (UWE Bristol), seeking a technical role in software development, IT systems, or engineering teams with a strong collaborative and training ethic.",
      "Experienced across C++ (JUCE), C# (Unity), JavaScript (Three.JS), Ruby on Rails, and hardware/microcontroller integration, paired with hands-on Government Digital Service (GDS) internship experience, Amazon AI & work-readiness training, and live IT/AV systems troubleshooting."
    ],
    highlights: [
      {
        label: "Software & DSP Engineering",
        text: "C++ (JUCE), DSP, Unity/C#, FMOD, MaxMSP, and custom microcontroller hardware control."
      },
      {
        label: "Web, Data & IT Systems",
        text: "JavaScript (Three.JS), HTML/CSS, JSON, Ruby (Ruby on Rails), automated forms processing, and Blender."
      },
      {
        label: "IT Support & Collaboration",
        text: "Agile workflows, Government Digital Service documentation standards, onsite IT/speaker support, Discord, Zoom, Gather Town, and Microsoft Office."
      },
      {
        label: "Immersive & Audio Systems",
        text: "Interactive/spatial audio for VR (Meta Quest 2), Q-Lab, Pro Tools, Reaper, Logic, Studio One, 5.1.2/7.1.4 surround, and ambisonics."
      }
    ],
    aboutBlocks: [
      {
        title: "Certifications & Safety Qualifications",
        content: "Holds BECTU Starting Safely certification (ScreenSkills) and the Duke of Edinburgh Award (Bronze), applying structured safety compliance and risk management across technical and public environments."
      },
      {
        title: "Technical & Musical Pursuits",
        content: "Performs electric guitar (Rockschool Grade 7+), 5-string bass guitar, synthesisers, drum machines, samplers, and jazz piano (Grade 1)."
      },
      {
        title: "Outdoor & Expedition Activities",
        content: "Active in sailing, canoeing, hiking, and mountaineering, bringing strong resilience and team navigation skills from multi-week expeditions."
      }
    ]
  },

  /* ==========================================================================
     Projects (Extracted directly from your CV's technical builds & roles)
     ========================================================================== */
  projects: [
    {
      title: "Bespoke C++ (JUCE) & Three.JS Audio/AV Plugins",
      description: "Developed custom audio/AV software and plugins using C++ (JUCE), Three.JS, and C#, integrating real-time Digital Signal Processing (DSP) and synthesis algorithms, including a custom 3D virtual gramophone GUI modelled and textured in Blender.",
      category: "Software & Systems",
      tags: ["C++", "JUCE", "Three.JS", "C#", "DSP", "Blender"],
      github: "https://github.com/montywh"
    },
    {
      title: "Government Forms Processing Automation & Web Guidance",
      description: "Produced technical guidance and presentations during an internship at the UK Government Digital Service (GDS) for automating forms processing across UK government departments, alongside self-directed web development in Ruby on Rails.",
      category: "Web & IT Automation",
      tags: ["Ruby on Rails", "IT Automation", "Technical Documentation", "GDS Standards"],
      github: "https://github.com/montywh"
    },
    {
      title: "Immersive VR Digital Audio Workstation (Meta Quest 2)",
      description: "Prototyped an interactive VR Digital Audio Workstation in Unity (C#) for the Meta Quest 2, engineering a 3D timeline interface, haptic feedback control, and spatial audio playback.",
      category: "Interactive & VR Systems",
      tags: ["Unity", "C#", "VR Development", "Spatial Audio", "Haptics"],
      github: "https://github.com/montywh"
    },
    {
      title: "Microcontroller Hardware & MaxMSP Synthesis Suite",
      description: "Engineered virtual instruments in MaxMSP—including a software synthesiser, sampler, and drum machine—interfaced with custom microcontroller hardware devices for low-latency, real-time parameter control.",
      category: "Software & Systems",
      tags: ["Microcontrollers", "MaxMSP", "Hardware Integration", "Real-Time Control"],
      github: "https://github.com/montywh"
    },
    {
      title: "'BobaQuarium' Adaptive Game Systems (Global Game Jam 2025)",
      description: "Programmed and integrated adaptive audio systems in Unity/C# and FMOD for the game 'BobaQuarium' at UWE Bristol, applying DSP code for dynamic real-time gameplay response under rapid agile iteration cycles.",
      category: "Interactive & VR Systems",
      tags: ["Unity", "C#", "FMOD", "DSP", "Agile Development"],
      github: "https://github.com/montywh"
    },
    {
      title: "Multi-Channel Surround & Post-Production System Redesign",
      description: "Engineered a full technical soundscape redesign of a Chernobyl scene utilizing surround sound formats (5.1.2/7.1.4), precision dialogue editing, and foley architecture—achieving a 2:1 grade.",
      category: "Interactive & VR Systems",
      tags: ["Surround Systems", "Pro Tools", "Reaper", "Signal Routing"],
      github: "https://github.com/montywh"
    }
  ],

  /* ==========================================================================
     Relevant Experience (Complete & Accurate from CV)
     ========================================================================== */
  experience: [
    {
      role: "Student | Step-Up Work Experience",
      organization: "Amazon, UK",
      period: "June 2026",
      bullets: [
        "Gained practical work-readiness through ten CPD-accredited modules and applied them in AI labs, technical team challenges, and structured mentor shadowing across Amazon’s fast-paced operational environment.",
        "Developed capabilities to strengthen technical innovation, inspire future talent, and widen access to digital skills."
      ]
    },
    {
      role: "Bar Staff",
      organization: "Lansdown Cricket Club, Bath, UK",
      period: "March 2026 — Present",
      bullets: [
        "Cultivated a strong community atmosphere by providing personalised service to around 50 club members and visitors daily while efficiently managing high-volume orders.",
        "Maintained operational efficiency and site standards by managing inventory, table service, and public areas."
      ]
    },
    {
      role: "Volunteer | Social Committee Member",
      organization: "CircleUp, Bath, UK",
      period: "January 2026 — Present",
      bullets: [
        "Acted as community lead and mascot for the local Bath community, converting digital subscribers into active, real-world member networks.",
        "Co-hosted Friday night socials, moderated member chats, and ensured immediate comfort and safety for new or solo attendees."
      ]
    },
    {
      role: "Floor Staff, Cleaner & Game Host",
      organization: "Boom Battle Bar, Bath, UK",
      period: "November 2025 — March 2026",
      bullets: [
        "Operated competitive social gaming systems (including AR darts and shuffleboard) and delivered hospitality for 10–70 guests per shift across 3 to 10 games per night.",
        "Entrusted with high-demand Saturday and late-night closing shifts after demonstrating consistent operational reliability."
      ]
    },
    {
      role: "Volunteer | Onsite IT & Audio Support",
      organization: "Audio Developer Conference, Bristol, UK",
      period: "November 2024 & November 2025",
      bullets: [
        "Provided onsite IT and audio support for conference speakers, including hardware setup, livestream monitoring, and troubleshooting across Discord, Zoom, and Gather Town.",
        "Facilitated logistics for over 2,000 guests and speakers, overseeing cloakroom capacity reorganization, pre-sorting credentials/lanyards, and safely transporting technical equipment under tight schedules.",
        "Served as a primary point of contact at onsite information hubs, directing attendees and resolving real-time queries."
      ]
    },
    {
      role: "Intern",
      organization: "Government Digital Service (GDS), The Whitechapel Building, UK",
      period: "June 2025 — August 2025",
      bullets: [
        "Produced clear technical guidance and presentations for automating forms processing across UK government departments.",
        "Collaborated with cross-functional agile teams to ensure technical documentation complied with strict government digital standards and user needs.",
        "Completed self-directed development in webpage creation (Ruby on Rails) and automated data/forms processing workflows."
      ]
    },
    {
      role: "Assistant Theatre Sound Engineer",
      organization: "Great Gatsby Play; Revolution, Bristol, UK",
      period: "May 2025",
      bullets: [
        "Operated Q-Lab software for SFX and video cueing and managed live audio hardware for an audience of approximately 80 attendees.",
        "Diagnosed and resolved technical delays and hardware failures prior to showtime to ensure uninterrupted system reliability."
      ]
    },
    {
      role: "Sound Designer & Audio Programmer",
      organization: "Global Game Jam 2025; UWE Bristol, UK",
      period: "January 2025 — February 2025",
      bullets: [
        "Programmed and implemented an adaptive game soundtrack in Unity/C# and FMOD for the game ‘BobaQuarium’, applying custom DSP code for fluid gameplay response.",
        "Composed original scores using Logic, Studio One, and MuseScore and managed recording, mixing, and synthesis under rapid development cycles."
      ]
    },
    {
      role: "Cabin/Camp Counsellor, Guitar Coach & Assistant Theatre Sound Engineer",
      organization: "Camp America, USA",
      period: "June 2024 — August 2024",
      bullets: [
        "Executed live technical incident response when guitar leads and XLR lines failed mid-performance, rapidly isolating faults and restoring audio to prevent show disruption.",
        "Coordinated 24/6 safeguarding and cabin care for groups of 8 to 12 campers alongside technical theatre operations and one-to-one guitar coaching across a nine-week contract."
      ]
    },
    {
      role: "Hospitality Staff & Kitchen Porter",
      organization: "Lime Hospitality, Bath, UK",
      period: "June 2021 — May 2024",
      bullets: [
        "Maintained pace and strict operational standards across high-profile venues including Bath Rugby, Bailbrook Hotel, and Bath & Chepstow Racecourses for banquets of 20 to 150 guests.",
        "Supported high-volume service for up to 500 customers daily under strict compliance and hygiene standards at Bath Spa University’s Refectory."
      ]
    },
    {
      role: "Front-of-House & Back-of-House Staff",
      organization: "Pizza Express, UK",
      period: "August 2021 — December 2022",
      bullets: [
        "Provided multi-branch operational support across high-volume shifts as Food Runner and Kitchen Porter, maintaining service flow and sanitation compliance."
      ]
    },
    {
      role: "Trading Assistant",
      organization: "Sainsbury's PLC, UK",
      period: "December 2021 — May 2022",
      bullets: [
        "Managed inventory rotation, date-code compliance auditing, shelf replenishment, and point-of-sale checkout systems during peak trading periods."
      ]
    }
  ],

  /* ==========================================================================
     Additional Experience (Complete & Accurate from CV)
     ========================================================================== */
  additionalExperience: [
    {
      role: "Society Founder & Former Committee Member",
      organization: "Society of Musicians; UWE Bristol, UK",
      period: "October 2022 — August 2025",
      bullets: [
        "Founded and presided over the society, establishing a committee governance structure and configuring a Discord communication architecture that scaled 100 sign-ups into an active core community.",
        "Managed scheduling for a continuous calendar of socials, professional gigs, and open-mic events while leading collaborative sessions."
      ]
    },
    {
      role: "Expedition Team Leader & Volunteer",
      organization: "Raleigh International, Costa Rica",
      period: "July 2022 — August 2022",
      bullets: [
        "Led a team through a 17-day mountain trek, conducting daily route planning, task delegation, and operational safety briefings in high-pressure environments.",
        "Demonstrated adaptive problem-solving by navigating with outdated maps and dynamically recalculating routes when terrain features were missing or overgrown.",
        "Combined classroom construction for a rural indigenous school with delivering English instruction, earning five peer award nominations including Best Team Player."
      ]
    }
  ],

  /* ==========================================================================
     Education (Complete & Accurate from CV)
     ========================================================================== */
  education: [
    {
      degree: "BSc (Hons) Audio and Music Technology [J932] (Achieved 2:1 in Major Modules)",
      institution: "University of the West of England (UWE Bristol), UK",
      period: "September 2022 — August 2025",
      bullets: [
        "Relevant Coursework: Advanced Technologies, Audio for Games, Audio Post-Production, and Architectural Acoustics.",
        "Software & Plugin Engineering: Developed bespoke audio/AV software and plugins using C++ (JUCE), Three.JS, and C#, integrating DSP and synthesis.",
        "VR & Spatial Systems: Prototyped an immersive VR Digital Audio Workstation in Unity for Meta Quest 2 with spatial audio playback, haptic feedback, and a 3D timeline interface.",
        "Hardware & Embedded Control: Built virtual instruments in MaxMSP (synth, sampler, drum machine) paired with custom microcontroller devices for real-time parameter control.",
        "3D UI & Asset Pipeline: Created textures and materials for 3D models in Blender for a virtual gramophone audio plugin GUI.",
        "Industry Systems: Hands-on proficiency with Unity, FMOD, MaxMSP, Pro Tools, Reaper, Logic, MuseScore, and Fender Studio."
      ]
    },
    {
      degree: "BTEC (Level 3) IT, A-Level Music Technology & BTEC (Level 3) Music Performing",
      institution: "St Brendan’s Sixth Form College, Bristol, UK",
      period: "September 2019 — July 2021",
      bullets: [
        "Completed formal Level 3 qualifications in Information Technology (IT) alongside A-Level Music Technology and BTEC Music Performing."
      ]
    }
  ],

  /* ==========================================================================
     Skills (Grouped into General IT, Software Dev & Systems Categories)
     ========================================================================== */
  skills: [
    {
      category: "Software Development & Systems",
      items: ["C++ (JUCE Framework)", "C# (Unity Engine)", "Digital Signal Processing (DSP)", "FMOD Middleware", "MaxMSP", "Microcontroller Hardware Integration"]
    },
    {
      category: "Web, Data & IT Automation",
      items: ["JavaScript (Three.JS)", "HTML5 & CSS3", "JSON Data Structures", "Ruby & Ruby on Rails", "Automated Forms Processing", "Blender (3D UI/UX Assets)"]
    },
    {
      category: "IT Support, Governance & Collaboration",
      items: ["Agile Development Environments", "Technical Documentation (GDS Standards)", "Live IT & Streaming Support", "Discord / Zoom / Gather Town Admin", "Microsoft Office Suite", "BECTU Safety Compliance"]
    },
    {
      category: "Audio, VR & Media Systems",
      items: ["VR Development (Meta Quest 2)", "Spatial Audio & Ambisonics", "Q-Lab Cueing & Live Diagnostics", "Pro Tools / Reaper / Logic / Studio One", "5.1.2 & 7.1.4 Surround Systems"]
    }
  ],

  contact: [
    { label: "GitHub", url: "https://github.com/montywh", value: "@montywh" },
    { label: "LinkedIn", url: "https://linkedin.com", value: "Connect" },
    { label: "Location", url: "#profile", value: "Bristol & Bath, UK" }
  ]
};