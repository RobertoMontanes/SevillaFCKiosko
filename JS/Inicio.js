const url = "https://www.numier.com/kiosco/api/business?name=sevillafcespt00101";

axios.get(url).then((response) => {
  const { nameShow, logo } = response.data.data;
  document.getElementById("businessLogo").src = logo;
  document.getElementById("businessName").textContent = nameShow;
});

fetch(
  "https://www.numier.com/kiosco/api/product?idBusinessInfo=262&lang=es&idParentCategory=0&catalog=R&typeProject=PEDIDOS"
)
  .then((response) => response.json())
  .then((data) => {
    const categorias = data.data.content;
    const productList = document.querySelector(".content"); // Contenedor principal

    categorias.forEach((categoria) => {
      // Normalizar nombre de categoría para IDs
      const categoriaId = categoria.name
        .normalize("NFD") // Descompone tildes
        .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
        .toLowerCase()
        .replace(/\s+/g, "-"); // Reemplaza espacios con guiones

      // Crear título de categoría y contenedor
      const categoriaSection = document.createElement("section");
      categoriaSection.id = categoriaId;
      categoriaSection.innerHTML = `
        <h1>${categoria.name}</h1>
        <hr>
        <div class="product-container"></div>
      `;

      productList.appendChild(categoriaSection);

      const categoryContainer = categoriaSection.querySelector(".product-container");

      // Agregar productos a la categoría
      categoria.products.forEach((producto) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productName = producto.name || "Producto sin nombre";
        const productDescription = producto.description || "Sin descripción";
        const productPrice = producto.rates[0]?.price
          ? `$${producto.rates[0].price}`
          : "Precio no disponible";
        const productImage =
          producto.image || "https://via.placeholder.com/150";

        productCard.innerHTML = `
          <img src="${productImage}" alt="${productName}">
          <h3>${productName}</h3>
          <p>${productDescription}</p>
          <div class="price"><span>${productPrice}</span></div>
        `;

        categoryContainer.appendChild(productCard);
      });
    });
  })
  .catch((error) => console.log("Error:", error));

