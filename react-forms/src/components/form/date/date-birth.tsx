import { PureComponent } from 'react';
import './date.scss';

export default class DateBirth extends PureComponent {
  render() {
    return (
      <label className="label__text label date__wrapper" htmlFor="date">
        <div className="date__title">Date of Birth:</div>
        <input className="input_date" type="date" id="date" />
      </label>
    );
  }
}
