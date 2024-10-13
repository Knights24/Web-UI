let cart = [];

function addToCart(productName, productPrice) {
    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear existing items

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)} `;
        
        // Remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => {
            removeFromCart(index);
        };
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at index
    displayCart();
}
