import { PureComponent } from 'react';
import { IPropsRadioButton } from '../../interfaces';
import './radio-button.scss';

export default class RadioButton extends PureComponent<IPropsRadioButton> {
  render() {
    const { gender } = this.props;
    return (
      <div className="radio__wrapper">
        <input className="input_radio" type="radio" value={gender} id={gender} name="gender" />
        <label className="label__text label radio_label" htmlFor={gender}>
          {gender}
        </label>
      </div>
    );
  }
}
