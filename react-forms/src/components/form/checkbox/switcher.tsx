import { PureComponent } from 'react';
import './checkbox.scss';

interface IPropsSwitcher {
  onCheckSwticher: (isValid: boolean) => void;
}

export default class Switcher extends PureComponent<IPropsSwitcher> {
  onChangeSwitcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onCheckSwticher } = this.props;
    onCheckSwticher(e.target.checked);
  };

  render() {
    return (
      <div className="wrapper__switcher">
        <div className="consent">Consent to data processing</div>
        <label htmlFor="switch" className="switch">
          <input type="checkbox" id="switch" onChange={this.onChangeSwitcher} />
          <div>
            <span />
          </div>
        </label>
      </div>
    );
  }
}
