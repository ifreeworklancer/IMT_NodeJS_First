module.exports = function (items, options) {
    var out = '<div class="row">';

    for (var i = 0, l = items.length; i < l; i++) {
        out = out + `
        <ul class="contacts-list">
        <li class="contacts-list-item"><a href="tel:+${items[i].phone}">${items[i].phone}</a></li>
        <li class="contacts-list-item"><a href="#">${items[i].email}</a></li>
        </ul>
        `
    }

    return out + "</div>";
}