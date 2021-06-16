const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
  	id: 0,
  	name: 'Ol Jimbo'
  },
  {
  	id: 1,
  	name: 'Stuntman Mike'
  }
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
  	res.status(200).json(friend);
  } else {
  	res.status(404).json({
  	  error: "Friend does not exist"
  	});
  }
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