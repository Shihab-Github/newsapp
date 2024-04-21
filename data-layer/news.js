import { NewsContext } from "./NewsContext";
import { GuardianStrategy } from "./GuardianStrategy";
import { NewYorkTimesStrategy } from "./NewYorkTimesStrategy";
import { OpenNewsStrategy } from "./OpenNewsStrategy";

export async function getAggregatedArticles() {
  try {
    const articles = [];

    const newsContext = new NewsContext(new GuardianStrategy());
    let results = await newsContext.fetchArticles();
    articles.push(...results);

    newsContext.setStrategy(new NewYorkTimesStrategy());
    results = await newsContext.fetchArticles();
    articles.push(...results);

    newsContext.setStrategy(new OpenNewsStrategy());
    results = await newsContext.fetchArticles();
    articles.push(...results);

    return results;
  } catch (err) {
    console.log("err: ", err);
  }
}
