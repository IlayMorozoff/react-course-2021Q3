/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from 'react';
import ButtonSubmit from '../button/button';
import DateBirth from './date/date-birth';
import Nickname from './nickname/nickname';
import RadioButton from './radio-button/radio-button';
import Select from './select/select';
import './form.scss';
import { ICard, IPropsForm } from '../interfaces';
import CheckboxWrapper from './checkbox/checkbox-wrapper';
import Switcher from './checkbox/switcher';

interface IStateForm {
  nicknameValue: string;
  dateBirth: string;
  gender: string;
  country: string;
  whatLiked: string[];
  isShow?: boolean;
}

export default class Form extends PureComponent<IPropsForm, IStateForm> {
  genders: string[];

  constructor(props: IPropsForm) {
    super(props);
    this.state = {
      nicknameValue: '',
      dateBirth: '',
      gender: '',
      country: '',
      whatLiked: [],
      isShow: false,
    };

    this.genders = ['male', 'female'];
  }

  // пригнал nicknameValue
  onAddNewNickname = (nicknameValue: string) => {
    this.setState({
      nicknameValue,
    });
  };

  // пригнал datebirth
  onAddDateBirth = (dateBirth: string) => {
    this.setState({
      dateBirth,
    });
  };

  // пригнал radiobytton
  onAddGender = (gender: string) => {
    this.setState({
      gender,
    });
  };

  // пригнал select
  onAddCountry = (country: string) => {
    this.setState({
      country,
    });
  };

  // пригнал checkboxs
  onAddWhatLiked = (whatLiked: string[]) => {
    this.setState({
      whatLiked,
    });
  };

  onSumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { onCardAdd } = this.props;
    const newCardData = {
      nicknameValue: this.state.nicknameValue,
      dateBirth: this.state.dateBirth,
      gender: this.state.gender,
      country: this.state.country,
      whatLiked: this.state.whatLiked,
    };
    onCardAdd(newCardData);
  };

  onShowForm = () => {
    this.setState({
      isShow: true,
    });
  };

  render() {
    const { countries, checkboxsData } = this.props;
    const { isShow } = this.state;
    const radioButtons = this.genders.map((genderItem) => {
      return (
        <RadioButton gender={genderItem} key={genderItem} onAddGenderItem={this.onAddGender} />
      );
    });
    return (
      <form className="form" onSubmit={this.onSumbitForm}>
        <Nickname onAddNickname={this.onAddNewNickname} />
        <DateBirth onAddDate={this.onAddDateBirth} />
        <div className="radio__group">{radioButtons}</div>
        <Select countries={countries} onAddCountry={this.onAddCountry} />
        <CheckboxWrapper checkboxsData={checkboxsData} onAddWhatLiked={this.onAddWhatLiked} />
        <Switcher />
        <ButtonSubmit />
      </form>
    );
  }
}
