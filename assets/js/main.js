document.addEventListener("DOMContentLoaded", () => {
  const LINKEDIN_LOGO =
    '<svg class="linkedin-logo" viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" fill="#fff"/>' +
    '<path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' +
    "</svg>";
  const GITHUB_LOGO =
    '<svg class="github-logo" viewBox="0 0 16 16" width="22" height="22" role="img" aria-hidden="true">' +
    '<path fill="#000" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>' +
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
    if (heroHighlightsEl && portfolioData.skills && Array.isArray(portfolioData.skills.items)) {
      const { sets, items } = portfolioData.skills;
      const [A, B, C] = sets.map((s) => s.id);
      const labelOf = (id) => sets.find((s) => s.id === id).label;

      const itemsFor = (ids) =>
        items.filter((i) => i.in.length === ids.length && ids.every((id) => i.in.includes(id)));
      const colourOf = { [A]: "#0f766e", [B]: "#2563eb", [C]: "#ea580c" };

      // Mind map: the three topics sit together in the middle and each skill is joined to every topic
      // it belongs to. The width follows the container; skills branch sideways while there is room
      // and downwards once there isn't, so the height is whatever the layout needs.
      const renderMap = (W, k, realW, wide) => {
      const narrow = W < 640;
      const HUB_R = narrow ? 95 : 105;
      const centroid = [W / 2, 0];
      // Wide maps stretch the skill rings sideways into an ellipse so the extra width gets used
      const ex = Math.min(2.2, Math.max(1, (W - 450) / 150));
      const polar = (deg, r, sx = 1) => [
        centroid[0] + r * sx * Math.cos((deg * Math.PI) / 180),
        centroid[1] + r * Math.sin((deg * Math.PI) / 180)
      ];
      const hub = { [A]: polar(150, HUB_R), [B]: polar(30, HUB_R), [C]: polar(-90, HUB_R) };

      const nodes = []; // { name, x, y, hubs }
      const hubW = narrow ? 128 : 160;
      const hubH = narrow ? 84 : 64;
      // The all-topics skill sits in the gap between the top topic and the two lower ones
      const tripleY = narrow ? -28 : 0;
      const boxes = [
        ...[A, B, C].map((id) => ({ x: hub[id][0], y: hub[id][1], w: hubW, h: hubH })),
        { x: centroid[0], y: tripleY, w: 110, h: 44 }
      ];
      const GAP = 22;
      let lineGap = narrow ? 30 : 42; // nodes keep this far from other lines running to the same topic
      const segDist = (px, py, [ax, ay], [bx, by]) => {
        const dx = bx - ax;
        const dy = by - ay;
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1)));
        return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
      };
      const linesClear = (x, y, hubs) =>
        nodes.every((n) =>
          n.hubs.every((id) => !hubs.includes(id) || (
            segDist(x, y, hub[id], [n.x, n.y]) >= lineGap &&
            segDist(n.x, n.y, hub[id], [x, y]) >= lineGap
          ))
        );
      const fits = (x, y, w, h, hubs) =>
        x - w / 2 >= 0 &&
        x + w / 2 <= W &&
        linesClear(x, y, hubs) &&
        boxes.every((b) => Math.abs(b.x - x) >= (b.w + w) / 2 + GAP || Math.abs(b.y - y) >= (b.h + h) / 2 + GAP);

      const sectors = [
        { ids: [A], deg: 150 },
        { ids: [B], deg: 30 },
        { ids: [C], deg: -90 },
        { ids: [A, B], deg: 90 },
        { ids: [A, C], deg: 210 },
        { ids: [B, C], deg: -30 }
      ];
      sectors.forEach(({ ids, deg }) => {
        const list = itemsFor(ids);
        // Fan each topic's skills across an arc so their lines leave the topic at different angles
        const fan = Math.min(ids.length > 1 ? 36 : 56, list.length * 9);
        list.forEach((item, n) => {
          const base = list.length > 1 ? deg - fan / 2 + (fan * n) / (list.length - 1) : deg;
          const w = Math.min(136, item.name.length * 7 + 26) + 8;
          const h = item.name.length * 7 + 26 > 136 ? 48 : 34;
          let spot = null;
          // Prefer wide line spacing; relax it only when a skill cannot be placed otherwise
          const baseGap = narrow ? 22 : 28;
          for (const factor of [1, 0.7, 0.4, 0]) {
            lineGap = baseGap * factor;
            for (const span of factor > 0 ? [0, 12, 24, 40] : [0, 12, 24, 40, 60, 90]) {
              for (let r = narrow ? 160 : 185; r <= (factor > 0 ? 650 : 1800) && !spot; r += 10) {
                for (let off = 0; off <= span && !spot; off += 4) {
                  for (const sign of off === 0 ? [1] : [1, -1]) {
                    const [x, y] = polar(base + sign * off, r, ex);
                    if (fits(x, y, w, h, item.in)) {
                      spot = { x, y };
                      break;
                    }
                  }
                }
              }
              if (spot) break;
            }
            if (spot) break;
          }
          spot = spot || { x: polar(base, 300, ex)[0], y: polar(base, 300, ex)[1] };
          boxes.push({ ...spot, w, h });
          nodes.push({ name: item.name, x: spot.x, y: spot.y, hubs: item.in });
        });
      });

      itemsFor([A, B, C]).forEach((item) =>
        nodes.push({ name: item.name, x: centroid[0], y: tripleY, hubs: item.in })
      );

      // Trim the empty space: shift everything so the layout starts just below the top edge
      const allBoxes = boxes.map((b) => [b.y - b.h / 2, b.y + b.h / 2]);
      const minY = Math.min(...allBoxes.map((b) => b[0])) - 12;
      const Hnarrow = Math.ceil(Math.max(...allBoxes.map((b) => b[1])) + 12 - minY);
      const minX = Math.min(...boxes.map((b) => b.x - b.w / 2));
      const maxX = Math.max(...boxes.map((b) => b.x + b.w / 2));
      const shiftX = (W - maxX - minX) / 2; // centre the map horizontally
      [...Object.values(hub), centroid, ...nodes].forEach((p) => {
        if (Array.isArray(p)) {
          p[1] -= minY;
          p[0] += shiftX;
        } else {
          p.y -= minY;
          p.x += shiftX;
        }
      });
      const px = (v) => `${v.toFixed(1)}px`;

      const dims = (name) => {
        const full = name.length * 7 + 26;
        return { w: Math.min(136, full) + 8, h: full > 136 ? 48 : 34 };
      };

      // Arranged by hand for the wide layout, so it is used as-is whenever the map is wide
      let H = Hnarrow;
      if (wide) {
        const saved = {
          hubs: { [A]: [288, 430], [B]: [606, 334], [C]: [333, 207] },
          nodes: {
            "Pro Tools": [25, 672], Reaper: [16, 571], Logic: [119, 575], Cubase: [43, 768],
            "Fender Studio Pro": [158, 740], MuseScore: [266, 675], "Q-Lab": [118, 646],
            "5.1.2 / 7.1.4 Surround": [110, 485], Ambisonics: [327, 741], "Foley & Field Recording": [50, 419],
            "Mixing Desks": [46, 357], "Technical Documentation": [768, 465], "Discord / Zoom": [775, 683],
            "Microsoft Office": [461, 468], "GDS Standards": [678, 621], "BECTU Starting Safely": [573, 706],
            "Duke of Edinburgh (Bronze)": [428, 778], "C++": [418, 91], "C#": [624, 16], "Gather Town": [406, 657],
            Unity: [23, 213], FMOD: [202, 111], MaxMSP: [58, 134], JUCE: [103, 70], DSP: [246, 16],
            Blender: [313, 290], "HTML / CSS": [794, 176], JavaScript: [675, 140], JSON: [766, 260],
            Ruby: [564, 106], "Agile Environments": [769, 350], "Three.JS": [401, 320]
          }
        };
        [A, B, C].forEach((id) => (hub[id] = saved.hubs[id]));
        nodes.forEach((n) => {
          if (saved.nodes[n.name]) [n.x, n.y] = saved.nodes[n.name];
        });
        H = 812;
        // Keep every bubble inside the map: shift to the left edge and fit the scale to the real width
        const spans = [
          ...nodes.map((n) => [n.x - dims(n.name).w / 2, n.x + dims(n.name).w / 2]),
          ...[A, B, C].map((id) => [hub[id][0] - hubW / 2, hub[id][0] + hubW / 2])
        ];
        const left = Math.min(...spans.map((s) => s[0])) - 6;
        W = Math.ceil(Math.max(...spans.map((s) => s[1])) - left + 6);
        nodes.forEach((n) => (n.x -= left));
        [A, B, C].forEach((id) => (hub[id] = [hub[id][0] - left, hub[id][1]]));
        k = Math.min(1.15, realW / W);
      }

      // Mind-map branches: curves from each topic to its skills
      const curve = (x1, y1, x2, y2, bend = 0.12) => {
        const mx = (x1 + x2) / 2 + (y2 - y1) * bend;
        const my = (y1 + y2) / 2 - (x2 - x1) * bend;
        return `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;
      };
      // On narrower maps each branch picks the bend that crosses the fewest other bubbles
      const bendFor = (x1, y1, x2, y2, self, hubId) => {
        if (wide) return 0.12;
        const obstacles = [
          ...nodes.filter((o) => o !== self).map((o) => ({ x: o.x, y: o.y, ...dims(o.name) })),
          ...[A, B, C].filter((o) => o !== hubId).map((o) => ({ x: hub[o][0], y: hub[o][1], w: hubW, h: hubH }))
        ];
        let best = 0.12;
        let bestScore = Infinity;
        for (const bend of [0.12, -0.12, 0.25, -0.25, 0.4, -0.4, 0.6, -0.6]) {
          const cx = (x1 + x2) / 2 + (y2 - y1) * bend;
          const cy = (y1 + y2) / 2 - (x2 - x1) * bend;
          let score = 0;
          obstacles.forEach((o) => {
            for (let s = 1; s < 28; s++) {
              const t = s / 28;
              const x = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
              const y = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;
              if (Math.abs(x - o.x) < o.w / 2 + 4 && Math.abs(y - o.y) < o.h / 2 + 4) {
                score++;
                break;
              }
            }
          });
          if (score < bestScore) {
            bestScore = score;
            best = bend;
            if (score === 0) break;
          }
        }
        return best;
      };
      const web = "";
      const links = nodes
        .flatMap((n) =>
          n.hubs.map((id) => {
            const bend = bendFor(hub[id][0], hub[id][1], n.x, n.y, n, id);
            return `<path class="venn__link" stroke="${colourOf[id]}" d="${curve(hub[id][0], hub[id][1], n.x, n.y, bend)}"/>`;
          })
        )
        .join("");

      // Gradient text (same technique as the brand title) in each diagram colour
      const looks = {
        media: ["#0f766e", "#0b5e6b", "#0f9d8f", "#19b89c"],
        it: ["#2563eb", "#0b3d91", "#0077c8", "#00b4b0"],
        dev: ["#ea580c", "#e03c00", "#ff7a00", "#ff9d1a"],
        "dev+media": ["#5fa80a", "#2f7d0a", "#5fb30a", "#8cc63f"],
        "it+media": ["#0e95c2", "#0369a1", "#0ea5d9", "#2bc4e8"],
        "dev+it": ["#8f3ff0", "#5b21b6", "#8f3ff0", "#d946ef"],
        "dev+it+media": ["#d9267a", "#9d174d", "#d9267a", "#ff5a9a"],
      };
      const styleFor = (key) => {
        const [edge, a, b, c] = looks[key];
        return `background-color:transparent;background-image:linear-gradient(90deg,${a},${b} 55%,${c}),linear-gradient(#fff,#fff);-webkit-background-clip:text,border-box;background-clip:text,border-box;-webkit-text-fill-color:transparent;color:${b};border:2px solid ${edge}`;
      };
      const hubEls = [A, B, C]
        .map(
          (id) =>
            `<div class="venn__hub" style="left:${px(hub[id][0])};top:${px(hub[id][1])};${styleFor(id)};border-width:3px">${labelOf(id)}</div>`
        )
        .join("");
      const nodeEls = nodes
        .map((n) => {
          const sets_ = n.hubs.map(labelOf).join(" + ");
          const key = n.hubs.length === 1 ? n.hubs[0] : [...n.hubs].sort().join("+");
          return `<span class="tag venn__node" title="${sets_}" style="left:${px(n.x)};top:${px(n.y)};${styleFor(key)}">${n.name}</span>`;
        })
        .join("");

      heroHighlightsEl.innerHTML = `
                  <div style="height:${Math.ceil(H * k)}px">
                  <div class="venn__stage${narrow ? " venn__stage--narrow" : ""}" style="width:${W}px;height:${H}px;transform:scale(${k});transform-origin:0 0" role="group" aria-label="Skills map linking ${sets.map((s) => s.label).join(", ")}">
                    <svg class="venn__web" viewBox="0 0 ${W} ${H}" aria-hidden="true">${web}${links}</svg>
                    ${hubEls}${nodeEls}
                  </div>
                  </div>`;
    };

                let lastW = 0;
                const draw = () => {
                  const w = Math.round(Math.min(1000, Math.max(300, heroHighlightsEl.clientWidth)));
                  if (w === lastW) return;
                  lastW = w;
                  // Wide: the hand-arranged 806px layout, scaled up to fill the space. Narrow: auto layout.
                  const wide = w >= 800;
                  const k = wide ? Math.min(1.15, w / 806) : 1;
                  renderMap(wide ? 806 : w, k, w, wide);
                };
                draw();
                window.addEventListener("resize", () => requestAnimationFrame(draw));
              }
    if (heroActionsEl) {
      const primaryBtns = "";
      const externalBtns = (portfolioData.contact || [])
        .filter((c) => c.url.startsWith("http") && c.icon !== "github")
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