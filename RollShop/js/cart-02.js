
const cardWrapper = document.querySelector('.cart-wrapper');


window.addEventListener('click', function(element) {

    if (element.target.hasAttribute('data-cart')) {
        
        const card = element.target.closest('.card');
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

		const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCard) {
			const counterEl =itemInCard.querySelector('[data-counter]');
			counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
		} else {

        const cardItemHTML = `
                            <div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
        `;

        cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
		}

		card.querySelector('[data-counter]').innerText = '1';

		// отбражение статуса корзины Пустая / полная
		toggleCartToggle();

		// пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
    }
})