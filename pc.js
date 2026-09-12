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
// DATA PROJECTS (DESIGN, PHOTOGRAPHY, MOTION)
// ==========================================
// Tips Motion: Kamu bisa gunakan file video .mp4 atau gambar .png
const projectData = {
  design: {
    featured: {
      image: "images/design-01.png",
      number: "01",
      category: "GRAPHIC DESIGN",
      title: "BEST DESIGN",
      description: "A COLLECTION OF MY BEST CREATIVE WORKS"
    },
    items: [
      { image: "images/design-02.png", number: "02", title: "POSTER" },
      { image: "images/design-03.png", number: "03", title: "DRAWING" },
      { image: "images/design-04.png", number: "04", title: "SOCIAL MEDIA" }
    ]
  },
  photography: {
    featured: {
      image: "images/photo-01.png",
      number: "02",
      category: "PHOTOGRAPHY",
      title: "BEST PHOTOGRAPHY",
      description: "EXPLORING SHADOWS AND LIGHT IN THE CITY"
    },
    items: [
      { image: "images/photo-02.png", number: "02", title: "STREET PHOTOGRAPHY" },
      { image: "images/photo-03.png", number: "03", title: "EDTIORIAL PHOTOGRAPHY" },
      { image: "images/photo-04.png", number: "04", title: "CAR PHOTOGRAPHY" }
    ]
  },
  motion: {
    featured: {
      image: "images/motion-01.gif", // Otomatis render video looping
      number: "03",
      category: "MOTION GRAPHIC",
      title: "Ads motion",
      description: "DYNAMIC ANIMATION AND AUDIO-VISUAL EXPLORATION"
    },
    items: [
      { image: "images/motion-02.gif", number: "02", title: "LOGO REVEAL" },
      { image: "images/motion-03.gif", number: "03", title: "3D RENDER" },
      { image: "images/motion-04.gif", number: "04", title: "ADS MOTION #2" }
    ]
  }
};

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId === "#" || targetId === "") return;

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const filterButtons = document.querySelectorAll(".work-filter-bar .filter-btn");
const featuredProject = document.querySelector(".featured-project");
const regularProjects = document.querySelectorAll(".project-item:not(.featured-project)");
const allCards = document.querySelectorAll(".work-gallery .project-item");

function applyMediaElement(container, srcPath, fallbackSrc = "images/about-.png") {
  if (!container) return;
  const isVideo = srcPath.endsWith(".mp4") || srcPath.endsWith(".webm");

  const oldMedia = container.querySelector(".project-img");
  if (oldMedia) oldMedia.remove();

  if (isVideo) {
    const videoEl = document.createElement("video");
    videoEl.className = "project-img";
    videoEl.src = srcPath;
    videoEl.autoplay = true;
    videoEl.loop = true;
    videoEl.muted = true;
    videoEl.playsInline = true;
    Object.assign(videoEl.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    });

    videoEl.onerror = function () {
      const fallbackImg = document.createElement("img");
      fallbackImg.className = "project-img";
      fallbackImg.src = fallbackSrc;
      Object.assign(fallbackImg.style, {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      });
      videoEl.replaceWith(fallbackImg);
    };

    container.prepend(videoEl);
  } else {
    const imgEl = document.createElement("img");
    imgEl.className = "project-img";
    imgEl.src = srcPath;
    Object.assign(imgEl.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    });

    imgEl.onerror = function () {
      this.onerror = null;
      this.src = fallbackSrc;
    };

    container.prepend(imgEl);
  }
}

function updateWorkGallery(categoryKey) {
  const data = projectData[categoryKey];
  if (!data) return;
  
  allCards.forEach((card) => {
    card.classList.remove("pop-animate");
    card.style.animationDelay = "0s";
  });


  void document.body.offsetHeight;

  if (featuredProject) {
    const featMedia = featuredProject.querySelector(".project-media");
    const featNum = featuredProject.querySelector(".project-number");
    const featCat = featuredProject.querySelector(".project-category");
    const featTitle = featuredProject.querySelector(".project-title");
    const featDesc = featuredProject.querySelector(".project-desc");

    if (featMedia) applyMediaElement(featMedia, data.featured.image);
    if (featNum) featNum.textContent = data.featured.number;
    if (featCat) featCat.textContent = data.featured.category;
    if (featTitle) featTitle.textContent = data.featured.title;
    if (featDesc) featDesc.textContent = data.featured.description;
    featuredProject.setAttribute("data-category", categoryKey);

    featuredProject.style.animationDelay = "0.02s";
    featuredProject.classList.add("pop-animate");
  }

  regularProjects.forEach((item, index) => {
    const itemData = data.items[index];
    if (itemData) {
      const itemMedia = item.querySelector(".project-media");
      const itemNum = item.querySelector(".project-number");
      const itemTitle = item.querySelector(".project-title");

      if (itemMedia) applyMediaElement(itemMedia, itemData.image);
      if (itemNum) itemNum.textContent = itemData.number;
      if (itemTitle) itemTitle.textContent = itemData.title;
      item.setAttribute("data-category", categoryKey);

      item.style.animationDelay = `${(index + 1) * 0.10}s`;
      item.classList.add("pop-animate");
    }
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    const selectedCategory = btn.getAttribute("data-category");
    updateWorkGallery(selectedCategory);
  });
});

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
    }

    filterButtons.forEach((btn) => {
      const btnCategory = btn.getAttribute("data-category");
      btn.classList.toggle("active", btnCategory === targetCategory);
    });

    updateWorkGallery(targetCategory);

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
