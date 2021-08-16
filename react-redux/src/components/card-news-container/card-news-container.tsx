import { FC } from 'react';
import { useSelector } from 'react-redux';
import NewsService from '../../services/news-service/news-service';
import { RootState } from '../../store/reducers';
import CardNews from '../card-news/card-news';
import { INewsState } from '../interfaces';
import './card-news-container.css';

export const newsApi = new NewsService();

const CardsNewsContainer: FC = () => {
  const { articles } = useSelector<RootState, INewsState>((state) => state.fetchArticles);
  let news;
  if (articles) {
    news = articles.map((article) => {
      return <CardNews {...article} key={article.id} />;
    });
  } else {
    return null;
  }
  return <div className="card_container">{news}</div>;
};

export default CardsNewsContainer;
