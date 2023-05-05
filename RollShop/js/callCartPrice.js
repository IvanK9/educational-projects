function calcCartPriceAndDelivery () {
    // const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const deliveryShow = document.querySelector('.cart-total');
    const costDeliveryShow = document.querySelector('.free-delivery');
    

    let totalPrice = 0;
    
    cartItems.forEach(function (item) {
        
        const amountEl  = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = totalPrice;

    // Скрываем/показываем блок с доставкой
    if (totalPrice > 0) {
        deliveryShow.classList.remove('none');
    } else {
        deliveryShow.classList.add('none');
    }

    // Указываем стоимость доставки
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
        costDeliveryShow.classList.add('none');
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
        costDeliveryShow.classList.remove('none');
    }

}
