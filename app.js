const tg = window.Telegram?.WebApp;
tg?.ready();
tg?.expand();
tg?.setHeaderColor?.('#0A0A0A');
tg?.setBackgroundColor?.('#0A0A0A');

if (tg?.initDataUnsafe?.user) {
  const u = tg.initDataUnsafe.user;
  document.getElementById('userBadge').textContent = u.first_name || 'Гость';
}

/* ============ ДАННЫЕ ============ */

const knowledge = [
  {
    tag: "К. Юнг", title: "Тень и целостность",
    desc: "Почему важно принять свои тёмные стороны",
    body: `<p><strong>Карл Густав Юнг</strong> утверждал: всё, что мы отвергаем в себе, не исчезает — оно становится нашей «Тенью» и управляет нами из бессознательного.</p>
    <p>Мы злимся на других за то, что не позволяем себе. Мы критикуем в людях то, что подавили внутри.</p>
    <p><em>Практика:</em> вспомни человека, который тебя раздражает. Спроси себя: «Какое качество во мне он отражает?» Это первый шаг к интеграции Тени.</p>
    <p>Целостность — не в том, чтобы быть идеальным. А в том, чтобы вместить всего себя.</p>`
  },
  {
    tag: "В. Франкл", title: "Смысл важнее счастья",
    desc: "Логотерапия и сила выбора",
    body: `<p><strong>Виктор Франкл</strong>, переживший концлагерь, писал: «У человека можно отнять всё, кроме одного — возможности выбирать своё отношение к обстоятельствам».</p>
    <p>Счастье нельзя поймать напрямую — оно приходит как побочный эффект жизни со смыслом.</p>
    <p><em>Вопрос себе:</em> «Зачем я встаю утром? Кому и чему я служу?»</p>
    <p>Если есть «зачем» — выдержишь любое «как».</p>`
  },
  {
    tag: "М. Селигман", title: "Выученный оптимизм",
    desc: "Как перестать объяснять плохое через себя",
    body: `<p><strong>Мартин Селигман</strong> доказал: пессимизм — это привычка объяснять неудачи как постоянные, всеобъемлющие и личные.</p>
    <p>«Я всегда всё порчу» → это и есть выученная беспомощность.</p>
    <p><em>Техника:</em> когда что-то идёт не так, спроси — это <strong>временно</strong>? это <strong>касается только этой сферы</strong>? это <strong>не только моя вина</strong>?</p>
    <p>Оптимизм — не розовые очки. Это более точная картина реальности.</p>`
  },
  {
    tag: "А. Лоуэн", title: "Тело помнит всё",
    desc: "Как эмоции живут в мышцах",
    body: `<p><strong>Александр Лоуэн</strong> показал: подавленные эмоции не исчезают — они «застревают» в теле как хроническое напряжение.</p>
    <p>Сжатые плечи — тревога. Зажатая челюсть — гнев. Слабый вдох — страх проявиться.</p>
    <p><em>Практика:</em> 3 минуты глубокого дыхания животом. Заметь, где тело держит напряжение. Не убирай — просто наблюдай.</p>
    <p>Осознание — уже начало расслабления.</p>`
  },
  {
    tag: "Э. Фромм", title: "Иметь или быть",
    desc: "Два способа жить",
    body: `<p><strong>Эрих Фромм</strong> разделял два модуса существования: «иметь» и «быть».</p>
    <p>В режиме «иметь» — я ценен тем, что у меня есть. В режиме «быть» — тем, что я есть и как я живу.</p>
    <p><em>Вопрос:</em> если убрать всё, что ты имеешь — что останется? Это и есть ты настоящий.</p>`
  }
];

const practice = [
  {
    tag: "Утро", title: "Практика 5-4-3-2-1", desc: "Вернуть себя в настоящий момент",
    body: `<p>Тревога живёт в будущем. Тело — всегда здесь.</p>
    <p><strong>Назови:</strong></p>
    <p>— 5 вещей, которые видишь<br>— 4 — которые слышишь<br>— 3 — которых касаешься<br>— 2 — запаха<br>— 1 — вкус</p>
    <p><em>Зачем:</em> техника заземления из терапии ПТСР. Работает за 60 секунд.</p>`
  },
  {
    tag: "Днём", title: "Вопрос к себе", desc: "Три вопроса в середине дня",
    body: `<p>Остановись на 2 минуты и ответь честно:</p>
    <p>1. Что я сейчас чувствую <strong>на самом деле</strong>?<br>2. Чего мне сейчас не хватает?<br>3. Что я могу себе дать прямо сейчас?</p>
    <p><em>Зачем:</em> возвращает контакт с потребностями — без него мы живём в автопилоте.</p>`
  },
  {
    tag: "Вечер", title: "Дневник благодарности", desc: "Перепрограммирование внимания",
    body: `<p>Мозг эволюционно настроен искать угрозы. Благодарность — способ его переобучить.</p>
    <p>Каждый вечер записывай <strong>3 вещи</strong>, за которые ты благодарен сегодня. Даже мелочи: чашка кофе, тёплый свитер, разговор с другом.</p>
    <p><em>Через 21 день</em> мозг начнёт сканировать мир по-другому.</p>`
  },
  {
    tag: "Перед сном", title: "Тело-сканирование", desc: "Медитация на расслабление",
    body: `<p>Ляг. Закрой глаза. Дыши ровно.</p>
    <p>Перенеси внимание в стопы. Почувствуй их. Затем — голени, колени, бёдра. Медленно поднимайся к тазу, животу, груди, плечам, шее, лицу.</p>
    <p>Где замечаешь напряжение — просто дыши туда. Не убирай. Осознавай.</p>
    <p><em>10 минут перед сном</em> — и сон глубже.</p>`
  },
  {
    tag: "Кризис", title: "Стоп-техника", desc: "Когда накрывает эмоция",
    body: `<p><strong>S.T.O.P.</strong></p>
    <p><strong>S</strong> — Stop. Замри.<br><strong>T</strong> — Take a breath. Вдох.<br><strong>O</strong> — Observe. Что я чувствую? Где в теле?<br><strong>P</strong> — Proceed. Действуй осознанно.</p>
    <p><em>Это разрыв</em> между стимулом и реакцией. Там живёт свобода.</p>`
  }
];

const books = [
  { slug: "marcus-aurelius-meditations", cover: { emoji: "🏛️", colors: ["#8B5A2B", "#3E1F00"] }, title: "Мысли", author: "Марк Аврелий", cat: "meaning", desc: "Личные заметки римского императора-стоика о внутреннем покое и смысле." },
  { slug: "epictetus-golden-sayings", cover: { emoji: "🗝️", colors: ["#1E3A5F", "#0A1525"] }, title: "Золотые слова", author: "Эпиктет", cat: "meaning", desc: "Философ-стоик о том, что в нашей власти, а что — нет." },
  { slug: "william-james-psychology", cover: { emoji: "🧠", colors: ["#5B3A8E", "#251547"] }, title: "Психология: краткий курс", author: "Уильям Джеймс", cat: "psychology", desc: "Основы психологии: внимание, память, привычки, эмоции." },
  { slug: "freud-dream-psychology", cover: { emoji: "🌙", colors: ["#3A2E5C", "#15102A"] }, title: "Психология сновидений", author: "Зигмунд Фрейд", cat: "psychology", desc: "Введение в психоанализ: как бессознательное говорит через сны." },
  { slug: "jung-psychology-unconscious", cover: { emoji: "🔮", colors: ["#1A5C5C", "#082828"] }, title: "Психология бессознательного", author: "Карл Густав Юнг", cat: "psychology", desc: "О коллективном бессознательном и архетипах." },
  { slug: "samuel-smiles-self-help", cover: { emoji: "⚡", colors: ["#2E5C1A", "#122406"] }, title: "Самопомощь", author: "Сэмюэл Смайлс", cat: "discipline", desc: "Классика о том, что характер и упорство важнее таланта." },
  { slug: "atkinson-mind-power", cover: { emoji: "🎯", colors: ["#8E1A1A", "#3E0A0A"] }, title: "Сила ума", author: "Уильям Уокер Аткинсон", cat: "discipline", desc: "Практическое руководство по памяти, концентрации и воле." },
  { slug: "barnum-money-getting", cover: { emoji: "💰", colors: ["#B8860B", "#4E3905"] }, title: "Искусство делать деньги", author: "Финеас Т. Барнум", cat: "money", desc: "Честные принципы зарабатывания и сохранения денег." },
  { slug: "franklin-way-to-wealth", cover: { emoji: "🪙", colors: ["#1A5C4A", "#062A20"] }, title: "Путь к богатству", author: "Бенджамин Франклин", cat: "money", desc: "Афоризмы о бережливости, трудолюбии и дисциплине." },
  { slug: "walsh-health-willpower", cover: { emoji: "💪", colors: ["#C1121F", "#4E0A0A"] }, title: "Здоровье через силу воли", author: "Джеймс Дж. Уолш", cat: "body", desc: "О связи силы воли, настроя и физического здоровья." }
];

const quotes = [
  { cat: "psychology", text: "Пока ты не сделаешь бессознательное сознательным, оно будет управлять твоей жизнью, а ты будешь называть это судьбой.", author: "Карл Густав Юнг" },
  { cat: "psychology", text: "Между стимулом и реакцией есть пространство. В этом пространстве — наша свобода выбора.", author: "Виктор Франкл" },
  { cat: "psychology", text: "Всё, что раздражает нас в других, может привести к пониманию самих себя.", author: "Карл Густав Юнг" },
  { cat: "psychology", text: "Ты не свои мысли. Ты тот, кто их замечает.", author: "Экхарт Толле" },
  { cat: "money", text: "Богатство — это не то, сколько ты зарабатываешь, а то, сколько ты сохраняешь.", author: "Роберт Кийосаки" },
  { cat: "money", text: "Инвестируй в себя: это единственный актив, который никогда не обесценится.", author: "Уоррен Баффет" },
  { cat: "money", text: "Деньги — хороший слуга, но плохой хозяин.", author: "Фрэнсис Бэкон" },
  { cat: "love", text: "Любовь — это не то, что ты получаешь. Это то, что ты отдаёшь.", author: "Эрих Фромм" },
  { cat: "love", text: "Здоровые отношения — это два целых человека, а не две половинки.", author: "Эстер Перель" },
  { cat: "discipline", text: "Дисциплина — это выбор между тем, что ты хочешь сейчас, и тем, чего хочешь больше всего.", author: "Авраам Линкольн" },
  { cat: "discipline", text: "Мы — то, что мы делаем постоянно. Совершенство — не действие, а привычка.", author: "Аристотель" },
  { cat: "meaning", text: "У кого есть «зачем» жить, может вынести почти любое «как».", author: "Фридрих Ницше" },
  { cat: "meaning", text: "Смысл жизни не в том, чтобы найти себя, а в том, чтобы создать себя.", author: "Джордж Бернард Шоу" },
  { cat: "body", text: "Движение — это лекарство. Каждый шаг — это вклад в себя.", author: "Гиппократ" },
  { cat: "body", text: "Дыши глубоко. В теле живут все твои эмоции.", author: "Александр Лоуэн" },
  { cat: "creative", text: "Творчество — это интеллект, получающий удовольствие.", author: "Альберт Эйнштейн" },
  { cat: "creative", text: "Каждый ребёнок — художник. Сложность в том, чтобы остаться художником, когда вырастешь.", author: "Пабло Пикассо" }
];

/* ============ УТИЛИТЫ ============ */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

/* ============ РЕНДЕР ЗНАНИЙ И ПРАКТИК ============ */

function renderCards(data, containerId, type) {
  const box = document.getElementById(containerId);
  box.innerHTML = data.map((item, i) => `
    <div class="card" data-type="${type}" data-index="${i}">
      <div class="card-tag">${item.tag}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-desc">${item.desc}</div>
    </div>
  `).join('');
}

renderCards(knowledge, 'knowledgeList', 'k');
renderCards(practice, 'practiceList', 'p');

/* ============ TABS ============ */

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
    tg?.HapticFeedback?.impactOccurred('light');
  });
});

/* ============ МОДАЛКА ЗНАНИЙ ============ */

const modal = document.getElementById('modal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card || card.classList.contains('lib-card')) return;
  const type = card.dataset.type;
  const idx = +card.dataset.index;
  const item = type === 'k' ? knowledge[idx] : practice[idx];
  if (!item) return;
  modalTag.textContent = item.tag;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = item.body;
  modal.classList.add('open');
  tg?.HapticFeedback?.impactOccurred('medium');
});

document.getElementById('modalClose').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

/* ============ ДНЕВНИК ============ */

let selectedMood = null;
let notes = JSON.parse(localStorage.getItem('notes') || '[]');

document.querySelectorAll('.mood').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mood').forEach(m => m.classList.remove('active'));
    btn.classList.add('active');
    selectedMood = btn.dataset.mood;
    tg?.HapticFeedback?.selectionChanged();
  });
});

document.getElementById('saveNote').addEventListener('click', () => {
  const text = document.getElementById('diaryText').value.trim();
  if (!text) return;
  if (!selectedMood) { tg?.HapticFeedback?.notificationOccurred('warning'); return; }
  notes.unshift({
    mood: selectedMood, text,
    date: new Date().toLocaleString('ru', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  document.getElementById('diaryText').value = '';
  document.querySelectorAll('.mood').forEach(m => m.classList.remove('active'));
  selectedMood = null;
  renderNotes();
  updateStats();
  tg?.HapticFeedback?.notificationOccurred('success');
});

function renderNotes() {
  const list = document.getElementById('notesList');
  if (!notes.length) {
    list.innerHTML = '<div style="color:var(--text-dim);font-size:12px;text-align:center;padding:16px;">Пока нет записей</div>';
    return;
  }
  list.innerHTML = notes.slice(0, 20).map(n => `
    <div class="note">
      <div class="note-head"><span class="note-mood">${n.mood}</span><span>${n.date}</span></div>
      <div>${escapeHtml(n.text)}</div>
    </div>
  `).join('');
}

/* ============ ЦИТАТЫ ============ */

let currentQuote = null;
let currentQuoteCat = 'all';
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function pickRandomQuote() {
  const pool = currentQuoteCat === 'all' ? quotes : quotes.filter(q => q.cat === currentQuoteCat);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function renderQuote(q) {
  const textEl = document.getElementById('quoteText');
  const authorEl = document.getElementById('quoteAuthor');
  const saveBtn = document.getElementById('btnSaveQuote');
  if (!q) {
    textEl.textContent = 'Нет цитат в этой категории.';
    authorEl.textContent = '';
    saveBtn.classList.remove('saved');
    return;
  }
  textEl.textContent = q.text;
  authorEl.textContent = '— ' + q.author;
  const isSaved = favorites.some(f => f.text === q.text && f.author === q.author);
  saveBtn.classList.toggle('saved', isSaved);
  saveBtn.textContent = isSaved ? '✓ Сохранено' : '❤️ Сохранить';
  currentQuote = q;
}

document.getElementById('btnNextQuote').addEventListener('click', () => {
  renderQuote(pickRandomQuote());
  tg?.HapticFeedback?.impactOccurred('light');
});

document.getElementById('btnSaveQuote').addEventListener('click', () => {
  if (!currentQuote) return;
  const idx = favorites.findIndex(f => f.text === currentQuote.text && f.author === currentQuote.author);
  if (idx >= 0) favorites.splice(idx, 1);
  else favorites.unshift({ ...currentQuote, savedAt: Date.now() });
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderQuote(currentQuote);
  renderFavorites();
  tg?.HapticFeedback?.notificationOccurred('success');
});

document.querySelectorAll('#quotes .filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#quotes .filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentQuoteCat = chip.dataset.cat;
    renderQuote(pickRandomQuote());
    tg?.HapticFeedback?.selectionChanged();
  });
});

function renderFavorites() {
  const list = document.getElementById('favoritesList');
  document.getElementById('favCount').textContent = `Сохранено: ${favorites.length}`;
  if (!favorites.length) {
    list.innerHTML = `<div class="fav-empty">❤️ Здесь пока пусто<br>Открой раздел «💬 Цитаты»<br>и сохрани то, что откликнется</div>`;
    return;
  }
  list.innerHTML = favorites.map((f, i) => `
    <div class="fav-card">
      <button class="fav-remove" data-idx="${i}">✕</button>
      <div class="fav-text">${escapeHtml(f.text)}</div>
      <div class="fav-author">— ${escapeHtml(f.author)}</div>
    </div>
  `).join('');
  list.querySelectorAll('.fav-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      favorites.splice(+btn.dataset.idx, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      renderFavorites();
      renderQuote(currentQuote);
      tg?.HapticFeedback?.impactOccurred('light');
    });
  });
}

/* ============ БИБЛИОТЕКА ============ */

let currentLibCat = 'all';
let readBooks = JSON.parse(localStorage.getItem('readBooks') || '[]');

function renderLibrary() {
  const list = document.getElementById('libraryList');
  const pool = currentLibCat === 'all' ? books : books.filter(b => b.cat === currentLibCat);
  if (!pool.length) {
    list.innerHTML = '<div class="fav-empty">Книг в этой категории пока нет</div>';
    return;
  }
  list.innerHTML = pool.map(b => {
    const isRead = readBooks.includes(b.slug);
    const noteCount = getBookNotes(b.slug).length;
    const [c1, c2] = b.cover.colors;
    return `
      <div class="lib-card" data-slug="${b.slug}">
        <div class="lib-cover" style="background: linear-gradient(145deg, ${c1}, ${c2});">
          <span class="lib-cover-emoji">${b.cover.emoji}</span>
        </div>
        <div class="lib-info">
          <div class="lib-title">${b.title}</div>
          <div class="lib-author">${b.author}</div>
          <div class="lib-desc">${b.desc}</div>
          <div class="lib-badges">
            ${isRead ? '<span class="lib-badge lib-badge-read">✓ Прочитано</span>' : ''}
            ${noteCount > 0 ? `<span class="lib-badge lib-badge-notes">📝 ${noteCount}</span>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');
}

document.querySelectorAll('.lib-filters .filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.lib-filters .filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentLibCat = chip.dataset.cat;
    renderLibrary();
    tg?.HapticFeedback?.selectionChanged();
  });
});

/* ============ ЧИТАЛКА ============ */

const reader = document.getElementById('reader');
const readerScroll = document.getElementById('readerScroll');
const readerContent = document.getElementById('readerContent');
const readerTitle = document.getElementById('readerTitle');
const progressBar = document.getElementById('progressBar');
const markReadBtn = document.getElementById('markReadBtn');

let currentBook = null;
let currentFontSize = parseInt(localStorage.getItem('readerFontSize') || '16');

function applyFontSize() {
  readerContent.style.fontSize = currentFontSize + 'px';
  localStorage.setItem('readerFontSize', currentFontSize);
}

document.getElementById('fontUp').addEventListener('click', () => {
  currentFontSize = Math.min(24, currentFontSize + 1);
  applyFontSize();
  tg?.HapticFeedback?.impactOccurred('light');
});
document.getElementById('fontDown').addEventListener('click', () => {
  currentFontSize = Math.max(13, currentFontSize - 1);
  applyFontSize();
  tg?.HapticFeedback?.impactOccurred('light');
});

document.addEventListener('click', async (e) => {
  const card = e.target.closest('.lib-card');
  if (!card) return;
  await openBook(card.dataset.slug);
});

async function openBook(slug) {
  const book = books.find(b => b.slug === slug);
  if (!book) return;
  currentBook = book;

  readerTitle.textContent = book.title + ' — ' + book.author;
  readerContent.innerHTML = '<p style="color:var(--text-dim);">Загрузка...</p>';
  reader.classList.add('open');
  applyFontSize();

  const isRead = readBooks.includes(slug);
  markReadBtn.textContent = isRead ? '✓ Прочитано' : '✓ Отметить прочитанной';
  markReadBtn.style.opacity = isRead ? '0.6' : '1';

  updateNotesCount();

  try {
    const res = await fetch('books/' + slug + '.txt');
    if (!res.ok) throw new Error('Не найдено');
    const text = await res.text();
    readerContent.innerHTML = formatBookText(text);

    const savedPos = localStorage.getItem('readPos_' + slug);
    if (savedPos) readerScroll.scrollTop = parseInt(savedPos);
    else readerScroll.scrollTop = 0;
  } catch (err) {
    readerContent.innerHTML = `
      <p style="color:var(--red);">📭 Файл книги пока не загружен.</p>
      <p style="color:var(--text-dim);font-size:14px;">
        Скачай текст с <strong>Project Gutenberg</strong> или <strong>Викитеки</strong> и загрузи в папку <code>books/</code> на GitHub.<br><br>
        Имя файла: <code>${slug}.txt</code>
      </p>`;
  }
}

/* ============ ФОРМАТИРОВАНИЕ ТЕКСТА КНИГИ ============ */

function formatBookText(rawText) {
  let text = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\[\d+\]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const lines = text.split('\n').map(l => l.trim());
  const out = [];
  let paragraphBuffer = [];

  function flushParagraph() {
    if (!paragraphBuffer.length) return;
    const joined = paragraphBuffer.join(' ').trim();
    if (joined.length > 0) {
      const chunks = splitLongParagraph(joined, 500);
      chunks.forEach(chunk => out.push(`<p>${escapeHtml(chunk)}</p>`));
    }
    paragraphBuffer = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) { flushParagraph(); continue; }
    if (isHeader(line)) {
      flushParagraph();
      out.push(`<h3 class="book-header">${escapeHtml(line)}</h3>`);
      continue;
    }
    if (isSubHeader(line)) {
      flushParagraph();
      out.push(`<h4 class="book-subheader">${escapeHtml(line)}</h4>`);
      continue;
    }
    paragraphBuffer.push(line);
  }
  flushParagraph();
  return out.join('');
}

function isHeader(line) {
  if (line.length > 60) return false;
  const letters = line.replace(/[^A-ZА-ЯЁ]/g, '');
  if (letters.length < 3) return false;
  const upper = line.toUpperCase();
  const ratio = letters.length / line.length;
  if (line === upper && ratio > 0.5) return true;
  if (/^(КНИГА|ГЛАВА|ЧАСТЬ|РАЗДЕЛ|BOOK|CHAPTER|PART)\b/i.test(line)) return true;
  return false;
}

function isSubHeader(line) {
  if (/^[IVXLCDM]+\.?$/.test(line) && line.length <= 6) return true;
  if (/^(Глава|ГЛАВА|Chapter|CHAPTER)\s+\d+/i.test(line)) return true;
  if (/^§?\s*\d+\.?\s*$/.test(line) && line.length < 8) return true;
  return false;
}

function splitLongParagraph(text, maxLen) {
  if (text.length <= maxLen) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > maxLen) {
    let cut = remaining.lastIndexOf('.', maxLen);
    if (cut < maxLen * 0.4) cut = remaining.lastIndexOf(' ', maxLen);
    if (cut <= 0) cut = maxLen;
    chunks.push(remaining.slice(0, cut + 1).trim());
    remaining = remaining.slice(cut + 1).trim();
  }
  if (remaining.length) chunks.push(remaining);
  return chunks;
}

readerScroll.addEventListener('scroll', () => {
  const el = readerScroll;
  const max = el.scrollHeight - el.clientHeight;
  const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
  progressBar.style.width = pct + '%';
  if (currentBook) localStorage.setItem('readPos_' + currentBook.slug, String(el.scrollTop));
});

document.getElementById('readerBack').addEventListener('click', () => {
  reader.classList.remove('open');
  currentBook = null;
});

markReadBtn.addEventListener('click', () => {
  if (!currentBook) return;
  const slug = currentBook.slug;
  const idx = readBooks.indexOf(slug);
  if (idx >= 0) {
    readBooks.splice(idx, 1);
    markReadBtn.textContent = '✓ Отметить прочитанной';
    markReadBtn.style.opacity = '1';
  } else {
    readBooks.push(slug);
    markReadBtn.textContent = '✓ Прочитано';
    markReadBtn.style.opacity = '0.6';
  }
  localStorage.setItem('readBooks', JSON.stringify(readBooks));
  renderLibrary();
  updateStats();
  tg?.HapticFeedback?.notificationOccurred('success');
});

/* ============ ЗАМЕТКИ К КНИГАМ ============ */

let bookNotes = JSON.parse(localStorage.getItem('bookNotes') || '{}');

function getBookNotes(slug) {
  return bookNotes[slug] || [];
}

function updateNotesCount() {
  if (!currentBook) return;
  const count = getBookNotes(currentBook.slug).length;
  document.getElementById('notesCount').textContent = count;
}

const notesModal = document.getElementById('notesModal');
const notesSavedList = document.getElementById('notesSavedList');
const noteInput = document.getElementById('noteInput');
const notesBookName = document.getElementById('notesBookName');

function renderNotesInModal() {
  if (!currentBook) return;
  const bookNoteList = getBookNotes(currentBook.slug);
  notesBookName.textContent = currentBook.title;
  if (!bookNoteList.length) {
    notesSavedList.innerHTML = '<div class="notes-empty">Пока нет заметок. Оставь первую 👇</div>';
    return;
  }
  notesSavedList.innerHTML = bookNoteList.map((n, i) => `
    <div class="note-item">
      <button class="note-delete" data-idx="${i}">✕</button>
      <div class="note-text">${escapeHtml(n.text)}</div>
      <div class="note-date">${n.date}</div>
    </div>
  `).join('');
  notesSavedList.querySelectorAll('.note-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx;
      const slug = currentBook.slug;
      bookNotes[slug].splice(idx, 1);
      if (!bookNotes[slug].length) delete bookNotes[slug];
      localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
      renderNotesInModal();
      updateNotesCount();
      renderLibrary();
      tg?.HapticFeedback?.impactOccurred('light');
    });
  });
}

document.getElementById('openNotesBtn').addEventListener('click', () => {
  noteInput.value = '';
  renderNotesInModal();
  notesModal.classList.add('open');
  tg?.HapticFeedback?.impactOccurred('light');
});

document.getElementById('notesClose').addEventListener('click', () => notesModal.classList.remove('open'));
notesModal.addEventListener('click', (e) => { if (e.target === notesModal) notesModal.classList.remove('open'); });

document.getElementById('saveNoteBtn').addEventListener('click', () => {
  if (!currentBook) return;
  const text = noteInput.value.trim();
  if (!text) return;
  const slug = currentBook.slug;
  if (!bookNotes[slug]) bookNotes[slug] = [];
  bookNotes[slug].unshift({
    text,
    date: new Date().toLocaleString('ru', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
  });
  localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
  noteInput.value = '';
  renderNotesInModal();
  updateNotesCount();
  renderLibrary();
  tg?.HapticFeedback?.notificationOccurred('success');
});

/* ============ ТРЕКЕР ПРИВЫЧЕК ============ */

let habits = JSON.parse(localStorage.getItem('habits') || '[]');

const DAY_NAMES = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function todayKey(date = new Date()) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function calcStreak(checks) {
  let streak = 0;
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (checks[todayKey(d)]) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function renderHabits() {
  const list = document.getElementById('habitsList');

  if (!habits.length) {
    list.innerHTML = `
      <div class="habits-empty">
        ✅ Пока нет привычек<br>
        Добавь первую выше —<br>
        и начни отмечать каждый день
      </div>`;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  list.innerHTML = habits.map((h, i) => {
    const days = [];
    for (let d = 6; d >= 0; d--) {
      const day = new Date(today);
      day.setDate(day.getDate() - d);
      const key = todayKey(day);
      days.push({
        key,
        label: DAY_NAMES[day.getDay()],
        num: day.getDate(),
        done: !!(h.checks && h.checks[key]),
        isToday: d === 0
      });
    }

    const todayDone = !!(h.checks && h.checks[todayKey()]);
    const streak = calcStreak(h.checks || {});

    return `
      <div class="habit-card">
        <button class="habit-remove" data-idx="${i}">✕</button>
        <div class="habit-head">
          <div class="habit-icon">${h.emoji}</div>
          <div class="habit-info">
            <div class="habit-name">${escapeHtml(h.name)}</div>
            <div class="habit-streak">🔥 <strong>${streak}</strong> ${plural(streak, 'день', 'дня', 'дней')} подряд</div>
          </div>
        </div>
        <div class="habit-days">
          ${days.map(d => `
            <div class="habit-day ${d.done ? 'done' : ''} ${d.isToday ? 'today' : ''}">
              <span class="habit-day-label">${d.label}</span>
              <span class="habit-day-num">${d.num}</span>
            </div>
          `).join('')}
        </div>
        <button class="habit-mark-btn ${todayDone ? 'done' : ''}" data-idx="${i}">
          ${todayDone ? '✓ Сегодня сделано' : 'Отметить сегодня'}
        </button>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.habit-mark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.idx;
      const key = todayKey();
      if (!habits[i].checks) habits[i].checks = {};
      if (habits[i].checks[key]) delete habits[i].checks[key];
      else habits[i].checks[key] = true;
      localStorage.setItem('habits', JSON.stringify(habits));
      renderHabits();
      updateStats();
      tg?.HapticFeedback?.notificationOccurred('success');
    });
  });

  list.querySelectorAll('.habit-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.idx;
      if (!confirm('Удалить привычку «' + habits[i].name + '»?')) return;
      habits.splice(i, 1);
      localStorage.setItem('habits', JSON.stringify(habits));
      renderHabits();
      updateStats();
      tg?.HapticFeedback?.impactOccurred('medium');
    });
  });
}

document.getElementById('addHabitBtn').addEventListener('click', () => {
  const name = document.getElementById('habitName').value.trim();
  const emoji = document.getElementById('habitEmoji').value.trim() || '⭐';

  if (!name) {
    tg?.HapticFeedback?.notificationOccurred('warning');
    return;
  }

  habits.push({
    emoji,
    name,
    checks: {},
    createdAt: Date.now()
  });
  localStorage.setItem('habits', JSON.stringify(habits));

  document.getElementById('habitName').value = '';
  document.getElementById('habitEmoji').value = '⭐';

  renderHabits();
  updateStats();
  tg?.HapticFeedback?.notificationOccurred('success');
});

/* ============ СТАТИСТИКА ============ */

function updateStats() {
  document.getElementById('notesVal').textContent = notes.length;
  document.getElementById('doneVal').textContent = Math.min(notes.length * 2 + 3, 99);

  const booksVal = document.getElementById('booksVal');
  if (booksVal) booksVal.textContent = readBooks.length;

  const todayK = todayKey();
  const habitsToday = habits.filter(h => h.checks && h.checks[todayK]).length;
  const habitsStat = document.getElementById('habitsVal');
  if (habitsStat) habitsStat.textContent = habitsToday + '/' + habits.length;

  const days = new Set(notes.map(n => new Date(n.date.split(',')[0]).toDateString()));
  let streak = 0;
  let d = new Date();
  while (days.has(d.toDateString())) { streak++; d.setDate(d.getDate() - 1); }
  document.getElementById('streakVal').textContent = streak || 1;
}

/* ============ ИНИЦИАЛИЗАЦИЯ ============ */

renderNotes();
renderFavorites();
renderQuote(pickRandomQuote());
renderLibrary();
renderHabits();
updateStats();
