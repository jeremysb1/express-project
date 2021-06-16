const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
  	id: 1,
  	name: 'Ol Jimbo'
  });
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hi Juan</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('updating messages...');
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});