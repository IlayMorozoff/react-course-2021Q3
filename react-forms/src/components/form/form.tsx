/* eslint-disable react/destructuring-assignment */
import { PureComponent } from 'react';
import ButtonSubmit from '../button/button';
import DateBirth from './date/date-birth';
import Nickname from './nickname/nickname';
import RadioButton from './radio-button/radio-button';
import Select from './select/select';
import './form.scss';
import { IPropsForm } from '../interfaces';
import CheckboxWrapper from './checkbox/checkbox-wrapper';
import Switcher from './checkbox/switcher';
import Error from '../error/error';

interface IStateForm {
  nicknameValue: string;
  dateBirth: string;
  gender: string;
  country: string;
  whatLiked: string[];
  isValidRadioBtn: boolean;
  isValidCheckbox: boolean;
  isValidSwitcher: boolean;
  isValidSelect: boolean;
  isValidNickname: boolean;
  isValidDate: boolean;
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
      isValidRadioBtn: false,
      isValidCheckbox: false,
      isValidSwitcher: false,
      isValidSelect: false,
      isValidNickname: false,
      isValidDate: false,
    };

    this.genders = ['male', 'female'];
  }

  onAddNewNickname = (nicknameValue: string) => {
    this.setState({
      nicknameValue,
    });
  };

  onAddDateBirth = (dateBirth: string) => {
    this.setState({
      dateBirth,
    });
  };

  onAddGender = (gender: string) => {
    this.setState({
      gender,
    });
  };

  onAddCountry = (country: string) => {
    this.setState({
      country,
    });
  };

  onAddWhatLiked = (whatLiked: string[]) => {
    this.setState({
      whatLiked,
    });
  };

  onSumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { onCardAdd, onShowSuccess } = this.props;
    const newCardData = {
      nicknameValue: this.state.nicknameValue,
      dateBirth: this.state.dateBirth,
      gender: this.state.gender,
      country: this.state.country,
      whatLiked: this.state.whatLiked,
    };
    onCardAdd(newCardData);
    this.setState({
      nicknameValue: '',
      dateBirth: '',
      gender: '',
      country: '',
      whatLiked: [],
    });
    onShowSuccess(true);
  };

  onCheckValidRadio = (isValidRadioBtn: boolean) => {
    this.setState({
      isValidRadioBtn,
    });
  };

  onCheckValidCheckbox = (isValidCheckbox: boolean) => {
    this.setState({
      isValidCheckbox,
    });
  };

  onCheckValidSwitcher = (isValidSwitcher: boolean) => {
    this.setState({
      isValidSwitcher,
    });
  };

  onCheckValidSelect = (isValidSelect: boolean) => {
    this.setState({
      isValidSelect,
    });
  };

  onCheckValidNickname = (isValidNickname: boolean) => {
    this.setState({
      isValidNickname,
    });
  };

  onCheckValidDate = (isValidDate: boolean) => {
    this.setState({
      isValidDate,
    });
  };

  render() {
    const { countries, checkboxsData } = this.props;
    const {
      isValidRadioBtn,
      isValidCheckbox,
      isValidSwitcher,
      isValidSelect,
      isValidNickname,
      isValidDate,
    } = this.state;
    const disableButtonForm =
      isValidRadioBtn &&
      isValidCheckbox &&
      isValidSwitcher &&
      isValidSelect &&
      isValidNickname &&
      isValidDate;
    const radioError = isValidRadioBtn ? null : <Error title="choose your gender" />;
    const checkboxError = isValidCheckbox ? null : <Error title="select one or more options" />;
    const selectError = isValidSelect ? null : <Error title="Сhoose any country" />;
    const nicknameError = isValidNickname ? null : (
      <Error title="the name must consist of English letters and consist of at least 1 character" />
    );
    const dateError = isValidDate ? null : (
      <Error title="your date of birth must be no later than January 1, 1990" />
    );

    const radioButtons = this.genders.map((genderItem) => {
      return (
        <RadioButton
          gender={genderItem}
          key={genderItem}
          onAddGenderItem={this.onAddGender}
          onCheckValidRadio={this.onCheckValidRadio}
        />
      );
    });
    return (
      <form className="form" onSubmit={this.onSumbitForm}>
        <Nickname
          onAddNickname={this.onAddNewNickname}
          onCheckValidNickname={this.onCheckValidNickname}
        />
        {nicknameError}
        <DateBirth onAddDate={this.onAddDateBirth} onCheckValidDate={this.onCheckValidDate} />
        {dateError}
        <div className="radio__group">{radioButtons}</div>
        {radioError}
        <Select
          countries={countries}
          onAddCountry={this.onAddCountry}
          onCheckValidSelectForm={this.onCheckValidSelect}
        />
        {selectError}
        <>
          <CheckboxWrapper
            checkboxsData={checkboxsData}
            onAddWhatLiked={this.onAddWhatLiked}
            onCheckValidCheckboxBtn={this.onCheckValidCheckbox}
          />
          {checkboxError}
        </>
        <Switcher onCheckSwticher={this.onCheckValidSwitcher} />
        <ButtonSubmit disabled={disableButtonForm} />
      </form>
    );
  }
}
