// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// var ret = { "ipaddress": null, "language" : null, "software" : null};
var ret = null;
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));



// app.get("/dreams", function (request, response) {
//   response.send(dreams);
// });

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];
// app.get('*', function(req,res){
  
//   res.end(JSON.stringify(ret));
// });

http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, response) {
  var lang = req.headers['accept-language'];
  var ip  = req.ip;
  var opsys = req.headers['user-agent'];
  ret = { "ipaddress": ip, "language" : lang, "software" : opsys};
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
