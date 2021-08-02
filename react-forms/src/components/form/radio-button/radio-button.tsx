import { PureComponent } from 'react';
import { IPropsRadioButton } from '../../interfaces';
import './radio-button.scss';

export default class RadioButton extends PureComponent<IPropsRadioButton> {
  onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genderState = e.target.value;
    const { onAddGenderItem, onCheckValidRadio } = this.props;
    const isCheked = e.target.checked;
    onCheckValidRadio(isCheked);
    onAddGenderItem(genderState);
  };

  render() {
    const { gender } = this.props;

    return (
      <div className="radio__wrapper">
        <input
          className="input_radio"
          type="radio"
          value={gender}
          id={gender}
          name="gender"
          onChange={this.onChangeGender}
        />
        <label className="label__text label radio_label" htmlFor={gender}>
          {gender}
        </label>
      </div>
    );
  }
}
