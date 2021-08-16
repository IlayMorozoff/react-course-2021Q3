import {
  IPaginationState,
  PaginationAction,
  PaginationActionTypes,
} from '../../components/interfaces';

export const initialState: IPaginationState = {
  pagePagination: 1,
};

export const paginationReducer = (
  state = initialState,
  action: PaginationAction,
): IPaginationState => {
  switch (action.type) {
    case PaginationActionTypes.PAGE_PAGINATION_NEXT:
      return { ...state, pagePagination: state.pagePagination + 1 };
    case PaginationActionTypes.PAGE_PAGINATION_PREV:
      return { ...state, pagePagination: state.pagePagination - 1 };
    default:
      return state;
  }
};
