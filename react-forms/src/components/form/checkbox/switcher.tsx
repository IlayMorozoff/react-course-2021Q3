import { PureComponent } from 'react';
import './checkbox.scss';

export default class Switcher extends PureComponent {
  render() {
    return (
      <div className="wrapper__switcher">
        <div className="consent">Consent to data processing</div>
        <label htmlFor="switch" className="switch">
          <input type="checkbox" name="" id="switch" />
          <div>
            <span />
          </div>
        </label>
      </div>
    );
  }
}
