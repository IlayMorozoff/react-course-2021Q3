/* eslint-disable react-hooks/exhaustive-deps */
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
  const [searchField, setSearchField] = useState('science');
  const [articles, setArticles] = useState<Array<IArticle>>([]);
  const [newsPerPage, setNewsPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState('1');
  const [allPagesValue, setAllPagesValue] = useState(0);
  const [pagePagination, setPagePagination] = useState(1);

  useEffect(() => {
    newsApi.getNews().then((data) => {
      setArticles(data);
      if (data[0].totalResults) {
        setAllPagesValue(data[0].totalResults);
      } else {
        setAllPagesValue(0);
      }
    });
  }, []);

  useEffect(() => {
    newsApi.getNews(searchField, String(pagePagination), newsPerPage).then((data) => {
      setArticles(data);
      if (data[0].totalResults) {
        setAllPagesValue(data[0].totalResults);
      } else {
        setAllPagesValue(0);
      }
    });
  }, [pagePagination]);

  const onChangeSearch = (searchValue: string) => {
    setSearchField(searchValue);
  };

  const onChangeNewsPerPageApp = (news: string) => {
    setNewsPerPage(news);
  };

  const onChangeCurrentPageApp = (page: string) => {
    setCurrentPage(page);
  };

  const onPaginationNext = async () => {
    setPagePagination((prevState) => prevState + 1);
    console.log(pagePagination);
    // await newsApi.getNews(searchField, String(pagePagination + 1), newsPerPage).then((data) => {
    //   setArticles(data);
    //   console.log(data)
    //   if (data[0].totalResults) {
    //     setAllPagesValue(data[0].totalResults);
    //   } else {
    //     setAllPagesValue(0);
    //   }
    // });
  };

  const onPaginationPrev = async () => {
    setPagePagination((prevState) => prevState - 1);
    console.log(pagePagination);
  };

  const onSend = async () => {
    await newsApi.getNews(searchField, currentPage, newsPerPage).then((data) => {
      setArticles(data);
      const totalPages = data[0].totalResults;
      setAllPagesValue(totalPages);
    });
  };

  const news = articles.map((article) => {
    return <CardNews {...article} key={article.id} />;
  });

  const check = Number(newsPerPage) * Number(currentPage);

  const error =
    check <= 100 ? null : (
      <div className="error">
        this API allows you to output only 100 news for free, so an error may occur when the value
        is given
      </div>
    );
  const disableButton = !(check <= 100);
  return (
    <section className="wrapper">
      <Header />
      <div className="search_sort">
        <SearchPanel
          onChangeSearchValue={onChangeSearch}
          onSend={onSend}
          disableButton={disableButton}
        />
        <SortWrapper />
      </div>
      <div className="wrapper_pag_count">
        <Pagination
          allPagesValue={allPagesValue}
          onPaginationNext={onPaginationNext}
          onPaginationPrev={onPaginationPrev}
          pagePagination={pagePagination}
        />
        <CounterPages
          onChangeNewsPerPageApp={onChangeNewsPerPageApp}
          onChangeCurrentPageApp={onChangeCurrentPageApp}
          allPagesValue={allPagesValue}
        />
        {error}
      </div>
      <CardsNewsContainer news={news} />
    </section>
  );
};

export default App;
