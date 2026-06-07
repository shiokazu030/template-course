# Type A: カード型診断サイトテンプレート

スマホ対応の静的診断サイトテンプレートです。
`src/data/diagnosisData.js` を書き換えるだけで、占い、美容、講座、SNS集客、推し活などの診断コンテンツに使えます。

## このテンプレートの特徴

1問ずつカードで進む、もっとも王道の診断サイト型です。
推し活、性格診断、タイプ診断など、楽しさを重視した診断に向いています。

## ファイル構成

```text
diagnosis-template/
├─ index.html
├─ README.md
├─ prompts.md
├─ assets/
└─ src/
   ├─ app.js
   ├─ styles.css
   └─ data/
      └─ diagnosisData.js
```

## 使い方

1. `src/data/diagnosisData.js` を開く
2. `meta` のタイトル、説明、シェア文、CTAリンクを書き換える
3. `types` に診断結果タイプを入れる
4. `questions` に質問と選択肢を入れる
5. `results` に結果文を入れる
6. `index.html` をブラウザで開いて確認する

## 画像を入れる場合

画像は `assets/` に入れて、`types` の `image` にパスを書きます。

```js
{
  id: "creator",
  name: "発信型",
  shortName: "発信",
  image: "./assets/creator.jpg"
}
```

画像が未設定の場合は、丸いプレースホルダーが表示されます。

## 画像を使わない場合

画像なしでもそのまま使えます。
`types` の `image` を空文字にしてください。

```js
{
  id: "creator",
  name: "発信型",
  shortName: "発信",
  image: ""
}
```

この場合、画像の代わりに `shortName` が丸いアイコンとして表示されます。
`assets/` フォルダは空のままで大丈夫です。

トップ画面の丸いアイコン自体を完全に消したい場合は、`src/app.js` の以下の行を削除します。

```js
<div class="type-strip" aria-hidden="true">
  ${diagnosisData.types.map((type) => renderTypeImage(type, "mini-photo")).join("")}
</div>
```

結果画面の大きい丸アイコンも消したい場合は、`src/app.js` の以下の行を削除します。

```js
${renderTypeImage(type, "result-photo")}
```

画像枠を消したあと余白が気になる場合は、`src/styles.css` の `.result-photo` と `.type-strip` 関連のスタイルも削除して構いません。

## CTAリンク

結果画面のボタンは `meta.cta` で設定します。

```js
cta: {
  label: "無料ロードマップを見る",
  url: "https://example.com",
  note: "診断結果に合う始め方をまとめています。"
}
```

LINE、予約ページ、商品ページ、Brain、note、ココナラなどに差し替えて使えます。

## 公開方法

GitHub Pages、Netlify、Vercelなどの静的ホスティングで公開できます。
まずはGitHubに以下をアップロードしてください。

```text
index.html
README.md
prompts.md
assets
src
```

## 注意

診断コンテンツは娯楽または一般的な提案として使ってください。
医療、法律、金融などの高リスク領域では断定的な表現を避けてください。
無許可の公式画像、ロゴ、著名人画像、キャラクター画像は使用しないでください。
