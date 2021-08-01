/* eslint-disable jsx-a11y/label-has-associated-control */
import { PureComponent } from 'react';
import { IPropsCheckboxWrapper } from '../../interfaces';
import Checkbox from './checkbox';
import './checkbox.scss';

export default class CheckboxWrapper extends PureComponent<IPropsCheckboxWrapper> {
  render() {
    const { checkboxsData } = this.props;
    return (
      <div className="wrapper__checkbox">
        <div className="label__text label label__checkbox">What did you like most about us?</div>
        <Checkbox checkboxsData={checkboxsData} />
      </div>
    );
  }
}
