import axios from "axios";
import { GUARDIAN_API } from "./API";

export class GuardianStrategy {
  fetch() {
    return new Promise((resolve, reject) => {
      let url = `${GUARDIAN_API}/search?q=media&show-elements=image&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          const articles = [];
          for (let i = 0; i < response.data.response.results.length; i++) {
            const item = response.data.response.results[i];
            const article = {
              id: item.id,
              headline: item.webTitle,
              thumbnail: item.elements[1].assets[0].file,
              source: "Guardian",
            };
            articles.push(article);
          }

          return resolve(articles);
        })
        .catch((err) => reject(err));
    });
  }
}
