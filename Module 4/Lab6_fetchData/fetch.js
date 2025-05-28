document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => res.json())
    .then(data => {
      data.forEach(post => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 mb-4';

        col.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    })
    .catch(err => {
      container.innerHTML = `<p class="text-danger">Failed to load posts. Please try again later.</p>`;
      console.error('Fetch error:', err);
    });
});
