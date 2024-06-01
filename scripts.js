const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // TODO: Add a function call to display the news
      displayNews(data.articles); // Call the function to display the news
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');

    for (const article of articles) {
        const articleDiv = document.createElement('div');

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
      // TODO: Use document.createElement and appendChild to create and append more elements
    
      newsDiv.appendChild(articleDiv);
    }
}


/*
function displayNews(newsData) {
    const newsContainer = document.getElementById('news');
    newsContainer.innerHTML = ''; // Clear previous news items
    
    newsData.forEach(newsItem => {
        const newsItemElement = document.createElement('div');
        newsItemElement.classList.add('news-item');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = newsItem.title;
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = newsItem.description;
        
        // You can add more elements for displaying additional information
        
        newsItemElement.appendChild(titleElement);
        newsItemElement.appendChild(descriptionElement);
        
        newsContainer.appendChild(newsItemElement);
    });
}
  */
fetchNews();
  