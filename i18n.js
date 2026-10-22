(() => {
  'use strict';

  // Keep the original Arabic markup verbatim so switching back restores it exactly.
  const entries = [
    ['title', 'Naima | Wissam Radi', 'Naïma | Wissam Radi'],
    ['meta[name="description"]', 'Naima, a solo exhibition by Wissam Radi at the House of Antiques — Baghdad, 2026.', 'Naïma, une exposition personnelle de Wissam Radi à la Maison des Antiquités — Bagdad, 2026.', 'content'],
    ['.brochure', 'Naima exhibition brochure', 'Brochure de l’exposition Naïma', 'aria-label'],
    ['.hero', 'Exhibition opening', 'Ouverture de l’exposition', 'aria-label'],
    ['.hero__image', 'Artwork from the exhibition', 'Œuvre présentée dans l’exposition', 'alt'],
    ['.hero__topline', 'A solo exhibition by', 'Exposition personnelle de'],
    ['.hero__artist, #artist-title, #contact-title', 'Wissam Radi', 'Wissam Radi'],
    ['.hero__title', 'Naima', 'Naïma'],
    ['.hero__subtitle', 'Faces from memory<br>and everyday femininity', 'Visages de la mémoire<br>et féminité populaire'],
    ['.hero__bottom p:first-child, .house-title span:first-child, .credit-item:first-child h3', 'House of Antiques', 'Maison des Antiquités'],
    ['.hero__bottom p:last-child', 'Baghdad — 2026', 'Bagdad — 2026'],
    ['.artist-kicker', 'Section one: The artist', 'Première section : L’artiste', 'aria-label'],
    ['.artist-kicker span:last-child', 'The artist', 'L’artiste'],
    [".artist-role","Visual artist — Member of the Iraqi Artists Syndicate","Artiste plasticien — Membre du Syndicat des artistes irakiens"],
    [".artist-bio p:first-child","Wissam Radi is an Iraqi visual artist, born in Baghdad in 1968, and a member of the Iraqi Artists Syndicate. His career spans painting, arts journalism and teaching, with solo and group exhibitions in Iraq and abroad, as well as awards in painting and caricature.","Wissam Radi est un artiste plasticien irakien, né à Bagdad en 1968, et membre du Syndicat des artistes irakiens. Son parcours réunit la peinture, le journalisme artistique et l’enseignement, avec des expositions personnelles et collectives en Irak et à l’étranger, ainsi que des prix en peinture et en caricature."],
    ['.artist-bio p:last-child', 'His work centres on people, memory and everyday faces, in an expressive style with distinctly Iraqi features. In “Naima”, the artist presents his personal vision of the woman of the people as a symbol of beauty, memory and Iraqi femininity.', 'Son œuvre s’articule autour de l’humain, de la mémoire et des visages populaires, dans un style expressif aux traits nettement irakiens. Dans « Naïma », l’artiste présente sa vision personnelle de la femme du peuple comme symbole de beauté, de mémoire et de féminité irakienne.'],
    ["#cv-memberships-heading","Memberships and appointments","Adhésions et fonctions"],
    ["#cv-memberships-1","Member of the Iraqi Artists Syndicate.","Membre du Syndicat des artistes irakiens."],
    ["#cv-memberships-2","Member of the Iraqi Plastic Artists Society.","Membre de la Société des artistes plasticiens irakiens."],
    ["#cv-memberships-3","Member of the Iraqi Journalists Syndicate.","Membre du Syndicat des journalistes irakiens."],
    ["#cv-memberships-4","Member of the International Federation of Journalists.","Membre de la Fédération internationale des journalistes."],
    ["#cv-memberships-5","Member of the Iraqi Photographic Society.","Membre de la Société irakienne de photographie."],
    ["#cv-memberships-6","Visual arts adviser to the Association of Iraqi Journalists and Academic Intellectuals.","Conseiller en arts plastiques auprès de l’Association des journalistes et intellectuels universitaires irakiens."],
    ["#cv-memberships-7","Member of the Iraqi Radio and Television Broadcasters Union.","Membre de l’Union irakienne des professionnels de la radio et de la télévision."],
    ["#cv-memberships-8","Member of the Iraqi Cartoonists Association.","Membre de l’Association des caricaturistes irakiens."],
    ["#cv-memberships-9","Media adviser to the Arbitration Commission for International Disputes / League of Arab States.","Conseiller médias auprès de la Commission d’arbitrage des différends internationaux / Ligue des États arabes."],
    ["#cv-experience-heading","Professional and media experience","Expérience professionnelle et médiatique"],
    ["#cv-experience-1","Editor and illustrator at Al-Istiqlal newspaper.","Rédacteur et illustrateur au journal Al-Istiqlal."],
    ["#cv-experience-2","Editor and cartoonist at Sawt Al-Iraq newspaper.","Rédacteur et caricaturiste au journal Sawt Al-Iraq."],
    ["#cv-experience-3","Editor and cartoonist at Al-Dustour newspaper.","Rédacteur et caricaturiste au journal Al-Dustour."],
    ["#cv-experience-4","Cartoonist at Al-Bayan newspaper.","Caricaturiste au journal Al-Bayan."],
    ["#cv-experience-5","Editor and cartoonist at the satirical newspaper Al-Falqa.","Rédacteur et caricaturiste au journal satirique Al-Falqa."],
    ["#cv-experience-6","Cartoonist at Al-Bayina Al-Jadida newspaper.","Caricaturiste au journal Al-Bayina Al-Jadida."],
    ["#cv-experience-7","Children’s story writer and illustrator for the Emirati magazine Qais.","Scénariste et illustrateur d’histoires pour enfants au magazine émirati Qais."],
    ["#cv-experience-8","Children’s story writer and illustrator for the Iraqi magazine Tammuz.","Scénariste et illustrateur d’histoires pour enfants au magazine irakien Tammuz."],
    ["#cv-experience-9","Courtroom artist for the trial of American soldiers at the American court in Baghdad’s Green Zone, under NBC supervision.","Dessinateur d’audience lors du procès de soldats américains au tribunal américain de la Zone verte à Bagdad, sous la supervision de NBC."],
    ["#cv-experience-10","Director of the Picasso Institute in Baghdad for teaching drawing and music.","Directeur de l’Institut Picasso de Bagdad, consacré à l’enseignement du dessin et de la musique."],
    ["#cv-exhibitions-heading","Solo exhibitions","Expositions personnelles"],
    ["#cv-exhibitions-1","First solo exhibition, “Maniyat”, at the Cultural Centre in Diyala.","Première exposition personnelle, « Maniyat », au Centre culturel de Diyala."],
    ["#cv-exhibitions-2","Second solo exhibition, “Beings Beyond Words”, at the Baghdad Arts Centre — 2000.","Deuxième exposition personnelle, « Des êtres au-delà des mots », au Centre des arts de Bagdad — 2000."],
    ["#cv-exhibitions-3","Third solo exhibition, “Expressions”, in a church in Essen, Germany — 2018.","Troisième exposition personnelle, « Expressions », dans une église à Essen, en Allemagne — 2018."],
    ["#cv-participations-heading","Group exhibitions and participation","Expositions collectives et participations"],
    ["#cv-participations-1","Participation in an exhibition in Murtha, Spain.","Participation à une exposition à Murtha, en Espagne."],
    ["#cv-participations-2","Participation in “Art for Humanity and Peace”, organised by the Iraqi Visual Artists Collective.","Participation à « L’art pour l’humanité et la paix », organisé par le Collectif des artistes plasticiens irakiens."],
    ["#cv-participations-3","Participation in “Democracy and National Sovereignty”, organised by the Iraqi Visual Artists Collective.","Participation à « Démocratie et souveraineté nationale », organisé par le Collectif des artistes plasticiens irakiens."],
    ["#cv-participations-4","Participation in “Afkar”, organised by the Afkar Arts Collective at the Sheraton Hotel.","Participation à « Afkar », organisé par le collectif artistique Afkar à l’hôtel Sheraton."],
    ["#cv-participations-5","Participation in cartoon exhibitions marking Iraqi Press Day.","Participation à des expositions de caricatures à l’occasion de la Journée de la presse irakienne."],
    ["#cv-participations-6","Participation in a cartoon exhibition at the Visual Arts Hall of the Baghdad Cultural Forum.","Participation à une exposition de caricatures dans la salle des arts plastiques du Forum culturel de Bagdad."],
    ["#cv-participations-7","Participation in the “Atatürk” exhibition in Istanbul, Turkey.","Participation à l’exposition « Atatürk » à Istanbul, en Turquie."],
    ["#cv-participations-8","Participation in the annual “Nice Arts” exhibition in Nice, France — 2018.","Participation à l’exposition annuelle « Nice Arts » à Nice, en France — 2018."],
    ["#cv-awards-heading","Awards","Prix"],
    ["#cv-awards-1","International award for best cartoon in the competition held by the Italian cartoon organisation “Famigia Farsilia” — 2001.","Prix international de la meilleure caricature au concours de l’organisme italien spécialisé « Famigia Farsilia » — 2001."],
    ["#cv-awards-2","Jamil Hamoudi Award for Young Painters — 2001.","Prix Jamil Hamoudi pour les jeunes peintres — 2001."],
    ["#cv-awards-3","Hafidh Al-Droubi Award at a group exhibition of Iraqi painters.","Prix Hafidh Al-Droubi lors d’une exposition collective de peintres irakiens."],
    ["#cv-awards-4","Iraqi Communist Party award for best artist in its competition — 2005.","Prix du Parti communiste irakien du meilleur artiste de son concours — 2005."],
    ['.artist-image-wrap img', 'Portrait of the artist Wissam Radi', 'Portrait de l’artiste Wissam Radi', 'alt'],
    ['.artworks-kicker', 'Section two: The artworks', 'Deuxième section : Les œuvres', 'aria-label'],
    ['.artworks-kicker span:last-child', 'The artworks', 'Les œuvres'],
    ['#artworks-title', 'Works from Naima', 'Les œuvres de Naïma'],
    ['.artworks-subtitle', '21 works · Dimensions: width × height', '21 œuvres · Dimensions : largeur × hauteur'],
    ['.house-image-wrap img', 'House of Antiques in Baghdad', 'Maison des Antiquités à Bagdad', 'alt'],
    ['.house-kicker', 'Section three: The venue', 'Troisième section : Le lieu', 'aria-label'],
    ['.house-kicker span:last-child', 'The venue', 'Le lieu'],
    ['.house-title span:last-child', 'The memory of a place', 'La mémoire du lieu'],
    ['.house-text p:nth-child(1)', 'Inside the House of Antiques, artworks are not displayed as paintings detached from their surroundings, but as part of the memory of a living place whose walls hold traces of heritage, stories and the aesthetic sensibilities of old Iraq.', 'À la Maison des Antiquités, les œuvres ne sont pas présentées comme des tableaux séparés de leur environnement, mais comme une part de la mémoire d’un lieu vivant, dont les murs conservent des traces du patrimoine, des récits et du goût irakien d’autrefois.'],
    ['.house-text p:nth-child(2)', 'The House of Antiques gives “Naima” a distinctive setting. Rather than facing a neutral white wall, the works enter into a dialogue with wood, brass, carpets, light and antiques bearing the traces of time.', 'La Maison des Antiquités offre à « Naïma » un cadre singulier : les œuvres ne se tiennent pas devant un mur blanc neutre, elles dialoguent avec le bois, le cuivre, les tapis, la lumière et les objets anciens qui portent l’empreinte du temps.'],
    ['.house-text p:nth-child(3)', 'This interplay between artwork and place creates a visual experience reminiscent of a theatrical scene, where the painted figures become part of the house, as though they had emerged from its memory.', 'Cette rencontre entre l’œuvre et le lieu crée une expérience visuelle proche d’une scène théâtrale, où les personnages peints deviennent partie intégrante de la maison, comme s’ils étaient sortis de sa mémoire.'],
    ['.house-text p:nth-child(4)', 'Choosing the House of Antiques to host this exhibition extends the exhibition’s central idea:', 'Le choix de la Maison des Antiquités pour accueillir cette exposition prolonge l’idée même de l’exposition :'],
    ['.house-quote', 'Faces from memory,<br>and everyday femininity finding its natural home in a space that preserves the features of the past.', 'Des visages de la mémoire,<br>et une féminité populaire qui trouve sa place naturelle dans un espace préservant les traits du passé.'],
    ['.house-meta', 'House of Antiques<br>Baghdad — Abu Nuwas', 'Maison des Antiquités<br>Bagdad — Abou Nawas'],
    ['.closing-image img', 'Closing image of the Naima exhibition', 'Image de clôture de l’exposition Naïma', 'alt'],
    ['.contact-kicker', 'Section four: Contact', 'Quatrième section : Contact', 'aria-label'],
    ['.contact-kicker span:last-child', 'Contact', 'Contact'],
    ['.contact-role', 'Visual artist', 'Artiste plasticien'],
    ['#artistWebsiteLink', 'Wissam Radi’s website', 'Site de Wissam Radi', 'aria-label'],
    ['.contact-icons', 'Contact links for Wissam Radi', 'Liens de contact de Wissam Radi', 'aria-label'],
    ['#artistWhatsappLink', 'Wissam Radi on WhatsApp', 'Wissam Radi sur WhatsApp', 'aria-label'],
    ['#artistInstagramLink', 'Wissam Radi on Instagram', 'Wissam Radi sur Instagram', 'aria-label'],
    ['#artistTiktokLink', 'Wissam Radi on TikTok', 'Wissam Radi sur TikTok', 'aria-label'],
    ['#artistFacebookLink', 'Wissam Radi on Facebook', 'Wissam Radi sur Facebook', 'aria-label'],
    ['.credit-item:first-child', 'House of Antiques website', 'Site de la Maison des Antiquités', 'aria-label'],
    ['.credit-item:first-child img', 'House of Antiques logo', 'Logo de la Maison des Antiquités', 'alt'],
    ['.credit-item:first-child p', 'Exhibition host venue', 'Lieu d’accueil de l’exposition'],
    ['.credit-item:last-child', 'Abaad Al Iraq website', 'Site d’Abaad Al Iraq', 'aria-label'],
    ['.credit-item:last-child img', 'Abaad Al Iraq logo', 'Logo d’Abaad Al Iraq', 'alt'],
    ['.credit-item:last-child h3', 'Abaad Al Iraq', 'Abaad Al Iraq'],
    ['.credit-item:last-child p', 'Exhibition founder and organiser', 'Structure fondatrice et organisatrice de l’exposition'],
    [".partners-label","In partnership with","En partenariat avec"],
    [".partner-masdar img","Masdar Foundation for Sustainable Development logo","Logo de la Fondation Masdar pour le développement durable","alt"],
    [".partner-masdar h3","Masdar Foundation for Sustainable Development","Fondation Masdar pour le développement durable"],
    [".partner-mismar","Mismar Foundation website","Site de la Fondation Mismar","aria-label"],
    [".partner-mismar img","Mismar Foundation logo","Logo de la Fondation Mismar","alt"],
    [".partner-mismar h3","Mismar Foundation","Fondation Mismar"],
    [".partner-item p","Exhibition partner","Partenaire de l’exposition"],
    ['.final-signature', '“Naima” exhibition<br>Wissam Radi<br>Baghdad — 2026', 'Exposition « Naïma »<br>Wissam Radi<br>Bagdad — 2026'],
    ['.language-bar', 'Brochure language', 'Langue de la brochure', 'aria-label']
  ].flatMap(([selector, en, fr, attribute]) => Array.from(document.querySelectorAll(selector), (element) => ({
    element, attribute, en, fr,
    ar: attribute ? element.getAttribute(attribute) : element.innerHTML
  })));

  function setLanguage(language) {
    if (!['ar', 'en', 'fr'].includes(language)) language = 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    entries.forEach(({ element, attribute, ...translations }) => {
      if (attribute) element.setAttribute(attribute, translations[language]);
      else element.innerHTML = translations[language];
    });
    setGalleryLanguage(language);
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    try { localStorage.setItem('naima-brochure-language', language); } catch (_) { /* Storage may be unavailable for local files. */ }
  }

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  let language = 'ar';
  try { language = localStorage.getItem('naima-brochure-language') || 'ar'; } catch (_) { /* Default to Arabic. */ }
  setLanguage(language);
})();
