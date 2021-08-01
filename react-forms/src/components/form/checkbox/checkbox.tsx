/* eslint-disable jsx-a11y/label-has-associated-control */
import { PureComponent } from 'react';
import { IPropsCheckbox } from '../../interfaces';

export default class Checkbox extends PureComponent<IPropsCheckbox> {
  render() {
    const { checkboxsData } = this.props;

    const checkboxs = checkboxsData.map((checkbox) => {
      return (
        <div key={checkbox}>
          <input className="checkbox" type="checkbox" id={checkbox} value={checkbox} />
          <label className="label__checkbox" htmlFor={checkbox}>
            {checkbox}
          </label>
        </div>
      );
    });
    return <div className="wrap__check">{checkboxs}</div>;
  }
}
