import {
  IAllPagesValueAction,
  ICurrentPageAction,
  INewsPerPageAction,
  ISearchAction,
  ISortValueAction,
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
