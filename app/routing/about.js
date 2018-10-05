module.exports = function(app) {
    app.get('/about', (request, response) => {  
        response.render('about', { })
    })
}