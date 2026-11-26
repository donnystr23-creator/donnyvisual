const loaderStyle = document.createElement("style");
loaderStyle.textContent = `
  @keyframes loadPulse {
    0% { transform: scaleX(0.15); }
    100% { transform: scaleX(1); }
  }
  .loader-screen.hide {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
  
  /* Animasi Pop-In Staggered untuk Card Project */
  @keyframes popInBounce {
    0% {
      opacity: 0;
      transform: scale(0.85) translateY(18px);
    }
    70% {
      transform: scale(1.03) translateY(-4px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .pop-animate {
    animation: popInBounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  }
`;
document.head.appendChild(loaderStyle);

let loaderScreen = document.querySelector(".loader-screen");
if (!loaderScreen) {
  loaderScreen = document.createElement("div");
  loaderScreen.className = "loader-screen";
  loaderScreen.innerHTML = `
    <div style="text-align: center; font-family: 'Archivo Black', sans-serif;">
      <p style="font-size: 26px; color: #DFFF00; margin-bottom: 16px; letter-spacing: 2px; text-shadow: 4px 4px 0 #111111;">
        LOADING SYSTEM...
      </p>
      <div style="width: 220px; height: 16px; border: 3px solid #111111; background: #FFE88C; margin: 0 auto; box-shadow: 4px 4px 0 #FF5C00; border-radius: 50px; overflow: hidden; padding: 2px;">
        <div style="width: 100%; height: 100%; background: #6C2BFF; border-radius: 50px; transform-origin: left; animation: loadPulse 0.7s ease-in-out infinite alternate;"></div>
      </div>
    </div>
  `;
  Object.assign(loaderScreen.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#6C2BFF",
    zIndex: "99999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.4s ease, visibility 0.4s ease"
  });
  document.body.prepend(loaderScreen);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loaderScreen) {
      loaderScreen.classList.add("hide");
      setTimeout(() => loaderScreen.remove(), 450);
    }
  }, 600);
});

// ==========================================
// SELECTED WORK — PORTFOLIO DATA & ASSETS
// ==========================================
const portfolioProjects = [
  {
    id: "proj-01",
    num: "01",
    title: "ONYXIER CAMPAIGN",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "SPRING/SUMMER 2026 COLLECTION",
    year: "2026",
    image: "images/photo-03.png",
    images: ["images/photo-03.png"],
    description: "High-fashion editorial campaign exploring contemporary streetwear silhouettes, dark leather aesthetics, and futuristic accessories for Onyxier.",
    tags: ["Fashion Direction", "Styling", "Creative Direction", "Editorial"],
    featured: true
  },
  {
    id: "proj-02",
    num: "02",
    title: "ONYXIER BRAND IDENTITY",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "BRAND IDENTITY & PACKAGING",
    year: "2026",
    image: "images/design-01.png",
    images: ["images/design-01.png"],
    description: "Complete visual identity and luxury packaging design system for Onyxier, combining bespoke minimalist typography with tactile dark finishes.",
    tags: ["Visual Identity", "Typography", "Packaging", "Print"],
    featured: false
  },
  {
    id: "proj-03",
    num: "03",
    title: "NEON RUSH POSTER SERIES",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "TYPOGRAPHY POSTER SERIES VOL. 01",
    year: "2026",
    image: "images/design-02.png",
    images: ["images/design-02.png"],
    topMeta: "TYPOGRAPHY<br>POSTER SERIES<br>VOL. 01",
    description: "Experimental typography poster series exploring liquid chrome 3D letterforms, distortion shaders, and Swiss-style technical grids.",
    tags: ["Poster Art", "Liquid Chrome", "Typography", "Experimental"],
    featured: false
  },
  {
    id: "proj-04",
    num: "04",
    title: "NEON BEVERAGE CAMPAIGN",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "PRODUCT COMMERCIAL AD",
    year: "2026",
    image: "images/photo-01.png",
    images: ["images/photo-01.png"],
    description: "Vibrant commercial beverage advertising photography with high-speed splash capture, condensation textures, and neon lighting accents.",
    tags: ["Commercial", "Product Photography", "Lighting", "Art Direction"],
    featured: false
  },
  {
    id: "proj-05",
    num: "05",
    title: "URBAN ARCHIVE LOOKBOOK",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "STREETWEAR LOOKBOOK // 2026",
    year: "2026",
    image: "images/photo-02.png",
    images: ["images/photo-02.png"],
    description: "Location lookbook photoshoot shot in brutalist urban settings, highlighting textured outerwear, candid movement, and street youth culture.",
    tags: ["Lookbook", "Streetwear", "Urban Photography", "Direction"],
    featured: false
  },
  {
    id: "proj-06",
    num: "06",
    title: "ABSTRACT MOTION EXPLORATION",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "3D KINETIC RENDERING",
    year: "2026",
    image: "images/motion-03.gif",
    images: ["images/motion-03.gif"],
    description: "Dynamic 3D kinetic motion loops investigating glass refraction, metallic fluid simulations, and continuous rhythmic motion cycles.",
    tags: ["3D Animation", "Kinetic Loop", "Glass Shader", "CGI"],
    featured: false
  },
  {
    id: "proj-07",
    num: "07",
    title: "EDITORIAL MAGAZINE LAYOUT",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "ISSUE Nº01 EDITORIAL",
    year: "2026",
    image: "images/design-04.png",
    images: ["images/design-04.png"],
    description: "Editorial print publication layout featuring modular typographic hierarchy, stark contrast spreads, and modern art direction.",
    tags: ["Publication", "Editorial Layout", "Grid System", "Print"],
    featured: false
  },
  {
    id: "proj-08",
    num: "08",
    title: "CHARACTER ILLUSTRATION",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "EXPERIMENTAL DOODLE ART",
    year: "2026",
    image: "images/design-03.png",
    images: ["images/design-03.png"],
    description: "Playful neo-pop character design and explosive doodle composition combining nostalgic cartoon motifs, vibrant hues, and intricate line work.",
    tags: ["Illustration", "Character Design", "Pop Art", "Vector Art"],
    featured: false
  },
  {
    id: "proj-motion-01",
    num: "09",
    title: "COMMERCIAL ADS MOTION",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "DYNAMIC AUDIO-VISUAL COMMERCIAL",
    year: "2026",
    image: "images/motion-01.gif",
    images: ["images/motion-01.gif"],
    description: "High-energy commercial advertisement motion graphics featuring rhythmic kinetic typography, vibrant brand color accents, and dynamic audio-visual pacing.",
    tags: ["Motion Graphics", "Commercial Ad", "Kinetic Typography", "Visual Rhythm"],
    featured: false
  },
  {
    id: "proj-motion-02",
    num: "10",
    title: "KINETIC LOGO REVEAL",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "BRAND IDENTITY ANIMATION",
    year: "2026",
    image: "images/motion-02.gif",
    images: ["images/motion-02.gif"],
    description: "Minimalist brand logo animation exploring precise geometric path transformations, morphing vector lines, and fluid visual reveals.",
    tags: ["Motion Graphics", "Logo Animation", "Brand Identity", "Vector Animation"],
    featured: false
  },
  {
    id: "proj-motion-04",
    num: "11",
    title: "PRODUCT DYNAMICS MOTION",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "3D FLUID & PRODUCT SIMULATION",
    year: "2026",
    image: "images/motion-04.gif",
    images: ["images/motion-04.gif"],
    description: "Looping commercial 3D motion study visualizing fluid dynamic splashes, zero-gravity product rotations, and glossy studio light reflections.",
    tags: ["Motion Graphics", "3D Motion", "Fluid Dynamics", "Product Animation"],
    featured: false
  },
  {
    id: "proj-photo-04",
    num: "12",
    title: "AUTOMOTIVE ARCHIVE",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "URBAN CAR PHOTOGRAPHY",
    year: "2026",
    image: "images/photo-04.png",
    images: ["images/photo-04.png"],
    description: "High-contrast urban automotive photography documenting modern off-road vehicles and classic luxury sedans in urban transit environments.",
    tags: ["Photography", "Automotive", "Street Photography", "Car Culture"],
    featured: false
  },
  {
    id: "hot-cheesy-pizza",
    num: "13",
    title: "HOT & CHEESY PIZZA",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "FOOD & BEVERAGE CAMPAIGN",
    year: "2026",
    image: "images/social-media/pizza-hot-cheesy.jpg",
    images: [
      "images/social-media/pizza-hot-cheesy.jpg",
      "images/social-media/pizza-this-or-that.jpg"
    ],
    description: "Social media promotional feed design showcasing hot and cheesy pepperoni pizza with bold headline typography, molten cheese pull, and interactive 'This or That' audience engagement.",
    tags: ["Social Media Design", "Promotional Post", "Food & Beverage", "Graphic Design"],
    featured: false
  },
  {
    id: "wardah-campaign",
    num: "14",
    title: "WARDAH CAMPAIGN",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "VELVET LIP COLOR COLLECTION",
    year: "2026",
    image: "images/social-media/wardah-bold-color-01.jpg",
    images: [
      "images/social-media/wardah-bold-color-01.jpg",
      "images/social-media/wardah-perfect-shade.jpg",
      "images/social-media/wardah-bold-color-02.jpg"
    ],
    description: "High-impact social media campaign for Wardah Velvet Matte Lipstick, combining deep plum textures, luxury cosmetic accessories, and bold typographic hierarchy.",
    tags: ["Social Media Design", "Beauty Campaign", "Cosmetics", "Graphic Design"],
    featured: false
  },
  {
    id: "sonicwave-festival",
    num: "15",
    title: "SONICWAVE FESTIVAL",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "MUSIC EVENT DIGITAL FLYER",
    year: "2026",
    image: "images/social-media/sonic-wave-festival.jpg",
    images: [
      "images/social-media/sonic-wave-festival.jpg"
    ],
    description: "Vaporwave-inspired event announcement poster and social media flyer for Sonic Wave Music Festival at JIExpo Kemayoran, combining 3D pixel typography and neon city grid art.",
    tags: ["Social Media Design", "Event Flyer", "Pixel Art", "Vaporwave", "Graphic Design"],
    featured: false
  },
  {
    id: "smartwatch-collection",
    num: "16",
    title: "SMARTWATCH COLLECTION",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "WEARABLE TECH PROMO SERIES",
    year: "2026",
    image: "images/social-media/smartwatch-timeless-elegance.jpg",
    images: [
      "images/social-media/smartwatch-timeless-elegance.jpg",
      "images/social-media/smartwatch-all-day-comfort.jpg"
    ],
    description: "Clean commercial creative series for modern smartwatches, highlighting AMOLED display clarity, magnetic wireless charging, and ergonomic styling.",
    tags: ["Social Media Design", "Wearable Tech", "Product Ad", "Graphic Design"],
    featured: false
  },
  {
    id: "earbuds-collection",
    num: "17",
    title: "EARBUDS COLLECTION",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "WIRELESS AUDIO CAMPAIGN",
    year: "2026",
    image: "images/social-media/earbuds-seamless-sync.jpg",
    images: [
      "images/social-media/earbuds-seamless-sync.jpg",
      "images/social-media/earbuds-comfort-grid.jpg",
      "images/social-media/earbuds-comfort-float.jpg"
    ],
    description: "Multi-angle product showcase and promotional feed for wireless earbuds, emphasizing instant Bluetooth pairing, water resistance, and comfortable fit.",
    tags: ["Social Media Design", "Consumer Electronics", "Audio", "Graphic Design"],
    featured: false
  }
];

// Smooth anchor scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId === "#" || targetId === "") return;
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==========================================
// RENDER & FILTER FUNCTIONS
// ==========================================
const gridContainer = document.getElementById("selectedWorkGrid");
const filterPills = document.querySelectorAll(".work-filter-bar .filter-pill");

function createCardHTML(p, isFeatured = false) {
  const isGif = p.image.endsWith(".gif");
  const mediaTag = isGif
    ? `<img src="${p.image}" alt="${p.title}" class="card-media-img" loading="lazy" decoding="async">`
    : `<img src="${p.image}" alt="${p.title}" class="card-media-img" loading="lazy" decoding="async">`;
  const badgeLabel = p.subcategory || p.categoryLabel;
  const imageCountBadge = (p.images && p.images.length > 1)
    ? `<span class="card-image-count">${String(p.images.length).padStart(2, '0')} IMAGES</span>`
    : '';

  return `
    <article class="work-card ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}" data-category="${p.categoryKey}">
      <div class="card-media-wrap">
        ${mediaTag}
        <div class="card-overlay"></div>
      </div>
      <span class="card-num">${p.num}</span>
      ${imageCountBadge}
      ${p.topMeta ? `<div class="card-top-meta">${p.topMeta}</div>` : ''}
      <div class="card-content">
        <span class="card-cat-pill">${badgeLabel}</span>
        <h3 class="card-title">${p.title}</h3>
        ${p.subtitle ? `<p class="card-subtitle">${p.subtitle}</p>` : ''}
      </div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </article>
  `;
}

function createInfoPanelHTML() {
  const countStr = String(portfolioProjects.length).padStart(2, '0');
  return `
    <aside class="work-info-panel">
      <div>
        <div class="info-panel-top-bar" aria-hidden="true"></div>
        <h3 class="info-panel-heading">A COLLECTION OF SELECTED CREATIVE WORKS.</h3>
        <p class="info-panel-desc">A curated collection of projects across design, photography, motion, and visual storytelling — exploring branding, campaign direction, and creative visualization.</p>
      </div>
      <div class="info-panel-counter">
        <div class="info-panel-number">${countStr}</div>
        <div class="info-panel-label">PROJECTS</div>
      </div>
    </aside>
  `;
}

function renderGallery(categoryKey = "all") {
  if (!gridContainer) return;

  const workSubtitle = document.getElementById("workSubtitle");
  const categoryTitles = {
    all: "CREATIVE PORTFOLIO",
    design: "GRAPHIC DESIGN",
    photography: "PHOTOGRAPHY",
    motion: "MOTION GRAPHICS"
  };

  const filtered = categoryKey === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.categoryKey === categoryKey);

  const countStr = String(filtered.length).padStart(2, '0');
  if (workSubtitle) {
    const catLabel = categoryTitles[categoryKey] || "CREATIVE PORTFOLIO";
    workSubtitle.textContent = `${catLabel} / 2026 (${countStr} PROJECT${filtered.length === 1 ? '' : 'S'})`;
  }

  if (categoryKey === "all") {
    gridContainer.classList.remove("is-filtered");

    // Row 1: Card 01 (Featured), Card 02, Card 03, Info Panel
    const c1 = portfolioProjects[0];
    const c2 = portfolioProjects[1];
    const c3 = portfolioProjects[2];

    const row1HTML = `
      <div class="work-grid-row-1">
        ${createCardHTML(c1, true)}
        ${createCardHTML(c2, false)}
        ${createCardHTML(c3, false)}
        ${createInfoPanelHTML()}
      </div>
    `;

    // Row 2+: All remaining cards rendered dynamically in editorial grid
    const row2Cards = portfolioProjects.slice(3).map((p) => createCardHTML(p, false)).join("");
    const row2HTML = `
      <div class="work-grid-row-2">
        ${row2Cards}
      </div>
    `;

    gridContainer.innerHTML = row1HTML + row2HTML;
  } else {
    gridContainer.classList.add("is-filtered");

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="work-empty-state">
          <div class="empty-state-card">
            <span class="empty-badge">ARCHIVE // 00 PROJECTS</span>
            <h3 class="empty-title">NO PROJECTS IN ${categoryTitles[categoryKey] || 'THIS CATEGORY'} YET</h3>
            <p class="empty-desc">New social media campaigns and visual content archives are currently in preparation and will be published soon.</p>
            <button type="button" class="empty-reset-btn" id="emptyResetBtn">
              EXPLORE ALL WORK (${String(portfolioProjects.length).padStart(2, '0')})
            </button>
          </div>
        </div>
      `;

      const resetBtn = document.getElementById("emptyResetBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          const allPill = document.querySelector('.filter-pill[data-category="all"]');
          if (allPill) allPill.click();
        });
      }
      return;
    }

    const cardsHTML = filtered.map((p) => createCardHTML(p, false)).join("");
    gridContainer.innerHTML = cardsHTML;
  }

  // Attach card click handlers for Project Detail Modal
  attachCardEvents();

  // Re-attach 3D tilt micro-interaction if enabled
  if (typeof window.refreshCardTilt === "function") {
    setTimeout(window.refreshCardTilt, 50);
  }
}

// ==========================================
// PROJECT DETAIL MODAL
// ==========================================
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalMediaImg = document.getElementById("modalMediaImg");
const modalPrevBtn = document.getElementById("modalPrevBtn");
const modalNextBtn = document.getElementById("modalNextBtn");
const modalSlideIndicator = document.getElementById("modalSlideIndicator");
const modalNumber = document.getElementById("modalNumber");
const modalCategory = document.getElementById("modalCategory");
const modalSubcategory = document.getElementById("modalSubcategory");
const modalYear = document.getElementById("modalYear");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");

let currentModalProject = null;
let currentSlideIndex = 0;

function applyImageAspectRatio(img) {
  if (!img) return;
  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  if (!nw || !nh) return;

  const ratio = nw / nh;
  const dialog = document.querySelector(".project-modal-dialog");
  const mediaWrap = document.querySelector(".modal-media-wrap");

  let aspectCat = "custom";
  let aspectStyle = `${nw} / ${nh}`;
  let modalMaxWidth = "780px";

  // Check 1:1 (Square) - threshold tolerance +/- 0.05
  if (Math.abs(ratio - 1) <= 0.05) {
    aspectCat = "1-1";
    aspectStyle = "1 / 1";
    modalMaxWidth = "580px";
  }
  // Check 4:3 (Standard Landscape) - threshold tolerance 1.25 - 1.42
  else if (Math.abs(ratio - (4 / 3)) <= 0.07) {
    aspectCat = "4-3";
    aspectStyle = "4 / 3";
    modalMaxWidth = "720px";
  }
  // Check 16:9 or Widescreen - ratio >= 1.6
  else if (Math.abs(ratio - (16 / 9)) <= 0.12 || ratio >= 1.6) {
    aspectCat = "16-9";
    aspectStyle = "16 / 9";
    modalMaxWidth = "820px";
  }
  // Check 3:4 (Standard Portrait) - threshold tolerance 0.70 - 0.82
  else if (Math.abs(ratio - (3 / 4)) <= 0.07) {
    aspectCat = "3-4";
    aspectStyle = "3 / 4";
    modalMaxWidth = "520px";
  }
  // General Portrait (< 0.95)
  else if (ratio < 0.95) {
    aspectCat = "portrait";
    aspectStyle = `${nw} / ${nh}`;
    modalMaxWidth = "500px";
  }
  // Other Landscape
  else {
    aspectCat = "landscape";
    aspectStyle = `${nw} / ${nh}`;
    modalMaxWidth = ratio > 1.8 ? "840px" : "740px";
  }

  if (dialog) {
    dialog.setAttribute("data-aspect-ratio", aspectCat);
    dialog.style.setProperty("--modal-max-width", modalMaxWidth);
  }
  if (mediaWrap) {
    mediaWrap.setAttribute("data-aspect-ratio", aspectCat);
    mediaWrap.style.setProperty("--img-aspect-ratio", aspectStyle);
  }
  img.style.setProperty("--img-aspect-ratio", aspectStyle);
}

function updateSlideshowView(animate = false) {
  if (!currentModalProject) return;
  const imgList = (currentModalProject.images && currentModalProject.images.length > 0)
    ? currentModalProject.images
    : [currentModalProject.image];
  const total = imgList.length;

  if (total <= 1) {
    if (modalPrevBtn) modalPrevBtn.style.display = "none";
    if (modalNextBtn) modalNextBtn.style.display = "none";
    if (modalSlideIndicator) modalSlideIndicator.style.display = "none";
  } else {
    if (modalPrevBtn) modalPrevBtn.style.display = "flex";
    if (modalNextBtn) modalNextBtn.style.display = "flex";
    if (modalSlideIndicator) {
      modalSlideIndicator.style.display = "inline-flex";
      modalSlideIndicator.textContent = `${String(currentSlideIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }
  }

  const nextSrc = imgList[currentSlideIndex];
  if (modalMediaImg) {
    if (animate) {
      modalMediaImg.classList.add("is-transitioning");
      setTimeout(() => {
        modalMediaImg.onload = () => {
          applyImageAspectRatio(modalMediaImg);
          modalMediaImg.classList.remove("is-transitioning");
        };
        modalMediaImg.src = nextSrc;
        modalMediaImg.alt = `${currentModalProject.title} slide ${currentSlideIndex + 1}`;
        if (modalMediaImg.complete && modalMediaImg.naturalWidth > 0) {
          applyImageAspectRatio(modalMediaImg);
          modalMediaImg.classList.remove("is-transitioning");
        }
      }, 120);
    } else {
      modalMediaImg.onload = () => applyImageAspectRatio(modalMediaImg);
      modalMediaImg.src = nextSrc;
      modalMediaImg.alt = `${currentModalProject.title} slide ${currentSlideIndex + 1}`;
      if (modalMediaImg.complete && modalMediaImg.naturalWidth > 0) {
        applyImageAspectRatio(modalMediaImg);
      }
    }
  }
}

function nextSlide() {
  if (!currentModalProject) return;
  const imgList = (currentModalProject.images && currentModalProject.images.length > 0)
    ? currentModalProject.images
    : [currentModalProject.image];
  if (imgList.length <= 1) return;
  currentSlideIndex = (currentSlideIndex + 1) % imgList.length;
  updateSlideshowView(true);
}

function prevSlide() {
  if (!currentModalProject) return;
  const imgList = (currentModalProject.images && currentModalProject.images.length > 0)
    ? currentModalProject.images
    : [currentModalProject.image];
  if (imgList.length <= 1) return;
  currentSlideIndex = (currentSlideIndex - 1 + imgList.length) % imgList.length;
  updateSlideshowView(true);
}

function openProjectModal(projectId) {
  const p = portfolioProjects.find((item) => item.id === projectId);
  if (!p || !projectModal) return;

  currentModalProject = p;
  currentSlideIndex = 0;

  updateSlideshowView(false);

  if (modalNumber) modalNumber.textContent = p.num;
  if (modalCategory) modalCategory.textContent = p.categoryLabel;
  if (modalSubcategory) {
    if (p.subcategory) {
      modalSubcategory.textContent = p.subcategory;
      modalSubcategory.style.display = "inline-block";
    } else {
      modalSubcategory.style.display = "none";
    }
  }
  if (modalYear) modalYear.textContent = p.year || "2026";
  if (modalTitle) modalTitle.textContent = p.title;
  if (modalSubtitle) modalSubtitle.textContent = p.subtitle || "";
  if (modalDesc) modalDesc.textContent = p.description;

  if (modalTags) {
    modalTags.innerHTML = (p.tags || [])
      .map((tag) => `<span class="modal-tag-pill">${tag}</span>`)
      .join("");
  }

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentModalProject = null;
  currentSlideIndex = 0;
}

if (modalPrevBtn) {
  modalPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
  });
}

if (modalNextBtn) {
  modalNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide();
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);

window.addEventListener("keydown", (e) => {
  if (!projectModal || !projectModal.classList.contains("is-open")) return;
  if (e.key === "Escape") {
    closeProjectModal();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevSlide();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    nextSlide();
  }
});

function attachCardEvents() {
  const cards = gridContainer ? gridContainer.querySelectorAll(".work-card") : [];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-id");
      if (projId) openProjectModal(projId);
    });
  });
}

// Category filter click events
filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    filterPills.forEach((p) => {
      p.classList.remove("active");
      p.setAttribute("aria-selected", "false");
    });
    pill.classList.add("active");
    pill.setAttribute("aria-selected", "true");

    const cat = pill.getAttribute("data-category");
    renderGallery(cat);
  });
});

// Initial Gallery Render
renderGallery("all");

const heroCategories = document.querySelectorAll(".hero-categories .category-pill");

heroCategories.forEach((pill) => {
  pill.addEventListener("click", (e) => {
    e.preventDefault();
    const pillText = pill.textContent.trim().toUpperCase();
    let targetCategory = "design";

    if (pillText.includes("PHOTO")) {
      targetCategory = "photography";
    } else if (pillText.includes("MOTION")) {
      targetCategory = "motion";
    } else {
      // Both "DESIGN GRAFIS" and "SOCIAL MEDIA DESIGN" point to unified Graphic Design
      targetCategory = "design";
    }

    filterPills.forEach((p) => {
      const isMatch = p.getAttribute("data-category") === targetCategory;
      p.classList.toggle("active", isMatch);
      p.setAttribute("aria-selected", isMatch ? "true" : "false");
    });

    renderGallery(targetCategory);

    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const waButton = document.getElementById("waButton");
const messageInput = document.getElementById("message");
const whatsappNumber = "6283169719777";

if (waButton) {
  waButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userMessage = messageInput ? messageInput.value.trim() : "";
    const encodedMessage = encodeURIComponent(userMessage);
    const waUrl = encodedMessage
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      : `https://wa.me/${whatsappNumber}`;

    window.open(waUrl, "_blank");
  });
}

const emailButton = document.getElementById("emailButton");
const emailAddress = "donnystr23@gmail.com";

if (emailButton) {
  emailButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userMessage = messageInput ? messageInput.value.trim() : "";
    const subject = encodeURIComponent("Portfolio Project Inquiry");
    const body = encodeURIComponent(userMessage);
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  });
}

const revealElements = document.querySelectorAll(
  ".work-header, .featured-project, .project-item, .about-card-main, .about-character-card, .contact-card-main, .contact-character-card"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
} else {
  revealElements.forEach((el) => {
    el.classList.add("show");
  });
}
