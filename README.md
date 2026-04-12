# 雑談メーカー / Small Talk Maker

ランダムに雑談の話題を提案する多言語対応Webアプリケーション

**[Live Demo → https://small-talk-maker.vercel.app](https://small-talk-maker.vercel.app)**

> Free random conversation topic generator in 8 languages — no signup required.
> 登録不要・完全無料の会話ネタジェネレーター（8言語対応）

## 機能

- **ランダム話題表示**: ボタンクリックでランダムに話題を選択
- **カテゴリフィルタリング**: 「全て」または特定カテゴリを選択して絞り込み
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **ダークモード対応**: システム設定に応じて自動切り替え

## 技術スタック

- **Next.js 15**: App Routerを使用した最新のReactフレームワーク
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: モダンなスタイリング
- **Node.js 22**: 実行環境

## 開発環境のセットアップ

### DevContainerを使用する場合（推奨）

#### 前提条件
- [Docker Desktop](https://www.docker.com/products/docker-desktop)がインストールされている
- [VSCode](https://code.visualstudio.com/)がインストールされている
- VSCodeの[Dev Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)がインストールされている

#### 起動手順
1. VSCodeでプロジェクトフォルダを開く
2. コマンドパレット（`Ctrl+Shift+P` / `Cmd+Shift+P`）を開く
3. 「Dev Containers: Reopen in Container」を実行
4. コンテナのビルドと起動を待つ（初回は数分かかる場合があります）
5. 自動的に `npm install` が実行されます

### ローカル環境を使用する場合

#### 前提条件
- Node.js 22以上がインストールされている

#### セットアップ手順
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 開発

### 開発サーバーの起動
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### ビルド
```bash
# 本番用ビルド
npm run build

# 本番モードで起動
npm run start
```

### リント
```bash
npm run lint
```

## プロジェクト構造

```
zatsudan-maker/
├── .devcontainer/
│   └── devcontainer.json      # DevContainer設定
├── app/
│   ├── layout.tsx             # アプリケーションレイアウト
│   ├── page.tsx               # メインページ
│   └── globals.css            # グローバルスタイル
├── components/
│   ├── Header.tsx             # ヘッダーコンポーネント
│   ├── TopicCard.tsx          # 話題表示カード
│   ├── CategoryFilter.tsx     # カテゴリフィルタ
│   └── RandomButton.tsx       # ランダム選択ボタン
├── data/
│   └── topics.json            # 話題データ
├── lib/
│   └── topics.ts              # 話題選択ロジック
├── types/
│   └── topic.ts               # 型定義
└── public/                    # 静的ファイル
```

## データ構造

話題データは `data/topics.json` に JSON 形式で保存されています。

```json
{
  "topics": [
    {
      "id": 1,
      "content": "話題の内容",
      "category": "カテゴリ名"
    }
  ],
  "categories": ["趣味", "グルメ", "旅行", "仕事", "テクノロジー", "日常"]
}
```

新しい話題を追加する場合は、このファイルを編集してください。

## デプロイ

### Vercelへのデプロイ（推奨）

1. [Vercel](https://vercel.com/)にサインアップ
2. GitHubリポジトリを接続
3. 自動的にビルドとデプロイが実行されます

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/zatsudan-maker)

### その他のホスティングサービス

Next.js 15はNode.js環境があればどこでもデプロイ可能です：
- Netlify
- AWS Amplify
- Google Cloud Run
- その他Node.jsをサポートするプラットフォーム

## ライセンス

MIT

## 将来的な拡張案

- AI生成機能の追加（OpenAI API統合）
- ユーザーが話題を投稿できる機能
- お気に入り機能
- SNSシェア機能
- 多言語対応
- 履歴表示機能（LocalStorageで保存）
