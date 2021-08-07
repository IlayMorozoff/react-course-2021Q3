export interface IArticle {
  author: string;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  id: number;
  totalResults: number;
}

export interface IPanelSearchProps {
  onChangeSearchValue: (value: string) => void;
  onSend: () => void;
  disableButton: boolean;
}

export interface INewsContainerProps {
  news: JSX.Element[];
}

export interface ICounterPagesProps {
  onChangeNewsPerPageApp: (newsPerPage: string) => void;
  onChangeCurrentPageApp: (currentPage: string) => void;
  allPagesValue: number;
}

export interface IPaginationProps {
  allPagesValue: number;
  onPaginationNext: () => void;
  onPaginationPrev: () => void;
  pagePagination: number;
}

export interface INumberPagesProps {
  allPagesValue: number;
  pagePagination: number;
}
