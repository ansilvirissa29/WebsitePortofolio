/**
 * Experience Detail Loader & Dynamic Gallery Renderer (Resumly Edition - v2)
 * Reads ?id= URL parameter and updates detail-experience.html
 * Uses ../assets/images/ paths so v2-resumly shares the main image folder cleanly
 */

const EXPERIENCES_DATA = {
  'tsunami-museum': {
    id: 'tsunami-museum',
    role: 'Social Media Specialist',
    company: 'UPTD Museum Tsunami Aceh',
    period: 'October 2025 – November 2025',
    duration: '2 Months',
    location: 'Banda Aceh, Indonesia',
    type: 'Internship',
    category: 'Digital Communications, Content Strategy & Documentation',
    badgeColor: '#fe812e',
    summary: 'Museum Tsunami Aceh merupakan monumen memorial sekaligus wahana edukasi publik yang dibangun untuk memperingati peristiwa gempa berkekuatan 9,3 SR dan tsunami dahsyat yang melanda wilayah pesisir Samudra Hindia pada 26 Desember 2004. Lembaga ini difungsikan sebagai ruang penghormatan abadi bagi para korban bencana alam terbesar dalam sejarah modern Aceh.',
    jobDescription: [
      'Created and curated educational historical content and operational updates for the official social media channels of the Aceh Tsunami Museum to boost audience engagement rates.',
      'Designed and structured monthly content calendars to ensure consistent publication of historical narratives and event promotions.',
      'Served as the official documentary for large-scale public events and state visits at the museum, producing digital publication assets.'
    ],
    skills: ['Content Planning', 'Photography', 'Video Editing', 'Event Documentation'],
    galleryLayout: 3,
    gallery: [
      {
        url: '../assets/images/Mutsu.jpg',
        alt: 'Museum Tsunami Aceh Social Media Internship Documentation',
        caption: 'Dokumentasi kegiatan dan konten edukasi di UPTD Museum Tsunami Aceh',
        isHero: true
      },
      {
        url: '../assets/images/MagangMutsu.jpg',
        alt: 'Creative Social Media Asset Production',
        caption: 'Aktivitas magang dan publikasi visual Museum Tsunami Aceh',
        isHero: false
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
        alt: 'Official Event & Delegation Documentation',
        caption: 'VIP state delegation and official ceremony coverage',
        isHero: false
      }
    ]
  },
  'dindin-warehouse': {
    id: 'dindin-warehouse',
    role: 'Warehouse Staff',
    company: 'Dindinshop',
    period: 'August 2024 – August 2025',
    duration: '1 Year',
    location: 'Indonesia',
    type: 'Full-time',
    category: 'Logistics, Data Tracking & Inventory Analysis',
    badgeColor: '#fe812e',
    summary: 'Berdiri sejak tahun 2012, Dindinshop merupakan salah satu butik mode terkemuka di Aceh yang memelopori kurasi busana impor tren terkini dari berbagai sentra mode Asia, seperti Thailand dan Tiongkok. Seiring ekspansi bisnisnya, Dindinshop berhasil memperkuat daya saing pasar melalui pengembangan jenama orisinalnya sendiri, BDS, yang memproduksi lini produk busana siap pakai (ready-to-wear), jilbab, hingga wewangian secara mandiri guna memenuhi kebutuhan gaya hidup masyarakat modern dengan kualitas yang konsisten.',
    jobDescription: [
      'Supervised incoming and outgoing distribution flows and led regular monthly stock taking execution to maintain high inventory accuracy.',
      'Compiled periodic sales reports and designed visualizations of inventory turnover trends using Microsoft Excel to support management in product procurement decisions.',
      'Built a more structured inventory tracking system to accelerate data retrieval and minimize the risk of inventory discrepancies.'
    ],
    skills: ['Excel', 'Inventory Accuracy', 'Warehouse Management', 'Logistic'],
    galleryLayout: 3,
    gallery: [
      {
        url: '../assets/images/Dindinshop2.JPG',
        alt: 'Warehouse Inventory and Distribution Flow',
        caption: 'Operasional logistik, penataan gudang, dan pengelolaan stok Dindinshop',
        isHero: true
      },
      {
        url: '../assets/images/Dindinshop.jpg',
        alt: 'Inventory Data Visualization Dashboard',
        caption: 'Kegiatan stock opname dan audit inventaris barang',
        isHero: false
      },
      {
        url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
        alt: 'Stock Taking and SKU Management',
        caption: 'Pencatatan SKU dan sinkronisasi data fisik gudang',
        isHero: false
      }
    ]
  },
  'dindin-graphic': {
    id: 'dindin-graphic',
    role: 'Graphic Designer',
    company: 'Dindinshop',
    period: 'February 2022 – July 2024',
    duration: '2 Years 5 Months',
    location: 'Indonesia',
    type: 'Professional / Creative',
    category: 'Brand Identity, Commercial Photography & Creative Media',
    badgeColor: '#fe812e',
    summary: 'Berdiri sejak tahun 2012, Dindinshop merupakan salah satu butik mode terkemuka di Aceh yang memelopori kurasi busana impor tren terkini dari berbagai sentra mode Asia, seperti Thailand dan Tiongkok. Seiring ekspansi bisnisnya, Dindinshop berhasil memperkuat daya saing pasar melalui pengembangan jenama orisinalnya sendiri, BDS, yang memproduksi lini produk busana siap pakai (ready-to-wear), jilbab, hingga wewangian secara mandiri guna memenuhi kebutuhan gaya hidup masyarakat modern dengan kualitas yang konsisten.',
    jobDescription: [
      'Directed product photography shoots for digital and print fashion catalogs to strengthen the brand\'s visuals identity.',
      'Produced and edited high-converting creative video content for social media platforms to increase customers interaction and brand reach.',
      'Designed various promotional and corporate assets, including lanyards, banners, billboards, and marketing campaign posters.'
    ],
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Video Editing', 'Product Photography', 'Social Media Specialist'],
    galleryLayout: 1,
    gallery: [
      {
        url: '../assets/images/Dindinshop3.JPG',
        alt: 'Brand Identity and Creative Design Showcase',
        caption: 'Dokumentasi produksi kreatif, studio fotografi produk, dan materi visual promosi Dindinshop',
        isHero: true
      }
    ]
  },
  'bps-intern': {
    id: 'bps-intern',
    role: 'IT Internship',
    company: 'Badan Pusat Statistik (BPS) Aceh',
    period: 'March 2023 – April 2023',
    duration: '2 Months',
    location: 'Banda Aceh, Indonesia',
    type: 'Internship',
    category: 'Data Preprocessing, Chatbot Automation & Web Optimization',
    badgeColor: '#fe812e',
    summary: 'Kantor Sensus dan Statistik Daerah pasca-pemberlakuan UU Statistik tahun 1960 hingga bertransformasi menjadi Badan Pusat Statistik melalui UU Nomor 16 Tahun 1997—termasuk memainkan peran krusial dalam pemulihan data pasca-tsunami 2004—BPS Provinsi Aceh menjalankan fungsi utama sebagai penyelenggara statistik dasar makro (seperti inflasi, kemiskinan, dan sensus), pembina statistik sektoral dalam kerangka Satu Data Indonesia, serta rujukan data resmi yang terstandardisasi guna mendukung perencanaan pembangunan dan perumusan kebijakan di Tanah Rencong.',
    jobDescription: [
      'Conducted data cleaning and preprocessing on macroeconomic survey data using Python (Pandas & NumPy) to ensure data accuracy and validity prior to analysis.',
      'Designed and developed an interactive Telegram chatbot using Python as an automated public information service to accelerate data distribution for citizens.',
      'Collaborated with the IT team to optimize the data entry website platform, minimizing human error and accelerating field survey data input processes.'
    ],
    skills: ['Data Preprocessing', 'Python', 'Website development', 'AI Engineer'],
    galleryLayout: 3,
    gallery: [
      {
        url: '../assets/images/bps.png',
        alt: 'Badan Pusat Statistik Aceh IT Internship Team & Office',
        caption: 'Dokumentasi magang dan kolaborasi di Badan Pusat Statistik (BPS) Aceh',
        isHero: true
      },
      {
        url: '../assets/images/MagangBps.jpeg',
        alt: 'Aktivitas Kerja Tim IT BPS Aceh',
        caption: 'Suasana kerja dan riset pengolahan data di kantor BPS Aceh',
        isHero: false
      },
      {
        url: '../assets/images/project-chatbot.svg',
        alt: 'Telegram Chatbot Architecture and Query Flow',
        caption: 'Desain chatbot Telegram otomatis untuk layanan data publik BPS',
        isHero: false
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = urlParams.get('id');

  const experienceKey = (requestedId && EXPERIENCES_DATA[requestedId])
    ? requestedId
    : 'tsunami-museum';

  renderExperience(experienceKey);
  initLightbox();
});

function renderExperience(id) {
  const data = EXPERIENCES_DATA[id];
  if (!data) return;

  document.title = `${data.role} | ${data.company} - Rahmat Ferdiansyah`;

  const roleEl = document.getElementById('exp-role');
  const companyEl = document.getElementById('exp-company');
  const periodEl = document.getElementById('exp-period');
  const typeEl = document.getElementById('exp-type');
  const locationEl = document.getElementById('exp-location');
  const categoryEl = document.getElementById('exp-category');
  const summaryEl = document.getElementById('exp-summary');
  const skillsContainer = document.getElementById('exp-skills');
  const jobDescContainer = document.getElementById('exp-job-description');
  const galleryContainer = document.getElementById('exp-gallery');
  const galleryCountEl = document.getElementById('gallery-count-badge');

  if (roleEl) roleEl.textContent = data.role;
  if (companyEl) companyEl.textContent = data.company;
  if (periodEl) periodEl.textContent = data.period;
  if (typeEl) typeEl.textContent = data.type;
  if (locationEl) locationEl.textContent = data.location;
  if (categoryEl) categoryEl.textContent = data.category;
  if (summaryEl) summaryEl.textContent = data.summary;

  // Render Skill Badges (Core Competencies)
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills.map(skill => `
      <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#f1efed] dark:bg-[#0b0c0f] text-[#0b0c0f] dark:text-[#f1efed] border border-black/10 dark:border-white/15 hover:border-[#fe812e] hover:text-[#fe812e] transition-colors">
        ${skill}
      </span>
    `).join('');
  }

  // Render Job Description Bullets
  if (jobDescContainer && data.jobDescription) {
    jobDescContainer.innerHTML = data.jobDescription.map(item => `
      <li class="flex items-start gap-3.5 text-[#54585c] dark:text-[#b3b8b5] text-sm sm:text-base leading-relaxed">
        <span class="w-2 h-2 rounded-full bg-[#fe812e] mt-2.5 shrink-0"></span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Render Dynamic Gallery
  if (galleryContainer) {
    const images = data.gallery;
    const count = images.length;

    if (galleryCountEl) {
      galleryCountEl.textContent = `${count} ${count === 1 ? 'Showcase Item' : 'Documentation Photos'}`;
    }

    if (count === 1) {
      galleryContainer.className = 'gallery-container gallery-layout-1';
      galleryContainer.innerHTML = `
        <div class="gallery-image-box gallery-item shadow-md cursor-pointer group" onclick="openLightbox('${images[0].url}', '${images[0].caption}')">
          <img src="${images[0].url}" alt="${images[0].alt}" loading="lazy" class="w-full h-full object-cover">
          <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
            <span class="text-xs font-mono tracking-wider bg-[#fe812e] text-white px-3 py-1 rounded-full w-fit mb-2 font-semibold">Featured Visual</span>
            <p class="font-medium text-base text-white">${images[0].caption}</p>
            <span class="text-xs text-[#b3b8b5] mt-1 inline-flex items-center gap-1">
              Click to view full preview
            </span>
          </div>
        </div>
      `;
    } else {
      galleryContainer.className = 'gallery-container gallery-layout-3';

      const heroImg = images[0];
      const sideImg1 = images[1] || images[0];
      const sideImg2 = images[2] || images[0];

      galleryContainer.innerHTML = `
        <div class="gallery-image-box gallery-item-hero shadow-md cursor-pointer group min-h-[300px] md:min-h-full" onclick="openLightbox('${heroImg.url}', '${heroImg.caption}')">
          <img src="${heroImg.url}" alt="${heroImg.alt}" loading="lazy" class="w-full h-full object-cover">
          <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
            <span class="text-xs font-mono tracking-wider bg-[#fe812e] text-white px-3 py-1 rounded-full w-fit mb-2 font-semibold">Primary Documentation</span>
            <p class="font-medium text-sm md:text-base text-white">${heroImg.caption}</p>
            <span class="text-xs text-[#b3b8b5] mt-1 inline-flex items-center gap-1">
              Click to expand
            </span>
          </div>
        </div>

        <div class="gallery-image-box shadow-md cursor-pointer group h-[220px]" onclick="openLightbox('${sideImg1.url}', '${sideImg1.caption}')">
          <img src="${sideImg1.url}" alt="${sideImg1.alt}" loading="lazy" class="w-full h-full object-cover">
          <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-4 text-white">
            <p class="font-medium text-xs md:text-sm text-white">${sideImg1.caption}</p>
          </div>
        </div>

        <div class="gallery-image-box shadow-md cursor-pointer group h-[220px]" onclick="openLightbox('${sideImg2.url}', '${sideImg2.caption}')">
          <img src="${sideImg2.url}" alt="${sideImg2.alt}" loading="lazy" class="w-full h-full object-cover">
          <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-4 text-white">
            <p class="font-medium text-xs md:text-sm text-white">${sideImg2.caption}</p>
          </div>
        </div>
      `;
    }
  }

  updateSwitcherActiveState(id);
}

function updateSwitcherActiveState(activeId) {
  document.querySelectorAll('.experience-switcher-btn').forEach(btn => {
    const btnId = btn.getAttribute('data-id');
    if (btnId === activeId) {
      btn.classList.add('border-[#fe812e]', 'bg-[#0b0c0f]', 'text-white', 'shadow-md');
      btn.classList.remove('border-black/10', 'dark:border-white/10', 'bg-white', 'dark:bg-[#16171b]', 'text-[#0b0c0f]', 'dark:text-white');
    } else {
      btn.classList.remove('border-[#fe812e]', 'bg-[#0b0c0f]', 'text-white', 'shadow-md');
      btn.classList.add('border-black/10', 'dark:border-white/10', 'bg-white', 'dark:bg-[#16171b]', 'text-[#0b0c0f]', 'dark:text-white');
    }
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      }
    });
  }
}

window.openLightbox = function(imageUrl, caption) {
  const lightbox = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');

  if (lightbox && imgEl) {
    imgEl.src = imageUrl;
    if (captionEl) captionEl.textContent = caption || '';
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

window.switchExperience = function(id) {
  const newUrl = `${window.location.pathname}?id=${id}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
  renderExperience(id);

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
