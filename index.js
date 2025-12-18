const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Scalable Web App 🚀</h1>
    <p>Handled by instance: ${process.pid}</p>
  `);
});

app.get('/ping', (req, res) => {
  res.json({
    message: "pong",
    instance: process.pid,
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
