const tg = window.Telegram?.WebApp;
tg?.ready();
tg?.expand();
tg?.setHeaderColor?.('#0A0A0A');
tg?.setBackgroundColor?.('#0A0A0A');

// Приветствие пользователя
if (tg?.initDataUnsafe?.user) {
  const u = tg.initDataUnsafe.user;
  document.getElementById('userBadge').textContent = u.first_name || 'Гость';
}

/* ============ ДАННЫЕ ============ */

const knowledge = [
  {
    tag: "К. Юнг",
    title: "Тень и целостность",
    desc: "Почему важно принять свои тёмные стороны",
    body: `
      <p><strong>Карл Густав Юнг</strong> утверждал: всё, что мы отвергаем в себе, не исчезает — оно становится нашей «Тенью» и управляет нами из бессознательного.</p>
      <p>Мы злимся на других за то, что не позволяем себе. Мы критикуем в людях то, что подавили внутри.</p>
      <p><em>Практика:</em> вспомни человека, который тебя раздражает. Спроси себя: «Какое качество во мне он отражает?» Это первый шаг к интеграции Тени.</p>
      <p>Целостность — не в том, чтобы быть идеальным. А в том, чтобы вместить всего себя.</p>
    `
  },
  {
    tag: "В. Франкл",
    title: "Смысл важнее счастья",
    desc: "Логотерапия и сила выбора",
    body: `
      <p><strong>Виктор Франкл</strong>, переживший концлагерь, писал: «У человека можно отнять всё, кроме одного — возможности выбирать своё отношение к обстоятельствам».</p>
      <p>Счастье нельзя поймать напрямую — оно приходит как побочный эффект жизни со смыслом.</p>
      <p><em>Вопрос себе:</em> «Зачем я встаю утром? Кому и чему я служу?»</p>
      <p>Если есть «зачем» — выдержишь любое «как».</p>
    `
  },
  {
    tag: "М. Селигман",
    title: "Выученный оптимизм",
    desc: "Как перестать объяснять плохое через себя",
    body: `
      <p><strong>Мартин Селигман</strong> доказал: пессимизм — это привычка объяснять неудачи как постоянные, всеобъемлющие и личные.</p>
      <p>«Я всегда всё порчу» → это и есть выученная беспомощность.</p>
      <p><em>Техника:</em> когда что-то идёт не так, спроси — это <strong>временно</strong>? это <strong>касается только этой сферы</strong>? это <strong>не только моя вина</strong>?</p>
      <p>Оптимизм — не розовые очки. Это более точная картина реальности.</p>
    `
  },
  {
    tag: "А. Лоуэн",
    title: "Тело помнит всё",
    desc: "Как эмоции живут в мышцах",
    body: `
      <p><strong>Александр Лоуэн</strong> показал: подавленные эмоции не исчезают — они «застревают» в теле как хроническое напряжение.</p>
      <p>Сжатые плечи — тревога. Зажатая челюсть — гнев. Слабый вдох — страх проявиться.</p>
      <p><em>Практика:</em> 3 минуты глубокого дыхания животом. Заметь, где тело держит напряжение. Не убирай — просто наблюдай.</p>
      <p>Осознание — уже начало расслабления.</p>
    `
  },
  {
    tag: "Э. Фромм",
    title: "Иметь или быть",
    desc: "Два способа жить",
    body: `
      <p><strong>Эрих Фромм</strong> разделял два модуса существования: «иметь» и «быть».</p>
      <p>В режиме «иметь» — я ценен тем, что у меня есть. В режиме «быть» — тем, что я есть и как я живу.</p>
      <p><em>Вопрос:</em> если убрать всё, что ты имеешь — что останется? Это и есть ты настоящий.</p>
    `
  }
];

const practice = [
  {
    tag: "Утро",
    title: "Практика 5-4-3-2-1",
    desc: "Вернуть себя в настоящий момент",
    body: `
      <p>Тревога живёт в будущем. Тело — всегда здесь.</p>
      <p><strong>Назови:</strong></p>
      <p>— 5 вещей, которые видишь<br>— 4 — которые слышишь<br>— 3 — которых касаешься<br>— 2 — запаха<br>— 1 — вкус</p>
      <p><em>Зачем:</em> техника заземления из терапии ПТСР. Работает за 60 секунд.</p>
    `
  },
  {
    tag: "Днём",
    title: "Вопрос к себе",
    desc: "Три вопроса в середине дня",
    body: `
      <p>Остановись на 2 минуты и ответь честно:</p>
      <p>1. Что я сейчас чувствую <strong>на самом деле</strong>?<br>2. Чего мне сейчас не хватает?<br>3. Что я могу себе дать прямо сейчас?</p>
      <p><em>Зачем:</em> возвращает контакт с потребностями — без него мы живём в автопилоте.</p>
    `
  },
  {
    tag: "Вечер",
    title: "Дневник благодарности",
    desc: "Перепрограммирование внимания",
    body: `
      <p>Мозг эволюционно настроен искать угрозы. Благодарность — способ его переобучить.</p>
      <p>Каждый вечер записывай <strong>3 вещи</strong>, за которые ты благодарен сегодня. Даже мелочи: чашка кофе, тёплый свитер, разговор с другом.</p>
      <p><em>Через 21 день</em> мозг начнёт сканировать мир по-другому.</p>
    `
  },
  {
    tag: "Перед сном",
    title: "Тело-сканирование",
    desc: "Медитация на расслабление",
    body: `
      <p>Ляг. Закрой глаза. Дыши ровно.</p>
      <p>Перенеси внимание в стопы. Почувствуй их. Затем — голени, колени, бёдра. Медленно поднимайся к тазу, животу, груди, плечам, шее, лицу.</p>
      <p>Где замечаешь напряжение — просто дыши туда. Не убирай. Осознавай.</p>
      <p><em>10 минут перед сном</em> — и сон глубже.</p>
    `
  },
  {
    tag: "Кризис",
    title: "Стоп-техника",
    desc: "Когда накрывает эмоция",
    body: `
      <p><strong>S.T.O.P.</strong></p>
      <p><strong>S</strong> — Stop. Замри.<br>
      <strong>T</strong> — Take a breath. Вдох.<br>
      <strong>O</strong> — Observe. Что я чувствую? Где в теле?<br>
      <strong>P</strong> — Proceed. Действуй осознанно.</p>
      <p><em>Это разрыв</em> между стимулом и реакцией. Там живёт свобода.</p>
    `
  }
];

/* ============ РЕНДЕР ============ */

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

/* ============ MODAL ============ */

const modal = document.getElementById('modal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  const type = card.dataset.type;
  const idx = +card.dataset.index;
  const item = type === 'k' ? knowledge[idx] : practice[idx];

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
    mood: selectedMood,
    text,
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
      <div class="note-head">
        <span class="note-mood">${n.mood}</span>
        <span>${n.date}</span>
      </div>
      <div>${escapeHtml(n.text)}</div>
    </div>
  `).join('');
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ============ СТАТИСТИКА ============ */

function updateStats() {
  document.getElementById('notesVal').textContent = notes.length;
  document.getElementById('doneVal').textContent = Math.min(notes.length * 2 + 3, 99);

  // Стрик (дни подряд)
  const days = new Set(notes.map(n => new Date(n.date.split(',')[0]).toDateString()));
  let streak = 0;
  let d = new Date();
  while (days.has(d.toDateString())) { streak++; d.setDate(d.getDate() - 1); }
  document.getElementById('streakVal').textContent = streak || 1;
}

renderNotes();
updateStats();
