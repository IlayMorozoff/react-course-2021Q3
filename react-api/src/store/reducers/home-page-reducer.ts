import { IHomePageState, PageAction, PageActionsTypes } from '../../components/interfaces';

export const initialState: IHomePageState = {
  searchValue: '',
  newsPerPage: '',
  currentPage: '',
  allPagesValue: 0,
  sortValue: 'publishedAt',
};

const homePageReducer = (state = initialState, action: PageAction): IHomePageState => {
  switch (action.type) {
    case PageActionsTypes.SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case PageActionsTypes.NEWS_PER_PAGE:
      return { ...state, newsPerPage: action.payload };
    case PageActionsTypes.CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case PageActionsTypes.ALL_VALUE_PAGES:
      return { ...state, allPagesValue: action.payload };
    case PageActionsTypes.SORT_VALUE:
      return { ...state, sortValue: action.payload };
    default:
      return state;
  }
};

// export enum PageActionsTypes {
//   SEARCH_VALUE = 'SEARCH_VALUE',
//   NEWS_PER_PAGE = 'NEWS_PER_PAGE',
//   CURRENT_PAGE = 'CURRENT_PAGE',
//   ALL_VALUE_PAGES = 'ALL_VALUE_PAGES',
//   // PAGE_PAGINATION_NEXT = 'PAGE_PAGINATION_NEXT',
//   // PAGE_PAGINATION_PREV = 'PAGE_PAGINATION_PREV',
// }
// // interfaces for state
// export interface IHomePageState {
//   searchValue: string;
//   newsPerPage: string;
//   currentPage: string;
//   allPagesValue: number;
//   pagePagination: number;
// }
// // interfaces for actions
// interface ISearchAction {
//   type: PageActionsTypes.SEARCH_VALUE;
//   payload: string;
// }

// interface INewsPerPageAction {
//   type: PageActionsTypes.NEWS_PER_PAGE;
//   payload: string;
// }

// interface ICurrentPageAction {
//   type: PageActionsTypes.CURRENT_PAGE;
//   payload: string;
// }

// interface IAllPagesValueAction {
//   type: PageActionsTypes.ALL_VALUE_PAGES;
//   payload: number;
// }

// interface IPagePaginationNextAction {
//   type: PageActionsTypes.PAGE_PAGINATION_NEXT;
//   payload: number;
// }

// interface IPagePaginationPrevAction {
//   type: PageActionsTypes.PAGE_PAGINATION_PREV;
//   payload: number;
// }
// // type for actions
// type PageAction = ISearchAction | INewsPerPageAction | ICurrentPageAction | IAllPagesValueAction;

// action creaters
// export const searchValueAction = (payload: string): ISearchAction => ({
//   type: PageActionsTypes.SEARCH_VALUE,
//   payload,
// });

// export const currentPageAction = (payload: string): ICurrentPageAction => ({
//   type: PageActionsTypes.CURRENT_PAGE,
//   payload,
// });

// export const newsPerPageAction = (payload: string): INewsPerPageAction => ({
//   type: PageActionsTypes.NEWS_PER_PAGE,
//   payload,
// });

// export const allPagesValueAction = (payload: number): IAllPagesValueAction => ({
//   type: PageActionsTypes.ALL_VALUE_PAGES,
//   payload,
// });

// export const pagePaginationAction = (payload: number): IPagePaginationAction => ({
//   type: PageActionsTypes.PAGE_PAGINATION,
//   payload,
// });

// reducer

export default homePageReducer;
