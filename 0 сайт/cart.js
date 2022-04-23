'use strict';

let featuredItemEl = document.querySelectorAll('.featuredItem');
let cartItems = [];
let cartPrices = [];
let cartQuantities = [];
let cartQuantity = 0;
let cartIconWrapEl = document.querySelector('.cartIconWrapSpan');
let floatCartTable = document.querySelector(".floatCartTable");
let floatCartEl = document.querySelector(".floatCart");

cartIconWrapEl.addEventListener('click', () => {
    if (floatCartEl.classList.contains("invisibleStyle")) {
        floatCartEl.classList.remove("invisibleStyle");
    }
    else {
        floatCartEl.classList.add("invisibleStyle");
    }
});


featuredItemEl.forEach(element => {
    element.addEventListener('click', CartClickHandler);
})

function CartClickHandler(event) {
    if (event.target.tagName == "BUTTON") {
        let textNAme = this.childNodes.item(3).childNodes.item(1).innerText;
        let textPrice = Number(String(this.childNodes.item(3)
            .childNodes.item(5).innerText).substring(1));
        let ind = cartItems.indexOf(textNAme);
        if (ind != -1) {
            cartQuantities[ind] = cartQuantities[ind] + 1;
        }
        else {
            cartItems.push(textNAme);
            cartQuantities.push(1);
            cartPrices.push(textPrice);
        }
        cartQuantity = cartQuantity + 1;
        changeFloatCartData();
    };
}

function changeFloatCartData() {
    floatCartTable.innerHTML = "";
    for (let ind = 0; ind < cartItems.length; ind++) {
        floatCartTable.innerHTML = floatCartTable.innerHTML + `<tr><td>${cartItems[ind]}</td><td>${cartPrices[ind]}</td><td>${cartQuantities[ind]}</td><td>${cartPrices[0] * cartQuantities[ind]}</td></tr>`;
    }
    cartIconWrapEl.innerHTML = cartQuantity;
}






