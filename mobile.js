const mySkills = [
  "GRAPHIC DESIGN",
  "PHOTOGRAPHY",
  "MOTION GRAPHICS",
  "VIDEO EDITING",
  "UI/UX DESIGN",
  "CREATIVE CODING"
];

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;
  container.innerHTML = mySkills
    .map((skill) => `<li class="skill-tag">${skill}</li>`)
    .join("");
}

const projectData = {
  design: [
    { image: "images/design-01.png", title: "BEST DESIGN", category: "Graphic Design" },
    { image: "images/design-02.png", title: "SHOE POSTER", category: "Graphic Design" },
    { image: "images/design-03.png", title: "DRAWING ART", category: "Graphic Design" },
    { image: "images/design-04.png", title: "SOCIAL MEDIA", category: "Graphic Design" }
  ],
  photography: [
    { image: "images/photo-01.png", title: "BEST PHOTOGRAPHY", category: "Photography" },
    { image: "images/photo-02.png", title: "STREET PHOTOGRAPHY", category: "Photography" },
    { image: "images/photo-03.png", title: "EDITORIAL PHOTOSHOOT", category: "Photography" },
    { image: "images/photo-04.png", title: "CAR PHOTOGRAPHY", category: "Photography" }
  ],
  motion: [
    { image: "images/motion-01.gif", title: "ADS MOTION", category: "Motion Graphic" },
    { image: "images/motion-02.gif", title: "LOGO REVEAL", category: "Motion Graphic" },
    { image: "images/motion-03.gif", title: "3D RENDER", category: "Motion Graphic" },
    { image: "images/motion-04.gif", title: "ADS MOTION #2", category: "Motion Graphic" }
  ]
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
  const items = projectData[categoryKey] || projectData.design;

  carouselTrack.innerHTML = items
    .map((item, index) => {
      const isVideo = item.image.endsWith(".mp4") || item.image.endsWith(".webm");
      const mediaHTML = isVideo
        ? `<video class="project-img" loop muted playsinline preload="metadata">
             <source src="${item.image}" type="video/mp4">
           </video>`
        : `<img src="${item.image}" alt="${item.title}" class="project-img" onerror="this.onerror=null;this.src='images/about-me.png';">`;

      return `
        <article class="project-card ${index === 0 ? "featured-project is-active" : ""}" data-idx="${index}">
          <div class="card-media">
            ${mediaHTML}
          </div>
          <div class="card-info">
            <h3 class="project-title">${item.title}</h3>
            <span class="project-category">${item.category}</span>
          </div>
        </article>
      `;
    })
    .join("");

  carouselTrack.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
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
    renderCards(selectedCategory);
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

document.body.classList.add("intro-ready");

window.addEventListener("load", () => {
  renderSkills();
  renderCards("design");

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
