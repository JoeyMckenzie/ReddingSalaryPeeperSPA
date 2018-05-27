const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

app.get('*').get(function(req, res) {
  res.sendFile('./src/index.html');
});

