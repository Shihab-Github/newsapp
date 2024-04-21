import { NewsContext } from "./NewsContext";
import { GuardianStrategy } from "./GuardianStrategy";
import { NewYorkTimesStrategy } from "./NewYorkTimesStrategy";
import { OpenNewsStrategy } from "./OpenNewsStrategy";
import { Categories } from "./constants";

export async function getAggregatedArticles(params) {
  try {
    console.log("params: ", params);

    const newsContext = new NewsContext(new GuardianStrategy());
    const guardianNews = await newsContext.fetchArticles();

    newsContext.setStrategy(new NewYorkTimesStrategy());
    const nytNews = await newsContext.fetchArticles();

    newsContext.setStrategy(new OpenNewsStrategy());
    const openNews = await newsContext.fetchArticles();

    const articles = [...guardianNews, ...nytNews, ...openNews];

    return articles;
  } catch (err) {
    console.log("err: ", err);
  }
}
