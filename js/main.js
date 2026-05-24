/* =====================================================
   js/main.js — Photography Portfolio
   =====================================================
   Sections:
   1. Gallery Data  ← PLACEHOLDER: photo-captions — update alt + caption fields
   2. Gallery Render
   3. Category Filter
   4. Lightbox
   5. Scroll Reveal
   6. Navigation (scroll state + mobile toggle)
   7. Custom Cursor
   8. Hero Image
   9. Footer Year
   ===================================================== */

'use strict';

/* =====================================================
   1. GALLERY DATA
   PLACEHOLDER: photo-captions → update the `alt` and `caption`
   fields for each image below with real descriptions.

   PLACEHOLDER: photographer-name → replace [PHOTOGRAPHER NAME]
   in every alt string.

   Category assignment is arbitrary (images were flat, no subfolders).
   Move images to the correct category as needed.
   ===================================================== */
const GALLERY_DATA = [
  /* ── PORTRAIT (8 images) ── */
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.11.jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.13.jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.13 (1).jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.13 (2).jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.14.jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.14 (1).jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.14 (2).jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.15.jpeg',
    category: 'portrait',
    alt:      '[PHOTOGRAPHER NAME] — Portrait photography',
    caption:  'Portrait' // PLACEHOLDER: photo-captions
  },

  /* ── EDITORIAL (7 images) ── */
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.15 (1).jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.15 (2).jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.16.jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.16 (1).jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.16 (2).jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.16 (3).jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.17.jpeg',
    category: 'editorial',
    alt:      '[PHOTOGRAPHER NAME] — Editorial photography',
    caption:  'Editorial' // PLACEHOLDER: photo-captions
  },

  /* ── COMMERCIAL (8 images) ── */
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.17 (1).jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.17 (2).jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.17 (3).jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.17 (4).jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.18.jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.18 (1).jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.19.jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20.jpeg',
    category: 'commercial',
    alt:      '[PHOTOGRAPHER NAME] — Commercial photography',
    caption:  'Commercial' // PLACEHOLDER: photo-captions
  },

  /* ── EVENTS (7 images) ── */
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20 (1).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20 (2).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20 (3).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20 (4).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.20 (5).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.21.jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
  {
    src:      'assests/WhatsApp Image 2026-05-24 at 21.28.21 (1).jpeg',
    category: 'events',
    alt:      '[PHOTOGRAPHER NAME] — Events photography',
    caption:  'Events' // PLACEHOLDER: photo-captions
  },
];

/* =====================================================
   2. GALLERY RENDER
   ===================================================== */
const galleryEl   = document.getElementById('gallery');
const HERO_BG     = document.getElementById('heroBg');
const ABOUT_IMG   = document.getElementById('aboutPortrait');

let currentFilter    = 'all';
let filteredIndices  = [];   // indices into GALLERY_DATA for the current filter
let lightboxIndex    = 0;    // position within filteredIndices

function encPath(raw) {
  return encodeURI(raw);
}

function buildGallery(filter) {
  currentFilter = filter;
  filteredIndices = [];

  galleryEl.innerHTML = '';

  GALLERY_DATA.forEach(function(item, globalIdx) {
    if (filter !== 'all' && item.category !== filter) return;

    filteredIndices.push(globalIdx);
    const posInFiltered = filteredIndices.length - 1;

    const article = document.createElement('article');
    article.className = 'gallery__item reveal';
    article.setAttribute('data-index', posInFiltered);
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', 'Open image ' + (posInFiltered + 1));

    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.src          = encPath(item.src);
    img.alt          = item.alt;
    img.loading      = 'lazy';
    img.decoding     = 'async';

    const caption = document.createElement('figcaption');
    caption.textContent = item.caption;

    fig.appendChild(img);
    fig.appendChild(caption);
    article.appendChild(fig);
    galleryEl.appendChild(article);

    article.addEventListener('click', function() {
      openLightbox(parseInt(this.dataset.index, 10));
    });
    article.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(this.dataset.index, 10));
      }
    });
  });

  // Trigger scroll-reveal on newly rendered items
  observeRevealElements();
}

/* =====================================================
   3. CATEGORY FILTER
   ===================================================== */
const filterBtns = document.querySelectorAll('.filter__btn');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const target = this.dataset.filter;
    if (target === currentFilter) return;

    filterBtns.forEach(function(b) {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    this.classList.add('active');
    this.setAttribute('aria-selected', 'true');

    galleryEl.classList.add('is-filtering');
    setTimeout(function() {
      buildGallery(target);
      galleryEl.classList.remove('is-filtering');
    }, 250);
  });
});

/* =====================================================
   4. LIGHTBOX
   ===================================================== */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbCounter = document.getElementById('lbCounter');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

function openLightbox(posInFiltered) {
  lightboxIndex = posInFiltered;
  showLightboxImage(lightboxIndex);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');

  // Focus trap
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

function showLightboxImage(pos) {
  const globalIdx = filteredIndices[pos];
  const item = GALLERY_DATA[globalIdx];

  lbImg.classList.add('is-loading');
  lbImg.onload = function() {
    lbImg.classList.remove('is-loading');
  };
  lbImg.src = encPath(item.src);
  lbImg.alt = item.alt;

  // PLACEHOLDER: photo-captions → caption is drawn from GALLERY_DATA caption field
  lbCaption.textContent = item.caption + ' — ' + item.alt;

  lbCounter.textContent = (pos + 1) + ' / ' + filteredIndices.length;
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + filteredIndices.length) % filteredIndices.length;
  showLightboxImage(lightboxIndex);
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % filteredIndices.length;
  showLightboxImage(lightboxIndex);
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', lightboxPrev);
lbNext.addEventListener('click', lightboxNext);

// Close on backdrop click
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox || e.target.classList.contains('lightbox__stage')) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (!lightbox.classList.contains('is-open')) return;
  switch (e.key) {
    case 'ArrowLeft':  lightboxPrev();    break;
    case 'ArrowRight': lightboxNext();    break;
    case 'Escape':     closeLightbox();   break;
  }
});

// Touch/swipe support on lightbox
(function() {
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function(e) {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? lightboxNext() : lightboxPrev();
    }
  }, { passive: true });
}());

/* =====================================================
   5. SCROLL REVEAL (IntersectionObserver)
   ===================================================== */
let revealObserver;

function observeRevealElements() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) {
    if (!el.classList.contains('is-visible')) {
      revealObserver.observe(el);
    }
  });
}

/* =====================================================
   6. NAVIGATION — scroll state & mobile toggle
   ===================================================== */
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}, { passive: true });

navToggle.addEventListener('click', function() {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* =====================================================
   7. CUSTOM CURSOR
   ===================================================== */
(function() {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  document.addEventListener('mousemove', function(e) {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
  });

  document.addEventListener('mouseleave', function() {
    cursor.classList.add('cursor--hidden');
  });
  document.addEventListener('mouseenter', function() {
    cursor.classList.remove('cursor--hidden');
  });

  const hoverTargets = 'a, button, .gallery__item, .filter__btn, .lightbox__close, .lightbox__prev, .lightbox__next';
  document.querySelectorAll(hoverTargets).forEach(addHoverBehavior);

  function addHoverBehavior(el) {
    el.addEventListener('mouseenter', function() { cursor.classList.add('cursor--hover'); });
    el.addEventListener('mouseleave', function() { cursor.classList.remove('cursor--hover'); });
  }

  // Also observe dynamically added gallery items
  const mutObs = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) {
          if (node.matches && node.matches('.gallery__item')) {
            addHoverBehavior(node);
          }
          node.querySelectorAll && node.querySelectorAll(hoverTargets).forEach(addHoverBehavior);
        }
      });
    });
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
}());

/* =====================================================
   8. HERO IMAGE — set from first gallery image
   ===================================================== */
(function() {
  if (!HERO_BG || GALLERY_DATA.length === 0) return;
  const firstImg = GALLERY_DATA[0];
  HERO_BG.src = encPath(firstImg.src);
  HERO_BG.alt = firstImg.alt;
  HERO_BG.addEventListener('load', function() {
    HERO_BG.classList.add('is-loaded');
  });

  // About portrait — use second image as placeholder headshot
  if (ABOUT_IMG && GALLERY_DATA.length > 1) {
    ABOUT_IMG.src = encPath(GALLERY_DATA[1].src);
    ABOUT_IMG.alt = '[PHOTOGRAPHER NAME] — portrait'; // PLACEHOLDER: photo-captions
  }
}());

/* =====================================================
   9. FOOTER YEAR
   ===================================================== */
(function() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}());

/* =====================================================
   INIT
   ===================================================== */
(function init() {
  buildGallery('all');
  observeRevealElements();
}());
