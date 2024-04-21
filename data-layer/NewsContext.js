export class NewsContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  fetchArticles() {
    return this.strategy.fetch();
  }
}
