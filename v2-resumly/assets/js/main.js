/**
 * Main JavaScript for Rahmat Ferdiansyah's Portfolio (Resumly Edition - v2)
 * Features: Typing effect, scroll reveal, mobile nav, scrollspy, certification modal, horizontal carousel
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initTypingEffect();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  initCertModal();
});

/* -------------------------------------------------------------------------- */
/* Typing Effect in Hero Section                                              */
/* -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Data Analyst',
    'Software Developer',
    'Graphic Design'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------------------- */
/* Navbar Logic: Floating Pill, Mobile Menu & ScrollSpy                       */
/* -------------------------------------------------------------------------- */
function initNavbar() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      const iconMenu = mobileMenuBtn.querySelector('.icon-menu');
      const iconClose = mobileMenuBtn.querySelector('.icon-close');
      if (iconMenu && iconClose) {
        iconMenu.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.querySelector('.icon-menu')?.classList.remove('hidden');
        mobileMenuBtn.querySelector('.icon-close')?.classList.add('hidden');
      });
    });
  }

  // Active navigation highlight based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-[#fe812e]', 'bg-white/10');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-[#fe812e]', 'bg-white/10');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Scroll Reveal with IntersectionObserver                                    */
/* -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }
}

/* -------------------------------------------------------------------------- */
/* Back to Top Button                                                         */
/* -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Smooth Scroll Helper                                                       */
/* -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Certification Pop-up Modal                                                 */
/* -------------------------------------------------------------------------- */
function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('cert-modal-close');
  const overlay = document.getElementById('cert-modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
  if (overlay) overlay.addEventListener('click', closeCertModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeCertModal();
    }
  });
}

window.openCertModal = function(imageSrc, title, issuer, year, note) {
  const modal = document.getElementById('cert-modal');
  const imgEl = document.getElementById('cert-modal-img');
  const titleEl = document.getElementById('cert-modal-title');
  const issuerEl = document.getElementById('cert-modal-issuer');
  const yearEl = document.getElementById('cert-modal-year');
  const noteEl = document.getElementById('cert-modal-note');
  const openTabBtn = document.getElementById('cert-modal-open-tab');

  if (modal && imgEl) {
    imgEl.src = imageSrc;
    imgEl.alt = title || 'Certificate';
    if (titleEl) titleEl.textContent = title || '';
    if (issuerEl) issuerEl.textContent = issuer || '';
    if (yearEl) yearEl.textContent = year || '';
    if (noteEl) noteEl.textContent = note || '';
    if (openTabBtn) openTabBtn.href = imageSrc;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      lucide.createIcons();
    }
  }
};

window.closeCertModal = function() {
  const modal = document.getElementById('cert-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

/* -------------------------------------------------------------------------- */
/* Dark Mode Switcher                                                         */
/* -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-v2', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-v2', 'light');
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      applyTheme(!isCurrentlyDark);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Horizontal Carousel Scroll Controller                                      */
/* -------------------------------------------------------------------------- */
window.scrollCarousel = function(carouselId, direction) {
  const container = document.getElementById(carouselId);
  if (!container) return;
  const card = container.querySelector('.snap-start') || container.firstElementChild;
  const scrollAmount = card ? (card.offsetWidth + 24) * direction : 380 * direction;
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
};
