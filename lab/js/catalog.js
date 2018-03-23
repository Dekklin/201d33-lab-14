'use strict';
var productForm = document.getElementById('catalog');
productForm.addEventListener('submit', handleSubmit);
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var select = document.getElementById('items');

  for (var i = 0 ; i < Product.allProducts.length ; i++) {
    var el = document.createElement('option');
    el.textContent = Product.allProducts[i].name;
    el.value = Product.allProducts[i].name;
    select.appendChild(el);
  }

}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  var name = event.target.items.value;
  var quantity = parseInt(event.target.quantity.value);
  allCart.push(new Cart(name, quantity));
  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  console.log(event.target.quantity.value);
  // allCart.push(event.target.value);
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  var cartData = JSON.stringify(allCart);
  localStorage.setItem( 'localData', cartData);
}

function updateCounter() {
  // TODO: Update the cart count in the header
  // var totalCount = totalCount += Cart[i].quantity;
  // var itemCount = document.getElementById('itemCount');
  // itemCount.textContent = totalCount;
}

function updateCartPreview() {
  // var cartAmount = document.getElementById('itemCount');
  // for ( var i = 0 ; i < Cart.length ; i++);
  // TODO: Show the selected item & quantity in the cart div
}
//cartForm = document.getElementById('');
//cartForm.addEventListener('submit', addSelectedItemToCart);
// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)


// Start it up ...
populateForm();
