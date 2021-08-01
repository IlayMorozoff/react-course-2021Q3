/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { IPropsSelect } from '../../interfaces';
import './select.scss';

interface IStateSelect {
  countryState: string;
}

export default class Select extends React.PureComponent<IPropsSelect, IStateSelect> {
  constructor(props: IPropsSelect) {
    super(props);
    this.state = {
      countryState: '',
    };
  }

  onChangeCounty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryState = e.target.value;
    this.setState({
      countryState,
    });
    const { onAddCountry } = this.props;
    onAddCountry(countryState);
  };

  render() {
    const { countries } = this.props;
    const { countryState } = this.state;
    const countriesData = countries.map((country) => (
      <option value={country} key={country}>
        {country}
      </option>
    ));
    return (
      <div className="select__wrapper">
        <div className="select__label label">Сhoose your country:</div>
        <select className="select__wrap" onChange={this.onChangeCounty} value={countryState}>
          {countriesData}
        </select>
      </div>
    );
  }
}
