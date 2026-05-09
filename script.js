// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.fade-up, .fade-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ===== COPY CA (homepage) =====
const copyBtn = document.getElementById('copybtn');
const caEl = document.getElementById('ca');
if (copyBtn && caEl) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(caEl.innerText.trim()).then(() => {
      copyBtn.innerText = 'COPIED!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.innerText = 'COPY';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });
}

// ===== COPY CA (buy page) =====
const copyBtnBuy = document.getElementById('copybtn-buy');
const caElBuy = document.getElementById('ca-buy');
if (copyBtnBuy && caElBuy) {
  copyBtnBuy.addEventListener('click', () => {
    navigator.clipboard.writeText(caElBuy.innerText.trim()).then(() => {
      copyBtnBuy.innerText = 'COPIED!';
      copyBtnBuy.classList.add('copied');
      setTimeout(() => {
        copyBtnBuy.innerText = 'COPY CA';
        copyBtnBuy.classList.remove('copied');
      }, 2000);
    });
  });
}

// ===== STARS CANVAS =====
const canvas = document.getElementById('stars-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < 160; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.004 + 0.001,
        dir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.speed * s.dir;
      if (s.alpha >= 1 || s.alpha <= 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  resize();
  initStars();
  drawStars();
  window.addEventListener('resize', () => { resize(); initStars(); });
}

// ===== GLITCH EFFECT ON $CHILLBULL LOGO =====
const logo = document.querySelector('.nav-logo');
if (logo) {
  setInterval(() => {
    if (Math.random() > 0.92) {
      logo.style.textShadow = `${Math.random()*6-3}px 0 0 rgba(0,212,255,.8), ${Math.random()*-6+3}px 0 0 rgba(168,85,247,.8)`;
      setTimeout(() => { logo.style.textShadow = ''; }, 80);
    }
  }, 1500);
}
