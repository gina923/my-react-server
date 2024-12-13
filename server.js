const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;  

app.use(cors());


const users = [
  { id: 1, username: 'JIMIN', email: 'jimin@newyork.com' },
  { id: 2, username: 'LISA', email: 'lisa@yg.com' },
  { id: 3, username: 'Bruno', email: 'bruno@apple.com' },
];

app.get('/', (req, res) => {
  res.status(200).send('OK');
});


app.get('/users', (req, res) => {
  res.json(users);  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:5000`);
});
