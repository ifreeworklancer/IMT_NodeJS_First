let contacts = require('../../db.json').contacts;

module.exports = function(app) {
    app.get('/contacts', (request, response) => {
    
        response.render('contacts', {
            contacts,
            helpers: {
                listContacts: require('../helpers/contacts')
            }
        })
    })
}