(() => {
  'use strict';

  const STORAGE_KEY = 'paradoks-d-task.tasks.v1';
  const THEME_KEY = 'paradoks-d-task.theme.v1';
  const TODAY = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const els = {
    html: document.documentElement,
    navItems: $$('.nav-item[data-view]'),
    breadcrumb: $('#breadcrumb-current'),
    date: $('#current-date'),
    pageTitle: $('#page-title'),
    tasksHeading: $('#tasks-heading'),
    tasksSubtitle: $('#tasks-subtitle'),
    list: $('#task-list'),
    visibleCount: $('#visible-count'),
    search: $('#task-search'),
    sort: $('#sort-select'),
    dialog: $('#task-dialog'),
    form: $('#task-form'),
    dialogTitle: $('#dialog-title'),
    taskId: $('#task-id'),
    title: $('#task-title'),
    description: $('#task-description'),
    category: $('#task-category'),
    priority: $('#task-priority'),
    dueDate: $('#task-due'),
    saveButton: $('#save-task-button'),
    toast: $('#toast'),
    importFile: $('#import-file'),
    sidebar: $('#sidebar'),
    scrim: $('#sidebar-scrim'),
    focusOverlay: $('#focus-overlay'),
  };

  const viewLabels = {
    all: { crumb: 'OVERVIEW', title: 'Beri ruang untuk<br><em>hal yang berarti.</em>', subtitle: 'Semua hal yang ingin kamu selesaikan, di satu tempat.' },
    today: { crumb: 'TODAY', title: 'Satu hari,<br><em>satu langkah.</em>', subtitle: 'Tugas yang punya tanggal target hari ini.' },
    upcoming: { crumb: 'UPCOMING', title: 'Yang akan datang,<br><em>tanpa terburu-buru.</em>', subtitle: 'Lihat ke depan, lalu siapkan langkah berikutnya.' },
    completed: { crumb: 'COMPLETED', title: 'Lihat sejauh apa<br><em>kamu melangkah.</em>', subtitle: 'Hal-hal yang sudah kamu tuntaskan layak diapresiasi.' },
  };

  let tasks = loadTasks();
  let currentView = 'all';
  let currentStatus = 'all';
  let toastTimer = null;
  let focusReturnTarget = null;

  function safeString(value, max = 500) {
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
  }

  function makeId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID();
    return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function normalizeTask(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const title = safeString(raw.title, 120);
    if (!title) return null;
    const idCandidate = safeString(raw.id, 100);
    const dueDate = typeof raw.dueDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.dueDate) ? raw.dueDate : '';
    const priority = ['high', 'medium', 'low'].includes(raw.priority) ? raw.priority : 'medium';
    const createdAt = Number.isFinite(Date.parse(raw.createdAt)) ? new Date(raw.createdAt).toISOString() : new Date().toISOString();
    return {
      id: /^[\w-]{1,100}$/.test(idCandidate) ? idCandidate : makeId(),
      title,
      description: safeString(raw.description, 500),
      category: safeString(raw.category, 40) || 'Personal',
      priority,
      dueDate,
      done: Boolean(raw.done),
      createdAt,
      completedAt: typeof raw.completedAt === 'string' ? raw.completedAt : null,
    };
  }

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(normalizeTask).filter(Boolean);
    } catch (error) {
      console.warn('Data tugas lokal tidak dapat dibaca.', error);
      return [];
    }
  }

  function persistTasks(showError = true) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      return true;
    } catch (error) {
      console.error('Gagal menyimpan tugas ke browser.', error);
      if (showError) showToast('Penyimpanan browser penuh atau tidak tersedia. Ekspor cadangan untuk menjaga data.');
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[char]));
  }

  function formatDate(dateString, options = {}) {
    if (!dateString) return '';
    const date = new Date(`${dateString}T12:00:00`);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric', month: 'short', ...(options.year ? { year: 'numeric' } : {}),
    }).format(date);
  }

  function niceCurrentDate() {
    return new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => els.toast.classList.remove('is-visible'), 3000);
  }

  function byDueDate(a, b) {
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return a.dueDate.localeCompare(b.dueDate);
  }

  function sortedTasks(input) {
    const result = [...input];
    switch (els.sort.value) {
      case 'priority': {
        const rank = { high: 0, medium: 1, low: 2 };
        return result.sort((a, b) => rank[a.priority] - rank[b.priority] || byDueDate(a, b));
      }
      case 'created': return result.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
      case 'title': return result.sort((a, b) => a.title.localeCompare(b.title, 'id'));
      case 'date':
      default: return result.sort((a, b) => byDueDate(a, b) || Date.parse(b.createdAt) - Date.parse(a.createdAt));
    }
  }

  function getVisibleTasks() {
    const today = TODAY();
    let result = tasks.filter(task => {
      if (currentView === 'today') return !task.done && task.dueDate === today;
      if (currentView === 'upcoming') return !task.done && task.dueDate && task.dueDate > today;
      if (currentView === 'completed') return task.done;
      return true;
    });

    if (currentStatus === 'active') result = result.filter(task => !task.done);
    if (currentStatus === 'done') result = result.filter(task => task.done);

    const query = els.search.value.trim().toLocaleLowerCase('id-ID');
    if (query) result = result.filter(task => [task.title, task.description, task.category, task.priority].join(' ').toLocaleLowerCase('id-ID').includes(query));
    return sortedTasks(result);
  }

  function datePill(task) {
    if (!task.dueDate) return '';
    const today = TODAY();
    let cls = '';
    let label = formatDate(task.dueDate, { year: task.dueDate.slice(0, 4) !== today.slice(0, 4) });
    if (!task.done && task.dueDate < today) { cls = ' due-overdue'; label = `Terlambat · ${label}`; }
    else if (!task.done && task.dueDate === today) { cls = ' due-today'; label = `Hari ini · ${label}`; }
    return `<span class="meta-pill${cls}"><span aria-hidden="true">◷</span>${escapeHtml(label)}</span>`;
  }

  function priorityInfo(priority) {
    const map = {
      high: { label: 'Penting', cls: 'priority-high', glyph: '↑' },
      medium: { label: 'Normal', cls: 'priority-medium', glyph: '•' },
      low: { label: 'Santai', cls: 'priority-low', glyph: '↓' },
    };
    return map[priority] || map.medium;
  }

  function renderTask(task, index) {
    const priority = priorityInfo(task.priority);
    const description = task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : '';
    const completedClass = task.done ? ' is-done' : '';
    const completedMark = task.done ? '✓' : '';
    const category = escapeHtml(task.category || 'Personal');
    return `
      <article class="task-item${completedClass}" data-task-id="${escapeHtml(task.id)}" style="animation-delay:${Math.min(index * 25, 160)}ms">
        <button class="task-check" type="button" data-action="toggle" data-task-id="${escapeHtml(task.id)}" aria-label="${task.done ? 'Tandai belum selesai' : 'Tandai selesai'}: ${escapeHtml(task.title)}" aria-pressed="${task.done ? 'true' : 'false'}">${completedMark}</button>
        <div class="task-main">
          <div class="task-title-row"><span class="task-title">${escapeHtml(task.title)}</span></div>
          ${description}
          <div class="task-meta"><span class="meta-pill category">${category}</span><span class="meta-pill ${priority.cls}"><span aria-hidden="true">${priority.glyph}</span>${priority.label}</span>${datePill(task)}</div>
        </div>
        <div class="task-actions">
          <button class="task-action" type="button" data-action="edit" data-task-id="${escapeHtml(task.id)}" aria-label="Edit tugas: ${escapeHtml(task.title)}" title="Edit">↗</button>
          <button class="task-action delete" type="button" data-action="delete" data-task-id="${escapeHtml(task.id)}" aria-label="Hapus tugas: ${escapeHtml(task.title)}" title="Hapus">×</button>
        </div>
      </article>`;
  }

  function emptyState() {
    const query = els.search.value.trim();
    if (query) return { title: 'Belum ada yang cocok.', description: 'Coba kata kunci lain atau ubah filter untuk menemukan tugasmu.' };
    if (currentView === 'today') return { title: 'Hari ini masih lapang.', description: 'Tidak ada tugas bertanggal hari ini. Gunakan ruang ini untuk mulai sesuatu yang baru.' };
    if (currentView === 'upcoming') return { title: 'Belum ada agenda berikutnya.', description: 'Tugas dengan tanggal target mendatang akan muncul di sini.' };
    if (currentView === 'completed' || currentStatus === 'done') return { title: 'Cerita selesai dimulai dari sini.', description: 'Saat kamu menuntaskan tugas, daftar pencapaianmu akan muncul di sini.' };
    if (currentStatus === 'active') return { title: 'Semua sudah tuntas.', description: 'Kamu sudah menyelesaikan semua tugas yang ada. Saat siap, tambahkan langkah baru.' };
    return { title: 'Mulai dari satu hal kecil.', description: 'Tulis satu tugas yang ingin kamu selesaikan. Tidak perlu sempurna — cukup mulai.' };
  }

  function renderList() {
    const visible = getVisibleTasks();
    els.list.setAttribute('aria-busy', 'false');
    if (!visible.length) {
      const empty = emptyState();
      els.list.innerHTML = `<div class="empty-state"><div class="empty-illustration" aria-hidden="true">D.</div><h3>${empty.title}</h3><p>${empty.description}</p><button class="button button-outline" type="button" data-open-task><span class="button-plus" aria-hidden="true">+</span> Buat tugas baru</button></div>`;
    } else {
      els.list.innerHTML = visible.map(renderTask).join('');
    }
    els.visibleCount.textContent = `${visible.length} tugas ditampilkan`;
    updateCounters();
  }

  function updateCounters() {
    const total = tasks.length;
    const done = tasks.filter(task => task.done).length;
    const active = total - done;
    const today = TODAY();
    const todayCount = tasks.filter(task => !task.done && task.dueDate === today).length;
    const upcomingCount = tasks.filter(task => !task.done && task.dueDate && task.dueDate > today).length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    $('#stat-total').textContent = total;
    $('#stat-active').textContent = active;
    $('#stat-done').textContent = done;
    $('#progress-percent').textContent = `${percent}%`;
    $('#progress-fill').style.width = `${percent}%`;
    $('#completion-caption').textContent = done ? `${done} langkah berhasil dituntaskan` : 'Setiap langkah berarti';
    $('#progress-caption').textContent = total ? `${done} dari ${total} tugas sudah selesai` : 'Awal yang baik dimulai dari satu tugas';
    $('#nav-all-count').textContent = total;
    $('#nav-today-count').textContent = todayCount;
    $('#nav-upcoming-count').textContent = upcomingCount;
    $('#nav-completed-count').textContent = done;
    $('#filter-all-count').textContent = total;
    $('#filter-active-count').textContent = active;
    $('#filter-done-count').textContent = done;
  }

  function renderView() {
    const data = viewLabels[currentView] || viewLabels.all;
    els.breadcrumb.textContent = data.crumb;
    els.pageTitle.innerHTML = data.title;
    els.tasksSubtitle.textContent = data.subtitle;
    $$('.nav-item[data-view]').forEach(button => {
      const selected = button.dataset.view === currentView;
      button.classList.toggle('is-active', selected);
      if (selected) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    renderList();
  }

  function setView(view) {
    if (!viewLabels[view]) return;
    currentView = view;
    currentStatus = 'all';
    $$('.filter-tab').forEach(button => {
      const selected = button.dataset.status === 'all';
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    closeMobileMenu();
    renderView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setStatus(status) {
    if (!['all', 'active', 'done'].includes(status)) return;
    currentStatus = status;
    $$('.filter-tab').forEach(button => {
      const selected = button.dataset.status === status;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    renderList();
  }

  function openDialog(task = null) {
    els.form.reset();
    els.taskId.value = task ? task.id : '';
    els.title.value = task ? task.title : '';
    els.description.value = task ? task.description : '';
    els.category.value = task ? task.category : 'Personal';
    if (![...els.category.options].some(option => option.value === els.category.value)) els.category.value = 'Personal';
    els.priority.value = task ? task.priority : 'medium';
    els.dueDate.value = task ? task.dueDate : '';
    els.dialogTitle.innerHTML = task ? 'Ubah <em>tugas.</em>' : 'Tugas <em>baru.</em>';
    els.saveButton.innerHTML = task ? 'Simpan perubahan <span aria-hidden="true">↗</span>' : 'Simpan tugas <span aria-hidden="true">↗</span>';
    if (typeof els.dialog.showModal === 'function') els.dialog.showModal();
    else els.dialog.setAttribute('open', 'open');
    window.setTimeout(() => els.title.focus(), 50);
  }

  function closeDialog() {
    if (typeof els.dialog.close === 'function' && els.dialog.open) els.dialog.close();
    else els.dialog.removeAttribute('open');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const title = safeString(els.title.value, 120);
    if (!title) { els.title.focus(); showToast('Nama tugas belum diisi.'); return; }
    const existingId = els.taskId.value;
    const existing = existingId ? tasks.find(task => task.id === existingId) : null;
    const task = normalizeTask({
      id: existing ? existing.id : makeId(),
      title,
      description: els.description.value,
      category: els.category.value,
      priority: els.priority.value,
      dueDate: els.dueDate.value,
      done: existing ? existing.done : false,
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
      completedAt: existing ? existing.completedAt : null,
    });
    if (!task) { showToast('Tugas tidak dapat disimpan. Periksa nama tugas.'); return; }
    if (existing) {
      tasks = tasks.map(item => item.id === existing.id ? task : item);
      showToast('Perubahan tugas berhasil disimpan.');
    } else {
      tasks.unshift(task);
      showToast('Tugas baru berhasil ditambahkan.');
    }
    persistTasks();
    closeDialog();
    renderView();
  }

  function onTaskAction(event) {
    const addButton = event.target.closest('button[data-open-task]');
    if (addButton) { openDialog(); return; }
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const task = tasks.find(item => item.id === button.dataset.taskId);
    if (!task) return;

    if (button.dataset.action === 'toggle') {
      task.done = !task.done;
      task.completedAt = task.done ? new Date().toISOString() : null;
      persistTasks();
      renderView();
      showToast(task.done ? 'Satu langkah berhasil dituntaskan. ✳' : 'Tugas dikembalikan ke daftar aktif.');
    } else if (button.dataset.action === 'edit') {
      openDialog(task);
    } else if (button.dataset.action === 'delete') {
      const ok = window.confirm(`Hapus tugas “${task.title}”? Tindakan ini tidak dapat dibatalkan.`);
      if (!ok) return;
      tasks = tasks.filter(item => item.id !== task.id);
      persistTasks();
      renderView();
      showToast('Tugas berhasil dihapus.');
    }
  }

  function exportTasks() {
    const payload = {
      app: 'Paradoks D. Task',
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      tasks,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paradoks-d-task-cadangan-${TODAY()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast(`Cadangan dibuat: ${tasks.length} tugas.`);
  }

  async function importTasks(file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast('File terlalu besar. Pilih file cadangan di bawah 2 MB.'); return; }
    try {
      const parsed = JSON.parse(await file.text());
      const imported = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.tasks) ? parsed.tasks : null;
      if (!imported) throw new Error('format');
      const normalized = imported.map(normalizeTask).filter(Boolean);
      const confirmText = `Impor ${normalized.length} tugas dari file ini? Daftar tugas saat ini akan diganti.`;
      if (!window.confirm(confirmText)) return;
      const ids = new Set();
      tasks = normalized.map(task => {
        if (ids.has(task.id)) task.id = makeId();
        ids.add(task.id);
        return task;
      });
      const saved = persistTasks();
      renderView();
      showToast(saved ? `${tasks.length} tugas berhasil diimpor.` : 'Data diimpor, tetapi browser gagal menyimpannya.');
    } catch (error) {
      console.warn('File cadangan tidak valid.', error);
      showToast('File tidak dikenali. Gunakan file JSON hasil ekspor Paradoks D. Task.');
    } finally {
      els.importFile.value = '';
    }
  }

  function setTheme(theme) {
    const chosen = theme === 'light' ? 'light' : 'dark';
    els.html.dataset.theme = chosen;
    $('#theme-label').textContent = chosen === 'dark' ? 'Tampilan terang' : 'Tampilan gelap';
    $('#theme-icon').textContent = chosen === 'dark' ? '☼' : '☾';
    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.content = chosen === 'dark' ? '#111016' : '#f5f3f8';
    try { localStorage.setItem(THEME_KEY, chosen); } catch { /* optional preference */ }
  }

  function toggleTheme() {
    setTheme(els.html.dataset.theme === 'dark' ? 'light' : 'dark');
  }

  function openMobileMenu() {
    els.sidebar.classList.add('is-open');
    els.scrim.hidden = false;
    $('#mobile-menu').setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    els.sidebar.classList.remove('is-open');
    els.scrim.hidden = true;
    $('#mobile-menu').setAttribute('aria-expanded', 'false');
  }

  function enterFocusMode() {
    focusReturnTarget = document.activeElement;
    els.focusOverlay.hidden = false;
    $('#exit-focus').focus();
  }

  function exitFocusMode() {
    els.focusOverlay.hidden = true;
    if (focusReturnTarget && typeof focusReturnTarget.focus === 'function') focusReturnTarget.focus();
  }

  // Navigation and page controls.
  els.navItems.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  $$('[data-open-task]').forEach(button => button.addEventListener('click', () => openDialog()));
  $$('[data-status]').forEach(button => button.addEventListener('click', () => setStatus(button.dataset.status)));
  els.list.addEventListener('click', onTaskAction);
  els.form.addEventListener('submit', handleSubmit);
  $('#close-dialog').addEventListener('click', closeDialog);
  $('#cancel-dialog').addEventListener('click', closeDialog);
  els.dialog.addEventListener('click', event => { if (event.target === els.dialog) closeDialog(); });
  els.search.addEventListener('input', renderList);
  els.sort.addEventListener('change', renderList);
  $('#theme-toggle').addEventListener('click', toggleTheme);
  $('#export-button').addEventListener('click', exportTasks);
  $('#import-button').addEventListener('click', () => els.importFile.click());
  els.importFile.addEventListener('change', event => importTasks(event.target.files && event.target.files[0]));
  $('#mobile-menu').addEventListener('click', () => els.sidebar.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu());
  els.scrim.addEventListener('click', closeMobileMenu);
  $('#focus-button').addEventListener('click', enterFocusMode);
  $('#exit-focus').addEventListener('click', exitFocusMode);

  document.addEventListener('keydown', event => {
    const target = event.target;
    const typing = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
    if (event.key === '/' && !typing && !els.dialog.open && els.focusOverlay.hidden) {
      event.preventDefault();
      els.search.focus();
    }
    if (event.key === 'Escape' && !els.dialog.open && !els.focusOverlay.hidden) exitFocusMode();
  });

  // Initial state.
  els.date.textContent = niceCurrentDate();
  try { setTheme(localStorage.getItem(THEME_KEY) || 'dark'); } catch { setTheme('dark'); }
  renderView();

  // Non-blocking connectivity indicator for the FastAPI shell.
  fetch('/api/health', { headers: { Accept: 'application/json' } })
    .then(response => { if (!response.ok) throw new Error('health check failed'); return response.json(); })
    .then(data => {
      if (!data.assets_available) showToast('Beberapa file antarmuka belum tersedia. Periksa folder public/.');
    })
    .catch(() => console.info('Pemeriksaan API tidak tersedia; antarmuka lokal tetap dapat digunakan.'));
})();
