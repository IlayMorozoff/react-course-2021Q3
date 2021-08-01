import React from 'react';
import { IPropsSelect } from '../../interfaces';
import './select.scss';

export default class Select extends React.PureComponent<IPropsSelect> {
  render() {
    const { countries } = this.props;
    const countriesData = countries.map((country) => (
      <option value={country} key={country}>
        {country}
      </option>
    ));
    return (
      <div className="select__wrapper">
        <div className="select__label label">Сhoose your country:</div>
        <select className="select__wrap">{countriesData}</select>
      </div>
    );
  }
}
