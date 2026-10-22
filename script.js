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
    "id": 1,
    "titleAr": "بنت المختار",
    "titleEn": "The Mukhtar’s Daughter",
    "titleFr": "La fille du Mukhtar",
    "width": 85,
    "height": 215,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652375/bint-al-mukhtar_wtts23.png"
  },
  {
    "id": 2,
    "titleAr": "بنات نعيمة",
    "titleEn": "Naima’s Daughters",
    "titleFr": "Les filles de Naima",
    "width": 65,
    "height": 175,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652361/banat-naima_j1azry.png"
  },
  {
    "id": 3,
    "titleAr": "ضيوف",
    "titleEn": "Guests",
    "titleFr": "Invités",
    "width": 75,
    "height": 175,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652403/dhuyuf_oeypwa.png"
  },
  {
    "id": 4,
    "titleAr": "نعيمة قادمة سأنتظرها",
    "titleEn": "Naima Is Coming, I Will Wait for Her",
    "titleFr": "Naima arrive, je l’attendrai",
    "width": 75,
    "height": 195,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652436/naima-coming_fehdun.png"
  },
  {
    "id": 5,
    "titleAr": "المخطوبة",
    "titleEn": "The Fiancée",
    "titleFr": "La fiancée",
    "width": 76,
    "height": 176,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652338/al-makhtouba_udikkn.png"
  },
  {
    "id": 6,
    "titleAr": "الحب والبراءة",
    "titleEn": "Love and Innocence",
    "titleFr": "Amour et innocence",
    "width": 65,
    "height": 175,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652319/love-innocence_vwhwsa.png"
  },
  {
    "id": 7,
    "titleAr": "بنت نعيمة الخياطة",
    "titleEn": "Naima the Seamstress’s Daughter",
    "titleFr": "La fille de Naima la couturière",
    "width": 75,
    "height": 196,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652382/bint-naima_rhnp8b.png"
  },
  {
    "id": 8,
    "titleAr": "بستان نعيمة",
    "titleEn": "Naima’s Garden",
    "titleFr": "Le jardin de Naima",
    "width": 68,
    "height": 226,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652390/bustan-naima_arzx5x.png"
  },
  {
    "id": 9,
    "titleAr": "بنت نعيمة في الإسطبل",
    "titleEn": "Naima’s Daughter in the Stable",
    "titleFr": "La fille de Naima à l’écurie",
    "width": 75,
    "height": 176,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652368/naima-stable_uaedrj.png"
  },
  {
    "id": 10,
    "titleAr": "نعيمة تخبز",
    "titleEn": "Naima Baking Bread",
    "titleFr": "Naima fait du pain",
    "width": 75,
    "height": 176,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652338/naima-baking_mwlxao.png"
  },
  {
    "id": 11,
    "titleAr": "نعيمة في الحي",
    "titleEn": "Naima in the Neighborhood",
    "titleFr": "Naima dans le quartier",
    "width": 85,
    "height": 215,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652353/naima-neighborhood_ge4kjy.png"
  },
  {
    "id": 12,
    "titleAr": "نعيمة",
    "titleEn": "Naima",
    "titleFr": "Naima",
    "width": 65,
    "height": 258,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652319/naima_fuu6mm.png"
  },
  {
    "id": 13,
    "titleAr": "المحطة",
    "titleEn": "The Station",
    "titleFr": "La gare",
    "width": 90,
    "height": 165,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652345/al-mahatta_nh3ybq.png"
  },
  {
    "id": 14,
    "titleAr": "بائعة الورد",
    "titleEn": "The Flower Seller",
    "titleFr": "La vendeuse de fleurs",
    "width": 85,
    "height": 215,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652419/flower-seller_jbf7gk.png"
  },
  {
    "id": 15,
    "titleAr": "العيد",
    "titleEn": "Eid",
    "titleFr": "L’Aïd",
    "width": 96,
    "height": 197,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652411/eid_hlgi9h.png"
  },
  {
    "id": 16,
    "titleAr": "رحلة",
    "titleEn": "Journey",
    "titleFr": "Voyage",
    "width": 77,
    "height": 176,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652425/journey_ceb1qe.png"
  },
  {
    "id": 17,
    "titleAr": "غزال نعيمة",
    "titleEn": "Naima’s Gazelle",
    "titleFr": "La gazelle de Naima",
    "width": 96,
    "height": 196,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652433/naima-gazelle_owuppr.png"
  },
  {
    "id": 18,
    "titleAr": "الجبايش",
    "titleEn": "The Chibayish Marshes",
    "titleFr": "Les marais de Chibayish",
    "width": 76,
    "height": 167,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652397/chibayish_n3hsvd.png"
  },
  {
    "id": 19,
    "titleAr": "بالباب نعيمة",
    "titleEn": "Naima at the Door",
    "titleFr": "Naima à la porte",
    "width": 65,
    "height": 176,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652434/naima-at-door_xakvhl.png"
  },
  {
    "id": 20,
    "titleAr": "انتظار",
    "titleEn": "Waiting",
    "titleFr": "L’attente",
    "width": 75,
    "height": 195,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652436/waiting_soqbrc.png"
  },
  {
    "id": 21,
    "titleAr": "بيتنا بالمجر",
    "titleEn": "Our Home in Al-Majar",
    "titleFr": "Notre maison à Al-Majar",
    "width": 85,
    "height": 216,
    "image": "https://res.cloudinary.com/dyqdfbaln/image/upload/v1792652335/our-home-al-majar_gotr8a.png"
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

const gallery = document.getElementById('artworkGallery');
const lightbox = document.getElementById('galleryLightbox');
const largeImage = document.getElementById('lightboxImage');
const largeStatus = document.getElementById('lightboxStatus');
const closeLightboxButton = document.getElementById('closeLightbox');
let galleryLanguage = 'ar';
let gallerySlideIndex = 0;
let activeArtworkId = null;
let openingElement = null;
let closeTimer;
let savedScroll = 0;
let savedBodyStyle = '';
const galleryText = {
  ar: {open:'عرض اللوحة',close:'إغلاق',previous:'العمل السابق',next:'العمل التالي',loading:'جارٍ تحميل اللوحة…',error:'تعذر تحميل الصورة.',retry:'إعادة المحاولة',axis:'العرض × الارتفاع',unit:'سم'},
  en: {open:'View artwork',close:'Close',previous:'Previous artwork',next:'Next artwork',loading:'Loading artwork…',error:'The image could not be loaded.',retry:'Try again',axis:'W × H',unit:'cm'},
  fr: {open:'Voir l’œuvre',close:'Fermer',previous:'Œuvre précédente',next:'Œuvre suivante',loading:'Chargement de l’œuvre…',error:'Impossible de charger l’image.',retry:'Réessayer',axis:'l × h',unit:'cm'}
};
const artworkTitle = artwork => artwork[{ar:'titleAr',en:'titleEn',fr:'titleFr'}[galleryLanguage]];
const artworkDimensions = artwork => `${artwork.width} × ${artwork.height} ${galleryText[galleryLanguage].unit} (${galleryText[galleryLanguage].axis})`;
const artworkNumber = id => `${String(id).padStart(2,'0')} / ${artworks.length}`;
const thumbnailUrl = artwork => artwork.image.replace('/upload/','/upload/f_auto,q_auto,w_720,c_limit/');

function updateImageStatus(image, status) {
  const state = image.dataset.state || 'loading';
  status.hidden = state === 'loaded';
  image.style.visibility = state === 'loaded' ? 'visible' : 'hidden';
  status.querySelector('span').textContent = galleryText[galleryLanguage][state === 'error' ? 'error' : 'loading'];
  const retry = status.querySelector('button');
  retry.hidden = state !== 'error';
  retry.textContent = galleryText[galleryLanguage].retry;
}

function loadGalleryImage(image, status, source) {
  // Replace handlers before each request, so navigation cannot apply stale image state.
  image.dataset.state = 'loading';
  updateImageStatus(image,status);
  image.onload = () => {
    image.dataset.state = 'loaded';
    updateImageStatus(image,status);
    image.classList.remove('image-enter');
    void image.offsetWidth;
    image.classList.add('image-enter');
  };
  image.onerror = () => { image.dataset.state = 'error'; updateImageStatus(image,status); };
  status.querySelector('button').onclick = () => {
    image.removeAttribute('src');
    loadGalleryImage(image,status,source);
  };
  image.src = source;
}

function renderArtworks() {
  artworks.forEach(artwork => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.hidden = true;
    card.dataset.artworkId = artwork.id;
    card.innerHTML = `<div class="gallery-image-wrap">
      <button type="button" class="gallery-open" aria-haspopup="dialog"><img loading="lazy" decoding="async" draggable="false" alt=""></button>
      <div class="gallery-image-status" role="status"><span></span><button type="button" hidden></button></div>
      </div><div class="gallery-caption"><span class="gallery-number" dir="ltr"></span><h3></h3><p class="gallery-dimensions" dir="ltr"></p></div>`;
    const button = card.querySelector('.gallery-open');
    button.onclick = () => openArtwork(artwork.id,button);
    // Physical dimensions reserve space only; intrinsic image dimensions take over on load.
    const image = card.querySelector('img');
    image.style.aspectRatio = `${artwork.width} / ${artwork.height}`;
    image.addEventListener('load', () => { image.style.aspectRatio = 'auto'; });
    gallery.append(card);
    // Images are requested only when their slide is first displayed.
  });
}

function updateLightboxText() {
  const artwork = artworks.find(item => item.id === activeArtworkId);
  if (!artwork) return;
  largeImage.alt = artworkTitle(artwork);
  document.getElementById('lightboxTitle').textContent = artworkTitle(artwork);
  document.getElementById('lightboxDimensions').textContent = artworkDimensions(artwork);
  document.getElementById('lightboxCounter').textContent = artworkNumber(artwork.id);
  updateImageStatus(largeImage,largeStatus);
}

function setGalleryLanguage(language) {
  galleryLanguage = language;
  gallery.querySelectorAll('.gallery-card').forEach(card => {
    const artwork = artworks.find(item => item.id === Number(card.dataset.artworkId));
    card.querySelector('h3').textContent = artworkTitle(artwork);
    card.querySelector('.gallery-dimensions').textContent = artworkDimensions(artwork);
    card.querySelector('.gallery-number').textContent = artworkNumber(artwork.id);
    card.querySelector('img').alt = artworkTitle(artwork);
    card.querySelector('.gallery-open').setAttribute('aria-label',`${galleryText[language].open}: ${artworkTitle(artwork)}`);
    updateImageStatus(card.querySelector('img'),card.querySelector('.gallery-image-status'));
  });
  closeLightboxButton.setAttribute('aria-label',galleryText[language].close);
  document.getElementById('previousLightbox').setAttribute('aria-label',galleryText[language].previous);
  document.getElementById('nextLightbox').setAttribute('aria-label',galleryText[language].next);
  document.getElementById('previousGallery').setAttribute('aria-label',galleryText[language].previous);
  document.getElementById('nextGallery').setAttribute('aria-label',galleryText[language].next);
  updateLightboxText();
}

function showArtwork(id) {
  activeArtworkId = id;
  const artwork = artworks.find(item => item.id === id);
  loadGalleryImage(largeImage,largeStatus,artwork.image);
  updateLightboxText();
}

function openArtwork(id, trigger) {
  clearTimeout(closeTimer);
  openingElement = trigger;
  savedScroll = window.scrollY;
  savedBodyStyle = document.body.style.cssText;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScroll}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
  showArtwork(id);
  lightbox.classList.remove('is-closing');
  lightbox.showModal();
  closeLightboxButton.focus();
}

function finishClosingLightbox() {
  clearTimeout(closeTimer);
  document.body.style.cssText = savedBodyStyle;
  const previousBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0,savedScroll);
  document.documentElement.style.scrollBehavior = previousBehavior;
  largeImage.removeAttribute('src');
  largeImage.onload = largeImage.onerror = null;
  openingElement?.focus({preventScroll:true});
}
function closeArtwork() {
  if (!lightbox.open || lightbox.classList.contains('is-closing')) return;
  lightbox.classList.add('is-closing');
  closeTimer = setTimeout(() => lightbox.close(),matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 160);
}
function stepArtwork(delta) {
  const index = artworks.findIndex(item => item.id === activeArtworkId);
  const nextIndex = (index + delta + artworks.length) % artworks.length;
  showArtwork(artworks[nextIndex].id);
  showGallerySlide(nextIndex);
  openingElement = gallery.querySelector('.gallery-card:not([hidden]) .gallery-open');
}
closeLightboxButton.onclick = closeArtwork;
lightbox.addEventListener('cancel', event => { event.preventDefault(); closeArtwork(); });
lightbox.addEventListener('close',finishClosingLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeArtwork(); });
document.getElementById('previousLightbox').onclick = () => stepArtwork(-1);
document.getElementById('nextLightbox').onclick = () => stepArtwork(1);
lightbox.addEventListener('keydown',event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    stepArtwork(event.key === 'ArrowRight' ? 1 : -1);
  }
});
let touchStart = null;
const lightboxStage = document.getElementById('lightboxStage');
lightboxStage.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
}, {passive:true});
lightboxStage.addEventListener('touchend', event => {
  if (!touchStart) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) stepArtwork(dx < 0 ? 1 : -1);
  touchStart = null;
}, {passive:true});
lightboxStage.addEventListener('touchcancel', () => { touchStart = null; });
function showGallerySlide(index) {
  gallerySlideIndex = (index + artworks.length) % artworks.length;
  gallery.querySelectorAll('.gallery-card').forEach((card,i) => {
    card.hidden = i !== gallerySlideIndex;
    if (card.hidden) return;
    const image = card.querySelector('img');
    if (!image.getAttribute('src')) loadGalleryImage(image,card.querySelector('.gallery-image-status'),thumbnailUrl(artworks[i]));
    image.classList.remove('image-enter');
    void image.offsetWidth;
    image.classList.add('image-enter');
  });
  document.getElementById('gallerySliderCounter').textContent = artworkNumber(artworks[gallerySlideIndex].id);
}
document.getElementById('previousGallery').onclick = () => showGallerySlide(gallerySlideIndex - 1);
document.getElementById('nextGallery').onclick = () => showGallerySlide(gallerySlideIndex + 1);
document.getElementById('artworks').addEventListener('keydown',event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  const restoreFocus = gallery.contains(document.activeElement);
  showGallerySlide(gallerySlideIndex + (event.key === 'ArrowRight' ? 1 : -1));
  if (restoreFocus) gallery.querySelector('.gallery-card:not([hidden]) .gallery-open').focus({preventScroll:true});
});
let galleryTouchStart = null;
let suppressGalleryClickUntil = 0;
gallery.addEventListener('touchstart',event => {
  galleryTouchStart = event.touches.length === 1 ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
},{passive:true});
gallery.addEventListener('touchend',event => {
  if (!galleryTouchStart) return;
  const dx = event.changedTouches[0].clientX - galleryTouchStart.x;
  const dy = event.changedTouches[0].clientY - galleryTouchStart.y;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    suppressGalleryClickUntil = Date.now() + 400;
    showGallerySlide(gallerySlideIndex + (dx < 0 ? 1 : -1));
  }
  galleryTouchStart = null;
},{passive:true});
gallery.addEventListener('touchcancel',()=>{ galleryTouchStart = null; });
gallery.addEventListener('click',event => {
  if (Date.now() < suppressGalleryClickUntil) { event.preventDefault(); event.stopPropagation(); }
},true);
renderArtworks();
showGallerySlide(0);

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


