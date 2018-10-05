var d = document,
    itemBox = d.querySelectorAll('.product-card'),
    cartCont = d.getElementById('cart_content'),
    sumValue = d.querySelector('.sum-value'),
    numberVal = 0;


function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on' + type, function () {
            handler.call(elem);
        });
    }
    return false;
}

function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addToCart(e) {
    this.disabled = true; //
    var cartData = getCartData() || {},
        parentBox = this.parentNode,
        itemId = this.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.product-card-body-title').innerHTML,
        itemPrice = parentBox.querySelector('.product-card-body__price').innerHTML;
    if (cartData.hasOwnProperty(itemId)) {
        cartData[itemId][2] += 1;
    } else {
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    if (!setCartData(cartData)) {
        this.disabled = false;
    }
    return false;
}

for (var i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector('.basket-btn'), 'click', addToCart);
}



function openCart(e) {
    var cartData = getCartData(),
        totalItems = '';

    numberVal = 0;

    if (cartData !== null) {
        totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (var items in cartData) {
            totalItems += '<tr>';
            for (var i = 0; i < cartData[items].length; i++) {
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            numberVal = numberVal + cartData[items][2] * cartData[items][1];
            totalItems += '</tr>';
        }
        totalItems += '</table>';
        cartCont.innerHTML = totalItems;
        sumValue.innerText = numberVal;
    } else {

        cartCont.innerHTML = 'В корзине пусто!';

        sumValue.innerText = '';

    }
    return false;
}

addEvent(d.getElementById('checkout'), 'click', openCart);

addEvent(d.getElementById('clear_cart'), 'click', function (e) {
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очишена.';
    sumValue.innerText = '';
});