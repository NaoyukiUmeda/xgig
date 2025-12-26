# XGIG - Cloudflare Pagesデプロイ手順

## 概要
xgig.jpサイトをCloudflare Pagesにデプロイするための手順書です。

## 必要なもの
- Cloudflare アカウント
- GitHub アカウント（推奨）
- このサイトのファイル一式

## ファイル構成
```
xgig-site/
├── index.html      # メインHTMLファイル
├── styles.css      # スタイルシート
├── script.js       # JavaScript
└── README.md       # このファイル
```

## デプロイ方法

### 方法1: GitHubを使用（推奨）

1. **GitHubリポジトリの作成**
   - GitHubで新しいリポジトリを作成
   - リポジトリ名: `xgig-website`（任意）

2. **ファイルをプッシュ**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/xgig-website.git
   git push -u origin main
   ```

3. **Cloudflare Pagesに接続**
   - Cloudflare ダッシュボードにログイン
   - 「Pages」→「Create a project」
   - 「Connect to Git」を選択
   - GitHubアカウントを接続
   - 作成したリポジトリを選択

4. **ビルド設定**
   - Framework preset: `None`
   - Build command: （空白）
   - Build output directory: `/`
   - Root directory: `/`

5. **デプロイ**
   - 「Save and Deploy」をクリック
   - 数分でデプロイ完了

### 方法2: 直接アップロード

1. **Cloudflare Pagesダッシュボード**
   - Cloudflare ダッシュボードにログイン
   - 「Pages」→「Create a project」
   - 「Upload assets」を選択

2. **ファイルをアップロード**
   - `index.html`, `styles.css`, `script.js` を選択
   - プロジェクト名を入力: `xgig`
   - 「Deploy site」をクリック

3. **デプロイ完了**
   - 自動的にURLが生成されます
   - 例: `https://xgig.pages.dev`

## カスタムドメインの設定

1. **Cloudflare Pagesプロジェクトを開く**
   - デプロイされたプロジェクトを選択

2. **Custom domainsタブ**
   - 「Set up a custom domain」をクリック
   - `xgig.jp` を入力
   - DNS設定の指示に従う

3. **DNS設定**
   Cloudflare DNSで以下を設定:
   - Type: `CNAME`
   - Name: `@` または `www`
   - Target: `xgig.pages.dev`
   - Proxy status: Proxied (オレンジクラウド)

## 更新方法

### GitHubを使用している場合
```bash
# ファイルを編集後
git add .
git commit -m "Update content"
git push
```
→ 自動的に再デプロイされます

### 直接アップロードの場合
- Cloudflare Pagesダッシュボードで「Create new deployment」
- 更新したファイルをアップロード

## 主な機能

### レスポンシブデザイン
- PC、タブレット、スマートフォンに対応
- ブレークポイント: 768px

### アニメーション
- スムーススクロール
- ホバーエフェクト
- ページトップボタン

### セクション
- ヒーローセクション（グラデーション背景）
- ミッションセクション
- 会社概要
- お問い合わせ

## カスタマイズ

### 色の変更
`styles.css`のCSS変数を編集:
```css
:root {
    --primary-blue: #4169E1;
    --primary-purple: #9370DB;
    --primary-pink: #FF1493;
    --primary-red: #DC143C;
}
```

### 画像の変更
`index.html`の画像URLを編集:
```html
<img src="YOUR_IMAGE_URL" alt="説明">
```

### コンテンツの変更
`index.html`の各セクションを編集してください

## パフォーマンス最適化

### Cloudflare Pages自動最適化
- 自動CSS/JS圧縮
- 画像最適化
- CDN配信
- HTTPS自動対応

### 追加の最適化（オプション）
1. **画像の最適化**
   - WebP形式に変換
   - 適切なサイズにリサイズ

2. **フォントの最適化**
   - システムフォント使用（既に実装済み）

## トラブルシューティング

### デプロイが失敗する
- ファイル名が正しいか確認
- `index.html`がルートにあるか確認
- ビルド設定を確認

### カスタムドメインが反映されない
- DNS設定を確認（反映に最大48時間）
- SSL証明書の発行を待つ（数分〜数時間）

### スタイルが適用されない
- ファイルパスを確認
- ブラウザキャッシュをクリア

## サポート

問題が発生した場合:
1. Cloudflare Pagesドキュメントを確認
2. Cloudflareサポートに問い合わせ
3. GitHubのIssuesで報告

## ライセンス
© XGIG INC. All rights reserved.
