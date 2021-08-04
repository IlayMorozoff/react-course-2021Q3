import ReactDOM from 'react-dom';
import { App } from './components/app/app';
import NewsService from './services/news-service/news-service';
import './styles.scss';

const api = new NewsService();

api.getNews('sport', '1', '5', 'relevancy').then((data) => {
  console.log(data.articles[0].title);
});

ReactDOM.render(<App />, document.getElementById('root'));
