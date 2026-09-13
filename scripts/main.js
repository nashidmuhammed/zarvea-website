// ZARVEA Natural Spices - Interactive UI & Catalog Logic

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProductCatalog();
  initTerroirTabs();
  initContactForm();
  initScrollAnimations();
  initFaqPage();
});

// Product Master Database matching official brand brochure
const productsData = [
  {
    id: "01",
    name: "Cardamom",
    title: "Premium Green Cardamom",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/01_Cardamom.png",
    origin: "Vandanmedu, Idukki, Kerala",
    originDetail: "Cultivated in our own plantation at Vandanmedu, Idukki; with additional sourcing from trusted local smallholders when required.",
    description: "Known as the Queen of Spices, our green cardamom pods are hand-picked at optimum maturity, preserving high essential oil content, vibrant emerald hue, and an intense sweet-floral aroma.",
    grades: "Alleppey Green Extra Bold (AGEB - 8mm+), AGB (7-8mm), Jumbo Green",
    moisture: "Max 10-11%",
    packaging: "250g, 500g, 1kg aroma-lock pouches, 10kg/25kg vacuum-sealed master cartons",
    applications: "Gourmet culinary, bakery, luxury confectionery, teas, perfumes, ayurvedic wellness"
  },
  {
    id: "02",
    name: "Black Pepper",
    title: "Authentic Malabar Black Pepper",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/02_Black_Pepper.png",
    origin: "Pulpalli, Wayanad, Kerala",
    originDetail: "Cultivated in our own plantation at Pulpalli, Wayanad, with additional sourcing from local farmers when required.",
    description: "The revered King of Spices from its true historical homeland. Sun-dried berries offering a robust pungency, high piperine percentage, and earthy floral complexity.",
    grades: "Malabar Garbled (MG-1), Tellicherry Extra Bold (TGSEB), Whole & Crushed",
    moisture: "Max 11.5%",
    packaging: "Multi-ply kraft bags (25kg, 50kg), custom retail canisters, vacuum bulk bags",
    applications: "Meat seasoning, universal culinary seasoning, pharmaceutical extracts, spice blends"
  },
  {
    id: "03",
    name: "Cinnamon",
    title: "Natural Aromatic Cinnamon",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/03_Cinnamon.png",
    origin: "Idukki, Kerala",
    originDetail: "Carefully sourced from selected local farmers in Idukki, known for its rich aroma and authentic character.",
    description: "Naturally harvested tree bark cured to develop warm, delicate sweetness without the harshness of industrial cassia. Rich in natural cinnamaldehyde oils.",
    grades: "Cinnamon Quills (C5 Extra Special, M4), Cut Sticks, Ground Powder",
    moisture: "Max 12%",
    packaging: "Bundles in protective cartons, food-grade tin ties, 20kg bulk export boxes",
    applications: "Fine baking, dessert infusions, spiced beverages, mulled wines, curries"
  },
  {
    id: "04",
    name: "Cloves",
    title: "Premium Whole Cloves",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/04_Cloves.png",
    origin: "Idukki, Kerala",
    originDetail: "Sourced from trusted local farmers in Idukki, selected for quality, aroma, and natural freshness.",
    description: "Hand-harvested unexpanded flower buds with plump crowns and reddish-brown stems, boasting concentrated eugenol oil content for an intense, warming sensation.",
    grades: "Hand-picked Hand-sorted (HPS Grade 1), Whole Cleaned Cloves",
    moisture: "Max 10%",
    packaging: "Hermetic barrier bags, 10kg & 25kg export cartons",
    applications: "Beverages, pickling, oral care, meat marinades, biryani & garam masala"
  },
  {
    id: "05",
    name: "Nutmeg",
    title: "Natural Nutmeg & Mace",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/05_Nutmeg.png",
    origin: "Idukki, Kerala",
    originDetail: "Sourced from local farmers in Idukki, preserving the authentic flavour and character of the region.",
    description: "Whole oval seed kernels with distinct marbling and sweet nutty aroma, harvested from pesticide-conscious hill agroforests.",
    grades: "Sound Inshell, Shelled Whole ABCD Grade, Clean Sorted",
    moisture: "Max 8%",
    packaging: "Jute bags with inner poly liner, retail zip pouches, 25kg bulk bags",
    applications: "Cream sauces, baking, eggnog, savory cheese preparations, herbal formulations"
  },
  {
    id: "06",
    name: "Turmeric",
    title: "Natural Turmeric Fingers & Powder",
    category: "spices",
    image: "assets/ZARVEA_separate_product_photos/06_Turmeric.png",
    origin: "Idukki, Kerala",
    originDetail: "Sourced from trusted local farmers in Idukki, chosen for its natural colour, aroma, and quality.",
    description: "Deep golden-orange rhizomes with high natural curcumin levels, harvested from nutrient-rich organic soils and cured naturally without artificial polishes.",
    grades: "Alleppey Finger Turmeric (High Curcumin 4.5% - 5.5%), Ultra-Fine Ground",
    moisture: "Max 10%",
    packaging: "25kg / 50kg PP bags with liners, 1kg retail nitrogen-flushed packs",
    applications: "Health supplements, golden milk, natural food colorant, base spice blends"
  },
  {
    id: "07",
    name: "Virgin Coconut Oil",
    title: "Pure & Naturally Produced VCO",
    category: "beverages",
    image: "assets/ZARVEA_separate_product_photos/07_Virgin_Coconut_Oil.png",
    origin: "Processed in our own mill in Lakshadweep",
    originDetail: "Raw materials are procured from local farmers and processed in our own mill in Lakshadweep to produce premium Virgin Coconut Oil.",
    description: "Cold-pressed from the fresh white meat of Lakshadweep island coconuts. Crystal clear, water-white, unrefined, and zero chemical bleach with subtle natural coconut fragrance.",
    grades: "100% Raw Extra Virgin Cold-Pressed, Centrifuged Grade A",
    moisture: "Max 0.1% (Ultra-low moisture for extended shelf life)",
    packaging: "250ml / 500ml / 1L dark glass bottles, 200L food-grade drums, IBC totes",
    applications: "Direct dietary consumption, keto cooking, premium hair/skin care, infant care"
  },
  {
    id: "08",
    name: "Tea Powder",
    title: "Premium Regional Tea (CTC & Dust)",
    category: "beverages",
    image: "assets/ZARVEA_separate_product_photos/08_Tea_Powder.png",
    origin: "Idukki, Palakkad & Wayanad, Kerala",
    originDetail: "Sourced from trusted local farmers across Idukki, Palakkad, and Wayanad, selected for quality and distinctive flavour.",
    description: "Full-bodied CTC black tea blend yielding a rich reddish-amber liquor, brisk briskness, and invigorating depth ideal for traditional milk chai and iced teas.",
    grades: "BOP (Broken Orange Pekoe), PD (Pekoe Dust), Super Red Dust",
    moisture: "Max 6.5%",
    packaging: "500g vacuum foil packs, 30kg multi-layer kraft paper sacks",
    applications: "Cafes, hospitality, daily milk tea brewing, iced beverage concentrates"
  },
  {
    id: "09",
    name: "Tea Leaves",
    title: "Freshly Sourced Orthodox Whole Leaf Tea",
    category: "beverages",
    image: "assets/ZARVEA_separate_product_photos/09_Tea_Leaves.png",
    origin: "Idukki, Palakkad & Wayanad, Kerala",
    originDetail: "Sourced from local farmers across Idukki, Palakkad, and Wayanad, reflecting the natural character of Kerala's tea-growing regions.",
    description: "Artisanal high-elevation orthodox tea leaves, carefully rolled to preserve delicate floral undertones, golden tips, and antioxidant richness.",
    grades: "FTGFOP1 (Fine Tippy Golden Flowery Orange Pekoe), Green Tea Orthodox",
    moisture: "Max 5.5%",
    packaging: "Airtight metal caddies, 100g luxury pouches, 20kg moisture-barrier tea chests",
    applications: "Specialty tea salons, wellness infusions, single-estate tea menus"
  },
  {
    id: "10",
    name: "Coffee Powder",
    title: "Authentic Regional Roast & Ground Coffee",
    category: "beverages",
    image: "assets/ZARVEA_separate_product_photos/10_Coffee_Powder.png",
    origin: "Idukki, Palakkad & Wayanad, Kerala",
    originDetail: "Sourced from selected local farmers across Idukki, Palakkad, and Wayanad, delivering rich aroma and authentic coffee character.",
    description: "Slow-roasted using shade-grown Malabar beans. Delivers a thick crema, cocoa-caramel fragrance, and smooth lingering finish without astringency.",
    grades: "Pure Filter Grind (80/20 & 100% Pure variants), Espresso Fine Grind",
    moisture: "Max 3.5%",
    packaging: "250g & 500g one-way degassing valve foil bags, 25kg bulk barrels",
    applications: "South Indian filter coffee, commercial espresso machines, cold brew steep"
  },
  {
    id: "11",
    name: "Coffee Seeds",
    title: "Premium Green & Roasted Coffee Beans",
    category: "beverages",
    image: "assets/ZARVEA_separate_product_photos/11_Coffee_Seeds.png",
    origin: "Idukki, Palakkad & Wayanad, Kerala",
    originDetail: "Sourced from trusted local farmers across Idukki, Palakkad, and Wayanad, with a focus on quality and origin.",
    description: "Carefully graded green raw coffee beans and whole roasted beans grown under the tropical forest canopies of the Western Ghats.",
    grades: "Robusta Parchment AB, Robusta Cherry AA, Arabica Plantation A",
    moisture: "Max 11.5% (Green beans)",
    packaging: "60kg GrainPro lined jute bags, 1kg retail roasted valve bags",
    applications: "Artisan roasters, green coffee import houses, specialty blends"
  }
];

// Navbar Behavior
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const topAnnouncement = document.getElementById('top-announcement');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!navbar) return;

  function updateNavbar() {
    const announcementHeight = topAnnouncement ? topAnnouncement.offsetHeight : 0;
    const scrollY = window.scrollY;

    // Dynamic top position:
    // When at top (scrollY = 0), navbar sits immediately below announcement bar.
    // As user scrolls down, announcement bar moves out of view and navbar smoothly reaches top: 0.
    // Once scrolled past the announcement bar (scrollY >= announcementHeight), navbar sticks flush at top: 0.
    const topPos = Math.max(0, announcementHeight - scrollY);
    navbar.style.top = `${topPos}px`;

    if (scrollY > 15) {
      navbar.classList.add('bg-emerald-950/95', 'shadow-2xl', 'backdrop-blur-md', 'border-b', 'border-amber-500/20');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-emerald-950/95', 'shadow-2xl', 'backdrop-blur-md', 'border-b', 'border-amber-500/20');
      navbar.classList.add('bg-transparent');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', updateNavbar);
  updateNavbar();

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Product Catalog & Modal Filter System
function initProductCatalog() {
  const container = document.getElementById('product-grid');
  const filterButtons = document.querySelectorAll('.product-filter-btn');
  const modal = document.getElementById('product-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');

  if (!container) return;

  function renderProducts(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? productsData 
      : productsData.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = "glass-panel-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-amber-500/20 hover:border-amber-400/60";
      card.setAttribute('data-id', p.id);
      
      card.innerHTML = `
        <div class="product-img-wrapper h-52 w-full flex items-center justify-center p-4 bg-emerald-950/60 relative overflow-hidden">
          <span class="absolute top-3 left-3 text-xs font-bold font-brand tracking-widest px-2.5 py-1 rounded-full bg-black/60 text-amber-300 border border-amber-500/30">
            ${p.id}
          </span>
          <span class="absolute top-3 right-3 text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${p.category === 'spices' ? 'bg-amber-900/60 text-amber-200 border border-amber-600/40' : 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/40'}">
            ${p.category === 'spices' ? 'Pure Spice' : 'Natural / Beverage'}
          </span>
          <img src="${p.image}" alt="${p.name} - Zarvea Natural Spices" loading="lazy" class="h-44 w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="text-xs text-amber-300/80 tracking-wide font-medium truncate">${p.origin}</span>
            </div>
            <h3 class="text-xl font-bold font-brand text-amber-100 group-hover:text-amber-300 transition-colors">
              ${p.name}
            </h3>
            <p class="text-xs text-amber-200/60 font-editorial italic mb-3">
              ${p.title}
            </p>
            <p class="text-sm text-emerald-100/75 line-clamp-2 mb-4 leading-relaxed">
              ${p.description}
            </p>
          </div>
          <div class="pt-3 border-t border-emerald-900/60 flex items-center justify-between">
            <span class="text-xs text-amber-300/90 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Specifications
              <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <button type="button" class="text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors">
              Inquire
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(p));
      container.appendChild(card);
    });
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-amber-400', 'text-emerald-950', 'shadow-lg');
        b.classList.add('bg-emerald-900/40', 'text-amber-200', 'hover:bg-emerald-900/80');
      });
      btn.classList.add('bg-amber-400', 'text-emerald-950', 'shadow-lg');
      btn.classList.remove('bg-emerald-900/40', 'text-amber-200', 'hover:bg-emerald-900/80');

      renderProducts(btn.getAttribute('data-filter'));
    });
  });

  // Open Modal function
  function openProductModal(product) {
    if (!modal) return;
    
    document.getElementById('modal-product-number').textContent = `Product ${product.id}`;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-title').textContent = product.title;
    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-img').alt = product.name;
    document.getElementById('modal-product-origin').textContent = product.origin;
    document.getElementById('modal-product-origin-desc').textContent = product.originDetail;
    document.getElementById('modal-product-desc').textContent = product.description;
    document.getElementById('modal-product-grades').textContent = product.grades;
    document.getElementById('modal-product-moisture').textContent = product.moisture;
    document.getElementById('modal-product-packaging').textContent = product.packaging;
    document.getElementById('modal-product-applications').textContent = product.applications;

    // Pre-fill modal order CTA
    const modalInquireBtn = document.getElementById('modal-inquire-cta');
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeModal();
        const selectElement = document.getElementById('inquiry-product-select');
        if (selectElement) {
          selectElement.value = product.name;
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    // Direct WhatsApp modal CTA
    const modalWaBtn = document.getElementById('modal-whatsapp-cta');
    if (modalWaBtn) {
      const waText = encodeURIComponent(`Hello Zarvea Spices, I am interested in bulk/export inquiry for ${product.name} (${product.title}). Could you provide specifications and pricing?`);
      modalWaBtn.href = `https://wa.me/919526475878?text=${waText}`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initial render
  renderProducts('all');
}

// Terroir & Origin Explorer Interactive Tabs
function initTerroirTabs() {
  const tabButtons = document.querySelectorAll('.terroir-tab-btn');
  const panels = document.querySelectorAll('.terroir-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-region');
      
      tabButtons.forEach(b => {
        b.classList.remove('border-amber-400', 'bg-amber-400/15', 'text-amber-300');
        b.classList.add('border-transparent', 'bg-emerald-950/40', 'text-emerald-200/70');
      });
      btn.classList.add('border-amber-400', 'bg-amber-400/15', 'text-amber-300');
      btn.classList.remove('border-transparent', 'bg-emerald-950/40', 'text-emerald-200/70');

      panels.forEach(p => {
        if (p.id === `terroir-${target}`) {
          p.classList.remove('hidden');
          p.classList.add('block');
        } else {
          p.classList.add('hidden');
          p.classList.remove('block');
        }
      });
    });
  });
}

// B2B Contact Form submission simulation
function initContactForm() {
  const form = document.getElementById('b2b-inquiry-form');
  const alertSuccess = document.getElementById('form-success-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Read input values for potential direct WhatsApp transfer
    const name = document.getElementById('inquiry-name')?.value || 'Valued Customer';
    const company = document.getElementById('inquiry-company')?.value || 'N/A';
    const email = document.getElementById('inquiry-email')?.value || '';
    const phone = document.getElementById('inquiry-phone')?.value || '';
    const product = document.getElementById('inquiry-product-select')?.value || 'Spices';
    const volume = document.getElementById('inquiry-volume')?.value || 'Inquiry';
    const message = document.getElementById('inquiry-message')?.value || '';

    // Show inline success message
    if (alertSuccess) {
      alertSuccess.classList.remove('hidden');
      alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Optional: offer quick WhatsApp forwarding button
    const forwardWaBtn = document.getElementById('forward-to-wa-btn');
    if (forwardWaBtn) {
      const text = encodeURIComponent(`*New B2B Inquiry - Zarvea Natural Spices*\n*Name:* ${name}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}\n*Product:* ${product}\n*Target Volume:* ${volume}\n*Notes:* ${message}`);
      forwardWaBtn.href = `https://wa.me/919526475878?text=${text}`;
    }

    form.reset();
  });
}

// Smooth anchor scrolling & active link highlighting
function initScrollAnimations() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-anchor');

  if (sections.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        link.classList.remove('text-amber-400');
        link.classList.add('text-emerald-100');
        if (href === `#${current}`) {
          link.classList.add('text-amber-400');
          link.classList.remove('text-emerald-100');
        }
      }
    });
  }, { passive: true });
}

// B2B Trade FAQs Page Interactive Search & Category Filter System
function initFaqPage() {
  const searchInput = document.getElementById('faq-search-input');
  const catButtons = document.querySelectorAll('.faq-cat-btn');
  const faqItems = document.querySelectorAll('.faq-item');
  const noResultsMsg = document.getElementById('faq-no-results');
  const expandAllBtn = document.getElementById('faq-expand-all');

  if (faqItems.length === 0) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterFaqs() {
    let visibleCount = 0;
    const q = searchQuery.toLowerCase().trim();

    faqItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      const text = (item.textContent || '').toLowerCase();

      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = !q || text.includes(q);

      if (matchesCat && matchesSearch) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });

    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.classList.remove('hidden');
      } else {
        noResultsMsg.classList.add('hidden');
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterFaqs();
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.classList.remove('bg-amber-400', 'text-emerald-950', 'font-bold');
        b.classList.add('bg-emerald-950/60', 'text-emerald-200/80', 'border-amber-500/30');
      });
      btn.classList.add('bg-amber-400', 'text-emerald-950', 'font-bold');
      btn.classList.remove('bg-emerald-950/60', 'text-emerald-200/80', 'border-amber-500/30');
      currentCategory = btn.getAttribute('data-faq-cat') || 'all';
      filterFaqs();
    });
  });

  if (expandAllBtn) {
    let allExpanded = false;
    expandAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      faqItems.forEach(item => {
        item.open = allExpanded;
      });
      expandAllBtn.innerHTML = allExpanded 
        ? `<svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>Collapse All` 
        : `<svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>Expand All`;
    });
  }

  // Open specific FAQ from URL hash if provided
  if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl && targetEl.tagName.toLowerCase() === 'details') {
      targetEl.open = true;
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }
}
