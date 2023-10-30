// Array de objetos
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
      "price": "$14",
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
    console.log(11);
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
