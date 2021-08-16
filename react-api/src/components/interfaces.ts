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
  newsPerPage: string;
}

export interface INumberPagesProps {
  allPagesValue: number;
  pagePagination: number;
}

export interface ISortWrapperProps {
  onSort: (sortBy: string) => void;
}

export interface IInpuntsRadio {
  name: string;
  sortBy: string;
}

export interface IArticleServer {
  author: string;
  content: string;
  description: string;
  source: ISourceServ;
  title: string;
  url: string;
  urlToImage: string;
}

interface ISourceServ {
  id: string | null;
  name: string | null;
}
