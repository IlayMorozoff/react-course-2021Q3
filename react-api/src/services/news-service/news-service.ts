export default class NewsService {
  private apiBase = `https://newsapi.org/v2/everything?q=`;

  async getNews(
    keyWords: string,
    page: string = '1',
    pageSize: string = '10',
    sortBy: string = 'publishedAt',
  ) {
    const response = await fetch(
      `${this.apiBase}"${keyWords}"&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'fc29b5bc60cc47c5aaf721790009b177',
        },
      },
    );
    const news = await response.json();
    return news;
  }
}
