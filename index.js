var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var price = Math.floor(Math.random() * 100);
  
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return (`${item} has been added to your cart.`)
}

function viewCart() {

  if (cart.length === 0){
    return(`Your shopping cart is empty.`)
  }else if (cart.length === 1){ 
    var oneItem = "In your cart, you have ";
    for(let i = 0; i < cart.length; i += 1){
      oneItem += cart[i].itemName + " at $" + cart[i].itemPrice + "." 
      return oneItem}
  }else if (cart.length === 2){
    var secondItem = "In your cart, you have ";
    for(let i = 0; i < cart.length; i += 1){
      secondItem += cart[i].itemName + " at $" + cart[i].itemPrice + "," + " and " + cart[i + 1].itemName + " at $" + cart[i + 1].itemPrice + "."
      return secondItem }
  } else (cart.length === 2);{
    var thirdItem = "In your cart, you have ";
    for(let i = 0; i < cart.length; i += 1){
      thirdItem += cart[i].itemName + " at $" + cart[i].itemPrice + ", " + cart[i + 1].itemName + " at $" + cart[i + 1].itemPrice + ", and " + cart[i + 2].itemName + " at $" + cart[i + 2].itemPrice + "."
      return thirdItem }
  }
}
function total() {
  var totalPrice = 0
  var cartItemPrice = []
  
  for (var i = 0; i < cart.length; i += 1){
    var price = cart[i].itemPrice
    cartItemPrice.push(price)
  }
  for (var a = 0; a < cartItemPrice.length; a += 1){
    totalPrice = cartItemPrice[a] += totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i += 1){
    if (item === item) {
      cart.splice(1,1);
      return cart
    }
  }
    return ("That item is not in your cart.")
    return cart
  }
  
    
function placeOrder(cardNumber) {
if (cardNumber){
    return(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      // for (var i = cart.length; i>= 0; i--) 
      cart.pop();
      // var cart = []
  }
  return ("Sorry, we don't have a credit card on file for you.")
  return cart;


}









