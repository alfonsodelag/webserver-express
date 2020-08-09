const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

// Un middleware es un callback que se ejecutará sin importar el URL que el usuario pida

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function (err) { });
// Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alfonso de la guardia'
    })
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Listening to queries in port ${port}`)
});