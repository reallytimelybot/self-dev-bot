* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

:root {
  --red: #E63946;
  --red-dark: #A4161A;
  --red-glow: rgba(230, 57, 70, 0.35);
  --bg: #0A0A0A;
  --bg-card: #141414;
  --bg-card-2: #1C1C1C;
  --border: #262626;
  --text: #F5F5F5;
  --text-dim: #8A8A8A;
}

html, body {
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  top: -200px; right: -200px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, var(--red-glow), transparent 70%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}

/* HEADER */
.header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 20px;
  position: sticky; top: 0;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(20px);
  z-index: 10;
  border-bottom: 1px solid var(--border);
}
.logo { display: flex; align-items: center; gap: 10px; }
.logo-mark {
  color: var(--red); font-size: 22px;
  text-shadow: 0 0 15px var(--red-glow);
}
.logo-text { font-weight: 700; font-size: 16px; letter-spacing: 0.5px; }
.user-badge {
  font-size: 12px; padding: 6px 12px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 20px; color: var(--text-dim);
}

/* HERO */
.hero { padding: 32px 20px 20px; position: relative; z-index: 1; }
.hero h1 {
  font-size: 34px; line-height: 1.1; font-weight: 800;
  letter-spacing: -0.5px; margin-bottom: 12px;
}
.accent {
  background: linear-gradient(135deg, var(--red), #FF6B7A);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-sub { color: var(--text-dim); font-size: 14px; line-height: 1.5; }

/* STATS */
.stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 10px; padding: 20px;
}
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px 10px;
  text-align: center;
  transition: 0.3s;
}
.stat-card:active { transform: scale(0.96); border-color: var(--red); }
.stat-value {
  font-size: 24px; font-weight: 800; color: var(--red);
  text-shadow: 0 0 20px var(--red-glow);
}
.stat-label { font-size: 11px; color: var(--text-dim); margin-top: 4px; }

/* TABS */
.tabs {
  display: flex; gap: 8px;
  padding: 0 20px 20px;
  overflow-x: auto;
  scrollbar-width: none;
}
.tabs::-webkit-scrollbar { display: none; }
.tab {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-dim);
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 13px; font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.25s;
  font-family: inherit;
}
.tab.active {
  background: var(--red);
  color: white;
  border-color: var(--red);
  box-shadow: 0 0 20px var(--red-glow);
}

/* CONTENT */
.tab-content { display: none; padding: 0 20px 40px; }
.tab-content.active { display: block; animation: fadeIn 0.35s ease; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.cards { display: flex; flex-direction: column; gap: 12px; }

.card {
  background: linear-gradient(145deg, var(--bg-card), var(--bg-card-2));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: ""; position: absolute;
  top: 0; left: 0; width: 3px; height: 100%;
  background: var(--red);
  transform: scaleY(0); transform-origin: top;
  transition: 0.3s;
}
.card:active { transform: scale(0.98); border-color: var(--red); }
.card:active::before { transform: scaleY(1); }
.card-tag {
  display: inline-block;
  font-size: 10px; text-transform: uppercase;
  letter-spacing: 1px; font-weight: 700;
  color: var(--red); margin-bottom: 8px;
}
.card-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
.card-desc { font-size: 13px; color: var(--text-dim); line-height: 1.5; }

/* DIARY */
.diary-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 20px;
}
.diary-label { font-size: 14px; font-weight: 600; margin-bottom: 12px; display: block; }
.mood-row { display: flex; gap: 8px; margin-bottom: 16px; }
.mood {
  flex: 1;
  background: var(--bg-card-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 22px; padding: 10px 0;
  cursor: pointer; transition: 0.25s;
}
.mood.active {
  background: var(--red);
  border-color: var(--red);
  box-shadow: 0 0 15px var(--red-glow);
  transform: scale(1.08);
}
#diaryText {
  width: 100%; min-height: 100px;
  background: var(--bg-card-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  padding: 14px;
  font-family: inherit; font-size: 14px;
  resize: vertical;
  margin-bottom: 12px;
}
#diaryText:focus { outline: none; border-color: var(--red); }

.btn-primary {
  width: 100%;
  background: var(--red);
  color: white; border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 14px; font-weight: 700;
  cursor: pointer;
  transition: 0.25s;
  font-family: inherit;
  box-shadow: 0 0 25px var(--red-glow);
}
.btn-primary:active { transform: scale(0.97); background: var(--red-dark); }

.notes-list { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
.note {
  background: var(--bg-card-2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--red);
  border-radius: 10px;
  padding: 12px;
  font-size: 13px;
}
.note-head {
  display: flex; justify-content: space-between;
  margin-bottom: 6px; font-size: 11px; color: var(--text-dim);
}
.note-mood { font-size: 16px; }

/* MODAL */
.modal {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(10px);
  display: none;
  align-items: flex-end;
  z-index: 100;
}
.modal.open { display: flex; animation: fadeIn 0.3s ease; }
.modal-card {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 28px 24px 40px;
  position: relative;
  animation: slideUp 0.35s cubic-bezier(0.2, 0.9, 0.3, 1);
}
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
.modal-close {
  position: absolute; top: 16px; right: 16px;
  background: var(--bg-card-2);
  border: 1px solid var(--border);
  color: var(--text);
  width: 32px; height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
}
.modal-tag {
  font-size: 11px; text-transform: uppercase;
  letter-spacing: 1.5px; font-weight: 700;
  color: var(--red); margin-bottom: 10px;
}
.modal-card h2 { font-size: 22px; margin-bottom: 16px; line-height: 1.2; }
.modal-body { font-size: 14px; line-height: 1.7; color: #D0D0D0; }
.modal-body p { margin-bottom: 12px; }
.modal-body strong { color: var(--text); }
.modal-body em { color: var(--red); font-style: normal; font-weight: 600; }