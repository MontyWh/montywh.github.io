document.addEventListener("DOMContentLoaded", () => {
  const LINKEDIN_LOGO =
    '<svg class="linkedin-logo" viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" fill="#fff"/>' +
    '<path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' +
    "</svg>";
  const GITHUB_LOGO =
    '<svg class="github-logo" viewBox="0 0 16 16" width="22" height="22" role="img" aria-hidden="true">' +
    '<path fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>' +
    "</svg>";
  const GMAIL_LOGO =
    '<svg class="gmail-logo" viewBox="0 70 500 350" width="26" height="18" role="img" aria-hidden="true">' +
    '<path fill="#4285F4" d="M20 160 L125 238 V415 H52 Q20 415 20 383 Z"/>' +
    '<path fill="#34A853" d="M480 160 L375 238 V415 H448 Q480 415 480 383 Z"/>' +
    '<path fill="#FBBC04" d="M375 105 L400 85 Q415 72 435 72 Q480 72 480 118 V160 L375 238 Z"/>' +
    '<path fill="#C5221F" d="M125 105 L100 85 Q85 72 65 72 Q20 72 20 118 V160 L125 238 Z"/>' +
    '<path fill="#EA4335" d="M125 105 L250 197 L375 105 V238 L250 332 L125 238 Z"/>' +
    "</svg>";
  const ICONS = { linkedin: LINKEDIN_LOGO, github: GITHUB_LOGO, gmail: GMAIL_LOGO };
  const header = document.getElementById("app-header");
  const navTabs = document.querySelectorAll(".nav-tab");
  const sections = document.querySelectorAll(".app-section");

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
    const heroHighlightsEl = document.getElementById("hero-highlights");
    const heroActionsEl = document.getElementById("hero-actions");

    if (avatarEl && (profile.initials || profile.name)) {
      avatarEl.textContent = profile.initials || profile.name.charAt(0).toUpperCase();
    }
    if (heroNameEl && profile.name) {
      heroNameEl.textContent = profile.name;
    }
    if (heroStatusEl && profile.status) {
      heroStatusEl.textContent = profile.status;
    }
    if (heroTaglineEl && profile.tagline) {
      heroTaglineEl.textContent = profile.tagline;
    }
    if (heroLocationEl && profile.location) {
      heroLocationEl.textContent = `📍 ${profile.location}`;
    }
    if (heroBioEl && Array.isArray(profile.heroBio)) {
      heroBioEl.innerHTML = profile.heroBio.map((p) => `<p>${p}</p>`).join("");
    }
    if (heroHighlightsEl && Array.isArray(profile.highlights)) {
      heroHighlightsEl.innerHTML = profile.highlights
        .map(
          (item) => `
          <div class="profile-highlight-item">
            <strong>${item.label}</strong>
            <span>${item.text}</span>
          </div>
        `
        )
        .join("");
    }
    if (heroActionsEl) {
      const primaryBtns = "";
      const externalBtns = (portfolioData.contact || [])
        .filter((c) => c.url.startsWith("http") || c.icon === "gmail")
        .map((c) =>
          ICONS[c.icon]
            ? `<a href="${c.url}" ${c.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} class="profile-btn profile-btn--icon" aria-label="${c.label}" title="${c.label}">${ICONS[c.icon]}</a>`
            : `<a href="${c.url}" target="_blank" rel="noopener" class="profile-btn">${c.label} ↗</a>`
        )
        .join("");
      heroActionsEl.innerHTML = primaryBtns + externalBtns;
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

    // Helper for Timeline Rendering
    const renderTimeline = (containerId, items, titleKey, orgKey) => {
      const container = document.getElementById(containerId);
      if (!container || !Array.isArray(items)) return;

      container.innerHTML = items
        .map(
          (item) => `
          <div class="timeline-item">
            <div class="timeline-header">
              <div>
                <span class="timeline-role">${item[titleKey]}</span>
                <span class="timeline-org"> · ${item[orgKey]}</span>
              </div>
              <span class="timeline-period">${item.period}</span>
            </div>
            <ul class="timeline-bullets">
              ${(item.bullets || []).map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        `
        )
        .join("");
    };

    renderTimeline("experience-list", portfolioData.experience, "role", "organization");
    renderTimeline("additional-experience-list", portfolioData.additionalExperience, "role", "organization");
    renderTimeline("education-list", portfolioData.education, "degree", "institution");

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

    // About (Certifications, Musical Interests, Outdoor Activities)
    const aboutContent = document.getElementById("about-content");
    if (aboutContent && Array.isArray(profile.aboutBlocks)) {
      aboutContent.innerHTML = `
        <div class="about-grid">
          ${profile.aboutBlocks
            .map(
              (block) => `
              <div class="about-block">
                <h3>${block.title}</h3>
                <p>${block.content}</p>
              </div>
            `
            )
            .join("")}
        </div>
      `;
    }

    // Contact
    const contactLinks = document.getElementById("contact-links");
    if (contactLinks && Array.isArray(portfolioData.contact)) {
      contactLinks.innerHTML = portfolioData.contact
        .map(
          (item) => `
          <a class="contact-card" href="${item.url}" ${item.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            ${
              ICONS[item.icon]
                ? `<span aria-label="${item.label}" title="${item.label}">${ICONS[item.icon]}</span>`
                : `<span>${item.label}</span>`
            }
            <span style="color: var(--text-muted); font-size: 0.82rem;">${item.value} ${item.url.startsWith("http") ? "↗" : ""}</span>
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
    rootMargin: "-20% 0px -65% 0px",
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
});