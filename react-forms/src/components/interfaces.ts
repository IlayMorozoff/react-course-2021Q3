export interface IPropsApp {
  countries: string[];
  checkboxsData: string[];
}

export interface IStateApp {
  cards: ICard[];
  isSubmit: boolean;
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
  onShowSuccess: (isSubmit: boolean) => void;
}

export interface IPropsSelect {
  countries: string[];
  onAddCountry: (country: string) => void;
  onCheckValidSelectForm: (isValid: boolean) => void;
}

export interface IPropsRadioButton {
  gender: string;
  onAddGenderItem: (gender: string) => void;
  onCheckValidRadio: (isValid: boolean) => void;
}

export interface IPropsCheckboxWrapper {
  checkboxsData: string[];
  onAddWhatLiked: (whatLiked: string[]) => void;
  onCheckValidCheckboxBtn: (isValid: boolean) => void;
}

export interface IPropsCheckbox {
  checkboxsData: string[];
  onAddWhatLikedFromWrap: (whatLiked: string[]) => void;
  onCheckValidCheckboxBtn: (isValid: boolean) => void;
}
