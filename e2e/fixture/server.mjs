// Apps Script の代わりにフィクスチャを返すサーバー。
// ビルド時と next dev の getStaticProps が DATA_URL 経由でここから取得する
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';

const port = Number(process.env.FIXTURE_PORT ?? 3199);
const body = readFileSync(new URL('./data.json', import.meta.url));

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  res.end(body);
}).listen(port, () => {
  console.log(`fixture server listening on http://localhost:${port}`);
});
