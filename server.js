const express = require('express')
const yaml = require('js-yaml');
const fs   = require('fs');

const app = express();
app.set('view engine', `pug`);
app.use('/', express.static('./'));
const port = 3000

let options = yaml.load(fs.readFileSync('./config.yml', 'utf-8'));

app.get('/', (req, res) => {
    res.render('welcome', options.welcome);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`http://localhost:${port}/`)
})

