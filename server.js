'use strict';
const express    = require('express');
const path       = require('path');
const httpProxy  = require('http-proxy');
const fetch      = require('isomorphic-fetch');
const bodyParser = require('body-parser');
const bundle     = require('./server/compiler.js');

const publicPath = path.resolve(__dirname, 'public');
const port       = process.env.PORT || 3000;
const app        = express();
const proxy      = httpProxy.createProxyServer({changeOrigin: true});

//Object literal used to cache previous requests to MLB API
const cache = {};

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

bundle();

app.all('/build/*', (req, res) => proxy.web(req, res, {target: 'http://localhost:8080'}));
proxy.on('error', (e) => console.log('Could not connect to proxy, please try again...'));

app.listen(port, () => console.log('Server running on port ' + port));

// Endpoint used to get initial games with date 5/20/16
app.get('/api/games', (req,res) => {
  fetch('http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json')
  .then(response => response.json())
  .then(json => res.send(json))
  .catch(err => res.send(err));
});

//Endpoint used to return either cached data or fetch data from MLB API, save to cache, and then return data
app.post('/api/games', (req,res) => {
  const date = req.body.date;
  const year = date.slice(6,10);
  const day = date.slice(3,5);
  const month = date.slice(0,2);

  if (cache[date]) {
    res.send(cache[date]); //Send back cached data if found
  } else {
    fetch(`http://gdx.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`)
    .then(response => response.json())
    .then(json => {
      cache[date] = json; //Save to cache once successfully requested
      res.send(json);
    })
    .catch(err => res.send(err));
  }
});
