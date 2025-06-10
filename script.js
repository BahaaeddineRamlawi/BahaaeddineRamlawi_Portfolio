// Update copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
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
};

const toggleBtn = document.getElementById("toggleCertificatesBtn");
const certificatesList = document.getElementById("certificatesList");

function renderCertificates() {
  certificatesList.innerHTML = "";

  for (const [org, certs] of Object.entries(certificatesByOrg)) {
    const orgTitle = document.createElement("h3");
    orgTitle.textContent = org;
    orgTitle.classList.add("cert-org-title");
    certificatesList.appendChild(orgTitle);

    const ul = document.createElement("ul");
    ul.classList.add("cert-org-list");
    certs.forEach((cert) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = cert.name;
      link.href = cert.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.add("cert-link");
      li.appendChild(link);
      ul.appendChild(li);
    });

    certificatesList.appendChild(ul);
  }
}

toggleBtn.addEventListener("click", () => {
  if (certificatesList.style.display === "none") {
    renderCertificates();
    certificatesList.style.display = "block";
    toggleBtn.textContent = "Hide My Certificates";
  } else {
    certificatesList.style.display = "none";
    toggleBtn.textContent = "Show My Certificates";
  }
});

// Add animation to elements when they come into view
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

// Set initial state for animation
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "section, .social-link, .article-card"
  );
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Trigger animation after a short delay
  setTimeout(() => {
    animateOnScroll();
  }, 100);
});

window.addEventListener("scroll", animateOnScroll);
