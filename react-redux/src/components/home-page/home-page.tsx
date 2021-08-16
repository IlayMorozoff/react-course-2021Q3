/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPagesValueAction, fetchArticles } from '../../store/action-creators/home-page';
import { RootState } from '../../store/reducers';
import CardsNewsContainer, { newsApi } from '../card-news-container/card-news-container';
import CardNews from '../card-news/card-news';
import CounterPages from '../counter-page/counter-page';
import ErrorFetch from '../error/errorFetch';
import { IArticle, IHomePageState, INewsState } from '../interfaces';
import Loader from '../loader/loader';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import SortWrapper from '../sort-wrapper/sort-wrapper';
import './home-page.css';

const HomePage: FC = () => {
  const { searchValue, newsPerPage, currentPage, sortValue } = useSelector<
    RootState,
    IHomePageState
  >((state) => state.homePage);
  // const newsPerPage = useSelector<RootState, string>((state) => state.homePage.newsPerPage);
  // const currentPage = useSelector<RootState, string>((state) => state.homePage.currentPage);
  const pagePagination = useSelector<RootState, number>((state) => state.pagination.pagePagination);
  // const sortValue = useSelector<RootState, string>((state) => state.homePage.sortValue);
  const { loading, error } = useSelector<RootState, INewsState>((state) => state.fetchArticles);
  const dispatch = useDispatch();
  // console.log(error, 'plak')
  // const [searchField, setSearchField] = useState('science');
  // const [articles, setArticles] = useState<Array<IArticle>>([]);
  // const [newsPerPage, setNewsPerPage] = useState('10');
  // const [currentPage, setCurrentPage] = useState('1');
  // const [allPagesValue, setAllPagesValue] = useState(0);
  // const [pagePagination, setPagePagination] = useState(1);
  // const [sortValue, setSortValue] = useState('publishedAt');

  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // newsApi.getNews().then((data) => {
    //   if (!data) {
    //     console.log('error');
    //   }
    //   setArticles(data);
    //   if (data[0].totalResults) {
    //     // setAllPagesValue(data[0].totalResults);
    //     dispatch(allPagesValueAction(data[0].totalResults));
    //   } else {
    //     dispatch(allPagesValueAction(0));
    //     // setAllPagesValue(0);
    //   }
    //   setLoading(false);
    // });
    dispatch(fetchArticles());
  }, []);

  useEffect(() => {
    // setLoading(true);
    // newsApi
    //   .getNews(
    //     searchValue || 'science',
    //     String(pagePagination || '1'),
    //     newsPerPage || '10',
    //     sortValue || 'publishedAt',
    //   )
    //   .then((data) => {
    //     // setArticles(data);
    //     // setLoading(false);
    //     if (data[0].totalResults) {
    //       dispatch(allPagesValueAction(data[0].totalResults));
    //       // setAllPagesValue(data[0].totalResults);
    //     } else {
    //       dispatch(allPagesValueAction(0));
    //       // setAllPagesValue(0);
    //     }
    //   });
    // dispatch(fetchArticles(searchValue, String(pagePagination), newsPerPage, sortValue));
    dispatch(fetchArticles(searchValue, String(pagePagination), newsPerPage, sortValue));
  }, [pagePagination]);

  // const onChangeSearch = (searchValue: string) => {
  //   setSearchField(searchValue);
  // };

  // const onChangeNewsPerPageApp = (news: string) => {
  //   setNewsPerPage(news);
  // };

  // const onChangeCurrentPageApp = (page: string) => {
  //   setCurrentPage(page);
  // };

  // const onPaginationNext = () => {
  //   // setPagePagination((prevState) => prevState + 1);
  //   dispatch(pagePaginatioNextAction())
  // };

  // const onPaginationPrev = () => {
  //   // setPagePagination((prevState) => prevState - 1);
  //   dispatch
  // };

  // const onSort = (sortBy: string) => {
  //   // setSortValue(sortBy);
  // };

  // const onSend = async () => {
  //   // setLoading(true);
  //   // await newsApi.getNews(searchValue, currentPage, newsPerPage, sortValue).then((data) => {
  //   //   // setArticles(data);
  //   //   // dispatch(allPagesValueAction(data[0].totalResults));
  //   //   // const totalPages = data[0].totalResults;
  //   //   // setAllPagesValue(totalPages);
  //   //   // setPagePagination(Number(currentPage));
  //   // });
  //   // setLoading(false);
  // };

  const check = Number(newsPerPage) * Number(currentPage);

  const errorForField =
    check <= 100 ? null : (
      <div className="error">
        this API allows you to output only 100 news for free, so an error may occur when the value
        is given
      </div>
    );

  const disableButton = !(check <= 100);

  const loader = loading ? <Loader /> : <CardsNewsContainer />;

  const errorFetch = error ? <ErrorFetch /> : null;

  // const notArticles = articles.length ? homePage : <div>Выполните запрос с заполнеными полями</div>

  return (
    <>
      <div className="search_sort">
        <SearchPanel
          // onChangeSearchValue={onChangeSearch}
          disableButton={disableButton}
        />
        <SortWrapper />
      </div>
      <div className="wrapper_pag_count">
        <Pagination
        // allPagesValue={allPagesValue}
        // onPaginationNext={onPaginationNext}
        // onPaginationPrev={onPaginationPrev}
        // pagePagination={pagePagination}
        // newsPerPage={newsPerPage}
        />
        <CounterPages
        // onChangeNewsPerPageApp={onChangeNewsPerPageApp}
        // onChangeCurrentPageApp={onChangeCurrentPageApp}
        // allPagesValue={allPagesValue}
        />
        {errorForField}
      </div>
      <>{loader}</>
      <>{errorFetch}</>
    </>
  );

  // return (
  //   <>
  //     <div className="search_sort">
  //       <SearchPanel
  //         // onChangeSearchValue={onChangeSearch}
  //         onSend={onSend}
  //         disableButton={disableButton}
  //       />
  //       <SortWrapper />
  //     </div>
  //     <div className="wrapper_pag_count">
  //       <Pagination
  //       // allPagesValue={allPagesValue}
  //       // onPaginationNext={onPaginationNext}
  //       // onPaginationPrev={onPaginationPrev}
  //       // pagePagination={pagePagination}
  //       // newsPerPage={newsPerPage}
  //       />
  //       <CounterPages
  //       // onChangeNewsPerPageApp={onChangeNewsPerPageApp}
  //       // onChangeCurrentPageApp={onChangeCurrentPageApp}
  //       // allPagesValue={allPagesValue}
  //       />
  //       {errorForField}
  //     </div>
  //     <>{loader}</>
  //   </>
  // );
};

export default HomePage;
