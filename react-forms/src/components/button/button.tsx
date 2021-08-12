import { PureComponent } from 'react';
import './button.scss';

interface IStateButtonSubmit {
  disabled: boolean;
}

export default class ButtonSubmit extends PureComponent<IStateButtonSubmit> {
  render() {
    const { disabled } = this.props;
    return <input className="button" type="submit" value="Submit" disabled={!disabled} />;
  }
}
