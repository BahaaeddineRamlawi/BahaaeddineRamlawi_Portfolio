document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const certificatesByOrg = {
  FreeCodeCamp: [
    {
      name: "JavaScript Algorithms and Data Structures",
      url: "assets/certificates/freecodecamp_js_algorithms.png",
    },
  ],
  Cisco: [
    {
      name: "CCNA - Introduction to Networks",
      url: "assets/certificates/ccna_intro_networks.png",
    },
    {
      name: "CCNA - Switching, Routing, and Wireless Essentials",
      url: "assets/certificates/ccna_switching_routing_wireless.png",
    },
  ],
  "Great Learning": [
    {
      name: "Algorithms in C",
      url: "assets/certificates/greatlearning_algorithms_in_c.png",
    },
    {
      name: "Dev C++ Tutorial",
      url: "assets/certificates/greatlearning_dev_cplusplus.png",
    },
    {
      name: "Front End Development - CSS",
      url: "assets/certificates/greatlearning_frontend_css.png",
    },
    {
      name: "Front End Development - HTML",
      url: "assets/certificates/greatlearning_frontend_html.png",
    },
    {
      name: "Generative AI for Beginners",
      url: "assets/certificates/greatlearning_generative_ai.png",
    },
    {
      name: "Hashing in Java",
      url: "assets/certificates/greatlearning_hashing_java.png",
    },
    {
      name: "Introduction To AngularJS",
      url: "assets/certificates/greatlearning_angularjs.png",
    },
    {
      name: "Introduction to JavaScript",
      url: "assets/certificates/greatlearning_javascript.png",
    },
    {
      name: "Introduction to Machine Learning US",
      url: "assets/certificates/greatlearning_machine_learning_us.png",
    },
    {
      name: "Machine Learning Algorithms",
      url: "assets/certificates/greatlearning_ml_algorithms.png",
    },
    {
      name: "Supervised Machine Learning with Logistic Regression and Naïve Bayes",
      url: "assets/certificates/greatlearning_supervised_ml.png",
    },
    {
      name: "UI - UX for Beginners",
      url: "assets/certificates/greatlearning_ui_ux.png",
    },
    {
      name: "Unsupervised Machine Learning with K-means",
      url: "assets/certificates/greatlearning_unsupervised_ml.png",
    },
  ],
  IEEE: [
    {
      name: "WEB DEVELOPMENT IEEE COURSE 2023",
      url: "assets/certificates/ieee_web_development_2023.png",
    },
  ],
  Amigoscode: [
    {
      name: "Spring Boot For Beginners",
      url: "assets/certificates/amigoscode_spring_boot_for_beginners.png",
    },
  ],
};

const certificatesGrid = document.getElementById("certificatesGrid");
const toggleBtn = document.getElementById("toggleCertificatesBtn");
const INITIAL_CERTIFICATES = 6;

// Shown first, in this order; the rest follow in their original order.
const featuredCertificates = [
  "Generative AI for Beginners",
  "Machine Learning Algorithms",
  "Spring Boot For Beginners",
  "JavaScript Algorithms and Data Structures",
  "WEB DEVELOPMENT IEEE COURSE 2023",
  "CCNA - Introduction to Networks",
];

if (new URLSearchParams(location.search).has("show")) {
  document.getElementById("contact-number").hidden = false;
}

function copyPhoneNumber() {
  const phoneNumber = "+96178817895";
  navigator.clipboard.writeText(phoneNumber).then(() => {
    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Number';
    }, 2000);
  });
}

function renderCertificates() {
  const all = Object.entries(certificatesByOrg).flatMap(([org, certs]) =>
    certs.map((cert) => ({ ...cert, org }))
  );
  const rank = (cert) => {
    const i = featuredCertificates.indexOf(cert.name);
    return i === -1 ? featuredCertificates.length : i;
  };
  all.sort((a, b) => rank(a) - rank(b));

  all.forEach((cert, index) => {
    const card = document.createElement("a");
    card.className = "cert-card";
    card.href = cert.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    if (index >= INITIAL_CERTIFICATES) card.classList.add("cert-extra");

    const icon = document.createElement("i");
    icon.className = "fas fa-certificate cert-icon";

    const info = document.createElement("div");
    info.className = "cert-info";
    const org = document.createElement("span");
    org.className = "cert-org";
    org.textContent = cert.org;
    const name = document.createElement("span");
    name.className = "cert-name";
    name.textContent = cert.name;
    info.append(org, name);

    const arrow = document.createElement("i");
    arrow.className = "fas fa-arrow-up-right-from-square cert-arrow";

    card.append(icon, info, arrow);
    certificatesGrid.appendChild(card);
  });

  const hiddenCount = all.length - INITIAL_CERTIFICATES;
  let expanded = false;
  toggleBtn.textContent = `Show all ${all.length} certificates`;
  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;
    certificatesGrid.classList.toggle("expanded", expanded);
    toggleBtn.textContent = expanded
      ? "Show fewer"
      : `Show all ${all.length} certificates`;
  });
  toggleBtn.hidden = hiddenCount <= 0;
}

renderCertificates();

const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    "section, .social-link, .article-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "section, .social-link, .article-card"
  );
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  setTimeout(() => {
    animateOnScroll();
  }, 100);
});

window.addEventListener("scroll", animateOnScroll);
