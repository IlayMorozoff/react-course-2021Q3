import { Dispatch } from 'redux';
import { newsApi } from '../../components/card-news-container/card-news-container';
import {
  IAllPagesValueAction,
  IArticle,
  ICurrentPageAction,
  IFetchNewsAction,
  IFetchNewsErrorAction,
  IFetchNewsSuccessAction,
  INewsPerPageAction,
  ISearchAction,
  ISortValueAction,
  NewsAction,
  NewsActionsTypes,
  PageAction,
  PageActionsTypes,
} from '../../components/interfaces';

export const searchValueAction = (payload: string): ISearchAction => ({
  type: PageActionsTypes.SEARCH_VALUE,
  payload,
});

export const currentPageAction = (payload: string): ICurrentPageAction => ({
  type: PageActionsTypes.CURRENT_PAGE,
  payload,
});

export const newsPerPageAction = (payload: string): INewsPerPageAction => ({
  type: PageActionsTypes.NEWS_PER_PAGE,
  payload,
});

export const allPagesValueAction = (payload: number): IAllPagesValueAction => ({
  type: PageActionsTypes.ALL_VALUE_PAGES,
  payload,
});

export const sortValueAction = (payload: string): ISortValueAction => ({
  type: PageActionsTypes.SORT_VALUE,
  payload,
});

export const fetchNewsAction = (): IFetchNewsAction => ({
  type: NewsActionsTypes.FETCH_ARTICLES,
});

export const fetchNewsSuccessAction = (payload: IArticle[]): IFetchNewsSuccessAction => ({
  type: NewsActionsTypes.FETCH_ARTICLES_SUCCESS,
  payload,
});

export const fetchNewsErrorAction = (payload: string): IFetchNewsErrorAction => ({
  type: NewsActionsTypes.FETCH_ARTICLES_ERROR,
  payload,
});

export const fetchArticles = (
  _searchField?: string,
  _pagePagination?: string,
  _newsPerPage?: string,
  _sortValue?: string,
) => {
  return (dispatch: Dispatch<NewsAction | PageAction>) => {
    dispatch(fetchNewsAction());
    try {
      newsApi.getNews(_searchField, _sortValue, _newsPerPage, _pagePagination).then((articles) => {
        if (!articles) {
          dispatch(fetchNewsErrorAction('An error occurred when loading articles'));
        } else {
          dispatch(fetchNewsSuccessAction(articles));
          if (articles[0].totalResults) {
            dispatch(allPagesValueAction(articles[0].totalResults));
          } else {
            dispatch(allPagesValueAction(0));
          }
        }
      });
    } catch (err) {
      dispatch(fetchNewsErrorAction('An error occurred when loading articles'));
    }
  };
};
