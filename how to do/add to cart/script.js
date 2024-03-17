// function to add item to cart
function addToCart(productName, price){
    // create a new list of item
    let listItem = document.createElement('li');
    // set the innerHTML of the list item
    listItem.innerHTML = `${productName} - $${price}`;

    // append the list item to the cart
    document.getElementById("cart").appendChild(listItem);
}