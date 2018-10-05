module.exports = function (items, options) {
    var out = '<div class="row">';

    for (var i = 0, l = items.length; i < l; i++) {
        out = out + `
        <div class="col-md-6 col-lg-3 mb-3">
        <div class="card">
        <div class="card-body">
        <h4><a href="/news/${items[i].id}">${items[i].title}</a></h4>
        <p>${items[i].body}</p>
        </div>
        </div>
        </div>
        `
    }

    return out + "</div>";
}