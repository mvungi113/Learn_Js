document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');

    // list of products
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 10 },
        { id: 3, name: 'Product 3', price: 10 },
        { id: 4, name: 'Product 4', price: 10 },
        { id: 5, name: 'Product 5', price: 10 },
        { id: 6, name: 'Product 6', price: 10 },
        { id: 7, name: 'Product 7', price: 10 },
        { id: 8, name: 'Product 8', price: 10 },
    ];

    // function to generate HTML for product cards
    function generateProductCard(product) {
        return `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary btn-block add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    }

    // render products
    function renderProducts() {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            productsContainer.innerHTML += generateProductCard(product);
        });
    }

    // call renderProduct to display products
    renderProducts();

    // Add to Cart functionality
    productsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.id);
            const selectedProduct = products.find(product => product.id === productId);
            addToCart(selectedProduct);
        }
    });


    // function to add item tocart 
    function addToCart(product){
        console.log(`Added ${product.name} to Cart. Price: $${product.price}`);
    }
})