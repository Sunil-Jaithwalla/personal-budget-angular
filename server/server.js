const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget =require('./budgetData.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.use(cors());
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});