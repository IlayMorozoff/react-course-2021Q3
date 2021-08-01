import { PureComponent } from 'react';
import './button.scss';

export default class ButtonSubmit extends PureComponent {
  render() {
    return <input className="button" type="submit" value="Submit" />;
  }
}
