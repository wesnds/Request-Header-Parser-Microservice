// init project
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.set("trust proxy", true);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listener
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/whoami', (req, res) => {
  let responseObj = {
    ipaddress: req.ip,
    language: req.headers['accept-language'], 
    software: req.headers['user-agent']
  }
  let first = responseObj.language.split(',')[0]
  let second = responseObj.language.split(',')[1]
  let comma = ','
  responseObj.language = first.concat(comma, second).toString()
  console.log(responseObj)
  res.send(responseObj)
})
