// 🌗 Toggle Light/Dark Mode
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});



document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});


// 🌀 Rotating Text Typing Effect
const rotatingText = document.getElementById("rotating-text");

const sentences = [
  "Passionate about crafting web applications.",
  "Enthusiastic about building responsive websites.",
  "Developing skills in data analysis.",
  "A quick learner and collaborative team player."
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentSentence = "";
let displayText = "";

function typeEffect() {
  currentSentence = sentences[sentenceIndex];

  if (!isDeleting) {
    displayText = currentSentence.substring(0, charIndex + 1);
    charIndex++;
    rotatingText.textContent = displayText;

    if (charIndex === currentSentence.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Wait after full sentence shows
    } else {
      setTimeout(typeEffect, 100); // Typing speed
    }

  } else {
    displayText = currentSentence.substring(0, charIndex - 1);
    charIndex--;
    rotatingText.textContent = displayText;

    if (charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(typeEffect, 500); // Wait before next sentence
    } else {
      setTimeout(typeEffect, 50); // Deleting speed
    }
  }
}

typeEffect();





// 🔍 Modal Functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// ❎ Close modal when clicking outside
window.onclick = function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// 🍩 Donut Skill Animation
function animateDonuts() {
  document.querySelectorAll(".circle").forEach(circle => {
    const percent = parseInt(circle.dataset.percent);
    const number = circle.querySelector(".number");
    const outer = circle.querySelector(".outer");
    let count = 0;

    const interval = setInterval(() => {
      if (count >= percent) {
        clearInterval(interval);
      } else {
        count++;
        number.textContent = count + "%";
        outer.style.background = `conic-gradient(#00ADB5 ${count}%, #e0e0e0 ${count}%)`;
      }
    }, 5);
  });
}
window.addEventListener("load", animateDonuts);
window.addEventListener("scroll", animateDonuts);

// 📄 Open Certificate Popup
function openPopup(filename) {
  const iframe = document.getElementById("cert-frame");
  iframe.src = `certificates/${filename}`;
  document.getElementById("cert-popup").style.display = "block";
}
function closePopup() {
  const popup = document.getElementById("cert-popup");
  popup.style.display = "none";
  document.getElementById("cert-frame").src = "";
}

// 🧾 Open Academic Memo Modal
function openMemo(path) {
  const modal = document.getElementById("memo-modal");
  const fullImg = document.getElementById("memo-full");
  const downloadBtn = document.getElementById("memo-download");

  fullImg.src = path;
  downloadBtn.href = path;
  modal.style.display = "flex";
}
function closeMemo() {
  const modal = document.getElementById("memo-modal");
  modal.style.display = "none";
  document.getElementById("memo-full").src = "";
  document.getElementById("memo-download").href = "#";
}
document.getElementById("memo-full").addEventListener("click", function (e) {
  e.stopPropagation();
  this.classList.toggle("zoomed");
});

// 📎 Resume Popup
function openResumePopup() {
  const popup = document.getElementById("resume-popup");
  const frame = document.getElementById("resume-frame");
  frame.src = "assets/ALAPATI SRIVARSHINI.pdf";
  popup.style.display = "block";
}
function closeResumePopup() {
  const popup = document.getElementById("resume-popup");
  const frame = document.getElementById("resume-frame");
  popup.style.display = "none";
  frame.src = "";
}

// 📬 Contact Form Submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      document.getElementById("form-message").textContent = "✅ Message sent successfully!";
      form.reset();
    })
    .catch(error => {
      document.getElementById("form-message").textContent = "❌ Failed to send message. Try again.";
    });
});
