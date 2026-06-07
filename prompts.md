# AIに診断データ作成を依頼するプロンプト

このテンプレートの `src/data/diagnosisData.js` を作り替えるためのプロンプトです。

## 診断企画を作る

```text
以下の条件で、SNSから申込・登録につながる診断コンテンツを作ってください。

ジャンル:
ターゲット:
売りたい商品:
誘導先:
雰囲気:
結果タイプ数: 4
質問数: 8

出力してほしいもの:
- 診断タイトル
- サブタイトル
- 結果タイプ4つ
- 質問8問
- 各質問の選択肢4つ
- スコア設計
- 結果文
- CTA文
- X共有文
```

## diagnosisData.jsに変換する

```text
以下の診断企画を、JavaScriptの `diagnosisData` オブジェクトに変換してください。

条件:
- `export const diagnosisData = {...}` の形
- `types` は id / name / shortName / image を持つ
- `questions` の各選択肢は id / text / scores / category を持つ
- `scores` はタイプidに加点する
- `results` は type id ごとに title / summary / action / ctaTitle / ctaText / matches を持つ
- 最後に `export default diagnosisData;` を付ける
- このテンプレートの `src/app.js` でそのまま動く形にする

診断企画:
ここに診断企画を貼る
```

## デザインを変える

```text
以下の診断サイトのCSSを、指定の雰囲気に合わせて調整してください。

雰囲気:
例: 美容サロン向け、上品、白ベース、淡いピンク、信頼感

条件:
- スマホ優先
- テキストがはみ出ない
- ボタンは押しやすく
- 既存のHTML構造は変えない
- `src/styles.css` 全体を出力する
```

## Codexに依頼する時の短い文

```text
この診断テンプレートを、以下の内容に差し替えてください。
`src/data/diagnosisData.js` を中心に編集し、必要なら色だけ `src/styles.css` で調整してください。

ジャンル:
ターゲット:
誘導先:
結果タイプ:
質問数:
雰囲気:
```
