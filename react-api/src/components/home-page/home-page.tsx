/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react';
import CardsNewsContainer, { newsApi } from '../card-news-container/card-news-container';
import CardNews from '../card-news/card-news';
import CounterPages from '../counter-page/counter-page';
import { IArticle } from '../interfaces';
import Loader from '../loader/loader';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import SortWrapper from '../sort-wrapper/sort-wrapper';
import './home-page.css';

const HomePage: FC = () => {
  const [searchField, setSearchField] = useState('science');
  const [articles, setArticles] = useState<Array<IArticle>>([]);
  const [newsPerPage, setNewsPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState('1');
  const [allPagesValue, setAllPagesValue] = useState(0);
  const [pagePagination, setPagePagination] = useState(1);
  const [sortValue, setSortValue] = useState('publishedAt');
  const [loading, setLoading] = useState(true);

  const homeRef = useRef(null);

  useEffect(() => {
    homeRef.current.classList.add('opacity');
  }, []);

  useEffect(() => {
    newsApi.getNews().then((data) => {
      setArticles(data);
      if (data[0].totalResults) {
        setAllPagesValue(data[0].totalResults);
      } else {
        setAllPagesValue(0);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    newsApi.getNews(searchField, String(pagePagination), newsPerPage).then((data) => {
      setArticles(data);
      setLoading(false);
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

  const onPaginationNext = () => {
    setPagePagination((prevState) => prevState + 1);
  };

  const onPaginationPrev = () => {
    setPagePagination((prevState) => prevState - 1);
  };

  const onSort = (sortBy: string) => {
    setSortValue(sortBy);
  };

  const onSend = async () => {
    setLoading(true);
    await newsApi.getNews(searchField, currentPage, newsPerPage, sortValue).then((data) => {
      setArticles(data);
      const totalPages = data[0].totalResults;
      setAllPagesValue(totalPages);
      setPagePagination(Number(currentPage));
    });
    setLoading(false);
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

  const loader = loading ? <Loader /> : <CardsNewsContainer news={news} />;

  return (
    <div className="common" ref={homeRef}>
      <div className="search_sort">
        <SearchPanel
          onChangeSearchValue={onChangeSearch}
          onSend={onSend}
          disableButton={disableButton}
        />
        <SortWrapper onSort={onSort} />
      </div>
      <div className="wrapper_pag_count">
        <Pagination
          allPagesValue={allPagesValue}
          onPaginationNext={onPaginationNext}
          onPaginationPrev={onPaginationPrev}
          pagePagination={pagePagination}
          newsPerPage={newsPerPage}
        />
        <CounterPages
          onChangeNewsPerPageApp={onChangeNewsPerPageApp}
          onChangeCurrentPageApp={onChangeCurrentPageApp}
          allPagesValue={allPagesValue}
        />
        {error}
      </div>
      <>{loader}</>
    </div>
  );
};

export default HomePage;
