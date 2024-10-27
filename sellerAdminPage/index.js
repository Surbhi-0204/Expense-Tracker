const apiUrl = "https://crudcrud.com/api/6504ba32e9584ff896c69f2218868c27/products";

document.addEventListener("DOMContentLoaded", fetchProducts);

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const productName = document.getElementById("name").value.trim();
    const productPrice = parseFloat(document.getElementById("price").value);


    if (!productName || isNaN(productPrice) || productPrice <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    const product = {
        name: productName,
        price: productPrice
    };

    try {
        await axios.post(apiUrl, product);
        
        document.getElementById("name").value = '';
        document.getElementById("price").value = '';
        
        fetchProducts();
    } catch (error) {
        console.error("Error adding product:", error);
    }
}

async function fetchProducts() {
    try {
        const response = await axios.get(apiUrl);
        const products = response.data;
        
        renderProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function renderProducts(products) {
    const listOfProduct = document.getElementById("listOfProduct");
    listOfProduct.innerHTML = ''; 

    let totalValue = 0;

    products.forEach(product => {
        const productElement = document.createElement("li");
        productElement.textContent = `${product.name} - Rs ${product.price.toFixed(2)}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Product";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = () => deleteProduct(product._id);

        productElement.appendChild(deleteButton);
        listOfProduct.appendChild(productElement);

        totalValue += product.price;
    });

    document.getElementById("totalValue").textContent = totalValue.toFixed(2);
}

async function deleteProduct(productId) {
    try {
        await axios.delete(`${apiUrl}/${productId}`);
        
        fetchProducts();
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}
