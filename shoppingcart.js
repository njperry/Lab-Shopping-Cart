"use strict";

let shoppingCart = [];

let itemList = [
    {
        name: "shirt",
        price: 10
    },
    {
        name: "pants",
        price: 20
    },
    {
        name: "socks",
        price: 5
    },
    {
        name: "hat",
        price: 15
    },
    {
        name: "tie",
        price: 17
    }
];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { name: itemName, price: itemPrice }];
};

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)]
        ;
}

function editItem(name, newName, newPrice) {
    let index = shoppingCart.findIndex(element => element.name === name);
    shoppingCart = [...shoppingCart.slice(0, index), { name: newName, price: newPrice }, ...shoppingCart.slice(index + 1)]
}

function printTotal() {
    let total = 0;
    for (let { price } of shoppingCart) {
        total += (price * 1.06);
    }
    console.log(`Your total plus tax is: ${total}`);
}


addItem("shirt", 10);
console.log(shoppingCart);

addItem("pasta", 10);
console.log(shoppingCart);

addItem("figs", 10);
console.log(shoppingCart);

removeItem("shirt");
console.log(shoppingCart);

addItem("something", 10);
console.log(shoppingCart);

editItem("something", "bow tie", 25);
console.log(shoppingCart);

printTotal();