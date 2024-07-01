let products = {
    data: [
        {
            productName: "Poltrona Matrix",
            category: "sala",
            price: 250.0,
            image: "./assets/img/poltronaMatrix.jpg",
        },
        {
            productName: "Mesa Miami",
            category: "cozinha",
            price: 894.73,
            image: "./assets/img/mesaMiami.jpg",
        },
        {
            productName: "Poltrona Matrix",
            category: "sala",
            price: 250.0,
            image: "./assets/img/poltronaMatrix.jpg",
        },
        {
            productName: "Mesa Miami",
            category: "cozinha",
            price: 894.73,
            image: "./assets/img/mesaMiami.jpg",
        },
        {
            productName: "Poltrona Matrix",
            category: "sala",
            price: 250.0,
            image: "./assets/img/poltronaMatrix.jpg",
        },
        {
            productName: "Mesa Miami",
            category: "cozinha",
            price: 894.73,
            image: "./assets/img/mesaMiami.jpg",
        },
        {
            productName: "Poltrona Matrix",
            category: "sala",
            price: 250.0,
            image: "./assets/img/poltronaMatrix.jpg",
        },
        {
            productName: "Mesa Miami",
            category: "cozinha",
            price: 894.73,
            image: "./assets/img/mesaMiami.jpg",
        },
    ],
};

for (let i of products.data) {
    // Create Card
    let produto = document.createElement("div");
    // Card should have category
    produto.classList.add("produto", i.category);

    // Img tag
    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    img.setAttribute("alt", i.productName);
    produto.appendChild(img);

    // Create div for product info
    let infoDiv = document.createElement("div");

    // Product name
    let h2 = document.createElement("h2");
    h2.textContent = i.productName;
    h2.classList.add("product-name");
    infoDiv.appendChild(h2);

    // Product price
    let price = document.createElement("p");
    price.textContent = `R$ ${i.price.toFixed(2)}`;
    infoDiv.appendChild(price);

    // Installments
    let parcelas = document.createElement("p");
    parcelas.classList.add("parcelas");
    parcelas.textContent = `Em até 12x R$ ${(i.price / 12).toFixed(2)}`;
    infoDiv.appendChild(parcelas);

    // Contact button
    let a = document.createElement("a");
    a.setAttribute("href", "https://api.whatsapp.com/send?phone=5511987810793");
    a.setAttribute("target", "_blank");
    a.classList.add("button", "produto-button");

    let span = document.createElement("span");
    span.classList.add("button-content");
    span.textContent = "Entre em Contato";
    a.appendChild(span);

    infoDiv.appendChild(a);

    // Append infoDiv to product
    produto.appendChild(infoDiv);

    // Append product to products container
    document.getElementById("products").appendChild(produto);
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // Check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    // Select all cards
    let elements = document.querySelectorAll(".produto");
    // Loop through all cards
    elements.forEach(element =>{
        // Display all cards on "all" button click
        if(value == "todos"){
            element.classList.remove("hide");
        } else {
            // Check if element contains category class
            if(element.classList.contains(value)){
                // Display element base on category
                element.classList.remove("hide");
            }
            else{
                // Hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
    // Initializations
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    if (!searchInput) {
        filterProduct("todos");
        return;
    }
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".produto");
    let found = false;
    // Loop through all elements
    elements.forEach((element, index) => {
        // Check if text includes the search value
        if(element.innerText.toUpperCase().includes(searchInput)){
            // Display matching card
            cards[index].classList.remove("hide");
            found = true;
        }
        else{
            // Hide others
            cards[index].classList.add("hide");
        }
    });
    if (!found) {
        // If no products found, show all products
        filterProduct("todos");
    }
});

// Initially display all products
window.onload = () => {
    filterProduct("todos");
};
