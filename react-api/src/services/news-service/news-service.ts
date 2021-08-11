import { IArticle, IArticleServer } from '../../components/interfaces';
import Error from '../../assets/error.png';

export default class NewsService {
  private apiBase = `https://newsapi.org/v2/everything?qInTitle=`;

  async getNews(
    keyWords: string = 'science',
    page: string = '1',
    pageSize: string = '10',
    sortBy: string = 'publishedAt',
  ): Promise<IArticle[]> {
    const response = await fetch(
      `${this.apiBase}"${keyWords}"&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=26cba7b7a5a44c63a66ac72da1244686`,
    );
    const { status } = response;
    if (status === 200) {
      const news = await response.json();
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
        author: 'The limit of requests to this API has been exceeded, please come back later',
        content: 'The limit of requests to this API has been exceeded, please come back later',
        description: 'The limit of requests to this API has been exceeded, please come back later',
        title: 'The limit of requests to this API has been exceeded, please come back later',
        url: '#',
        urlToImage: Error,
        id: Math.random() + 1,
        totalResults: 1,
      },
    ];
  }
}
