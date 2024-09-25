let cart = [];

// Function to add products to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(productName + ' has been added to your cart');
    updateCart();
}



