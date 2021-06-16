function getMessages(req, res) {
  res.send('<ul><li>Hi Juan</li></ul>');
}

function postMessage(req, res) {
  console.log('updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};