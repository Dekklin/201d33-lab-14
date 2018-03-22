'use strict';

var Cart = [];
var storeCart = document.getElementById('cart');
function loadCart() {
  if ( usableData && usableData.length)
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table
  var thElement = document.createElement('th');

  var trElement = document.createElement('tr');
  // TODO: Iterate over the items in the cart
for (i = 0 ; i < )
  // TODO: Create a TR

  // TODO: Create a TD for the quantity and the item

  // TODO: Add the TR to the TBODY and both TD's to the TR
  
}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  Cart.slice(this)
  // TODO: Save the cart back to local storage
  var storageData = JSON.stringify(Cart);
  localStorage.setItem( 'localData', storageData);
  // TODO: Re-draw the cart table
  loadCart()
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();