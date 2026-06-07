export const diagnosisData = {
  meta: {
    title: "学び方タイプ診断",
    subtitle: "あなたに合う講座・教材の進め方がわかる",
    eyebrow: "Learning Style Quiz",
    startButton: "診断をはじめる",
    resultLabel: "あなたは",
    resultSuffix: "タイプ",
    restartButton: "もう一度診断する",
    shareButton: "Xで共有する",
    shareTextTemplate:
      "【学び方タイプ診断】\n私の結果は{type}タイプでした。\n\nあなたに合う学び方は？",
    disclaimer:
      "この診断は学び方の傾向を知るためのコンテンツです。成果や収益を保証するものではありません。",
    cta: {
      label: "無料ロードマップを受け取る",
      url: "https://example.com",
      note: "診断結果に合う学習ステップをまとめています。",
    },
  },
  theme: {
    accent: "#316fd1",
    accentDark: "#1f4f9c",
    subAccent: "#35b49a",
  },
  types: [
    { id: "roadmap", name: "ロードマップ", shortName: "道筋", image: "" },
    { id: "practice", name: "実践", shortName: "実践", image: "" },
    { id: "template", name: "テンプレ", shortName: "型", image: "" },
    { id: "mentor", name: "伴走", shortName: "伴走", image: "" },
  ],
  categories: {
    structure: "全体像、順番、計画",
    action: "実践、試行、アウトプット",
    system: "型、テンプレ、効率化",
    support: "相談、添削、環境",
  },
  questions: [
    {
      id: "q1",
      text: "新しいことを学ぶ時、最初に欲しいのは？",
      options: [
        { id: "A", text: "全体のロードマップ", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "すぐ試せる課題", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "コピペできる型", scores: { template: 2 }, category: "system" },
        { id: "D", text: "相談できる相手", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q2",
      text: "教材で一番ありがたいのは？",
      options: [
        { id: "A", text: "何からやるかが明確", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "手を動かしながら覚えられる", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "そのまま使えるテンプレがある", scores: { template: 2 }, category: "system" },
        { id: "D", text: "添削やフィードバックがある", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q3",
      text: "挫折しやすい理由に近いのは？",
      options: [
        { id: "A", text: "順番がわからなくなる", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "実践する前に満足してしまう", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "ゼロから作るのが重い", scores: { template: 2 }, category: "system" },
        { id: "D", text: "一人だと続かない", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q4",
      text: "講座を選ぶなら重視したいのは？",
      options: [
        { id: "A", text: "体系的に学べること", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "課題やワークが多いこと", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "資料やテンプレが充実していること", scores: { template: 2 }, category: "system" },
        { id: "D", text: "質問しやすいこと", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q5",
      text: "成果につながりやすい環境は？",
      options: [
        { id: "A", text: "ステップが見える環境", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "すぐアウトプットする環境", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "型を使って時短できる環境", scores: { template: 2 }, category: "system" },
        { id: "D", text: "見てもらえる環境", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q6",
      text: "今欲しいサポートは？",
      options: [
        { id: "A", text: "何をどの順番でやるか", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "実践課題と行動のきっかけ", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "使えるテンプレとチェックリスト", scores: { template: 2 }, category: "system" },
        { id: "D", text: "個別の添削や相談", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q7",
      text: "買ってよかったと思う教材は？",
      options: [
        { id: "A", text: "全体像がスッキリする教材", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "すぐ試して変化が出る教材", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "手元に置いて何度も使える教材", scores: { template: 2 }, category: "system" },
        { id: "D", text: "相談して前に進める教材", scores: { mentor: 2 }, category: "support" },
      ],
    },
    {
      id: "q8",
      text: "最後に、あなたが一番求めているのは？",
      options: [
        { id: "A", text: "迷わない道筋", scores: { roadmap: 2 }, category: "structure" },
        { id: "B", text: "行動できる勢い", scores: { practice: 2 }, category: "action" },
        { id: "C", text: "失敗しにくい型", scores: { template: 2 }, category: "system" },
        { id: "D", text: "一緒に進める安心感", scores: { mentor: 2 }, category: "support" },
      ],
    },
  ],
  results: {
    roadmap: {
      title: "全体像を見てから進みたいタイプ",
      summary:
        "あなたは、目的地と順番が見えると安心して進めるタイプです。断片的なノウハウより、ステップが整理された教材やロードマップと相性がいいです。",
      action:
        "まずは全体の流れを把握して、今日やること、今週やること、最初のゴールを決めましょう。",
      ctaTitle: "おすすめ商品",
      ctaText: "全体像が見えるロードマップ型教材や、ステップ式の講座がおすすめです。",
      matches: ["テンプレ", "伴走"],
    },
    practice: {
      title: "手を動かしながら伸びるタイプ",
      summary:
        "あなたは、考えるだけでなく実際に試すことで理解が深まるタイプです。ワーク、課題、アウトプット中心の教材と相性がいいです。",
      action:
        "まずは小さな課題を1つ選び、完璧を目指すより提出や公開まで進めてみましょう。",
      ctaTitle: "おすすめ商品",
      ctaText: "実践ワーク付き教材や、課題提出型の講座がおすすめです。",
      matches: ["ロードマップ", "伴走"],
    },
    template: {
      title: "型を使って早く形にしたいタイプ",
      summary:
        "あなたは、ゼロから考えるより、良い型を使って自分用に調整するのが得意なタイプです。テンプレ、チェックリスト、サンプル集と相性がいいです。",
      action:
        "まずは使えるテンプレを1つ選び、自分の商品や発信に合わせて書き換えてみましょう。",
      ctaTitle: "おすすめ商品",
      ctaText: "テンプレート集や、コピペして使える実践キットがおすすめです。",
      matches: ["ロードマップ", "実践"],
    },
    mentor: {
      title: "相談しながら進むと力が出るタイプ",
      summary:
        "あなたは、一人で抱えるより、誰かに見てもらいながら進むと行動しやすいタイプです。添削、相談、伴走サポートと相性がいいです。",
      action:
        "まずは今つまずいている部分を整理して、質問できる形にまとめてみましょう。",
      ctaTitle: "おすすめ商品",
      ctaText: "個別相談、添削付き講座、伴走プランがおすすめです。",
      matches: ["実践", "ロードマップ"],
    },
  },
  tieBreaker: {
    typeCategories: {
      roadmap: ["structure"],
      practice: ["action"],
      template: ["system"],
      mentor: ["support"],
    },
    fallbackPriority: ["template", "roadmap", "practice", "mentor"],
  },
};

export default diagnosisData;
