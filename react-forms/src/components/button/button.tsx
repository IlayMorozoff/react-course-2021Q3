import { PureComponent } from 'react';
import './button.scss';

// interface IButtonSubmit {
//   onClickSumbitForm: (nickname: string) => void;
// }

export default class ButtonSubmit extends PureComponent<{}> {
  render() {
    return <input className="button" type="submit" value="Submit" />;
  }
}
