const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

app.route('/*').get(function(req, res) {
  return res.sendFile('./src/index.html');
});
