const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const fetch = require('node-fetch');
const { send } = require('process');

//process.env.STRIPE_SECRET_KEY
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/summoner/:name', (req, res) => {
    const url = `https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${process.env.API_KEY}`;
    fetch(url).then(response => response.json()).then(response => res.send(response));
})

app.get('/champion', (req, res) => {
    const url = `https://cdn.communitydragon.org/${req.query.patch}/champion/${req.query.championKey}/data`;
    fetch(url).then(response => response.json()).then(response => res.send(response));
})

app.get('/free-rotation', (req, res) => {
    const url = `https://oc1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.API_KEY}`;
    fetch(url).then(response => response.json()).then(response => res.send(response))
})

app.get('/test', (req, res) => {
    res.send('<p>test</p>')
})

const port = process.env.PORT || 5000;

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port: ' + port);
});