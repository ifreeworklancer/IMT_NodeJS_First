let news = require('../../db.json').news;

module.exports = function(app) {
    app.get('/news', (request, response) => {
        if (!!request.query.sort && request.query.sort.toUpperCase() === 'DESC') {
            news = news.sort((a, b) => b.id > a.id)
        }
    
        response.render('news/list', {
            news,
            helpers: {
                list: require('../helpers/news-item')
            }
        })
    })
    
    app.get('/news/:id', (request, response) => {
        const id = parseInt(request.params.id);
    
        response.render('news/item', {
            news: news.filter(item => item.id === id)[0]
        })
    })
}