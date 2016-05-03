# examIPA
SPA（SinglePageApplication）のフレームワーク[Aurelia](http://aurelia.io/)を使ったサンプル

# 概要
情報処理資格試験（[IPA](https://www.ipa.go.jp/)）の過去問を出題するサイトを構築するデモ

# 起動手順
1. [NodeJS](http://nodejs.org/)をインストール
2. Aurelia等の依存ファイルをインストール

    ```shell
    npm install
    jspm install -y
    ```

3. ファイルを結合してビルド

    ```shell
    gulp bundle
    ```

4. サーバ起動

    ```shell
    node server.js
    ```

5. ブラウザでhttp://localhost:8080にアクセス

# 動作環境
Windows7 64bit
Node v4.4.3
npm v3.8.8

# 開発用コマンド
サーバは起動したままファイルの修正が可能

1. ファイルの結合・結合解除

    ```shell
    gulp bundle
    gulp unbundle
    ```

2. ビルド

    ```shell
    gulp build
    ```

3. ファイル変更時に自動ビルド

    ```shell
    gulp watch
    ```

