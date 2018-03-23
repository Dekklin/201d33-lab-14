'use strict';

function loadCart() {
  var stringData = localStorage.getItem('localData');
  var usableData = JSON.parse(stringData);
  if ( usableData && usableData.length) {
    allCart = usableData;
    console.log('pulled local DATA!');
  } else { console.log('did not find local data');}

//TODO: Pull the cart (if it exists) from Local Storage and make available to this app

}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var storeCart = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i = 0 ; i < allCart.length ; i++){
  // TODO: Create a TR
    var trElement = document.createElement('tr');
    var checkbox = document.createElement('input');
    checkbox.type = ('checkbox');
    trElement.appendChild(checkbox);
    // TODO: Create a TD for the quantity and the item
    for (var j = 0 ; j < 2 ; j++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = allCart[i].quantity;
      var tdElement1 = document.createElement('td');
      tdElement1.textContent = allCart[i].name;
      // TODO: Add the TR to the TBODY and both TD's to the TR
    }
    trElement.appendChild(tdElement);
    trElement.appendChild(tdElement1);
    storeCart.appendChild(trElement);
  }
}
function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  Cart.slice(this);
  // TODO: Save the cart back to local storage
  var storageData = JSON.stringify(Cart);
  localStorage.setItem( 'localData', storageData);
  // TODO: Re-draw the cart table
  //loadCart();
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();