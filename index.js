var cart = [];

function getCart(item) {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemNPrice = {
    'itemName': item,
    'itemPrice': Math.floor(Math.random() * 100) + 1
  }
  cart.push(itemNPrice);
  return `${item} was added to the cart.`;
}

function viewCart() {
  var priceNItem = [];
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    priceNItem.push(`${itemNPriceObj.itemName} $${itemNPriceObj.itemPrice}`);
    
  }
  if (cart.length === 1) {
    return `In your cart, you have ${itemNPriceObj.itemName} at $${itemNPriceObj.itemPrice}.`;
    
  } else {
    return "In your cart, you have " + priceNItem.join(', and ') + '.';
    
  }
}


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    sum += itemNPriceObj.itemPrice
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    if (itemNPriceObj.values()[item])
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
