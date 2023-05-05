window.addEventListener('click', function(event) {

    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик по + или -
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем, кликнули ли мы по кнопке +
    if (event.target.dataset.action === 'plus') {
       counter.innerText = ++counter.innerText;
    }

    // Проверяем, кликнули ли мы по кнопке +
    if (event.target.dataset.action === 'minus') {

        // Проверяем чтобы счктчик был больше 1
        if(parseInt(counter.innerText) > 1) {
        // Изменяем текст в счетчике, уменьшая его на 1 
        counter.innerText = --counter.innerText;

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // отбражение статуса корзины Пустая / полная
            toggleCartToggle();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();

        }
    }

    // Проверяем клик на + или - внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery ();
    }

})