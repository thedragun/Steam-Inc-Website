if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready() {
  var removeCartItembtn = document.getElementsByClassName('btn-danger')
  //console.log(removeCartItembtn);;
  for (var i = 0; i < removeCartItembtn.length; i++) {
      var button = removeCartItembtn[i]
      button.addEventListener('click', removeCartItem)
      //var buttonClicked = event.target
      //buttonClicked.parentElement.parentElement.remove()
      //UpdateCartTotal()
      }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < removeCartItembtn.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
    }

    var addToCartBtns = document.getElementsByClassName('shop-item-btn')
    for (var i = 0; i < addToCartBtns.length; i++) {
      var button = addToCartBtns[i]
      button.addEventListener('click', addToCartClicked)
    }


  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
  alert('thank you for your purchase')
  var cartItems = document.getElementsByClassName('cartItems')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  UpdateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  UpdateCartTotal()
}

function quantityChanged(event) {
 var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  UpdateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  console.log(title, price);
  addItemToCart(title, price)
  UpdateCartTotal()
}

function addItemToCart(title, price) {
  var cartRow = document.createElement('div')
  var cartItems = document.getElementsByClassName('cartItems')[0]
  var cartItemNames = document.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
    if(cartItemNames[i].innerText == title) {
      alert('this item is already added to the cart')
      return
    }
  }
  var cartRowContents = `
  <div class="cartRow">

          <div class="Cart-item Cart-Column">
          <span class="cart-item-title">${title}</span>
          </div>

          <span class="cart-Column cart-price">${price}</span>

          <div class="cart-quantity-Input cart-column">
          <input class="cart-quantity-input" name="QuantityInput" type="number" value="1">
          <button class="btn btn-danger" name="remove">Remove</button>

          </div>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function UpdateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cartItems')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cartRow')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
      [0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity);
      }
      total = Math.round(total * 100) / 100
      document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

//Login
var username = document.getElementById('username')[0]
var password = document.getElementById('password')[0]


if (username == '' || password == '') {
    alert('You have not entered any information')
  }

  function login() {
    console.log('click');
    alert("You have logged in, welcome User");
  }

  function register() {
    console.log('click');
    alert("you have been registered, welcome User");
  }
