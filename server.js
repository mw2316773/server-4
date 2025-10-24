// 自分で一から書いてみよう
// Honoフレームワークの読み込み
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

// publicフォルダー以下のファイルをウェブサイトとみなす
app.use('/*', serveStatic({ root: './public' }));

// GETリクエストに対する処理
app.get('/api', (c) => {
  // console.log('in the server side.');
  return c.json({ message: 'Hello World!' });
});

// Denoでサーバーとして起動
Deno.serve(app.fetch);