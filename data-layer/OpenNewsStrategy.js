import axios from "axios";
import { OPEN_NEWS_API } from "./API";

export class OpenNewsStrategy {
  fetch() {
    return new Promise((resolve, reject) => {
      let url = `${OPEN_NEWS_API}/everything?q=tesla&from=2024-04-19&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_OPEN_NEWS_API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          const articles = [];
          for (let i = 0; i < response.data.articles.length; i++) {
            const item = response.data.articles[i];
            const article = {
              id: i + 1,
              headline: item.title,
              thumbnail: item.urlToImage,
              source: item.source.name,
            };
            articles.push(article);
          }

          resolve(articles);
        })
        .catch((err) => reject(err));
    });
  }
}
