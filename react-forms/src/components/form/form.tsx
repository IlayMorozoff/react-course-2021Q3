import { PureComponent } from 'react';
import ButtonSubmit from '../button/button';
import DateBirth from './date/date-birth';
import Nickname from './nickname/nickname';
import RadioButton from './radio-button/radio-button';
import Select from './select/select';
import './form.scss';
import { IPropsForm } from '../interfaces';
import CheckboxWrapper from './checkbox/checkbox-wrapper';

export default class Form extends PureComponent<IPropsForm> {
  render() {
    const { countries, checkboxsData } = this.props;
    return (
      <form className="form">
        <Nickname />
        <DateBirth />
        <div className="radio__group">
          <RadioButton gender="male" />
          <RadioButton gender="female" />
          {/* <label className="label__text label" htmlFor="gender-male">
            Male
            <input className="input" type="radio" value="male" id="gender-male" name="gender" />
          </label>
          <label className="label__text label" htmlFor="gender-female">
            Female
            <input className="input" type="radio" value="male" id="gender-female" name="gender" />
          </label> */}
        </div>
        <Select countries={countries} />
        <CheckboxWrapper checkboxsData={checkboxsData} />
        <ButtonSubmit />
      </form>
    );
  }
}
