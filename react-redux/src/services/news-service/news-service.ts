/* eslint-disable consistent-return */
import { IArticle, IArticleServer } from '../../components/interfaces';
// 'X-Api-Key': 'fc29b5bc60cc47c5aaf721790009b177',
// 'X-Api-Key': '242c2b39893c4b1e86435c93c98524f1',
// 'X-Api-Key': '9d864b6a2d944129b18b6a405c831cb0',
// 'X-Api-Key': '26cba7b7a5a44c63a66ac72da1244686',
// a0b7d0d16c4d4fed9f6b525217923926
export default class NewsService {
  private apiBase = `https://newsapi.org/v2/everything?q=`;

  async getNews(
    keyWords: string,
    page: string,
    pageSize: string,
    sortBy: string,
  ): Promise<IArticle[]> {
    try {
      const response = await fetch(
        `${this.apiBase}"${keyWords}"&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=a0b7d0d16c4d4fed9f6b525217923926`,
      );
      const { status } = response;
      const news = await response.json();
      if (status === 200 && news) {
        const totalResults = await news.totalResults;
        const result = await news.articles.map((article: IArticleServer) => {
          return {
            author: article.author,
            content: article.content,
            description: article.description,
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage,
            id: Math.random() + 1,
            totalResults,
          };
        });
        return result;
      }
      return [
        {
          author: 'ERROR',
          content: 'ERROR',
          description: 'ERROR',
          title: 'ERROR',
          url: 'ERROR',
          urlToImage: 'ERROR',
          id: Math.random() + 1,
          totalResults: 1,
        },
      ];
    } catch (error) {
      throw new Error('NEWS CANNOT TO BE GOT');
    }
  }
}
