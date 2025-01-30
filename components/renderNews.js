
export default function renderNews(newsData) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; 

  const newsContainer = document.createElement('section');
  newsContainer.id = 'news-container';
  newsContainer.classList.add('news-container');

  newsData.forEach((news) => {
    const card = document.createElement('div');
    card.classList.add('news-card');

    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}" class="news-image">
      <div class="news-details">
        <h2 class="news-title">${news.title}</h2>
        <p class="news-date">${news.date}</p>
        <p class="news-description">${news.description}</p>
      </div>
    `;

    newsContainer.appendChild(card);
  });

  mainContent.appendChild(newsContainer);
}
