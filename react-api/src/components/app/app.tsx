import { FC, useEffect, useState } from 'react';
import CardsNewsContainer, { newsApi } from '../card-news-container/card-news-container';
import CardNews from '../card-news/card-news';
import CounterPages from '../counter-page/counter-page';
import Header from '../header/header';
import { IArticle } from '../interfaces';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import SortWrapper from '../sort-wrapper/sort-wrapper';
import './app.css';

export const App: FC = () => {
  const[searchField, setSearchField] = useState('');

  const [articles, setArticles] = useState<Array<IArticle>>([]);

  useEffect(() => {
    newsApi.getNews().then((data) => {
      setArticles(data);
    });
  }, []);  

  const onChangeSearch = (searchValue: string) => {
    setSearchField(searchValue);
  }

  const onSend = async () => {
    await newsApi.getNews(searchField).then((data) => {
      setArticles(data);
    });
  }

  const news = articles.map((article) => {
    return <CardNews {...article} key={article.id} />;
  });

  return (
    <section className="wrapper">
      <Header />
      <div className="search_sort">
        <SearchPanel onChangeSearchValue={onChangeSearch} onSend={onSend}/>
        <SortWrapper />
      </div>
      <div className="wrapper_pag_count">
        <Pagination />
        <CounterPages />
      </div>
      <CardsNewsContainer news={news}/>
    </section>
  );
};

export default App;
