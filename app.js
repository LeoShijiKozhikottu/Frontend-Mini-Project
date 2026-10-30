/**
 * WebLab Hub - Master Application Logic
 * Supports: Gallery Catalogue, All-in-One Stream, and Dedicated Viewport Runner
 * Author: Leo Shiji (23MIC0082), VIT University
 */

const projects = [
  { id: 1, title: 'Local Web Server', category: 'Foundations & layouts', desc: 'Local HTTP server environment test page and student diagnostics.', tags: ['HTML5', 'CSS3', 'Networking'] },
  { id: 2, title: 'Welcome to VIT', category: 'Foundations & layouts', desc: 'University portal showcase with campus highlights and academic programs.', tags: ['HTML5', 'CSS3', 'Design'] },
  { id: 3, title: 'Personal Portfolio', category: 'Foundations & layouts', desc: 'Personal portfolio for Leo Shiji featuring bio, academic achievements, and skills.', tags: ['HTML5', 'CSS3', 'Portfolio'] },
  { id: 4, title: 'Travel Bucket List', category: 'Foundations & layouts', desc: 'Ordered, unordered, and nested list structures showcasing dream destinations.', tags: ['HTML5', 'CSS3', 'Lists'] },
  { id: 5, title: 'Science and Technology', category: 'Foundations & layouts', desc: 'Semantic article styling, typography hierarchy, and citations.', tags: ['HTML5', 'CSS3', 'Typography'] },
  { id: 6, title: 'Employee Profile', category: 'Foundations & layouts', desc: 'Subscript, superscript, chemical formulas, and tabular employee attributes.', tags: ['HTML5', 'CSS3', 'Tables'] },
  { id: 7, title: 'Travel Destinations', category: 'Foundations & layouts', desc: 'Multi-column image gallery with tourist destination spotlights.', tags: ['HTML5', 'CSS3', 'Gallery'] },
  { id: 8, title: 'Employee ID Card', category: 'Foundations & layouts', desc: 'Fixed-dimension badge design with profile photo and barcode styling.', tags: ['HTML5', 'CSS3', 'Component'] },
  { id: 9, title: 'Computer Science Department', category: 'Foundations & layouts', desc: 'Department hub with modular pages for overview, faculty, programs, and research.', tags: ['HTML5', 'CSS3', 'Navigation'] },
  { id: 10, title: 'Website Layout', category: 'Foundations & layouts', desc: 'Classic multi-column table layout with header, navigation, and content sections.', tags: ['HTML5', 'CSS3', 'Layouts'] },
  { id: 11, title: 'Employee Management System', category: 'Foundations & layouts', desc: 'Dashboard interface with persistent sidebar navigation and dashboard metrics.', tags: ['HTML5', 'CSS3', 'Dashboard'] },
  { id: 12, title: 'Div Layout', category: 'Foundations & layouts', desc: 'Structural container block representation using CSS div boxes.', tags: ['HTML5', 'CSS3', 'BoxModel'] },
  { id: 13, title: 'Hospital Header', category: 'Foundations & layouts', desc: 'Healthcare portal header with branch locator, search bar, and emergency services.', tags: ['HTML5', 'CSS3', 'Header'] },
  { id: 14, title: 'CityCare Hospital', category: 'Foundations & layouts', desc: 'Complete health center web portal with service listings, emergency desk, and footer.', tags: ['HTML5', 'CSS3', 'Portal'] },
  { id: 15, title: 'Smart Search Engine', category: 'Site experiences', desc: 'Search engine interface with real-time query filtering and academic tabs.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 16, title: 'GameZone', category: 'Site experiences', desc: 'Neon esports and gaming portal with game cards, ratings, and genre filters.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 17, title: 'Company Profile', category: 'Site experiences', desc: 'Corporate agency landing page for Apex Digital Solutions.', tags: ['HTML5', 'CSS3', 'Design'] },
  { id: 18, title: 'Library Management System', category: 'Site experiences', desc: 'Digital library catalog dashboard with book search and lending stats.', tags: ['HTML5', 'CSS3', 'Dashboard'] },
  { id: 19, title: 'Hospital Footer', category: 'Site experiences', desc: 'Multi-column medical footer with emergency contact, departments, and compliance.', tags: ['HTML5', 'CSS3', 'Footer'] },
  { id: 20, title: 'Employee Registration', category: 'Forms & checkout', desc: 'HTML5 form validation, onboarding media block, and input pattern matching.', tags: ['HTML5', 'CSS3', 'Forms'] },
  { id: 21, title: 'Student Login', category: 'Forms & checkout', desc: 'Student portal authentication with audio briefing and credentials validation.', tags: ['HTML5', 'CSS3', 'Forms'] },
  { id: 22, title: 'Registration Form', category: 'Forms & checkout', desc: 'National Technical Symposium registration portal with event pass options.', tags: ['HTML5', 'CSS3', 'Forms'] },
  { id: 23, title: 'Patient Registration', category: 'Forms & checkout', desc: 'Clinical admission portal capturing medical history, symptoms, and emergency contacts.', tags: ['HTML5', 'CSS3', 'Forms'] },
  { id: 24, title: 'Checkout and Payment', category: 'Forms & checkout', desc: 'Three-step e-commerce checkout flow: Customer details, Payment, and Cart summary.', tags: ['HTML5', 'CSS3', 'MultiStep'] },
  { id: 25, title: 'Employee Form with JavaScript', category: 'Forms & checkout', desc: 'Dynamic client-side registration processing with real-time summary table generation.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 26, title: 'Login Validation', category: 'Forms & checkout', desc: 'Real-time client-side authentication validation with error message handling.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 27, title: 'Student Registration', category: 'Forms & checkout', desc: 'Form validation with regular expression checks for name, email, phone, and gender.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 28, title: 'Course Registration', category: 'Forms & checkout', desc: 'Interactive course selection system with prerequisite and credit validation.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 29, title: 'Mouse Events', category: 'JavaScript interactions', desc: 'DOM mouse event handlers: mouseenter, mouseleave, mouseover, click, and dblclick.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 30, title: 'Interactive Product Card', category: 'JavaScript interactions', desc: 'E-commerce card with color swatch switcher, quantity stepper, and live pricing.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 31, title: 'Traffic Signal', category: 'JavaScript interactions', desc: 'Interactive traffic light simulation with manual STOP/READY/GO controls and timers.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 32, title: 'Weather Status', category: 'JavaScript interactions', desc: 'Dynamic weather dashboard switching conditions between Sunny, Rainy, and Stormy.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 33, title: 'Welcome Button', category: 'JavaScript interactions', desc: 'Personalized greeting generator with dynamic time-of-day greeting algorithm.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 34, title: 'Student Search', category: 'JavaScript interactions', desc: 'Live search filter across student records table with instantaneous regex matching.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 35, title: 'ATM PIN Entry', category: 'JavaScript interactions', desc: 'Simulated ATM terminal keypad with PIN masking, balance check, and cash withdrawal.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 36, title: 'Product Search', category: 'JavaScript interactions', desc: 'Live e-commerce product directory filter with instant category and price sorting.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 37, title: 'Online Exam', category: 'JavaScript interactions', desc: 'Interactive MCQ examination engine with countdown timer and instant evaluation.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 38, title: 'Campus Image Viewer', category: 'JavaScript interactions', desc: 'Interactive campus photo viewer with thumbnail strip and enlarged preview.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 39, title: 'Travel Photo Gallery', category: 'JavaScript interactions', desc: 'Travel image gallery with responsive flex grid and destination highlights.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 40, title: 'College Events 2026', category: 'Bootstrap sites', desc: 'Bootstrap-powered Gravitas 2026 event catalog, hackathons, and registration.', tags: ['Bootstrap', 'HTML5', 'CSS3'] },
  { id: 41, title: 'User Authentication', category: 'Forms & checkout', desc: 'Gravitas 2026 dual Login & Registration portal built with Bootstrap components.', tags: ['Bootstrap', 'HTML5', 'CSS3'] }
];

function sourcePath(number) {
  return `sites/${String(number).padStart(2, '0')}.html`;
}

function frame(number, title, height) {
  return `<iframe src="${sourcePath(number)}" title="${number}. ${title}" width="100%" height="${height}" loading="lazy"></iframe>`;
}

/* ==========================================================================
   1. Showcase Hub Gallery Page
   ========================================================================== */
function renderGallery() {
  const root = document.getElementById('project-list');
  const searchInput = document.getElementById('gallery-search');
  const sortSelect = document.getElementById('gallery-sort');
  const filtersContainer = document.getElementById('gallery-filters');
  const countDisplay = document.getElementById('visible-count');
  const emptyState = document.getElementById('empty-message');

  if (!root) return;

  const categories = [
    'All Projects',
    'Foundations & layouts',
    'Site experiences',
    'Forms & checkout',
    'JavaScript interactions',
    'Bootstrap sites'
  ];

  let activeCategory = 'All Projects';

  // Render Category Filter Chips
  if (filtersContainer) {
    filtersContainer.innerHTML = categories.map((cat, index) => {
      const count = cat === 'All Projects' 
        ? projects.length 
        : projects.filter(p => p.category === cat).length;
      return `
        <button class="category-chip${index === 0 ? ' active' : ''}" type="button" data-category="${cat}">
          ${cat} <span style="font-size:10px; opacity:0.75;">(${count})</span>
        </button>
      `;
    }).join('');
  }

  // Render Project Cards Grid
  function renderCards(list) {
    root.innerHTML = list.map(project => {
      const numStr = String(project.id).padStart(2, '0');
      const tagHtml = project.tags.map(t => {
        let cls = 'tech-tag';
        if (t === 'JavaScript' || t === 'JS') cls += ' js';
        else if (t === 'CSS3') cls += ' css';
        else if (t === 'HTML5') cls += ' html';
        else if (t === 'Bootstrap') cls += ' bs';
        return `<span class="${cls}">${t}</span>`;
      }).join('');

      return `
        <article class="project-card" data-id="${project.id}" data-category="${project.category}" data-search="${project.id} ${project.title} ${project.category} ${project.desc} ${project.tags.join(' ')}">
          <div class="card-preview-wrapper">
            <span class="card-num-badge">#${numStr}</span>
            <span class="card-category-badge">${project.category.split(' ')[0]}</span>
            <iframe src="${sourcePath(project.id)}" loading="lazy" tabindex="-1" title="${project.title}"></iframe>
            
            <div class="card-action-overlay">
              <a class="overlay-btn btn-launch" href="site.html?id=${project.id}">
                ↗ Open Full Site
              </a>
              <button class="overlay-btn btn-modal" type="button" onclick="openPreviewModal(${project.id})">
                👁️ Quick Preview
              </button>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">
              <a href="site.html?id=${project.id}">#${project.id}. ${project.title}</a>
            </h3>
            <p class="card-description">${project.desc}</p>
            <div class="card-tag-row">${tagHtml}</div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Initial render
  renderCards(projects);

  // Filter & Search Handler
  const filterAndSort = () => {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const sortVal = sortSelect ? sortSelect.value : 'num-asc';

    let filtered = projects.filter(p => {
      const matchesCat = (activeCategory === 'All Projects' || p.category === activeCategory);
      const searchBlob = `${p.id} ${p.title} ${p.category} ${p.desc} ${p.tags.join(' ')}`.toLowerCase();
      const matchesQuery = !query || searchBlob.includes(query);
      return matchesCat && matchesQuery;
    });

    if (sortVal === 'num-desc') {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortVal === 'name-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => a.id - b.id);
    }

    renderCards(filtered);

    if (countDisplay) countDisplay.textContent = String(filtered.length);
    if (emptyState) emptyState.style.display = filtered.length === 0 ? 'block' : 'none';
  };

  if (searchInput) searchInput.addEventListener('input', filterAndSort);
  if (sortSelect) sortSelect.addEventListener('change', filterAndSort);

  if (filtersContainer) {
    filtersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-category]');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      filtersContainer.querySelectorAll('.category-chip').forEach(c => c.classList.toggle('active', c === btn));
      filterAndSort();
    });
  }

  // Global Keyboard Shortcut: '/' to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.target.matches('input, textarea, select')) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });
}

// Hero Interactive Switcher
function switchStagePreview(num, title, btn) {
  const frame = document.getElementById('heroStageFrame');
  const titleEl = document.getElementById('stageTitle');
  if (frame) frame.src = sourcePath(num);
  if (titleEl) titleEl.textContent = `${num}. ${title}`;
  document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// In-Page Quick Preview Modal Handlers
function openPreviewModal(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  const modal = document.getElementById('previewModal');
  const frame = document.getElementById('modalFrame');
  const title = document.getElementById('modalTitle');
  const badge = document.getElementById('modalId');
  const openExt = document.getElementById('modalOpenExternal');

  if (title) title.textContent = p.title;
  if (badge) badge.textContent = `#${String(p.id).padStart(2, '0')}`;
  if (frame) frame.src = sourcePath(p.id);
  if (openExt) openExt.href = `site.html?id=${p.id}`;

  if (modal) modal.classList.add('open');
}

function closePreviewModal(e) {
  const modal = document.getElementById('previewModal');
  const frame = document.getElementById('modalFrame');
  if (modal) modal.classList.remove('open');
  if (frame) frame.src = '';
}

function setModalViewport(w, btn) {
  const container = document.getElementById('modalIframeContainer');
  if (container) container.style.width = w;
  document.querySelectorAll('.modal-device-btns .device-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function reloadModalFrame() {
  const frame = document.getElementById('modalFrame');
  if (frame) frame.src = frame.src;
}

// Random project launcher
function launchRandomProject() {
  const rand = Math.floor(Math.random() * projects.length) + 1;
  window.location.href = `site.html?id=${rand}`;
}

// Student Bio Modal
function openStudentBioModal() {
  const m = document.getElementById('studentBioModal');
  if (m) m.classList.add('open');
}

function closeStudentBioModal() {
  const m = document.getElementById('studentBioModal');
  if (m) m.classList.remove('open');
}

/* ==========================================================================
   2. All-in-One Continuous Stream Page (index.html)
   ========================================================================== */
function renderAllInOne() {
  const listRoot = document.getElementById('stream-project-list');
  const tocRoot = document.getElementById('tocList');
  if (!listRoot) return;

  // Render Table of Contents
  if (tocRoot) {
    tocRoot.innerHTML = projects.map(p => `
      <li class="toc-item" data-id="${p.id}">
        <a href="#site-${p.id}">
          <span class="toc-num">#${String(p.id).padStart(2, '0')}</span>
          <span class="toc-title">${p.title}</span>
        </a>
      </li>
    `).join('');
  }

  // Render Main Feed Blocks
  listRoot.innerHTML = projects.map(p => {
    let previewContent = '';

    if (p.id === 24) {
      previewContent = `
        <div class="multi-step-header">
          <button class="step-tab-btn active" onclick="switchStep24('sites/24.html', this)">Step 1: Customer Details</button>
          <button class="step-tab-btn" onclick="switchStep24('sites/24-payment.html', this)">Step 2: Payment Details</button>
          <button class="step-tab-btn" onclick="switchStep24('sites/24-summary.html', this)">Step 3: Cart Summary</button>
        </div>
        <div class="stream-frame-wrapper">
          <iframe id="frame24" src="sites/24.html" title="Checkout and Payment" loading="lazy"></iframe>
        </div>
      `;
    } else {
      previewContent = `
        <div class="stream-frame-wrapper">
          <iframe src="${sourcePath(p.id)}" title="${p.id}. ${p.title}" loading="lazy"></iframe>
        </div>
      `;
    }

    return `
      <section class="project-stream-block" id="site-${p.id}">
        <div class="block-header">
          <div class="block-title-group">
            <span class="block-number">#${String(p.id).padStart(2, '0')}</span>
            <h2 class="block-title">${p.title}</h2>
            <span class="block-category">${p.category}</span>
          </div>

          <div class="block-actions">
            <a class="btn-block-action highlight" href="site.html?id=${p.id}" target="_blank">
              ↗ Open Standalone
            </a>
            <button class="btn-block-action" onclick="reloadStreamBlock(this)">
              🔄 Refresh
            </button>
          </div>
        </div>

        <p class="block-desc">${p.desc}</p>
        ${previewContent}
      </section>
    `;
  }).join('');
}

function switchStep24(url, btn) {
  const f = document.getElementById('frame24');
  if (f) f.src = url;
  document.querySelectorAll('.step-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function reloadStreamBlock(btn) {
  const block = btn.closest('.project-stream-block');
  if (block) {
    const iframe = block.querySelector('iframe');
    if (iframe) iframe.src = iframe.src;
  }
}

function filterTOC() {
  const q = document.getElementById('tocFilterInput').value.toLowerCase().trim();
  document.querySelectorAll('.toc-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? 'block' : 'none';
  });
}

/* ==========================================================================
   3. Single Project Runner & Device Simulator (site.html)
   ========================================================================== */
function renderSingleSite() {
  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get('id'), 10);
  if (isNaN(id) || id < 1 || id > projects.length) id = 1;

  const current = projects[id - 1];
  document.title = `#${current.id}. ${current.title} — WebLab Hub`;

  // Update header text
  const numBadge = document.getElementById('runnerNum');
  const titleEl = document.getElementById('runnerTitle');
  const catBadge = document.getElementById('runnerCategory');
  const rawLink = document.getElementById('btnRawSite');
  const iframe = document.getElementById('runnerIframe');

  if (numBadge) numBadge.textContent = `#${String(current.id).padStart(2, '0')}`;
  if (titleEl) titleEl.textContent = current.title;
  if (catBadge) catBadge.textContent = current.category;
  if (rawLink) rawLink.href = sourcePath(current.id);
  if (iframe) iframe.src = sourcePath(current.id);

  // Populate Jump Select Dropdown
  const jumpSelect = document.getElementById('quickJumpSelect');
  if (jumpSelect) {
    jumpSelect.innerHTML = projects.map(p => `
      <option value="${p.id}" ${p.id === id ? 'selected' : ''}>
        #${String(p.id).padStart(2, '0')} — ${p.title}
      </option>
    `).join('');
  }

  // Prev / Next Navigation Buttons
  const prevContainer = document.getElementById('prevNavContainer');
  const nextContainer = document.getElementById('nextNavContainer');

  if (prevContainer) {
    if (id > 1) {
      const prev = projects[id - 2];
      prevContainer.innerHTML = `
        <a class="nav-direction-btn" href="site.html?id=${id - 1}">
          ← #${id - 1}. ${prev.title}
        </a>
      `;
    } else {
      prevContainer.innerHTML = ``;
    }
  }

  if (nextContainer) {
    if (id < projects.length) {
      const next = projects[id];
      nextContainer.innerHTML = `
        <a class="nav-direction-btn" href="site.html?id=${id + 1}">
          #${id + 1}. ${next.title} →
        </a>
      `;
    } else {
      nextContainer.innerHTML = ``;
    }
  }
}

function setDeviceViewport(mode, btn) {
  const frame = document.getElementById('deviceFrame');
  if (!frame) return;
  frame.className = 'stage-device-frame';
  if (mode === 'tablet') frame.classList.add('tablet');
  else if (mode === 'mobile') frame.classList.add('mobile');

  document.querySelectorAll('.vp-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function reloadRunnerFrame() {
  const iframe = document.getElementById('runnerIframe');
  if (iframe) iframe.src = iframe.src;
}

function jumpToProject(val) {
  window.location.href = `site.html?id=${val}`;
}

/* ==========================================================================
   Page Initializer
   ========================================================================== */

/* ==========================================================================
   Multi-Palette Color Theme Engine
   ========================================================================== */
const palettes = [
  { key: 'teal', name: 'Aurora Teal' },
  { key: 'sunset', name: 'Cosmic Sunset' },
  { key: 'emerald', name: 'Cyber Emerald' }
];

function initThemePalette() {
  const saved = localStorage.getItem('weblab_palette') || 'teal';
  applyPalette(saved);
}

function applyPalette(key) {
  const match = palettes.find(p => p.key === key) || palettes[0];
  if (match.key === 'teal') {
    document.body.removeAttribute('data-palette');
  } else {
    document.body.setAttribute('data-palette', match.key);
  }
  localStorage.setItem('weblab_palette', match.key);
  const label = document.getElementById('paletteName');
  if (label) label.textContent = match.name;
}

function cycleThemePalette() {
  const current = localStorage.getItem('weblab_palette') || 'teal';
  const currentIndex = palettes.findIndex(p => p.key === current);
  const nextIndex = (currentIndex + 1) % palettes.length;
  applyPalette(palettes[nextIndex].key);
}

document.addEventListener('DOMContentLoaded', () => {
  initThemePalette();
  const page = document.body.dataset.page;
  if (page === 'gallery') renderGallery();
  if (page === 'combined') renderAllInOne();
  if (page === 'site') renderSingleSite();
});

