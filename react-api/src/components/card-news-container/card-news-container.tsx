import { FC } from 'react';
import NewsService from '../../services/news-service/news-service';
import { INewsContainerProps } from '../interfaces';

export const newsApi = new NewsService();

const CardsNewsContainer: FC<INewsContainerProps> = ({ news }) => {
  return <div className="card_container">{news}</div>;
};

export default CardsNewsContainer;
