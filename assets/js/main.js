document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("app-header");
  const navTabs = document.querySelectorAll(".nav-tab");
  const sections = document.querySelectorAll(".app-section");
  const themeToggle = document.getElementById("theme-toggle");

  /* ========================================================================
     1. Render Portfolio Content from data.js
     ======================================================================== */
  if (typeof portfolioData !== "undefined") {
    const profile = portfolioData.profile || {};

    // Top Ribbon Brand & Footer
    const brandNameEl = document.getElementById("brand-name");
    const brandTaglineEl = document.getElementById("brand-tagline");
    const footerNameEl = document.getElementById("footer-name");

    if (brandNameEl && profile.name) {
      brandNameEl.textContent = profile.name;
      document.title = `${profile.name} | Portfolio`;
    }
    if (brandTaglineEl && profile.tagline) {
      brandTaglineEl.textContent = profile.tagline;
    }
    if (footerNameEl && profile.name) {
      footerNameEl.textContent = profile.name;
    }

    // Top Profile Hero Card
    const avatarEl = document.getElementById("profile-avatar");
    const heroNameEl = document.getElementById("hero-name");
    const heroStatusEl = document.getElementById("hero-status");
    const heroTaglineEl = document.getElementById("hero-tagline");
    const heroLocationEl = document.getElementById("hero-location");
    const heroBioEl = document.getElementById("hero-bio");
    const heroActionsEl = document.getElementById("hero-actions");

    if (avatarEl && (profile.initials || profile.name)) {
      avatarEl.textContent = profile.initials || profile.name.charAt(0).toUpperCase();
    }
    if (heroNameEl && profile.name) {
      heroNameEl.textContent = profile.name;
    }
    if (heroStatusEl) {
      if (profile.status) {
        heroStatusEl.textContent = profile.status;
      } else {
        heroStatusEl.style.display = "none";
      }
    }
    if (heroTaglineEl && profile.tagline) {
      heroTaglineEl.textContent = profile.tagline;
    }
    if (heroLocationEl) {
      if (profile.location) {
        heroLocationEl.textContent = `📍 ${profile.location}`;
      } else {
        heroLocationEl.style.display = "none";
      }
    }
    if (heroBioEl) {
      const bioParagraphs = Array.isArray(profile.heroBio) && profile.heroBio.length > 0
        ? profile.heroBio
        : (profile.about || []);
      heroBioEl.innerHTML = bioParagraphs.map((p) => `<p>${p}</p>`).join("");
    }
    if (heroActionsEl && Array.isArray(portfolioData.contact)) {
      const primaryBtn = `<a href="#projects" class="profile-btn profile-btn--primary">View Projects ↓</a>`;
      const contactBtns = portfolioData.contact
        .map((c) => `<a href="${c.url}" target="_blank" rel="noopener" class="profile-btn">${c.label} ↗</a>`)
        .join("");
      heroActionsEl.innerHTML = primaryBtn + contactBtns;
    }

    // Projects & Category Filtering
    const renderProjects = (filterCategory = "All") => {
      const projectsGrid = document.getElementById("projects-grid");
      if (!projectsGrid || !Array.isArray(portfolioData.projects)) return;

      const filtered = filterCategory === "All"
        ? portfolioData.projects
        : portfolioData.projects.filter((p) => p.category === filterCategory);

      projectsGrid.innerHTML = filtered
        .map(
          (proj) => `
          <article class="card">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="tag-list">
              ${(proj.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
            <div class="card-links">
              ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
              ${proj.live && proj.live !== "#" ? `<a href="${proj.live}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
            </div>
          </article>
        `
        )
        .join("");
    };

    renderProjects("All");

    const filterPills = document.querySelectorAll(".filter-pill");
    filterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        filterPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        renderProjects(pill.getAttribute("data-filter"));
      });
    });

    // Skills
    const skillsGrid = document.getElementById("skills-grid");
    if (skillsGrid && Array.isArray(portfolioData.skills)) {
      skillsGrid.innerHTML = portfolioData.skills
        .map(
          (group) => `
          <div class="skill-group">
            <h3>${group.category}</h3>
            <div class="tag-list">
              ${(group.items || []).map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
          </div>
        `
        )
        .join("");
    }

    // Experience
    const experienceList = document.getElementById("experience-list");
    if (experienceList && Array.isArray(portfolioData.experience)) {
      experienceList.innerHTML = portfolioData.experience
        .map(
          (exp) => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <span class="timeline-role">${exp.role}</span>
                <span class="timeline-org"> · ${exp.organization}</span>
              </div>
              <span class="timeline-period">${exp.period}</span>
            </div>
            <p class="timeline-desc">${exp.description}</p>
          </div>
        `
        )
        .join("");
    }

    // Education
    const educationList = document.getElementById("education-list");
    if (educationList && Array.isArray(portfolioData.education)) {
      educationList.innerHTML = portfolioData.education
        .map(
          (edu) => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <span class="timeline-role">${edu.degree}</span>
                <span class="timeline-org"> · ${edu.institution}</span>
              </div>
              <span class="timeline-period">${edu.period}</span>
            </div>
            <p class="timeline-desc">${edu.description}</p>
          </div>
        `
        )
        .join("");
    }

    // About
    const aboutContent = document.getElementById("about-content");
    if (aboutContent && Array.isArray(profile.about)) {
      aboutContent.innerHTML = profile.about
        .map((para) => `<p style="margin-bottom: 0.85rem; color: var(--text-secondary);">${para}</p>`)
        .join("");
    }

    // Contact
    const contactLinks = document.getElementById("contact-links");
    if (contactLinks && Array.isArray(portfolioData.contact)) {
      contactLinks.innerHTML = portfolioData.contact
        .map(
          (item) => `
          <a class="contact-card" href="${item.url}" target="_blank" rel="noopener">
            <span>${item.label}</span>
            <span style="color: var(--text-muted); font-size: 0.82rem;">${item.value} ↗</span>
          </a>
        `
        )
        .join("");
    }
  }

  // Footer Year
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ========================================================================
     2. Dynamic Header Offset Measurement
     ======================================================================== */
  const syncHeaderHeight = () => {
    if (!header) return;
    const height = header.offsetHeight;
    document.documentElement.style.setProperty("--header-offset", `${height}px`);
  };

  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);

  /* ========================================================================
     3. Active Ribbon Tab & Mobile Auto-Centering + Scroll-Spy
     ======================================================================== */
  const setActiveTab = (targetId) => {
    navTabs.forEach((tab) => {
      const isMatch = tab.getAttribute("data-target") === targetId;
      tab.classList.toggle("active", isMatch);

      if (isMatch) {
        tab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    });
  };

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");
      setActiveTab(targetId);
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach((sec) => sectionObserver.observe(sec));

  /* ========================================================================
     4. Dark / Light Theme Persistence
     ======================================================================== */
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }
});