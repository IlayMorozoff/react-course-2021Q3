export interface IData {
  titleCard: string;
  imageURL: string;
  newPrice: string;
  oldPrice: string;
  cashBackValue: string;
  id: number;
}

export interface IPropsApp {
  store: IData[];
}

export interface IPropsCard {
  titleCard: string;
  imageURL: string;
  newPrice: string;
  oldPrice: string;
  cashBackValue: string;
}
