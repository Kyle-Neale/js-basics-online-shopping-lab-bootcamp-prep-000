var cart = [];

function getCart(item) {
  var itemNPrice = {
    'itemName': item,
    'itemPrice': Math.floor(Math.random() * 100) + 1
  }
  cart.push(itemNPrice);
 return cart, `${item} was added to the cart.`;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  var priceNItem = [];
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    
    priceNItem.push(`${itemNPriceObj.itemName} at ${itemNPriceObj.itemPrice}, and `);
  }
  if (cart.length === 1) {
    return `In your cart, you have ${itemNPriceObj.itemName} at ${itemNPriceObj.itemPrice}.`
  } else {
    return "In your cart, you have " + priceNItem.join('')
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
