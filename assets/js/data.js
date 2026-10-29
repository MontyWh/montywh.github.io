const portfolioData = {
  profile: {
    name: "Montague Whishaw",
    initials: "MW",
    tagline: "Aspiring Software/Hardware Developer & Technologist",
    location: "Bath/Bristol, England, UK",
    status: "BSc (Hons) Graduate",
    heroBio: [
      "Hey there 👋! I'm Montague, a recent graduate from UWE Bristol with a passion for software development, cyber security, " +
      "audio 🔊 & information technology, and immersive media.",
        " Growing up a guitarist/bassist, I branched out to develop an interest in music/audio, history and a variety of other arts. Those who know me here in the UK, " +
        " also know me as someone who frequents the cinema, the local music scene and the social community, " +
        "noting my recent voluntary commitments to CircleUp, a nationwide 20-39 year olds community, participating in " +
        "sports, arts and bringing people together.",
      "Having been to multiple countries and volunteering in Costa Rica" +
      " <svg viewBox='0 0 5 3' width='20' height='12' role='img' aria-label='Flag of Costa Rica' style='vertical-align: -1px'><rect width='5' height='3' fill='#fff'/><rect y='0' width='5' height='0.5' fill='#002b7f'/><rect y='1' width='5' height='1' fill='#ce1126'/><rect y='2.5' width='5' height='0.5' fill='#002b7f'/></svg> " +
        "and working in the USA" +
        " <svg viewBox='0 0 19 10' width='20' height='11' role='img' aria-label='Flag of the United States' style='vertical-align: -1px'><rect width='19' height='10' fill='#fff'/><path fill='#b22234' d='M0 0h19v.77H0zm0 1.54h19v.77H0zm0 3.08h19v.77H0zm0 1.54h19v.77H0zm0 3.08h19v.77H0zm0 1.54h19v.77H0zm0 3.08h19v.77H0'/><rect width='7.6' height='5.38' fill='#3c3b6e'/><g fill='#fff'><circle cx='1' cy='.7' r='.22'/><circle cx='2.2' cy='.7' r='.22'/><circle cx='3.4' cy='.7' r='.22'/><circle cx='4.6' cy='.7' r='.22'/><circle cx='5.8' cy='.7' r='.22'/><circle cx='7' cy='.7' r='.22'/><circle cx='1.6' cy='1.5' r='.22'/><circle cx='2.8' cy='1.5' r='.22'/><circle cx='4' cy='1.5' r='.22'/><circle cx='5.2' cy='1.5' r='.22'/><circle cx='6.4' cy='1.5' r='.22'/><circle cx='1' cy='2.3' r='.22'/><circle cx='2.2' cy='2.3' r='.22'/><circle cx='3.4' cy='2.3' r='.22'/><circle cx='4.6' cy='2.3' r='.22'/><circle cx='5.8' cy='2.3' r='.22'/><circle cx='7' cy='2.3' r='.22'/><circle cx='1.6' cy='3.1' r='.22'/><circle cx='2.8' cy='3.1' r='.22'/><circle cx='4' cy='3.1' r='.22'/><circle cx='5.2' cy='3.1' r='.22'/><circle cx='6.4' cy='3.1' r='.22'/><circle cx='1' cy='3.9' r='.22'/><circle cx='2.2' cy='3.9' r='.22'/><circle cx='3.4' cy='3.9' r='.22'/><circle cx='4.6' cy='3.9' r='.22'/><circle cx='5.8' cy='3.9' r='.22'/><circle cx='7' cy='3.9' r='.22'/><circle cx='1.6' cy='4.7' r='.22'/><circle cx='2.8' cy='4.7' r='.22'/><circle cx='4' cy='4.7' r='.22'/><circle cx='5.2' cy='4.7' r='.22'/><circle cx='6.4' cy='4.7' r='.22'/></g></svg>, I love to connect; " +
        "to learn from others and share my own experiences and findings with them. " +
        "As a huge fan of ADC (Audio Developer Conference), I actively follow the latest developments " +
        "in audio technology and enjoy connecting with fellow enthusiasts. " +
        "Volunteered online at ADC two years ago; volunteered again last year onsite; and am set to volunteer again this year, and annually forever after."
    ],
    aboutBlocks: [
      {
        title: "Certifications & Safety Qualifications",
        content: "BECTU Starting Safely certification (ScreenSkills) and Duke of Edinburgh (Bronze)."
      },
      {
        title: "Interests & Musical Activities",
        content: "Performing electric guitar (Rockschool Grade 7+), 5-string bass guitar, " +
          "synthesisers, drum machines, samplers, and jazz piano (Grade 1)."
      },
      {
        title: "Outdoor Pursuits",
        content: "Sailing, canoeing, hiking, and mountaineering."
      }
    ]
  },

  projects: [
    {
      title: "Bespoke Audio/AV Software & Plugins (C++ JUCE)",
      description: "Developing bespoke audio/AV software and plugins using C++ (JUCE), " +
        "Three.JS, and C#, integrating DSP and synthesis. Created textures and materials " +
        "for 3D models in Blender for a virtual gramophone audio plugin GUI.",
      category: "Software & Hardware Development",
      tags: ["C++", "JUCE", "Three.JS", "C#", "DSP", "Blender"],
      github: "https://github.com/montywh"
    },
    {
      title: "Immersive VR Digital Audio Workstation",
      description: "Prototyped an immersive VR Digital Audio Workstation in Unity for a " +
        "Meta Quest 2, featuring spatial audio playback, haptic feedback, and a 3D " +
        "timeline interface.",
      category: "Immersive Media and Technology",
      tags: ["Unity", "C#", "VR", "Spatial Audio"],
    },
    {
      title: "Government Forms Processing Automation",
      description: "Produced clear technical guidance and presentations for automating " +
        "forms processing across UK government departments during internship at the " +
        "Government Digital Service (GDS). Self-learning covered webpage creation " +
        "(Ruby on Rails, etc.) and forms processing.",
      category: "Information Technology",
      tags: ["Ruby on Rails", "GDS", "IT Automation", "Documentation"],
    },
    {
      title: "MaxMSP Virtual Instruments & Microcontrollers",
      description: "Built virtual instruments in MaxMSP, including a software synth, " +
        "sampler, and drum machine, plus custom microcontroller devices for real-time " +
        "parameter control.",
      category: "Software & Hardware Development",
      tags: ["MaxMSP", "Microcontrollers", "Synthesis", "Hardware"],
      github: "https://github.com/montywh"
    },
    {
      title: "'BobaQuarium' Adaptive Soundtrack (Global Game Jam 2025)",
      description: "Music composition creating original scores and adaptive themes using " +
        "Logic, Studio One, and MuseScore. Audio implementation focused on programming " +
        "and implementing the adaptive soundtrack in Unity/C# and FMOD, applying DSP " +
        "code for fluid gameplay response.",
      category: "Immersive Media and Technology",
      tags: ["Unity", "C#", "FMOD", "DSP", "Logic"],
      github: "https://github.com/MontyWh/BobaQuarium-GGJ_2025"
    },
    {
      title: "Surround Sound Chernobyl Scene Redesign",
      description: "Designed soundscapes for film and games, including a full redesign of " +
        "a Chernobyl scene using surround sound, dialogue editing, and foley; " +
        "achieved a 2:1 grade.",
      category: "Immersive Media and Technology",
      tags: ["Surround Sound", "Pro Tools", "Reaper", "Post-Production"],
      github: "https://github.com/montywh"
    }
  ],

  experience: [
    {
      role: "Student | Step-Up Work Experience",
      organization: "Amazon, UK",
      period: "June 2026",
      bullets: [
        "Gained practical work-readiness through ten CPD-accredited modules and " +
          "applied them in AI labs, team challenges, and structured mentor shadowing " +
          "across Amazon’s fast-paced environment.",
        "Prepared to bring fresh perspective, inspire future talent, strengthen " +
          "innovation, and widen access to digital skills."
      ]
    },
    {
      role: "Bar Staff",
      organization: "Lansdown Cricket Club, Bath, UK",
      period: "March 2026 — Present",
      bullets: [
        "Customer service work cultivated a strong community atmosphere by providing " +
          "personalised service to around 50 club members and visitors daily, building " +
          "rapport by learning names and preferences while efficiently managing " +
          "high-volume drink orders.",
        "Maintained operational efficiency and cleanliness by managing snack and " +
          "beverage inventory, providing table service, and restocking and cleaning " +
          "public areas."
      ]
    },
    {
      role: "Volunteer | Social Committee Member",
      organization: "CircleUp, UK",
      period: "January 2026 — Present",
      bullets: [
        "Mascot for the local Bath community for CircleUp, creating the high-energy, " +
          "inclusive environments necessary to convert digital subscribers into active, " +
          "real-world communities.",
        "Co-host Friday night pub socials, interact in member chats, and actively " +
          "break the ice for new or solo attendees to ensure immediate comfort and safety."
      ]
    },
    {
      role: "Floor Staff, Cleaner & Game Host",
      organization: "Boom Battle Bar, Bath, UK",
      period: "November 2025 — March 2026",
      bullets: [
        "Activity hosting covered running competitive social games such as " +
          "shuffleboard and AR darts and delivering hospitality for 10-70 guests per shift.",
        "Customer service extended to supporting food running, table service, and " +
          "venue tidiness during late-night closes.",
        "Hospitality responsibilities spanned welcoming 10-70 customers in the venue " +
          "at a time and operating 3 to 10 games per night (excluding axe throwing).",
        "Took on high-demand Saturday and late-night closing shifts after building " +
          "trust through reliable weekday performance."
      ]
    },
    {
      role: "Volunteer | Audio Developer Conference",
      organization: "Bristol, UK",
      period: "November 2024 & November 2025",
      bullets: [
        "Event preparation facilitated seamless event logistics by overseeing a " +
          "high-volume cloakroom and pre-sorting lanyards for over 2,000 guests and speakers.",
        "Coordinated safe transport of audio equipment between rooms under tight " +
          "schedules and reorganised cloakroom storage to restore safe capacity.",
        "Provided onsite audio and IT support for speakers, including hardware setup, " +
          "livestream monitoring, and help with Discord, Zoom, and Gather Town.",
        "Hospitality responsibilities centred on acting as a primary point of contact " +
          "for attendees, directing them to sessions and co-monitoring onsite information hubs."
      ]
    },
    {
      role: "Intern",
      organization: "Government Digital Service; The Whitechapel Building, UK",
      period: "June 2025 — August 2025",
      bullets: [
        "Produced clear technical guidance and presentations for automating forms " +
          "processing across UK government departments.",
        "Worked with cross-functional teams to ensure technical documentation met " +
          "government standards and user needs.",
        "Self-learning covered webpage creation (Ruby on Rails, etc.) and forms processing."
      ]
    },
    {
      role: "Assistant Theatre Sound Engineer",
      organization: "Great Gatsby Play; Revolution, Bristol, UK",
      period: "May 2025",
      bullets: [
        "Q-Lab and SFX operation covered running SFX and video cueing and handling " +
          "audio equipment for a live production attended by around 80 audience members.",
        "Technical support focused on diagnosing and resolving technical delays and " +
          "equipment failures prior to the show to deliver a smooth audio performance."
      ]
    },
    {
      role: "Sound Designer",
      organization: "Global Game Jam 2025; UWE Bristol, UK",
      period: "January 2025 — February 2025",
      bullets: [
        "Music composition centred on creating original scores and adaptive themes " +
          "using Logic, Studio One, and MuseScore for the game ‘BobaQuarium’.",
        "Audio implementation focused on programming and implementing the adaptive " +
          "soundtrack in Unity/C# and FMOD, applying DSP code for fluid gameplay response.",
        "Sound design and post-production covered managing audio recording, mixing, " +
          "and synthesis across a full game soundtrack under complex development cycles."
      ]
    },
    {
      role: "Cabin/Camp Counsellor, Guitar Coach & Assistant Theatre Sound Engineer",
      organization: "Camp America, USA",
      period: "June 2024 — August 2024",
      bullets: [
        "24/6 cabin care required coordinating early-morning, lunchbreak and evening " +
          "youth cabin care for groups of 8 to 12 campers, alongside technical theatre operations.",
        "Combined theatre sound work with one-to-one guitar coaching, supporting " +
          "performances while maintaining a safe and positive environment for campers.",
        "Problem solving resolved live technical failures when guitar leads and XLRs " +
          "failed mid-performance, restoring audio and preventing show disruption.",
        "Physical preparation covered setting up and cleaning camp facilities prior " +
          "to opening and completing a nine-week contract supporting day-to-day operations."
      ]
    },
    {
      role: "Hospitality Staff & Kitchen Porter",
      organization: "Lime Hospitality, Bath, UK",
      period: "June 2021 — May 2024",
      bullets: [
        "Multi-venue experience ranged across high-profile venues including Bath " +
          "Rugby, Bailbrook Hotel, and Bath & Chepstow Racecourses, maintaining pace " +
          "and service standards during peak demand.",
        "Customer demand ranged from dining service to weddings and banquets for " +
          "20 to 150 guests.",
        "Maintained service for up to 500 customers daily under strict hygiene " +
          "standards at Bath Spa University’s Refectory."
      ]
    },
    {
      role: "Front-of-House & Back-of-House Staff",
      organization: "Pizza Express, UK",
      period: "August 2021 — December 2022",
      bullets: [
        "Multi-branch commitment meant handling high-volume service across branches " +
          "as Food Runner and Kitchen Porter.",
        "Provisions and cleanliness covered operating the potwash area, dishwashing, " +
          "deep-cleaning, and restocking ingredients.",
        "Customer service ensured food reached tables promptly to maintain a steady, " +
          "high-standard flow of service."
      ]
    },
    {
      role: "Trading Assistant",
      organization: "Sainsbury's PLC, UK",
      period: "December 2021 — May 2022",
      bullets: [
        "Constant supply was maintained by handling stock rotation through " +
          "code-checking product dates, replenishing shelves, and upholding store standards.",
        "Multi-discipline support extended to helping customers at checkouts and " +
          "maintaining a professional and efficient point-of-sale experience during busy periods."
      ]
    }
  ],

  additionalExperience: [
    {
      role: "Society Founder & Former-Committee Member",
      organization: "Society of Musicians; University of the West of England, UK",
      period: "October 2022 — August 2025",
      bullets: [
        "Founded and presided over the society to unite the local music community.",
        "Led collaborative rock jams as guitarist and bassist, helping grow 100 " +
          "sign-ups into an active core member base.",
        "Set up a committee structure and Discord communication system to support " +
          "the society’s long-term growth.",
        "Scheduling focused on managing a consistent calendar of socials, " +
          "professional gigs, and open-mic events."
      ]
    },
    {
      role: "Costa Rica Volunteer",
      organization: "Raleigh Costa Rica",
      period: "July 2022 — August 2022",
      bullets: [
        "Language instruction combined constructing a school classroom for a rural " +
          "indigenous school with providing English classes and activities.",
        "Trek preparation covered daily planning, task delegation, and safety " +
          "briefings for a small team of peers in high-pressure environments.",
        "Led a team through a 17-day mountain trek, using clear communication and " +
          "adaptive problem-solving in challenging conditions.",
        "Navigated with outdated maps and adjusted routes when terrain features " +
          "were missing or overgrown.",
        "Interpersonal skill awards resulted in five award nominations, including " +
          "Best Team Player and Most Positive Team Person."
      ]
    }
  ],

  education: [
    {
      degree: "BSc (Hons) Audio and Music Technology [J932]",
      institution: "University of the West of England (UWE Bristol), UK",
      period: "September 2022 — August 2025",
      bullets: [
        "Relevant coursework covered Audio Post-Production, Audio for Games, " +
          "Architectural Acoustics and Advanced Technologies.",
        "Key achievements featured developing bespoke audio/AV software and plugins " +
          "using C++ (JUCE), Three.JS, and C#, integrating DSP and synthesis.",
        "Audio software experience covered hands-on use of industry technologies " +
          "such as Pro Tools, Reaper, Unity, FMOD, and MaxMSP.",
        "UI design work focused on creating textures and materials for 3D models " +
          "in Blender for a virtual gramophone audio plugin GUI.",
        "Designed soundscapes for film and games, including a full redesign of a " +
          "Chernobyl scene using surround sound, dialogue editing, and foley; " +
          "achieved a 2:1 grade.",
        "Built virtual instruments in MaxMSP, including a software synth, sampler, " +
          "and drum machine, plus custom microcontroller devices for real-time parameter control.",
        "Used VR development and spatial audio techniques to create fully immersive " +
          "experiences, blending music composition with SFX and atmospheric layers.",
        "Musical composition drew on advanced music theory and proficiency in " +
          "guitar, bass, and synthesisers to compose original scores using Logic, " +
          "MuseScore, and Fender Studio.",
        "Prototyped an immersive VR Digital Audio Workstation in Unity for a Meta " +
          "Quest 2, with spatial audio playback, haptic feedback, and a 3D timeline interface."
      ]
    },
    {
      degree: "BTEC (Level 3) Music Performing & A-Level Music Technology & BTEC (Level 3) IT",
      institution: "St Brendan’s Sixth Form College | Bristol, UK",
      period: "September 2019 — July 2021",
      bullets: [
        "Completed BTEC Level 3 Music Performing, A-Level Music Technology, and BTEC Level 3 IT."
      ]
    }
  ],

  skills: {
    sets: [
      { id: "media", label: "Immersive Media & Technology" },
      { id: "it", label: "Information Technology" },
      { id: "dev", label: "Software/Hardware Development" }
    ],
    items: [
      { name: "Pro Tools", in: ["media"] },
      { name: "Reaper", in: ["media"] },
      { name: "Logic", in: ["media"] },
      { name: "Cubase", in: ["media"] },
      { name: "Fender Studio Pro", in: ["media"] },
      { name: "MuseScore", in: ["media"] },
      { name: "Q-Lab", in: ["media"] },
      { name: "5.1.2 / 7.1.4 Surround", in: ["media"] },
      { name: "Ambisonics", in: ["media"] },
      { name: "Foley & Field Recording", in: ["media"] },
      { name: "Mixing Desks", in: ["media"] },
      { name: "Gather Town", in: ["media", "it", "dev"] },
      { name: "Unity", in: ["media", "dev"] },
      { name: "FMOD", in: ["media"] },
      { name: "MaxMSP", in: ["media", "dev"] },
      { name: "JUCE", in: ["media", "dev"] },
      { name: "DSP", in: ["dev"] },
      { name: "Blender", in: ["media", "dev"] },
      { name: "JavaScript (Including Three.JS)", in: ["media", "it", "dev"] },
      { name: "HTML / CSS", in: ["it"] },
      { name: "JSON", in: ["it"] },
      { name: "Ruby", in: ["it"] },
      { name: "Agile, SCRUM, Etc.", in: ["media", "it", "dev"] },
      { name: "Technical Documentation", in: ["it"] },
      { name: "Discord / Zoom", in: ["it"] },
      { name: "Microsoft Office", in: ["it"] },
      { name: "GDS Standards", in: ["it"] },
      { name: "BECTU Starting Safely", in: ["media", "it"] },
      { name: "Duke of Edinburgh (Bronze)", in: ["it"] },
      { name: "C++", in: ["dev"] },
      { name: "C#", in: ["dev"] }
    ]
  },
  contact: [
    { label: "GitHub", url: "https://github.com/montywh", value: "@montywh", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/montaguewh",
      value: "@montaguewh",
      icon: "linkedin"
    },
    {
      label: "Email",
      url: "mailto:monty.whishaw@gmail.com",
      value: "monty.whishaw@gmail.com",
      icon: "gmail"
    }
  ]
};