import { NewsContext } from "./NewsContext";
import { GuardianStrategy } from "./GuardianStrategy";
import { NewYorkTimesStrategy } from "./NewYorkTimesStrategy";
import { OpenNewsStrategy } from "./OpenNewsStrategy";
import { Categories } from "./constants";

export async function getAggregatedArticles(params) {
  try {
    const idx = params.queryKey[1].categoryIdx;
    const searchStr = Categories[idx];

    const newsContext = new NewsContext(new GuardianStrategy());
    const guardianNews = await newsContext.fetchArticles(searchStr);

    newsContext.setStrategy(new NewYorkTimesStrategy());
    const nytNews = await newsContext.fetchArticles(searchStr);

    newsContext.setStrategy(new OpenNewsStrategy());
    const openNews = await newsContext.fetchArticles(searchStr);

    const articles = [...openNews, ...guardianNews, ...nytNews];

    return articles;
  } catch (err) {
    console.log("err: ", err);
  }
}
