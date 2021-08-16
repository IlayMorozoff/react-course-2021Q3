import {
  IPagePaginationNextAction,
  IPagePaginationPrevAction,
  PaginationActionTypes,
} from '../../components/interfaces';

export const pagePaginatioNextAction = (): IPagePaginationNextAction => ({
  type: PaginationActionTypes.PAGE_PAGINATION_NEXT,
});

export const pagePaginatioPrevAction = (): IPagePaginationPrevAction => ({
  type: PaginationActionTypes.PAGE_PAGINATION_PREV,
});
