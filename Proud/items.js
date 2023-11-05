// Array de objetos del carrusel
var products = [
    {
      "title": "Chocolate Cake",
      "price": "$14",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.",
      "image": "item-img/menu-item-01.jpg"
    },
    {
      "title": "Chocolate Cake",
      "price": "$14",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.",
      "image": "item-img/menu-item-02.jpg"
    },
    {
      "title": "Chocolate Cake",
      "price": "14$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.",
      "image": "item-img/menu-item-03.jpg"
    },
    {
      "title": "Chocolate Cake",
      "price": "$14",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.",
      "image": "item-img/menu-item-04.jpg"
    },
    {
      "title": "Chocolate Cake",
      "price": "$14",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.",
      "image": "item-img/menu-item-05.jpg"
    }
]
// Función para generar HTML
function generateHTML(products) {
  var html = '';
  
  products.forEach(product => {
    html += `
          <div class="item">
            <div class='card' style='background-image: url("${product.image}");'>
              <div class="price"><h6>${product.price}</h6></div>
              <div class='info'>
                <h1 class='title'>${product.title}</h1>
                <p class='description'>${product.description}</p>
                <div class="main-text-button">
                  <div class="scroll-to-section"><a href="#reservation">Hacé tu reserva <i class="fa fa-angle-down"></i></a></div>
                </div>
              </div>
            </div>
          </div>
    `;
  });
  
  return html;
}

// Añadir al HTML
var carousel = document.querySelector('.owl-menu-item');
carousel.innerHTML = generateHTML(products);

// catalogo por categorias

var items = [
  {
    category: "tortas",
    name: "marquise",
    ingredients: "brownie, dulce de leche y merengue italiano.",
    price: 900,
    image: "catalogo-img/descarga.jpg"
  },
  {
    category: "tortas",
    name: "marquise con crema",
    ingredients: "brownie dulce de leche y crema.",
    price: 111,
    image: "catalogo-img/descarga1.jpg"
  },
  {
    category: "tortas",
    name: "rogel",
    ingredients: "masa filo, dulce de leche y merengue italiano.",
    price: 480,
    image: "catalogo-img/descarga2.jpg"
  },
  {
    category: "pasteleria",
    name: "pastafrola",
    ingredients: "membrillo o batata.",
    price: 100,
    image: "catalogo-img/descarga3.jpg"
  },
  {
    category: "pasteleria",
    name: "cuadrado de coco",
    ingredients: "con dulce de leche.",
    price: 443,
    image: "catalogo-img/descarga4.jpg"
  },
  {
    category: "pasteleria",
    name: "cookies",
    ingredients: "vainilla o chocolate con chips de chocolate.",
    price: 200,
    image: "catalogo-img/descarga5.jpg"
  },
  {
    category: "bomboneria",
    name: "marroc casero",
    ingredients: "chocolate con leche y chocolate blanco con pasta de maní.",
    price: 123,
    image: "catalogo-img/descarga6.jpg"
  },
  {
    category: "bomboneria",
    name: "mendiants",
    ingredients: "monedas de chocolate con frutos secos.",
    price: 879,
    image: "catalogo-img/descarga7.jpg"
  },
  {
    category: "bomboneria",
    name: "trufas oreo",
    ingredients: "bañadas en chocolate negro o blanco.",
    price: 543,
    image: "catalogo-img/descarga8.jpg"
  },
]

function cargarItems(categoria) {
  selectedCategory.innerHTML = ""
  const resultado = items.filter(elemento => elemento.category == categoria)
  for (let i = 0; i < resultado.length; i++) {
    selectedCategory.innerHTML += `
    <div class="item-catalogo">
    <div class="img"><img src="${resultado[i].image}" alt="${resultado[i].name}"></div>
    <h3 class="name-item">${resultado[i].name}</h3>
    <p class="ingredients">Ingredientes: ${resultado[i].ingredients}</p>
    <p class="price">Precio: $${resultado[i].price}</p>
</div>
    `
  }
}

const tortas = document.getElementById("tortas")
tortas.classList.add("color-proud")
const pasteleria = document.getElementById("pasteleria")
const bomboneria = document.getElementById("bomboneria")
const selectedCategory = document.getElementById("selected-category")

const botonesCategorias = document.querySelectorAll(".category");

botonesCategorias.forEach(elemento =>{
  elemento.addEventListener("click", (e)=>{
    cargarItems(e.currentTarget.id)
    botonesCategorias.forEach(elemento =>{
      elemento.classList.remove("color-proud")
    })
    elemento.classList.add("color-proud")
  })
})

cargarItems("tortas")