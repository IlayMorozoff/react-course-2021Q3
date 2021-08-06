import { IArticle } from '../../components/interfaces';

export default class NewsService {
  private apiBase = `https://newsapi.org/v2/everything?q=`;

  async getNews(
    keyWords: string = 'science',
    page: string = '1',
    pageSize: string = '10',
    sortBy: string = 'publishedAt',
  ): Promise<IArticle[]> {
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
    const result = await news.articles.map((article: any) => {
      return {
        author: article.author,
        content: article.content,
        description: article.description,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage,
        id: Math.random() + 1,
      };
    });
    return result;
  }
}
