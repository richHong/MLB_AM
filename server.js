var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var fetch = require('isomorphic-fetch');

var port = process.env.PORT || 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();

app.use(express.static(publicPath));

var bundle = require('./server/compiler.js');
bundle();

app.all('/build/*', function (req, res) {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  });
});

app.get('/api/games', function(req,res){
  fetch('http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json')
  .then(response => {
    response.json()
    .then(json => {
      res.send(json);
    });
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});