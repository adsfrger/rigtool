const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('🟢 クライアント接続');

  ws.on('message', (message) => {
    console.log('📩 受信:', message);
    ws.send(`Echo: ${message}`);
  });

  ws.send('🔗 WebSocketサーバー接続成功！');
});

app.get('/', (req, res) => {
  res.send('WebSocket Server is running');
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`🚀 サーバー起動: ポート ${PORT}`);
});
