const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./app/routing');

routes(app);

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exphbs({
    defaultLayout: 'default',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'app/views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views/templates'))

app.listen(port, (err) => {
    if (err) return console.error(err.message)
})
