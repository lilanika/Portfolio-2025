// projects.js - Main application logic

/**
 * ProjectsManager Class
 * Handles project filtering, rendering, and interactions
 */
class ProjectsManager {
  constructor(data, containerId) {
    this.projects = data;
    this.container = document.getElementById(containerId);
    this.currentFilter = "all";
    this.expandedProject = null;

    if (!this.container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    this.init();
  }

  /**
   * Initialize the projects manager
   */
  init() {
    this.renderProjects();
    this.attachFilterListeners();
    this.initScrollAnimations();
  }

  /**
   * Generate compact card HTML
   * @param {Object} project - Project data object
   * @returns {string} HTML string for compact card view
   */
  generateCompactCard(project) {
    const techIcons = project.tech
      .map((tech) => {
        const iconSrc = tech.icon.startsWith("http")
          ? tech.icon
          : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`;

        return `
          <img 
            class="tech-icon" 
            src="${iconSrc}" 
            alt="${tech.name} logo"
            loading="lazy">
        `;
      })
      .join("");

    const tags = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    return `
        <div class="project-card-compact" role="button" tabindex="0" aria-label="View ${project.title} project details">
          <div class="project-thumb-compact">
            <img src="${project.thumbnail}" alt="${project.title} project preview" loading="lazy">
          </div>
          <div class="project-info-compact">
            <div class="project-tags" aria-label="Project categories">${tags}</div>
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="tech-stack" aria-label="Technologies used">${techIcons}</div>
          </div>
        </div>
      `;
  }

  /**
   * Generate expanded card HTML (lazy-loaded when clicked)
   * @param {Object} project - Project data object
   * @returns {string} HTML string for expanded card view
   */
  generateExpandedCard(project) {
    const expandedTags = project.expandedTags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const features =
      project.features && project.features.length > 0
        ? `
      <div class="expanded-section">
        <h3>Key Features</h3>
        <ul class="features-list">
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </div>
    `
        : "";

    const techStack = project.tech
      .map((tech) => {
        const iconSrc = tech.icon.startsWith("http")
          ? tech.icon
          : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`;

        return `
            <div class="expanded-tech-item">
              <img src="${iconSrc}" alt="${tech.name} logo" loading="lazy">
              <span>${tech.name}</span>
            </div>
          `;
      })
      .join("");

    // Video section (if video exists)
    const video = project.video
      ? `
        <div class="expanded-section">
          <h3>Demo Video</h3>
          <div class="video-container">
            ${
              project.video.includes("youtube.com") ||
              project.video.includes("youtu.be") ||
              project.video.includes("vimeo.com")
                ? `<iframe 
                  src="${project.video}" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  loading="lazy">
                </iframe>`
                : `<video controls preload="metadata">
                  <source src="${project.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`
            }
          </div>
        </div>
      `
      : "";

    // Screenshots section (if screenshots exist)
    const screenshots =
      project.screenshots && project.screenshots.length > 0
        ? `
        <div class="expanded-section">
          <h3>Screenshots</h3>
          <div class="screenshots-grid">
            ${project.screenshots
              .map(
                (img, index) =>
                  `<img src="${img}" alt="${project.title} screenshot ${
                    index + 1
                  }" loading="lazy">`
              )
              .join("")}
          </div>
        </div>
      `
        : "";

    // Add HR separator before links if no screenshots AND no video
    const separator =
      !screenshots && !video ? '<hr class="expanded-separator">' : "";

    const links = project.links
      .map(
        (link) => `
          <a href="${link.url}" class="btn ${
          link.primary ? "btn-primary" : "btn-secondary"
        }" ${
          link.url === "#" ? "" : 'target="_blank" rel="noopener noreferrer"'
        }>
            ${link.label}
          </a>
        `
      )
      .join("");

    return `
        <div class="project-card-expanded">
          <div class="expanded-header">
            <button class="expanded-close" aria-label="Close ${
              project.title
            } project details">&times;</button>
            <img src="${project.heroImage}" alt="${
      project.title
    } hero image" loading="lazy">
          </div>
          <div class="expanded-content">
            <div class="expanded-tags">${expandedTags}</div>
            
            <h2>${project.title} | ${project.tags[0]} </h2>
            <p><strong>Timeline:</strong> ${
              project.timeline
            } • <strong>Year:</strong> ${project.year}${
      project.team
        ? ` • <strong>Team:</strong> ${project.team} people`
        : " • <strong>Team:</strong> Solo"
    }</p>
            
            <div class="expanded-section">
              <p>${project.fullDescription}</p>
            </div>
    
            ${features}
    
            <div class="expanded-section">
              <h3>Tech Stack</h3>
              <div class="expanded-tech-stack">${techStack}</div>
            </div>
    
            ${screenshots}
            ${video}
    
            ${separator}
            <div class="expanded-links">${links}</div>
          </div>
        </div>
      `;
  }

  /**
   * Render all projects to the DOM
   */
  renderProjects() {
    const projectsHTML = this.projects
      .map(
        (project) => `
        <article 
          class="project-card" 
          data-project="${project.id}" 
          data-category="${project.category}"
          role="listitem">
          ${this.generateCompactCard(project)}
        </article>
      `
      )
      .join("");

    this.container.innerHTML = projectsHTML;
    this.attachCardListeners();
  }

  /**
   * Filter projects by category
   * @param {string} filter - Filter category ('all', 'design', 'development')
   */
  filterProjects(filter) {
    this.currentFilter = filter;
    const cards = this.container.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const category = card.dataset.category;
      // Support multiple categories separated by comma
      const categories = category.split(",").map((c) => c.trim());
      const shouldShow = filter === "all" || categories.includes(filter);

      card.classList.toggle("hidden", !shouldShow);

      // Close expanded cards when filtering
      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
      }
    });
  }

  /**
   * Expand a project card
   * @param {HTMLElement} card - The card element to expand
   */
  expandCard(card) {
    const projectId = card.dataset.project;
    const project = this.projects.find((p) => p.id === projectId);

    if (!project) return;

    // Close other expanded cards first
    this.container
      .querySelectorAll(".project-card.expanded")
      .forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("expanded");
        }
      });

    // Add expanded content if not already present (lazy loading)
    if (!card.querySelector(".project-card-expanded")) {
      card.insertAdjacentHTML("beforeend", this.generateExpandedCard(project));

      // Attach close button listener
      const closeBtn = card.querySelector(".expanded-close");
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeCard(card);
      });
    }

    // Expand card
    card.classList.add("expanded");
    this.expandedProject = projectId;

    // Wait for expansion animation, then scroll card to top of viewport
    setTimeout(() => {
      const headerOffset = 20; // Small offset from very top
      const cardTop = card.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset + cardTop - headerOffset;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 50);
  }

  /**
   * Close an expanded card
   * @param {HTMLElement} card - The card element to close
   */
  closeCard(card) {
    card.classList.remove("expanded");
    this.expandedProject = null;
  }

  /**
   * Attach filter button listeners
   */
  attachFilterListeners() {
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        // Filter projects
        this.filterProjects(filter);
      });
    });
  }

  /**
   * Attach card click listeners
   */
  attachCardListeners() {
    const cards = this.container.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const compactView = card.querySelector(".project-card-compact");

      // Click handler
      compactView.addEventListener("click", () => {
        if (!card.classList.contains("expanded")) {
          this.expandCard(card);
        }
      });

      // Keyboard accessibility
      compactView.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (!card.classList.contains("expanded")) {
            this.expandCard(card);
          }
        }
      });
    });
  }

  /**
   * Initialize scroll animations for sections
   */
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section:not(.hero)").forEach((section) => {
      observer.observe(section);
    });
  }
}

/**
 * Toggle "About" section expansion
 */
function toggleAbout() {
  const full = document.getElementById("about-full");
  const btn = event.target;
  const isExpanded = full.classList.contains("show");

  full.classList.toggle("show");
  btn.textContent = full.classList.contains("show")
    ? "← Show less"
    : "More about me →";
  btn.setAttribute("aria-expanded", !isExpanded);
}

/**
 * Toggle "Stack" section expansion
 */
function toggleStack() {
  const more = document.getElementById("stack-more");
  const btn = event.target;
  const isExpanded = more.classList.contains("show");

  more.classList.toggle("show");
  btn.textContent = more.classList.contains("show")
    ? "Show less ↑"
    : "Show more tools →";
  btn.setAttribute("aria-expanded", !isExpanded);
}

/**
 * Initialize scroll animations for sections
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("section:not(.hero)").forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Initialize application when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize scroll animations
  initScrollAnimations();

  // Check if PROJECTS_DATA is available
  if (typeof PROJECTS_DATA === "undefined") {
    console.error(
      "PROJECTS_DATA not found. Make sure projects-data.js is loaded before projects.js"
    );
    return;
  }

  // Initialize projects manager
  new ProjectsManager(PROJECTS_DATA, "projectsContainer");

  console.log("Portfolio initialized successfully");
});
