export interface IArticle {
  author: string;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  id: number;
}

export interface IPanelSearchProps {
  onChangeSearchValue: (value: string) => void;
  onSend: () => void;
}

export interface INewsContainerProps {
  news: JSX.Element[];
}