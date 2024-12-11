const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const users = [
  { id: 1, username: 'JIMIN', email: 'jimin@newyork.com' },
  { id: 2, username: 'LISA', email: 'lisa@yg.com' },
  { id: 3, username: 'Bruno', email: 'bruno@apple.com' },
];

app.get('/users', (req, res) => {
  res.json(users); // 사용자 데이터를 반환
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});