:root {
  color-scheme: light;
  --ink: #273331;
  --muted: #657471;
  --line: #dce9e5;
  --paper: #f7fbfa;
  --accent: #2f8f83;
  --accent-dark: #17655d;
  --sub-accent: #f2b84b;
  --shadow: 0 20px 60px rgba(25, 69, 62, 0.14);
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    linear-gradient(135deg, rgba(47, 143, 131, 0.13), transparent 34%),
    linear-gradient(315deg, rgba(242, 184, 75, 0.14), transparent 36%),
    var(--paper);
  color: var(--ink);
  font-family: "Hiragino Sans", "Yu Gothic UI", "Meiryo", system-ui, sans-serif;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
  font: inherit;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.app-shell {
  width: min(100%, 760px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
}

.intro-view,
.quiz-view,
.result-view {
  display: grid;
  gap: 18px;
}

.hero-panel,
.question-card,
.result-hero,
.result-body,
.cta-box {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(220, 233, 229, 0.92);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.hero-panel {
  display: grid;
  gap: 18px;
  min-height: calc(100vh - 96px);
  align-content: center;
  padding: 34px 22px;
}

.eyebrow,
.question-count {
  margin: 0;
  color: var(--accent-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  overflow-wrap: anywhere;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 13vw, 4.8rem);
  line-height: 1.04;
  letter-spacing: 0;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.type-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.mini-photo,
.type-photo,
.result-photo {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--line);
  background:
    radial-gradient(circle at 32% 24%, rgba(255, 255, 255, 0.86), transparent 28%),
    linear-gradient(145deg, rgba(47, 143, 131, 0.18), rgba(242, 184, 75, 0.2));
  color: var(--accent-dark);
  font-weight: 900;
}

.mini-photo {
  aspect-ratio: 1;
  border-radius: 999px;
  font-size: 0.88rem;
}

.type-photo img,
.mini-photo img,
.result-photo img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
}

.type-photo span,
.mini-photo span,
.result-photo span {
  opacity: 0;
}

.type-photo[data-empty] span,
.mini-photo[data-empty] span,
.result-photo[data-empty] span {
  opacity: 0.86;
}

.result-photo {
  width: min(58vw, 230px);
  aspect-ratio: 1;
  margin: 0 auto 8px;
  border-radius: 999px;
  font-size: 2rem;
}

.primary-action,
.secondary-action,
.ghost-action,
.primary-link {
  min-height: 48px;
  border-radius: 8px;
  border: 0;
  font-weight: 800;
}

.primary-action,
.primary-link {
  display: grid;
  place-items: center;
  width: 100%;
  background: var(--accent);
  color: white;
  box-shadow: 0 12px 28px rgba(23, 101, 93, 0.22);
  text-decoration: none;
}

.primary-action.compact {
  width: auto;
  padding: 0 18px;
}

.secondary-action,
.ghost-action {
  padding: 0 16px;
  background: white;
  color: var(--accent-dark);
  border: 1px solid var(--line);
}

.ghost-action {
  min-height: 40px;
  background: transparent;
}

.quiz-header,
.quiz-controls,
.result-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.progress-copy {
  display: grid;
  gap: 2px;
  text-align: right;
}

.progress-copy span {
  color: var(--muted);
  font-size: 0.8rem;
}

.progress-copy strong {
  font-size: 1.2rem;
}

.progress-track {
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: #e7f0ed;
}

.progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--sub-accent));
  transition: width 180ms ease;
}

.question-card {
  display: grid;
  gap: 18px;
  padding: 22px;
}

.question-card h2 {
  min-height: 4.8em;
  margin: 0;
  font-size: clamp(1.35rem, 7vw, 2rem);
  line-height: 1.45;
}

.options-list {
  display: grid;
  gap: 10px;
}

.option-button {
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  gap: 12px;
  min-height: 72px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  text-align: left;
  line-height: 1.6;
}

.option-button.is-selected,
.option-button:hover {
  border-color: color-mix(in srgb, var(--accent) 70%, white);
  background: color-mix(in srgb, var(--accent) 8%, white);
}

.option-id {
  display: grid;
  place-items: center;
  width: 42px;
  aspect-ratio: 1;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 10%, white);
  color: var(--accent-dark);
  font-weight: 900;
}

.quiz-controls {
  flex-wrap: wrap;
}

.result-hero {
  padding: 28px 20px;
  text-align: center;
}

.result-hero h1 {
  display: grid;
  gap: 2px;
  margin-top: 8px;
  font-size: clamp(2rem, 12vw, 4rem);
}

.result-hero h1 span {
  display: block;
}

.result-hero h2 {
  margin: 12px auto 0;
  max-width: 560px;
  color: var(--accent-dark);
  font-size: clamp(1.05rem, 5vw, 1.45rem);
  line-height: 1.55;
}

.result-body,
.cta-box {
  display: grid;
  gap: 16px;
  padding: 20px;
}

.text-block {
  display: grid;
  gap: 8px;
}

h3 {
  margin: 0;
  color: var(--accent-dark);
  font-size: 1rem;
}

.text-block p,
.cta-box p,
.disclaimer {
  margin: 0;
  color: var(--muted);
  line-height: 1.85;
}

.match-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;
}

.match-list span {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  padding: 12px;
}

.share-box {
  display: grid;
}

.disclaimer {
  font-size: 0.82rem;
}

@media (min-width: 700px) {
  .app-shell {
    padding: 32px;
  }

  .hero-panel {
    padding: 48px;
  }

  .question-card {
    padding: 34px;
  }

  .question-card h2 {
    min-height: 3.2em;
  }

  .result-body {
    grid-template-columns: 1fr 1fr;
  }

  .text-block:first-child {
    grid-column: 1 / -1;
  }
}
