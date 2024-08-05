document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category');
  const products = Array.from(document.querySelectorAll('.product'));

  function filterProducts() {
    const activeCategoryButton = document.querySelector('.category.active');
    const selectedCategory = activeCategoryButton ? activeCategoryButton.getAttribute('data-category') : 'All';
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    products.forEach(product => {
      const productCategory = product.querySelector('.product-category').getAttribute('data-category');
      const productName = product.querySelector('.product-name').textContent.toLowerCase();

      const matchesCategory = selectedCategory === 'All' || productCategory === selectedCategory;
      const matchesSearch = productName.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterProducts();
    });
  });

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    filterProducts();
  });

  searchInput.addEventListener('input', () => {
    filterProducts();
  });
});
