document.addEventListener('DOMContentLoaded', () => {
   // Test fetch to backend test route:
  // fetch('http://localhost:3000/api/test')
  //   .then(res => res.json())
  //   .then(data => console.log('Test fetch response:', data))
  //   .catch(err => console.error('Test fetch error:', err));
  
  const container = document.getElementById('card-container');
  const categorySelect = document.getElementById('category-filter');
  let allProducts = [];

  // Fetch Fake Store data from the backend
  fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
      allProducts = data;

      // Get categories and add to dropdown
      const categories = [...new Set(data.map(p => p.category))];

       categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
      });

        renderCards(allProducts);
    });

  //Filter event 
  categorySelect.addEventListener('change', () => {
    const selected = categorySelect.value;

    const filteredProducts = selected === 'all'
      ? allProducts
      : allProducts.filter(p => p.category === selected);

    renderCards(filteredProducts);
  });

  // Update filter with chosen categories
  function renderCards(products) {
    container.innerHTML = ''; // Clear existing cards

    products.forEach(post => {
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-lg-3 mb-4';

      col.innerHTML = `
        <div class="card h-100">
          <img src="${post.image}" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text text-truncate">${post.description}</p>
            <p class="text-muted mb-2"><strong>Category:</strong> ${post.category}</p>
            <p class="text-success fw-bold mb-2">$${post.price}</p>
            <a href="#" class="btn btn-primary mt-auto">More Details</a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  }
});
