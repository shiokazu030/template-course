import diagnosisData from "./data/diagnosisData.js";

const app = document.querySelector("#app");
const state = {
  step: "intro",
  currentIndex: 0,
  answers: {},
};

applyTheme();

function applyTheme() {
  const { accent, accentDark, subAccent } = diagnosisData.theme || {};
  if (accent) document.documentElement.style.setProperty("--accent", accent);
  if (accentDark) document.documentElement.style.setProperty("--accent-dark", accentDark);
  if (subAccent) document.documentElement.style.setProperty("--sub-accent", subAccent);
}

function getType(typeId) {
  return diagnosisData.types.find((type) => type.id === typeId);
}

function renderTypeImage(type, className = "type-photo") {
  const fallback = type.shortName || type.name.slice(0, 2);
  const image = type.image || "";
  return `
    <div class="${className}" aria-label="${type.name}の画像枠" ${image ? "" : "data-empty='true'"}>
      ${image ? `<img src="${image}" alt="${type.name}" onerror="this.remove(); this.parentElement.dataset.empty='true';" />` : ""}
      <span>${fallback}</span>
    </div>
  `;
}

function getEmptyTypeScores() {
  return Object.fromEntries(diagnosisData.types.map((type) => [type.id, 0]));
}

function getEmptyCategoryScores() {
  return Object.fromEntries(Object.keys(diagnosisData.categories || {}).map((category) => [category, 0]));
}

function calculateScores() {
  const typeScores = getEmptyTypeScores();
  const categoryScores = getEmptyCategoryScores();
  const lateScores = getEmptyTypeScores();

  diagnosisData.questions.forEach((question, index) => {
    const selectedId = state.answers[question.id];
    const option = question.options.find((item) => item.id === selectedId);
    if (!option) return;

    if (option.category && categoryScores[option.category] !== undefined) {
      categoryScores[option.category] += 1;
    }

    Object.entries(option.scores).forEach(([typeId, points]) => {
      typeScores[typeId] += points;
      if (index >= Math.max(diagnosisData.questions.length - 3, 0)) {
        lateScores[typeId] += points;
      }
    });
  });

  return { typeScores, categoryScores, lateScores };
}

function getTypeCategoryScore(typeId, categoryScores) {
  const categories = diagnosisData.tieBreaker?.typeCategories?.[typeId] || [];
  return Math.max(...categories.map((category) => categoryScores[category] || 0), 0);
}

function pickResultType(scores) {
  const { typeScores, categoryScores, lateScores } = scores;
  const highest = Math.max(...Object.values(typeScores));
  let candidates = diagnosisData.types.map((type) => type.id).filter((typeId) => typeScores[typeId] === highest);

  if (candidates.length > 1) {
    const bestCategoryScore = Math.max(...candidates.map((typeId) => getTypeCategoryScore(typeId, categoryScores)));
    candidates = candidates.filter((typeId) => getTypeCategoryScore(typeId, categoryScores) === bestCategoryScore);
  }

  if (candidates.length > 1) {
    const bestLateScore = Math.max(...candidates.map((typeId) => lateScores[typeId]));
    candidates = candidates.filter((typeId) => lateScores[typeId] === bestLateScore);
  }

  if (candidates.length > 1) {
    return diagnosisData.tieBreaker?.fallbackPriority?.find((typeId) => candidates.includes(typeId)) || candidates[0];
  }

  return candidates[0];
}

function getProgressText() {
  return `${Object.keys(state.answers).length}/${diagnosisData.questions.length}`;
}

function setAnswer(questionId, optionId) {
  state.answers[questionId] = optionId;
  const isLast = state.currentIndex === diagnosisData.questions.length - 1;
  state.currentIndex = isLast ? state.currentIndex : state.currentIndex + 1;
  render();
}

function showResult() {
  if (Object.keys(state.answers).length !== diagnosisData.questions.length) return;
  state.step = "result";
  render();
}

function resetDiagnosis() {
  state.step = "intro";
  state.currentIndex = 0;
  state.answers = {};
  render();
}

function shareOnX(type) {
  const pageUrl = window.location.href;
  const text = `${diagnosisData.meta.shareTextTemplate.replace("{type}", type.name)}\n\n${pageUrl}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderIntro() {
  app.innerHTML = `
    <section class="intro-view">
      <div class="hero-panel">
        <p class="eyebrow">${diagnosisData.meta.eyebrow || "Diagnosis Quiz"}</p>
        <h1>${diagnosisData.meta.title}</h1>
        <p class="subtitle">${diagnosisData.meta.subtitle}</p>
        <div class="type-strip" aria-hidden="true">
          ${diagnosisData.types.map((type) => renderTypeImage(type, "mini-photo")).join("")}
        </div>
        <button class="primary-action" type="button" data-action="start">${diagnosisData.meta.startButton || "診断をはじめる"}</button>
      </div>
      <p class="disclaimer">${diagnosisData.meta.disclaimer}</p>
    </section>
  `;
}

function renderQuestion() {
  const question = diagnosisData.questions[state.currentIndex];
  const selected = state.answers[question.id];
  const canShowResult = Object.keys(state.answers).length === diagnosisData.questions.length;
  const progress = Math.round((Object.keys(state.answers).length / diagnosisData.questions.length) * 100);

  app.innerHTML = `
    <section class="quiz-view">
      <header class="quiz-header">
        <button class="ghost-action" type="button" data-action="intro">最初へ</button>
        <div class="progress-copy">
          <span>回答 ${getProgressText()}</span>
          <strong>Q${state.currentIndex + 1}</strong>
        </div>
      </header>
      <div class="progress-track" aria-hidden="true"><span style="width: ${progress}%"></span></div>
      <article class="question-card">
        <p class="question-count">Question ${state.currentIndex + 1}</p>
        <h2>${question.text}</h2>
        <div class="options-list">
          ${question.options
            .map(
              (option) => `
                <button class="option-button ${selected === option.id ? "is-selected" : ""}" type="button" data-answer="${option.id}">
                  <span class="option-id">${option.id}</span>
                  <span>${option.text}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
      <footer class="quiz-controls">
        <button class="secondary-action" type="button" data-action="prev" ${state.currentIndex === 0 ? "disabled" : ""}>戻る</button>
        <button class="primary-action compact" type="button" data-action="result" ${canShowResult ? "" : "disabled"}>結果を見る</button>
      </footer>
      <p class="disclaimer">${diagnosisData.meta.disclaimer}</p>
    </section>
  `;
}

function renderResult() {
  const typeId = pickResultType(calculateScores());
  const type = getType(typeId);
  const result = diagnosisData.results[typeId];

  app.innerHTML = `
    <section class="result-view">
      <article class="result-hero">
        ${renderTypeImage(type, "result-photo")}
        <p class="eyebrow">${diagnosisData.meta.resultLabel || "Your type is"}</p>
        <h1><span>${type.name}</span><span>${diagnosisData.meta.resultSuffix || "タイプ"}</span></h1>
        <h2>${result.title}</h2>
      </article>
      <section class="result-body">
        <div class="text-block">
          <h3>特徴</h3>
          <p>${result.summary}</p>
        </div>
        <div class="text-block">
          <h3>おすすめ行動</h3>
          <p>${result.action}</p>
        </div>
        <div class="text-block">
          <h3>${result.ctaTitle || "次の一歩"}</h3>
          <p>${result.ctaText}</p>
        </div>
        <div class="matches">
          <h3>相性のよいタイプ</h3>
          <div class="match-list">
            ${(result.matches || []).map((match) => `<span>${match}</span>`).join("")}
          </div>
        </div>
      </section>
      <section class="cta-box">
        <a class="primary-link" href="${diagnosisData.meta.cta.url}" target="_blank" rel="noopener noreferrer">${diagnosisData.meta.cta.label}</a>
        <p>${diagnosisData.meta.cta.note}</p>
      </section>
      <section class="share-box">
        <button class="primary-action" type="button" data-action="share-x">${diagnosisData.meta.shareButton || "Xで共有する"}</button>
      </section>
      <footer class="result-actions">
        <button class="secondary-action" type="button" data-action="restart">${diagnosisData.meta.restartButton || "もう一度診断する"}</button>
      </footer>
      <p class="disclaimer">${diagnosisData.meta.disclaimer}</p>
    </section>
  `;
}

function render() {
  if (state.step === "intro") renderIntro();
  if (state.step === "quiz") renderQuestion();
  if (state.step === "result") renderResult();
}

app.addEventListener("click", (event) => {
  const answer = event.target.closest("[data-answer]");
  const action = event.target.closest("[data-action]")?.dataset.action;

  if (answer) {
    const question = diagnosisData.questions[state.currentIndex];
    setAnswer(question.id, answer.dataset.answer);
    return;
  }

  if (action === "start") {
    state.step = "quiz";
    render();
  }
  if (action === "intro") resetDiagnosis();
  if (action === "prev") {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    render();
  }
  if (action === "result") showResult();
  if (action === "share-x") shareOnX(getType(pickResultType(calculateScores())));
  if (action === "restart") resetDiagnosis();
});

render();
