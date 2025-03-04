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

        // Acceder a los elementos por su ID y actualizar su contenido
        document.getElementById('businessName').textContent = nameShow; // Actualiza el nombre del negocio
        document.getElementById('businessDescription').textContent = description; // Actualiza la descripción
        document.getElementById('businessLogo').src = logo; // Cambia el logo
        document.getElementById('businessAddress').textContent = address; // Actualiza la dirección
        document.getElementById('businessEmail').textContent = email; // Actualiza el email
        document.getElementById('businessPhone').textContent = phone; // Actualiza el teléfono
        document.getElementById('businessPresentationText').textContent = presentationText; // Actualiza el texto de presentación
        document.getElementById('businessTakeawayTime').textContent = takeawaytime; // Actualiza el tiempo de recogida
        document.getElementById('businessDeliveryTime').textContent = deliveryTime; // Actualiza el tiempo de entrega
        document.getElementById('businessHorariosText').textContent = horariosText; // Actualiza el texto de horarios
        document.getElementById('businessVideoBackground').src = videoBackground; // Cambia el video de fondo
        document.getElementById('businessImageBackground').src = imageBackground; // Cambia la imagen de fondo

    })
    .catch(error => {
        console.error('Hubo un problema con Axios:', error);
    });