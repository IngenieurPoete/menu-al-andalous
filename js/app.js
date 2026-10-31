// ==========================================================================
// AL ANDALOUS Grill&co — MOTEUR INTERACTIF MOBILE
// Design Gastronomique Haut de Gamme — Bascule Jour / Nuit Dynamique
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation de l'état
  const urlParams = new URLSearchParams(window.location.search);
  const initialLoc = urlParams.get('loc') === 'harhoura' ? 'harhoura' : 'prestigia';

  const state = {
    currentLocation: initialLoc,
    currentCategory: 'all',
    searchQuery: '',
    lightboxDish: null,
    currentTheme: document.documentElement.getAttribute('data-theme') || 'dark'
  };

  // 2. Éléments DOM
  const elements = {
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    themeLabel: document.getElementById('theme-label'),
    locBtns: document.querySelectorAll('.loc-btn'),
    locName: document.getElementById('loc-name'),
    locAddress: document.getElementById('loc-address'),
    locPhoneLink: document.getElementById('loc-phone-link'),
    locMapsLink: document.getElementById('loc-maps-link'),
    locWifiBtn: document.getElementById('loc-wifi-btn'),
    categoriesScroll: document.getElementById('categories-scroll'),
    dishesContainer: document.getElementById('dishes-container'),
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxPrice: document.getElementById('lightbox-price'),
    lightboxClose: document.getElementById('lightbox-close'),
    toast: document.getElementById('toast'),
    toastText: document.getElementById('toast-text'),
    boucherieBtn: document.getElementById('boucherie-link-btn')
  };

  // -------------------------------------------------------------
  // 3. GESTION DU SYSTÈME JOUR / NUIT
  // -------------------------------------------------------------
  const sunIconSVG = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;

  const moonIconSVG = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  function applyTheme(themeName) {
    state.currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('alandalous_theme', themeName);

    if (elements.themeIcon && elements.themeLabel) {
      if (themeName === 'light') {
        elements.themeIcon.innerHTML = sunIconSVG;
        elements.themeLabel.textContent = 'Déjeuner';
      } else {
        elements.themeIcon.innerHTML = moonIconSVG;
        elements.themeLabel.textContent = 'Dîner & Braise';
      }
    }
  }

  // Toggle au clic
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
      showToast(nextTheme === 'light' ? 'Ambiance Déjeuner activée' : 'Ambiance Dîner & Braise activée');
    });
  }

  // -------------------------------------------------------------
  // 4. MISE À JOUR DE L'ÉTABLISSEMENT
  // -------------------------------------------------------------
  function updateLocation(locId) {
    state.currentLocation = locId;
    const loc = RESTAURANT_DATA.info.locations[locId];

    elements.locBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.loc === locId);
    });

    if (elements.locName) elements.locName.textContent = loc.name;
    if (elements.locAddress) elements.locAddress.textContent = loc.address;
    if (elements.locPhoneLink) elements.locPhoneLink.href = `tel:${loc.phone.replace(/\s+/g, '')}`;
    if (elements.locMapsLink) elements.locMapsLink.href = loc.googleMaps;
  }

  // -------------------------------------------------------------
  // 5. WI-FI & TOAST
  // -------------------------------------------------------------
  function copyWifi() {
    const loc = RESTAURANT_DATA.info.locations[state.currentLocation];
    navigator.clipboard.writeText(loc.wifiPass).then(() => {
      showToast(`Wi-Fi copié : ${loc.wifiPass} (${loc.wifiSSID})`);
    }).catch(() => {
      showToast(`Code Wi-Fi : ${loc.wifiPass}`);
    });
  }

  let toastTimeout;
  function showToast(message) {
    if (!elements.toast) return;
    elements.toastText.textContent = message;
    elements.toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 3200);
  }

  // -------------------------------------------------------------
  // 6. ONGLETS DE CATÉGORIES (SANS ÉMOJIS)
  // -------------------------------------------------------------
  function renderCategories() {
    if (!elements.categoriesScroll) return;
    elements.categoriesScroll.innerHTML = '';

    RESTAURANT_DATA.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-pill ${state.currentCategory === cat.id ? 'active' : ''}`;
      btn.dataset.category = cat.id;
      btn.innerHTML = `<span>${cat.name}</span>`;
      
      btn.addEventListener('click', () => {
        state.currentCategory = cat.id;
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        renderDishes();
      });

      elements.categoriesScroll.appendChild(btn);
    });
  }

  // -------------------------------------------------------------
  // 7. CARTES DE PLATS
  // -------------------------------------------------------------
  function renderDishes() {
    if (!elements.dishesContainer) return;
    elements.dishesContainer.innerHTML = '';

    const filtered = RESTAURANT_DATA.dishes.filter(dish => {
      const matchesCategory = state.currentCategory === 'all' || dish.category === state.currentCategory;
      const q = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        dish.name.toLowerCase().includes(q) || 
        dish.description.toLowerCase().includes(q) ||
        (dish.details && dish.details.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      elements.dishesContainer.innerHTML = `
        <div class="no-results">
          <h3>Aucun plat trouvé</h3>
          <p>Essayez avec un autre mot-clé ou sélectionnez une catégorie ci-dessus.</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'dishes-grid';

    filtered.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card';

      card.innerHTML = `
        <div class="dish-image-wrapper" data-dish-id="${dish.id}">
          <img class="dish-image" 
               src="${dish.image}" 
               alt="${dish.name}" 
               loading="lazy">
          ${dish.badge ? `<div class="dish-badge">${dish.badge}</div>` : ''}
          <div class="zoom-hint" title="Agrandir la photo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
        <div class="dish-content">
          <div class="dish-header">
            <h3 class="dish-title">${dish.name}</h3>
            <span class="dish-price">${dish.price} ${RESTAURANT_DATA.info.currency}</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
          ${dish.details ? `<div class="dish-details">${dish.details}</div>` : ''}
        </div>
      `;

      const imgWrapper = card.querySelector('.dish-image-wrapper');
      imgWrapper.addEventListener('click', () => {
        openLightbox(dish);
      });

      grid.appendChild(card);
    });

    elements.dishesContainer.appendChild(grid);
  }

  // -------------------------------------------------------------
  // 8. MODALE ZOOM PHOTO (LIGHTBOX)
  // -------------------------------------------------------------
  function openLightbox(dish) {
    if (!elements.lightboxModal) return;
    state.lightboxDish = dish;
    elements.lightboxImg.src = dish.image;
    elements.lightboxTitle.textContent = dish.name;
    elements.lightboxPrice.textContent = `${dish.price} ${RESTAURANT_DATA.info.currency}`;
    elements.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!elements.lightboxModal) return;
    elements.lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // -------------------------------------------------------------
  // 9. ÉCOUTEURS D'ÉVÉNEMENTS
  // -------------------------------------------------------------
  elements.locBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateLocation(btn.dataset.loc);
    });
  });

  if (elements.locWifiBtn) {
    elements.locWifiBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyWifi();
    });
  }

  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.searchClear) {
        elements.searchClear.style.display = state.searchQuery ? 'flex' : 'none';
      }
      renderDishes();
    });
  }

  if (elements.searchClear) {
    elements.searchClear.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.searchClear.style.display = 'none';
      renderDishes();
    });
  }

  if (elements.lightboxClose) {
    elements.lightboxClose.addEventListener('click', closeLightbox);
  }
  if (elements.lightboxModal) {
    elements.lightboxModal.addEventListener('click', (e) => {
      if (e.target === elements.lightboxModal) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  if (elements.boucherieBtn) {
    elements.boucherieBtn.href = RESTAURANT_DATA.info.boucherie.url;
  }

  // Initialisation
  applyTheme(state.currentTheme);
  updateLocation(state.currentLocation);
  renderCategories();
  renderDishes();
});
