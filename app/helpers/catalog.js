module.exports = function (items, options) {
    var out = '<div class="row">';

    for (var i = 0, l = 6; i < l; i++) {
        out = out + `
        <div class="col-md-6 col-lg-4 mb-3">
        <div class="product-card">
        <div class="product-card-body">
        <h4 class="product-card-body-title"><a href="/catalog/${items[i].id}" class="product-card-body-title__link">${items[i].title}</a></h4>
        <p class="product-card-body__description">${items[i].body}</p>
        <div class="product-card-body__price mb-3">${items[i].price}</div>
        <button class="btn btn-dark basket-btn" data-id="${items[i].id}">Add</button>
        <a href="./basket" class="btn btn-light">Перейти в корзину</a>
        </div>
        </div>
        </div>
        `
    }

    return out + "</div>";
}