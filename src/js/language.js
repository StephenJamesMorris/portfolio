let globalData = null;

export async function initApp() {
  try {
    const res = await fetch('/data.json'); // Path relative to public
    globalData = await res.json();
    
    // Determine language
    const savedLang = localStorage.getItem('lang');
    const userLang = navigator.language.startsWith('de') ? 'de' : 'en';
    const lang = savedLang || userLang;
    
    setLanguage(lang);
    setupButtons();
  } catch (e) {
    console.error("Failed to load data", e);
  }
}

function setLanguage(lang) {
  if (!globalData) return;
  const content = globalData.content[lang];

  // 1. Static Text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = key.split('.').reduce((acc, part) => acc && acc[part], content);
    if (val) el.textContent = val;
    el.classList.remove('skeleton-text');
  });

  // 2. Dynamic Lists
  renderList('experience-list', content.experience, renderJob);
  renderList('projects-grid', content.projects, renderProject);

  // 3. State
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  updateButtons(lang);
}

// Render Helpers
function renderList(id, items, templateFn) {
  const el = document.getElementById(id);
  if (el && items) el.innerHTML = items.map(templateFn).join('');
}

const renderJob = (job) => `
  <article class="job-card">
    <h3>${job.role} - ${job.company}</h3>
    <small>${job.period}</small>
    <ul>${job.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
  </article>
`;

const renderProject = (p) => `
  <article class="project-card">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="metric-highlight">${p.metric}</div>
    <div class="tech-tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
  </article>
`;

function setupButtons() {
  document.getElementById('btn-en').onclick = () => setLanguage('en');
  document.getElementById('btn-de').onclick = () => setLanguage('de');
}

function updateButtons(lang) {
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-${lang}`)?.classList.add('active');
}
