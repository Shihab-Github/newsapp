import axios from "axios";
import { NYT_API, NYT_CDN } from "./API";

export class NewYorkTimesStrategy {
  fetch(searchStr) {
    return new Promise((resolve, reject) => {
      let url = `${NYT_API}/search/v2/articlesearch.json?q=${searchStr}&api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          const articles = [];
          for (let i = 0; i < response.data.response.docs.length; i++) {
            const item = response.data.response.docs[i];
            if (!item.multimedia || item.multimedia.length === 0) continue;
            const article = {
              id: item._id,
              headline: item.headline.main,
              thumbnail: NYT_CDN + "/" + item.multimedia[0].url,
              source: "The New York Times",
            };
            if (i % 7 == 0) {
              article.starred = true;
            }
            articles.push(article);
          }

          return resolve(articles);
        })
        .catch((err) => reject(err));
    });
  }
}
