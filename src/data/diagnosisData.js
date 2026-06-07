export const diagnosisData = {
  meta: {
    title: "AI副業タイプ診断",
    subtitle: "あなたに合うAI活用スタイルは？",
    eyebrow: "AI Side Business Quiz",
    startButton: "診断をはじめる",
    resultLabel: "あなたは",
    resultSuffix: "タイプ",
    restartButton: "もう一度診断する",
    shareButton: "Xで共有する",
    shareTextTemplate:
      "【AI副業タイプ診断】\n私の結果は{type}タイプでした。\n\nあなたに合うAI活用スタイルは？",
    disclaimer:
      "この診断は一般的な傾向をもとにしたコンテンツです。成果や収益を保証するものではありません。",
    cta: {
      label: "無料ロードマップを見る",
      url: "https://example.com",
      note: "診断結果に合う始め方をまとめています。",
    },
  },
  theme: {
    accent: "#2f8f83",
    accentDark: "#17655d",
    subAccent: "#f2b84b",
  },
  types: [
    {
      id: "planner",
      name: "設計型",
      shortName: "設計",
      image: "",
    },
    {
      id: "creator",
      name: "発信型",
      shortName: "発信",
      image: "",
    },
    {
      id: "operator",
      name: "効率化型",
      shortName: "効率",
      image: "",
    },
    {
      id: "supporter",
      name: "伴走型",
      shortName: "伴走",
      image: "",
    },
  ],
  categories: {
    planning: "企画、設計、戦略、整理",
    content: "発信、文章、SNS、表現",
    workflow: "効率化、作業改善、自動化",
    support: "相談、伴走、顧客対応",
  },
  questions: [
    {
      id: "q1",
      text: "AIを使うなら、まずやってみたいのは？",
      options: [
        { id: "A", text: "売れる企画や導線を考える", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "SNS投稿や記事を作る", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "面倒な作業を短縮する", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "人の相談や悩みに活かす", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q2",
      text: "副業で一番大事にしたいことは？",
      options: [
        { id: "A", text: "全体の流れが見えること", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "自分の言葉で発信できること", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "少ない時間で回せること", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "相手に喜んでもらえること", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q3",
      text: "得意に近いのは？",
      options: [
        { id: "A", text: "情報を整理して形にする", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "文章や見せ方を工夫する", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "手順化してミスを減らす", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "相手に合わせて伝える", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q4",
      text: "SNSで伸ばすなら、どれが近い？",
      options: [
        { id: "A", text: "導線や企画を先に固めたい", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "投稿をどんどん試したい", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "投稿作成をテンプレ化したい", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "フォロワーとの関係性を大切にしたい", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q5",
      text: "お金につなげやすそうなのは？",
      options: [
        { id: "A", text: "商品設計や販売導線を作る", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "コンテンツ販売や発信をする", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "業務効率化の仕組みを作る", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "相談・添削・サポートをする", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q6",
      text: "つまずきやすいのは？",
      options: [
        { id: "A", text: "考えすぎて動き出しが遅い", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "発信のネタが続かない", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "細かい改善に時間を使いすぎる", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "相手に合わせすぎて疲れる", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q7",
      text: "AIに一番任せたいことは？",
      options: [
        { id: "A", text: "戦略や構成の壁打ち", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "文章や投稿案の作成", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "作業手順やテンプレ作成", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "返信文や提案文の作成", scores: { supporter: 2 }, category: "support" },
      ],
    },
    {
      id: "q8",
      text: "最初に作るなら？",
      options: [
        { id: "A", text: "販売ページや導線マップ", scores: { planner: 2 }, category: "planning" },
        { id: "B", text: "SNS投稿やミニ教材", scores: { creator: 2 }, category: "content" },
        { id: "C", text: "作業効率化テンプレ", scores: { operator: 2 }, category: "workflow" },
        { id: "D", text: "相談メニューや診断サービス", scores: { supporter: 2 }, category: "support" },
      ],
    },
  ],
  results: {
    planner: {
      title: "売れる流れを組み立てる設計タイプ",
      summary:
        "あなたは、全体像を見ながら企画や導線を作るのが得意なタイプです。AIは壁打ち相手として使うと強く、商品設計、販売ページ、SNS導線づくりと相性がいいです。",
      action:
        "まずは売りたい商品を1つ決めて、ターゲット、悩み、入口コンテンツ、申込導線をAIと一緒に整理してみましょう。",
      ctaTitle: "おすすめの次の一歩",
      ctaText: "診断結果に合う販売導線テンプレから始めるのがおすすめです。",
      matches: ["発信型", "伴走型"],
    },
    creator: {
      title: "コンテンツで人を集める発信タイプ",
      summary:
        "あなたは、文章や見せ方を工夫して人に届けるのが得意なタイプです。AIは投稿案、記事構成、教材のたたき台づくりに使うと力を発揮します。",
      action:
        "まずは自分のテーマで投稿テンプレを作り、AIに10本分の投稿案を出してもらうところから始めましょう。",
      ctaTitle: "おすすめの次の一歩",
      ctaText: "SNS投稿テンプレと診断コンテンツを組み合わせると導線が作りやすくなります。",
      matches: ["設計型", "効率化型"],
    },
    operator: {
      title: "作業を仕組みに変える効率化タイプ",
      summary:
        "あなたは、面倒な作業を整理して短縮するのが得意なタイプです。AIはテンプレ化、手順化、チェックリスト化に使うと成果につながりやすいです。",
      action:
        "まずは普段の作業を1つ選び、AIに手順書、テンプレ、チェックリストへ変換してもらいましょう。",
      ctaTitle: "おすすめの次の一歩",
      ctaText: "効率化テンプレを商品化すると、実用性の高いコンテンツになります。",
      matches: ["発信型", "伴走型"],
    },
    supporter: {
      title: "相手に合わせて価値を届ける伴走タイプ",
      summary:
        "あなたは、相手の悩みを受け取り、わかりやすく伝えるのが得意なタイプです。AIは提案文、返信文、診断結果文、相談メニューづくりに使うと相性がいいです。",
      action:
        "まずはよくある相談内容を整理して、タイプ別のアドバイス文や提案文をAIと一緒に作ってみましょう。",
      ctaTitle: "おすすめの次の一歩",
      ctaText: "診断から無料相談やLINE登録へつなげる導線づくりがおすすめです。",
      matches: ["設計型", "効率化型"],
    },
  },
  tieBreaker: {
    typeCategories: {
      planner: ["planning"],
      creator: ["content"],
      operator: ["workflow"],
      supporter: ["support"],
    },
    fallbackPriority: ["planner", "creator", "operator", "supporter"],
  },
};

export default diagnosisData;
