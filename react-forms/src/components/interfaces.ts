export interface IPropsApp {
  countries: string[];
  checkboxsData: string[];
}

export interface IStateApp {
  cards: ICard[];
}

export interface ICard {
  nicknameValue: string;
  dateBirth: string;
  gender: string;
  country: string;
  whatLiked: string[];
}

export interface IPropsForm {
  countries: string[];
  checkboxsData: string[];
  onCardAdd: (card: ICard) => void;
}

export interface IPropsSelect {
  countries: string[];
  onAddCountry: (country: string) => void;
}

export interface IPropsRadioButton {
  gender: string;
  onAddGenderItem: (gender: string) => void;
}

export interface IPropsCheckboxWrapper {
  checkboxsData: string[];
  onAddWhatLiked: (whatLiked: string[]) => void;
}

export interface IPropsCheckbox {
  checkboxsData: string[];
  onAddWhatLikedFromWrap: (whatLiked: string[]) => void;
}
