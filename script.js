const artistContact = {
  website: 'https://www.wissamradhi.art/',
  whatsapp: 'https://wa.me/9647714556349',
  instagram: 'https://www.instagram.com/wisampicasso/',
  tiktok: 'https://www.tiktok.com/@wisamradhi1?lang=en',
  facebook: 'https://web.facebook.com/wisam.radi.2025'
};
document.documentElement.classList.add('is-ready');

const artworks = [
  {
    id: 1,
    title: 'على كرسي الانتظار',
    description: 'امرأة تستند إلى صمتها، كأن الباب الأزرق آخر ما تبقى من الحكاية.',
    size: '35 × 150 سم',
    year: '2026',
    image: 'assets/images/artworks/01.jpg'
  },
  {
    id: 2,
    title: 'بنت البنفسج',
    description: 'في وقفتها البسيطة شيء من الخجل، وفي عينيها حضور امرأة تعرف كيف تخفي قوتها.',
    size: '35 × 150 سم',
    year: '2026',
    image: 'assets/images/artworks/02.jpg'
  },
  {
    id: 3,
    title: 'عباءة الزهور',
    description: 'امرأة تمشي بثبات، تجمع بين نعومة الثوب وقوة النظرة، كأنها تعرف طريقها جيداً.',
    size: '35 × 150 سم',
    year: '2026',
    image: 'assets/images/artworks/03.jpg'
  },
  {
    id: 4,
    title: 'حاملة الفانوس',
    description: 'امرأة ترفع الضوء بيد، وتخفي ارتباكها بالأخرى؛ بين عتمة الباب وخوف النظرة.',
    size: '35 × 150 سم',
    year: '2026',
    image: 'assets/images/artworks/04.jpg'
  }
];

const revealItems = document.querySelectorAll('.reveal, .reveal-on-scroll');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const track = document.getElementById('artworksTrack');
const viewport = document.getElementById('artworksViewport');
const prevButton = document.getElementById('prevArtwork');
const nextButton = document.getElementById('nextArtwork');
const counter = document.getElementById('artworkCounter');
const title = document.getElementById('artworkTitle');
const description = document.getElementById('artworkDescription');
const meta = document.getElementById('artworkMeta');
const progress = document.getElementById('artworksProgress');

let currentArtwork = 0;
let startX = 0;
let currentX = 0;
let dragOffset = 0;
let isDragging = false;

const toArabicNumber = (number) => String(number).padStart(2, '0');

function renderArtworks() {
  if (!track) {
    return;
  }

  track.innerHTML = artworks.map((artwork) => `
    <article class="artwork-slide" aria-label="${artwork.title}">
      <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" decoding="async" draggable="false">
    </article>
  `).join('');
}

function updateArtwork(index, animate = true) {
  if (!track || !artworks.length) {
    return;
  }

  currentArtwork = Math.max(0, Math.min(index, artworks.length - 1));

  const details = document.querySelector('.artwork-details');

  if (animate && details) {
    details.classList.add('is-changing');
  }

  track.style.transition = animate ? '' : 'none';
  track.style.transform = `translate3d(${-currentArtwork * 100}%, 0, 0)`;

  const applyArtworkText = () => {
    const artwork = artworks[currentArtwork];
    counter.textContent = `${toArabicNumber(currentArtwork + 1)} / ${toArabicNumber(artworks.length)}`;
    title.textContent = artwork.title;
    description.textContent = artwork.description;
    meta.textContent = `${artwork.size}     ${artwork.year}`;
    progress.style.width = `${100 / artworks.length}%`;
    progress.style.transform = `translateX(${currentArtwork * 100}%)`;

    if (details) {
      requestAnimationFrame(() => details.classList.remove('is-changing'));
    }
  };

  if (animate && details) {
    window.setTimeout(applyArtworkText, 120);
  } else {
    applyArtworkText();
  }
}

function goToNextArtwork() {
  updateArtwork((currentArtwork + 1) % artworks.length);
}

function goToPreviousArtwork() {
  updateArtwork((currentArtwork - 1 + artworks.length) % artworks.length);
}

function setDragPosition(offset) {
  const viewportWidth = viewport.offsetWidth || 1;
  const offsetPercent = (offset / viewportWidth) * 100;
  track.style.transform = `translate3d(${(-currentArtwork * 100) + offsetPercent}%, 0, 0)`;
}

function endDrag() {
  if (!isDragging) {
    return;
  }

  isDragging = false;
  viewport.classList.remove('is-dragging');

  const threshold = Math.min(80, viewport.offsetWidth * 0.18);

  if (dragOffset > threshold) {
    goToPreviousArtwork();
  } else if (dragOffset < -threshold) {
    goToNextArtwork();
  } else {
    updateArtwork(currentArtwork);
  }

  dragOffset = 0;
}

if (track && viewport) {
  renderArtworks();
  updateArtwork(0, false);

  nextButton.addEventListener('click', goToNextArtwork);
  prevButton.addEventListener('click', goToPreviousArtwork);

  viewport.addEventListener('pointerdown', (event) => {
    isDragging = true;
    startX = event.clientX;
    currentX = startX;
    dragOffset = 0;
    viewport.classList.add('is-dragging');
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener('pointermove', (event) => {
    if (!isDragging) {
      return;
    }

    currentX = event.clientX;
    dragOffset = currentX - startX;
    setDragPosition(dragOffset);
  });

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('lostpointercapture', endDrag);

  window.addEventListener('resize', () => updateArtwork(currentArtwork, false));
}

const contactLinks = [
  { id: 'artistWebsiteLink', value: artistContact.website, external: true },
  { id: 'artistWhatsappLink', value: artistContact.whatsapp, external: true },
  { id: 'artistInstagramLink', value: artistContact.instagram, external: true },
  { id: 'artistTiktokLink', value: artistContact.tiktok, external: true },
  { id: 'artistFacebookLink', value: artistContact.facebook, external: true }
];

contactLinks.forEach(({ id, value, external }) => {
  const link = document.getElementById(id);

  if (!link) {
    return;
  }

  link.href = value;

  if (external && value !== '#') {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  if (value === '#') {
    link.addEventListener('click', (event) => event.preventDefault());
  }
});


