const url = 'https://www.numier.com/kiosco/api/business?name=sevillafcespt00101';

axios.get(url)
    .then(response => {

        const { 
            nameShow, 
            description, 
            address, 
            email, 
            phone, 
            presentationText, 
            takeawaytime, 
            deliveryTime, 
            horariosText, 
            logo, 
            videoBackground, 
            imageBackground
        } = response.data.data;

        
        document.getElementById('businessName').textContent = nameShow; 
        document.getElementById('businessLogo').src = logo; 
        document.getElementById('businessDescription').textContent = description; 
        document.getElementById('businessAddress').textContent = address;
        document.getElementById('businessEmail').textContent = email; 
        document.getElementById('businessPhone').textContent = phone; 
        document.getElementById('businessPresentationText').textContent = presentationText;
        document.getElementById('businessTakeawayTime').textContent = takeawaytime; 
        document.getElementById('businessDeliveryTime').textContent = deliveryTime; 
        document.getElementById('businessHorariosText').textContent = horariosText; 
        document.getElementById('businessVideoBackground').src = videoBackground; 
        document.getElementById('businessImageBackground').src = imageBackground; 

    })
    .catch(error => {
        console.error('Hubo un problema con Axios:', error);
    });


    document.addEventListener("DOMContentLoaded", function () {
        const productosContainer = document.getElementById("productos-container");
      
        // URL de la API
        const apiURL =
          "https://www.numier.com/kiosco/api/product?idBusinessInfo=262&lang=es&idParentCategory=0&catalog=R&typeProject=PEDIDOS";
      
        // Petición a la API usando Axios
        axios
          .get(apiURL)
          .then((response) => {
            const productos = response.data;
      
            productos.forEach((producto) => {
              const productoHTML = `
                <div class="combos">
                  <a href="#">
                    <img src="${producto.image}" alt="${producto.name}" />
                    <p>${producto.name}</p>
                    <p class="precio">€${parseFloat(producto.price).toFixed(2)}</p>
                    <button
                      class="add-to-cart"
                      onclick="agregarAlCarrito('${producto.name}', ${producto.price}, '${producto.image}')"
                    >
                      Añadir al carrito
                    </button>
                  </a>
                </div>
              `;
      
              productosContainer.innerHTML += productoHTML;
            });
          })
          .catch((error) => {
            console.error("Error al obtener los productos:", error);
            productosContainer.innerHTML = `<p>Error al cargar los productos.</p>`;
          });
      });
      