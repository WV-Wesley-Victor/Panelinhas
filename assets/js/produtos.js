let products = {
    data: [
        {
            productName: "Ferramentas",
            category: ["garagem"],
            price: 199.99,
            image: "./assets/img/suporte.webp",
        },
        {
            productName: "Poltrona Matrix",
            category: ["sala", "quarto", "escritório"],
            price: 250.0,
            image: "./assets/img/poltronaMatrix.jpg",
        },
        {
            productName: "Mesa Miami",
            category: ["cozinha", "escritório"],
            price: 894.73,
            image: "./assets/img/mesaMiami.jpg",
        },
        {
            productName: "Sofá Pistacchio",
            category: ["sala"],
            price: 799.0,
            image: "./assets/img/sofaPistacchio.jpg",
        },
        {
            productName: "Cama Box",
            category: ["quarto"],
            price: 1475.0,
            image: "./assets/img/camaBox.jpg",
        },

        {
            productName: "Escrivaninha",
            category: ["escritório", "quarto"],
            price: 399.99,
            image: "./assets/img/escrvaninha.jpg",
        },

        {
            productName: "Rack Rustic",
            category: ["sala", "quarto", "escritório"],
            price: 299.99,
            image: "./assets/img/rack.jpg",
        },
        {
            productName: "Quadro Decorativo",
            category: ["quarto", "sala", "varanda", "escritório"],
            price: 294.0,
            image: "./assets/img/qudro.jpg",
        },
        {
            productName: "Estante Freijó",
            category: ["quarto", "sala", "varanda", "escritório"],
            price: 599.99,
            image: "./assets/img/estante.webp",
        },

        {
            productName: "Mesa de Centro",
            category: ["sala", "varanda"],
            price: 299.99,
            image: "./assets/img/mesaDeCentro.webp",
        },
        {
            productName: "Mesa Lateral",
            category: ["sala", "quarto", "varanda", "escritório"],
            price: 200.0,
            image: "./assets/img/mesaLateral.webp",
        },

        {
            productName: "Tapete Dixon",
            category: ["sala", "quarto", "escritório"],
            price: 599.0,
            image: "./assets/img/tapete.jpg",
        },
        {
            productName: "Armário de Cozinha",
            category: ["cozinha"],
            price: 1299.99,
            image: "./assets/img/armarioDeCozinha.avif",
        },

        {
            productName: "Balcão Lux",
            category: ["cozinha", "varanda"],
            price: 799.99,
            image: "./assets/img/balcao.webp",
        },
        {
            productName: "Bancada",
            category: ["cozinha", "varanda"],
            price: 599.99,
            image: "./assets/img/bancada.avif",
        },
        {
            productName: "Gabinete de Pia",
            category: ["cozinha", "banheiro"],
            price: 399.99,
            image: "./assets/img/gabineteDePia.webp",
        },
        {
            productName: "Carrinho de Cozinha",
            category: ["cozinha", "varanda"],
            price: 199.99,
            image: "./assets/img/carrinho.jpg",
        },
        {
            productName: "Prateleira Gendes",
            category: [
                "cozinha",
                "varanda",
                "sala",
                "quarto",
                "escritório",
                "banheiro",
                "garagem",
            ],
            price: 159.99,
            image: "./assets/img/prateleira.jpg",
        },
        {
            productName: "Gabinete Eccos",
            category: ["banheiro"],
            price: 289.99,
            image: "./assets/img/gabinete.webp",
        },
        {
            productName: "Armário Aéreo",
            category: ["banheiro", "garagem"],
            price: 559.99,
            image: "./assets/img/armarioAereo.webp",
        },
        {
            productName: "Armário de Banheiro",
            category: ["banheiro"],
            price: 479.99,
            image: "./assets/img/armarioDeBanheiro.jpg",
        },
        {
            productName: "Porta Toalha",
            category: ["banheiro"],
            price: 129.99,
            image: "./assets/img/portaToalha.webp",
        },
        {
            productName: "Porta Shampoo",
            category: ["banheiro"],
            price: 59.0,
            image: "./assets/img/porta.jpg",
        },
        {
            productName: "Cesto de Roupa",
            category: ["banheiro", "varanda"],
            price: 39.99,
            image: "./assets/img/cesto.jpeg",
        },

        {
            productName: "Bancada de Trabalho",
            category: ["garagem", "varanda"],
            price: 179.99,
            image: "./assets/img/bancada.webp",
        },
        {
            productName: "Rack de Carro",
            category: ["garagem"],
            price: 299.99,
            image: "./assets/img/rack.webp",
        },
        {
            productName: "Cadeira Eames",
            category: ["cozinha", "varanda", "quintal"],
            price: 200.0,
            image: "./assets/img/cadeira.jpg",
        },
        {
            productName: "Gaveteiro",
            category: ["garagem"],
            price: 99.99,
            image: "./assets/img/gaveteiro.jpeg",
        },
        {
            productName: "Ferramentas",
            category: ["garagem"],
            price: 150.99,
            image: "./assets/img/ferramentas.jpeg",
        },
        {
            productName: "Cortador de Grama",
            category: ["garagem","quintal"],
            price: 399.99,
            image: "./assets/img/cortador.jpeg",
        },
        {
            productName: "Mesa de Jardim",
            category: ["quintal"],
            price: 599.99,
            image: "./assets/img/mesa.jpeg",
        },
        {
            productName: "Espreguiçadeira",
            category: ["quintal"],
            price: 300.00,
            image: "./assets/img/espreguiçadeira.jpg",
        },
        {
            productName: "Gazebo",
            category: ["quintal"],
            price: 450.00,
            image: "./assets/img/gazebo.jpg",
        },
        {
            productName: "Cadeira de Balanço",
            category: ["quintal"],
            price: 259.99,
            image: "./assets/img/cadeira.webp",
        },
        {
            productName: "Regador",
            category: ["quintal"],
            price: 59.99,
            image: "./assets/img/regador.png",
        },
        {
            productName: "Kit 2 Vasos",
            category: ["quintal"],
            price: 129.99,
            image: "./assets/img/vasos.jpeg",
        },
    ],
};

for (let i of products.data) {
    let produto = document.createElement("div");
    produto.classList.add("produto");
    i.category.forEach((cat) => produto.classList.add(cat));

    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    img.setAttribute("alt", i.productName);
    produto.appendChild(img);

    let infoDiv = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = i.productName;
    h2.classList.add("product-name");
    infoDiv.appendChild(h2);

    let price = document.createElement("p");
    price.textContent = `R$ ${i.price.toFixed(2)}`;
    infoDiv.appendChild(price);

    let parcelas = document.createElement("p");
    parcelas.classList.add("parcelas");
    parcelas.textContent = `Em até 12x R$ ${(i.price / 12).toFixed(2)}`;
    infoDiv.appendChild(parcelas);

    let a = document.createElement("a");
    a.setAttribute("href", "https://api.whatsapp.com/send?phone=5511987810793");
    a.setAttribute("target", "_blank");
    a.classList.add("button", "produto-button");

    let span = document.createElement("span");
    span.classList.add("button-content");
    span.textContent = "Entre em Contato";
    a.appendChild(span);

    infoDiv.appendChild(a);

    produto.appendChild(infoDiv);

    document.getElementById("products").appendChild(produto);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".produto");
    elements.forEach((element) => {
        if (value == "todos") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    if (!searchInput) {
        filterProduct("todos");
        return;
    }
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".produto");
    let found = false;
    elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput)) {
            cards[index].classList.remove("hide");
            found = true;
        } else {
            cards[index].classList.add("hide");
        }
    });
    if (!found) {
        filterProduct("todos");
    }
});

window.onload = () => {
    filterProduct("todos");
};

function updatePlaceholder() {
    const input = document.getElementById("search-input");
    if (window.innerWidth <= 300) {
        input.placeholder = "Pesquisar";
    } else {
        input.placeholder = "Buscar produtos";
    }
}

updatePlaceholder();

window.addEventListener("resize", updatePlaceholder);

document.getElementById("search").addEventListener("click", function () {
    performSearch();
});

document
    .getElementById("search-input")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search").click();
        }
    });

var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
