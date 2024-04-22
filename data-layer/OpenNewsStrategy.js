import axios from "axios";
import { OPEN_NEWS_API } from "./API";

export class OpenNewsStrategy {
  fetch(searchStr) {
    return new Promise((resolve, reject) => {
      let url = `${OPEN_NEWS_API}/everything?q=${searchStr}&from=2024-04-19&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_OPEN_NEWS_API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          const articles = [];
          for (let i = 0; i < response.data.articles.length; i++) {
            const item = response.data.articles[i];
            if (!item.urlToImage) continue;
            const article = {
              id: i + 1,
              headline: item.title,
              thumbnail: item.urlToImage,
              source: item.source.name,
            };
            if (i % 7 == 0) {
              article.starred = true;
            }
            articles.push(article);
          }

          resolve(articles);
        })
        .catch((err) => reject(err));
    });
  }
}
