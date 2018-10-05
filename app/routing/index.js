const news = require('./news');
const about = require('./about');
const contacts = require('./contacts');
const catalogItem = require('./catalog');
const basket = require('./basket');

let catalog = require('../../db.json').product;

module.exports = function(app) {
    app.get('/', (request, response) => {
        response.render('home', {
            catalog,
            helpers: {
                listCatalog: require('../helpers/catalog')
            }
        })
    })
    
    news(app)
    about(app)
    contacts(app)
    catalogItem(app)
    basket(app)
}