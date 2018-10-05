let catalog = require('../../db.json').product;

module.exports = function(app) {
    app.get('/catalog', (request, response) => {
        if (!!request.query.sort && request.query.sort.toUpperCase() === 'DESC') {
            catalog = catalog.sort((a, b) => b.id > a.id)
        }
    
        response.render('catalog/list', {
            catalog,
            helpers: {
                listCatalogItem: require('../helpers/catalog-item')
            }
        })
    })
    
    app.get('/catalog/:id', (request, response) => {
        const id = parseInt(request.params.id);
    
        response.render('catalog/item', {
            catalog: catalog.filter(item => item.id === id)[0]
        })
    })
}