document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const modalMainImage = document.getElementById('modal-main-image');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalProductName = document.getElementById('modal-product-name');
  const modalProductPrice = document.getElementById('modal-product-price');
  const modalProductDescription = document.getElementById('modal-product-description');
  const modalProductTallas = document.getElementById('modal-product-tallas');
  const buyButton = document.getElementById('buy-button');

  // Cargar los datos de los productos desde un archivo JSON
  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      // Añadir evento de click a cada producto
      document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', () => {
          const productId = product.getAttribute('data-id');
          const productData = data.find(p => p.id == productId);
          
          if (productData) {
            // Actualizar la ventana modal con los datos del producto
            modalMainImage.src = productData.imagen;
            modalThumbnails.innerHTML = '';
            productData.imagenesAdicionales.forEach(imgSrc => {
              const img = document.createElement('img');
              img.src = imgSrc;
              img.addEventListener('click', () => {
                const tempSrc = modalMainImage.src;
                modalMainImage.src = img.src;
                img.src = tempSrc;
              });
              modalThumbnails.appendChild(img);
            });

            modalProductName.textContent = productData.nombre;
            modalProductDescription.textContent = productData.descripcion;

            // Ocultar el precio y las tallas
            modalProductPrice.style.display = 'none';
            modalProductTallas.style.display = 'none';
            buyButton.style.display = 'none';

            // Mostrar la ventana modal
            modal.style.display = 'block';
          }
        });
      });

      // Cerrar la ventana modal
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      // Cerrar la ventana modal al hacer clic fuera del contenido
      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
});
