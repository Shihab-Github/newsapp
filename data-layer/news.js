import axios from "axios";
import { GUARDIAN_API } from "./API";

function getArticlesFromGuardian() {
  return new Promise((resolve, reject) => {
    let url = `${GUARDIAN_API}/search?q=media&show-elements=image&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`;

    axios
      .get(url)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
}

export async function getAggregatedArticles() {
  try {
    const results = await Promise.all([getArticlesFromGuardian()]);
    console.log("results: ", results);
    return results;
  } catch (err) {
    console.log("err: ", err);
  }
}
