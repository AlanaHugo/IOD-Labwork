//5.1

let news = [
  { id: 1, title: 'Election Results', content: "Newly elected minister..." },
  { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
  { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

const container = document.getElementById('news-container');

function displayNews() {
  container.innerHTML = ''; // Clear previous content to not duplicate

  news.forEach(item => {
    const article = document.createElement('div');
    article.classList.add('article');
    article.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
    container.appendChild(article); // Appends at the bottom
  });
}


// Initial display
displayNews();

// Update display every 5 seconds
setInterval(displayNews, 5000);

//5.2

// Add news on form sumbit
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form reload
  addNews();
});

function addNews() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    // Push methos to add new article to news array
    news.push({ id: Date.now(), title, content });

    // Clear input fields
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';

    // Re-render news
    displayNews();
  } else {
    alert("Please enter both title and content.");
  }
}


