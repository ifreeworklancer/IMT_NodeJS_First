module.exports = function(app) {
    app.get('/basket', (request, response) => {  
        response.render('basket', { })
    })
}