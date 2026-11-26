const mySkills = [
];

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;
  container.innerHTML = mySkills
    .map((skill) => `<li class="skill-tag">${skill}</li>`)
    .join("");
}

const allProjects = [
  {
    id: "proj-01",
    num: "01",
    title: "ONYXIER CAMPAIGN",
    category: "Photography",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "SPRING/SUMMER 2026 COLLECTION",
    year: "2026",
    image: "images/photo-03.png",
    images: ["images/photo-03.png"],
    description: "High-fashion editorial campaign exploring contemporary streetwear silhouettes, dark leather aesthetics, and futuristic accessories for Onyxier.",
    tags: ["Fashion Direction", "Styling", "Creative Direction", "Editorial"]
  },
  {
    id: "proj-02",
    num: "02",
    title: "ONYXIER BRAND IDENTITY",
    category: "Graphic Design",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "BRAND IDENTITY & PACKAGING",
    year: "2026",
    image: "images/design-01.png",
    images: ["images/design-01.png"],
    description: "Complete visual identity and luxury packaging design system for Onyxier, combining bespoke minimalist typography with tactile dark finishes.",
    tags: ["Visual Identity", "Typography", "Packaging", "Print"]
  },
  {
    id: "proj-03",
    num: "03",
    title: "NEON RUSH POSTER",
    category: "Graphic Design",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "TYPOGRAPHY POSTER SERIES VOL. 01",
    year: "2026",
    image: "images/design-02.png",
    images: ["images/design-02.png"],
    description: "Experimental typography poster series exploring liquid chrome 3D letterforms, distortion shaders, and Swiss-style technical grids.",
    tags: ["Poster Art", "Liquid Chrome", "Typography", "Experimental"]
  },
  {
    id: "proj-04",
    num: "04",
    title: "NEON BEVERAGE CAMPAIGN",
    category: "Photography",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "COMMERCIAL PRODUCT PHOTOGRAPHY",
    year: "2026",
    image: "images/photo-01.png",
    images: ["images/photo-01.png"],
    description: "Vibrant neon-lit commercial beverage photoshoot emphasizing ice condensation, ultraviolet reflections, and tactile product styling.",
    tags: ["Product Photography", "Lighting", "Art Direction", "Commercial"]
  },
  {
    id: "proj-05",
    num: "05",
    title: "URBAN ARCHIVE LOOKBOOK",
    category: "Photography",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "STREETWEAR CAPSULE COLLECTION",
    year: "2026",
    image: "images/photo-02.png",
    images: ["images/photo-02.png"],
    description: "Editorial lookbook documenting brutalist architectural silhouettes juxtaposed against technical streetwear outerwear and reflective textiles.",
    tags: ["Editorial", "Streetwear", "Brutalism", "Lookbook"]
  },
  {
    id: "proj-06",
    num: "06",
    title: "ABSTRACT MOTION",
    category: "Motion Graphics",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "GEN-AI FLUID DYNAMICS STUDY",
    year: "2026",
    image: "images/motion-03.gif",
    images: ["images/motion-03.gif"],
    description: "Looping kinetic motion exploration visualizing iridescent glass tubes, refractive light caustics, and zero-gravity fluid simulations.",
    tags: ["Motion Design", "3D Animation", "Glassmorphism", "Kinetic"]
  },
  {
    id: "proj-07",
    num: "07",
    title: "EDITORIAL MAGAZINE",
    category: "Graphic Design",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "CONTEMPORARY FASHION ISSUE N°01",
    year: "2026",
    image: "images/design-04.png",
    images: ["images/design-04.png"],
    description: "Multi-page editorial publication layout showcasing high-contrast monochrome spreads, dynamic typographic hierarchies, and print finishes.",
    tags: ["Editorial Layout", "Grid Systems", "Print Design", "Typography"]
  },
  {
    id: "proj-08",
    num: "08",
    title: "CHARACTER ILLUSTRATION",
    category: "Graphic Design",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subtitle: "RETRO-POP DOODLE ARTWORK",
    year: "2026",
    image: "images/design-03.png",
    images: ["images/design-03.png"],
    description: "Playful character design composition merging Harajuku street graffiti, bold black ink outlines, and pastel pop accents.",
    tags: ["Illustration", "Character Art", "Pop Culture", "Street Art"]
  },
  {
    id: "proj-motion-01",
    num: "09",
    title: "COMMERCIAL ADS MOTION",
    category: "Motion Graphics",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "DYNAMIC AUDIO-VISUAL COMMERCIAL",
    year: "2026",
    image: "images/motion-01.gif",
    images: ["images/motion-01.gif"],
    description: "High-energy commercial ad motion graphics featuring rhythmic kinetic typography, vibrant brand color accents, and dynamic audio-visual pacing.",
    tags: ["Motion Graphics", "Commercial Ad", "Kinetic Typography", "Video Promo"]
  },
  {
    id: "proj-motion-02",
    num: "10",
    title: "KINETIC LOGO REVEAL",
    category: "Motion Graphics",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "BRAND IDENTITY ANIMATION",
    year: "2026",
    image: "images/motion-02.gif",
    images: ["images/motion-02.gif"],
    description: "Minimalist brand logo animation exploring precise geometric path transformations, morphing vector lines, and fluid visual reveals.",
    tags: ["Motion Graphics", "Logo Animation", "Brand Identity", "Vector Animation"]
  },
  {
    id: "proj-motion-04",
    num: "11",
    title: "PRODUCT DYNAMICS MOTION",
    category: "Motion Graphics",
    categoryKey: "motion",
    categoryLabel: "MOTION GRAPHICS",
    subtitle: "3D FLUID & PRODUCT SIMULATION",
    year: "2026",
    image: "images/motion-04.gif",
    images: ["images/motion-04.gif"],
    description: "Looping commercial 3D motion study visualizing fluid dynamic splashes, zero-gravity product rotations, and glossy studio light reflections.",
    tags: ["Motion Graphics", "3D Motion", "Fluid Dynamics", "Product Animation"]
  },
  {
    id: "proj-photo-04",
    num: "12",
    title: "AUTOMOTIVE ARCHIVE",
    category: "Photography",
    categoryKey: "photography",
    categoryLabel: "PHOTOGRAPHY",
    subtitle: "URBAN CAR PHOTOGRAPHY",
    year: "2026",
    image: "images/photo-04.png",
    images: ["images/photo-04.png"],
    description: "High-contrast urban automotive photography documenting modern off-road vehicles and classic luxury sedans in urban transit environments.",
    tags: ["Photography", "Automotive", "Street Photography", "Car Culture"]
  },
  {
    id: "hot-cheesy-pizza",
    num: "13",
    title: "HOT & CHEESY PIZZA",
    category: "Graphic Design",
    categoryKey: "design",
    categoryLabel: "GRAPHIC DESIGN",
    subcategory: "SOCIAL MEDIA DESIGN",
    subtitle: "FOOD & BEVERAGE PROMO POST",
    year: "2026",
    image: "images/social-media/pizza-hot-cheesy.jpg",
    images: [
      "images/social-media/pizza-hot-cheesy.jpg",
      "images/social-media/pizza-this-or-that.jpg"
    ],
    description: "Social media promotional feed design showcasing hot and cheesy pepperoni pizza with bold headline typography, molten cheese pull, and interactive 'This or That' audience engagement.",
    tags: ["Social Media Design", "Promotional Post", "Food & Beverage", "Graphic Design"]
  },
  {
    id: "wardah-campaign",
    num: "14",
    title: "WARDAH CAMPAIGN",
    category: "Graphic Design",
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
    tags: ["Social Media Design", "Beauty Campaign", "Cosmetics", "Graphic Design"]
  },
  {
    id: "sonicwave-festival",
    num: "15",
    title: "SONICWAVE FESTIVAL",
    category: "Graphic Design",
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
    tags: ["Social Media Design", "Event Flyer", "Pixel Art", "Vaporwave", "Graphic Design"]
  },
  {
    id: "smartwatch-collection",
    num: "16",
    title: "SMARTWATCH COLLECTION",
    category: "Graphic Design",
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
    tags: ["Social Media Design", "Wearable Tech", "Product Ad", "Graphic Design"]
  },
  {
    id: "earbuds-collection",
    num: "17",
    title: "EARBUDS COLLECTION",
    category: "Graphic Design",
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
    tags: ["Social Media Design", "Consumer Electronics", "Audio", "Graphic Design"]
  }
];

const projectData = {
  all: allProjects,
  design: allProjects.filter((p) => p.categoryKey === "design"),
  photography: allProjects.filter((p) => p.categoryKey === "photography"),
  motion: allProjects.filter((p) => p.categoryKey === "motion")
};

const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("menu-close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".mobile-nav .nav-link");

const openMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

const closeMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
};

if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const carouselTrack = document.getElementById("carousel-track");
const indicatorsContainer = document.getElementById("carousel-indicators");
const categoryButtons = document.querySelectorAll(".work-categories .category-item");

function syncActiveCardMedia(activeIndex) {
  if (!carouselTrack) return;
  const cards = carouselTrack.querySelectorAll(".project-card");

  cards.forEach((card, idx) => {
    const isCurrent = idx === activeIndex;
    card.classList.toggle("is-active", isCurrent);

    const video = card.querySelector("video");
    if (video) {
      if (isCurrent) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  });

  const dots = indicatorsContainer?.querySelectorAll(".indicator");
  dots?.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
}

function renderCards(categoryKey) {
  if (!carouselTrack) return;
  const items = projectData[categoryKey] !== undefined ? projectData[categoryKey] : projectData.all;

  const subtitle = document.querySelector(".mobile-work .work-subtitle");
  if (subtitle) {
    const countStr = String(items.length).padStart(2, '0');
    subtitle.textContent = `SELECTED WORK / 2026 (${countStr} PROJECT${items.length === 1 ? '' : 'S'})`;
  }

  if (items.length === 0) {
    carouselTrack.innerHTML = `
      <div class="mobile-empty-state">
        <span class="mobile-empty-badge">ARCHIVE // 00 PROJECTS</span>
        <h3 class="mobile-empty-title">NO PROJECTS YET</h3>
        <p class="mobile-empty-desc">Social Media Design projects are currently in development and will be published soon.</p>
        <button type="button" class="mobile-empty-reset" id="mobileEmptyReset">
          VIEW ALL WORK (${String(allProjects.length).padStart(2, '0')})
        </button>
      </div>
    `;
    if (indicatorsContainer) indicatorsContainer.innerHTML = "";
    const reset = document.getElementById("mobileEmptyReset");
    if (reset) {
      reset.addEventListener("click", () => {
        const allBtn = document.querySelector(".work-categories .category-item[data-category='all']");
        if (allBtn) allBtn.click();
      });
    }
    return;
  }

  carouselTrack.innerHTML = items
    .map((item, index) => {
      const isVideo = item.image.endsWith(".mp4") || item.image.endsWith(".webm");
      const mediaHTML = isVideo
        ? `<video class="project-img" loop muted playsinline preload="metadata">
             <source src="${item.image}" type="video/mp4">
           </video>`
        : `<img src="${item.image}" alt="${item.title}" class="project-img" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='images/about-me.png';">`;

      const hasMultipleImages = item.images && item.images.length > 1;
      const countBadge = hasMultipleImages
        ? `<span class="card-image-badge">${String(item.images.length).padStart(2, '0')} IMAGES</span>`
        : '';

      return `
        <article class="project-card ${index === 0 ? "featured-project is-active" : ""}" data-idx="${index}">
          <div class="card-media">
            ${mediaHTML}
            ${countBadge}
          </div>
          <div class="card-info">
            <h3 class="project-title">${item.title}</h3>
            <span class="project-category">${item.subcategory || item.category}</span>
          </div>
        </article>
      `;
    })
    .join("");

  let startX = 0;
  let startY = 0;
  let isDragging = false;

  carouselTrack.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
    });

    card.addEventListener("pointermove", (e) => {
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > 8) {
        isDragging = true;
      }
    });

    card.addEventListener("pointerup", (e) => {
      if (!isDragging) {
        const idx = Number(card.getAttribute("data-idx"));
        const item = items[idx];
        if (item) {
          openProjectModal(item);
        }
      }
    });

    card.addEventListener("click", () => {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      const idx = Number(card.getAttribute("data-idx"));
      const item = items[idx];
      if (item && !isDragging) {
        openProjectModal(item);
      }
    });
  });

  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = items
      .map(
        (_, idx) =>
          `<span class="indicator ${idx === 0 ? "active" : ""}" data-idx="${idx}"></span>`
      )
      .join("");

    indicatorsContainer.querySelectorAll(".indicator").forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-idx"));
        const cards = carouselTrack.querySelectorAll(".project-card");
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      });
    });
  }

  carouselTrack.scrollLeft = 0;
  syncActiveCardMedia(0);
}

if (carouselTrack) {
  let scrollTimeout;
  carouselTrack.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const cards = carouselTrack.querySelectorAll(".project-card");
      if (cards.length === 0) return;

      const trackCenter = carouselTrack.getBoundingClientRect().left + carouselTrack.offsetWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const diff = Math.abs(trackCenter - cardCenter);

        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      syncActiveCardMedia(closestIdx);
    }, 40);
  });
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selectedCategory = btn.getAttribute("data-category") || "design";
    const track = document.getElementById("carousel-track");
    if (typeof window.y2kShuffleDeck === "function" && track) {
      window.y2kShuffleDeck(track, () => renderCards(selectedCategory));
    } else {
      renderCards(selectedCategory);
    }
  });
});

const heroButtons = document.querySelectorAll(".hero-buttons .btn");
heroButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.textContent.trim().toUpperCase();
    let targetCategory = "design";
    if (text.includes("PHOTO")) {
      targetCategory = "photography";
    } else if (text.includes("MOTION")) {
      targetCategory = "motion";
    } else {
      // Both "DESIGN GRAFIS" and "SOCIAL MEDIA DESIGN" point to unified Graphic Design
      targetCategory = "design";
    }

    categoryButtons.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-category") === targetCategory);
    });
    
    const track = document.getElementById("carousel-track");
    if (typeof window.y2kShuffleDeck === "function" && track) {
      window.y2kShuffleDeck(track, () => renderCards(targetCategory));
    } else {
      renderCards(targetCategory);
    }
  });
});

const messageTextarea = document.getElementById("contact-message");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const emailBtn = document.querySelector(".email-btn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const msg = messageTextarea ? messageTextarea.value.trim() : "";
    const phone = "6283169719777";
    const textParam = msg ? `?text=${encodeURIComponent(msg)}` : "";
    window.open(`https://wa.me/${phone}${textParam}`, "_blank");
  });
}

if (emailBtn) {
  emailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const msg = messageTextarea ? messageTextarea.value.trim() : "";
    const email = "donnystr23@gmail.com";
    const subject = encodeURIComponent("Project Inquiry");
    const bodyParam = msg ? `&body=${encodeURIComponent(msg)}` : "";
    window.location.href = `mailto:${email}?subject=${subject}${bodyParam}`;
  });
}

// ==========================================
// PROJECT DETAIL MODAL (MOBILE)
// ==========================================
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalMediaImg = document.getElementById("modalMediaImg");
const modalSlideshowContainer = document.getElementById("modalSlideshowContainer");
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

let currentMobileProject = null;
let currentMobileSlideIndex = 0;

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
  let modalMaxWidth = "480px";

  // Check 1:1 (Square) - threshold tolerance +/- 0.05
  if (Math.abs(ratio - 1) <= 0.05) {
    aspectCat = "1-1";
    aspectStyle = "1 / 1";
    modalMaxWidth = "420px";
  }
  // Check 4:3 (Standard Landscape) - threshold tolerance 1.25 - 1.42
  else if (Math.abs(ratio - (4 / 3)) <= 0.07) {
    aspectCat = "4-3";
    aspectStyle = "4 / 3";
    modalMaxWidth = "460px";
  }
  // Check 16:9 or Widescreen - ratio >= 1.6
  else if (Math.abs(ratio - (16 / 9)) <= 0.12 || ratio >= 1.6) {
    aspectCat = "16-9";
    aspectStyle = "16 / 9";
    modalMaxWidth = "480px";
  }
  // Check 3:4 (Standard Portrait) - threshold tolerance 0.70 - 0.82
  else if (Math.abs(ratio - (3 / 4)) <= 0.07) {
    aspectCat = "3-4";
    aspectStyle = "3 / 4";
    modalMaxWidth = "380px";
  }
  // General Portrait (< 0.95)
  else if (ratio < 0.95) {
    aspectCat = "portrait";
    aspectStyle = `${nw} / ${nh}`;
    modalMaxWidth = "380px";
  }
  // Other Landscape
  else {
    aspectCat = "landscape";
    aspectStyle = `${nw} / ${nh}`;
    modalMaxWidth = "480px";
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

function updateMobileSlideshow(animate = false) {
  if (!currentMobileProject) return;
  const imgList = (currentMobileProject.images && currentMobileProject.images.length > 0)
    ? currentMobileProject.images
    : [currentMobileProject.image];
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
      modalSlideIndicator.textContent = `${String(currentMobileSlideIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }
  }

  const nextSrc = imgList[currentMobileSlideIndex];
  if (modalMediaImg) {
    if (animate) {
      modalMediaImg.classList.add("is-transitioning");
      setTimeout(() => {
        modalMediaImg.onload = () => {
          applyImageAspectRatio(modalMediaImg);
          modalMediaImg.classList.remove("is-transitioning");
        };
        modalMediaImg.src = nextSrc;
        modalMediaImg.alt = `${currentMobileProject.title} slide ${currentMobileSlideIndex + 1}`;
        if (modalMediaImg.complete && modalMediaImg.naturalWidth > 0) {
          applyImageAspectRatio(modalMediaImg);
          modalMediaImg.classList.remove("is-transitioning");
        }
      }, 120);
    } else {
      modalMediaImg.onload = () => applyImageAspectRatio(modalMediaImg);
      modalMediaImg.src = nextSrc;
      modalMediaImg.alt = `${currentMobileProject.title} slide ${currentMobileSlideIndex + 1}`;
      if (modalMediaImg.complete && modalMediaImg.naturalWidth > 0) {
        applyImageAspectRatio(modalMediaImg);
      }
    }
  }
}

function nextMobileSlide() {
  if (!currentMobileProject) return;
  const imgList = (currentMobileProject.images && currentMobileProject.images.length > 0)
    ? currentMobileProject.images
    : [currentMobileProject.image];
  if (imgList.length <= 1) return;
  currentMobileSlideIndex = (currentMobileSlideIndex + 1) % imgList.length;
  updateMobileSlideshow(true);
}

function prevMobileSlide() {
  if (!currentMobileProject) return;
  const imgList = (currentMobileProject.images && currentMobileProject.images.length > 0)
    ? currentMobileProject.images
    : [currentMobileProject.image];
  if (imgList.length <= 1) return;
  currentMobileSlideIndex = (currentMobileSlideIndex - 1 + imgList.length) % imgList.length;
  updateMobileSlideshow(true);
}

function openProjectModal(p) {
  if (!p || !projectModal) return;

  currentMobileProject = p;
  currentMobileSlideIndex = 0;

  updateMobileSlideshow(false);

  if (modalNumber) modalNumber.textContent = p.num || "01";
  if (modalCategory) modalCategory.textContent = p.categoryLabel || (p.category ? p.category.toUpperCase() : "GRAPHIC DESIGN");
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
  if (modalDesc) modalDesc.textContent = p.description || "";

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
  currentMobileProject = null;
  currentMobileSlideIndex = 0;
}

if (modalPrevBtn) {
  modalPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevMobileSlide();
  });
}

if (modalNextBtn) {
  modalNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextMobileSlide();
  });
}

// Mobile Touch Swiping on Slideshow
let modalTouchStartX = 0;
let modalTouchStartY = 0;
let modalTouchEndX = 0;
let modalTouchEndY = 0;

if (modalSlideshowContainer) {
  modalSlideshowContainer.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length === 1) {
      modalTouchStartX = e.touches[0].clientX;
      modalTouchStartY = e.touches[0].clientY;
      modalTouchEndX = modalTouchStartX;
      modalTouchEndY = modalTouchStartY;
    }
  }, { passive: true });

  modalSlideshowContainer.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length === 1) {
      modalTouchEndX = e.touches[0].clientX;
      modalTouchEndY = e.touches[0].clientY;
    }
  }, { passive: true });

  modalSlideshowContainer.addEventListener("touchend", () => {
    const diffX = modalTouchEndX - modalTouchStartX;
    const diffY = modalTouchEndY - modalTouchStartY;
    // Prevent accidental vertical scrolling from triggering slide changes:
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        nextMobileSlide();
      } else {
        prevMobileSlide();
      }
    }
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
    prevMobileSlide();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    nextMobileSlide();
  }
});

document.body.classList.add("intro-ready");

window.addEventListener("load", () => {
  renderSkills();
  renderCards("all");

  const loaderScreen = document.querySelector(".loader-screen");
  if (loaderScreen) {
    setTimeout(() => {
      loaderScreen.classList.add("hide");

      setTimeout(() => {
        document.body.classList.remove("intro-ready");
        document.body.classList.add("intro-active");
      }, 250);
    }, 850);
  }
});
