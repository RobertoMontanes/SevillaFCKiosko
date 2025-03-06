const url =
"https://www.numier.com/kiosco/api/business?name=sevillafcespt00101";

axios.get(url).then((response) => {
const { nameShow, logo } = response.data.data;
document.getElementById("businessLogo").src = logo;
document.getElementById('businessName').textContent = nameShow; 

});

// Función para cargar los productos desde la API
fetch(
"https://www.numier.com/kiosco/api/product?idBusinessInfo=262&lang=es&idParentCategory=0&catalog=R&typeProject=PEDIDOS"
)
.then((response) => response.json()) // Convertir la respuesta en JSON
.then((data) => {
  const categorias = data.data.content;
  const productList = document.getElementById("productList");
  
  categorias.forEach((categoria) => {
    categoria.products.forEach((producto) => {
      // Crear la tarjeta del producto
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // Datos del producto
      const productName = producto.name || "Producto sin nombre";
      const productDescription =
        producto.description || "Sin descripción";
      const productPrice = producto.rates[0]?.price
        ? `$${producto.rates[0].price}`
        : "Precio no disponible";
      const productImage =
        producto.image || "https://via.placeholder.com/150";

      // Llenar la tarjeta del producto con los datos
      productCard.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <div class="price"><span>${productPrice}</span></div>
      `;

      // Añadir la tarjeta al contenedor de productos
      productList.appendChild(productCard);
    });
  });
})
.catch((error) => console.log("Error:", error));

// Código para realizar el desplazamiento
const links = document.querySelectorAll('.sidebar a');
links.forEach(link => {
link.addEventListener('click', function(e) {
  e.preventDefault(); // Evita el comportamiento por defecto del enlace
  
  // Obtener el destino al que apunta el enlace
  const targetId = this.getAttribute('href').substring(1); // Obtener el ID sin el #
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Desplazar 120px hacia abajo del elemento
    window.scrollTo({
      top: targetElement.offsetTop - 120, // Ajusta el desplazamiento según lo que necesites
      behavior: 'smooth' // Hacer el desplazamiento suave
    });
  }
});
});