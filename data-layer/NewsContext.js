export class NewsContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  fetchArticles(searchStr = "media") {
    return this.strategy.fetch(searchStr);
  }
}
