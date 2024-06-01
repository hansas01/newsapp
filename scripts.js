const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Call the function to display the news
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');

 // Create a row div for each set of three articles
 for (let i = 0; i < articles.length; i += 3) {
    const row = document.createElement('div');
    row.classList.add('row');

    // Loop through the next three articles or until the end of the articles array
    for (let j = i; j < i + 3 && j < articles.length; j++) {
        const article = articles[j];

            //Exclude articles where the image URL is null or undefined
            if (!article.urlToImage) {
            continue;
            }
         
            // Create a div for each article
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('col-md-3', 'mb-3'); // Bootstrap classes for column layout and margin-bottom

            // Create and append the image to the articleDiv
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.classList.add('img-fluid', 'rounded'); // Make the image responsive with Bootstrap
            articleDiv.appendChild(image);

            // Create a container for the article details
            const detailsContainer = document.createElement('div');

            // Create and append a headline to the detailsContainer
            const title = document.createElement('h4');
            title.textContent = article.title;
            detailsContainer.appendChild(title);

            // Create and append the author to the detailsContainer
            const author = document.createElement('p');
            author.textContent = article.author ? `Author: ${article.author}` : 'Author: Unknown';
            detailsContainer.appendChild(author);

            // Append the detailsContainer to the articleDiv
            articleDiv.appendChild(detailsContainer);

            // Append the articleDiv to the row
            row.appendChild(articleDiv);
        }

        // Append the row to the newsDiv
        newsDiv.appendChild(row);
    }
}

fetchNews();
  