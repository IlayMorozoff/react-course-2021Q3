import { PureComponent } from 'react';
import './success-popup.scss';

interface IPropsSuccess {
  onShowForm: (isShowed: boolean) => void;
}

export default class SuccessPopup extends PureComponent<IPropsSuccess> {
  onShow = () => {
    const { onShowForm } = this.props;
    onShowForm(false);
  };

  render() {
    return (
      <div className="blackout">
        <div className="popup__wrapper">
          <div className="success__text">Congratulations! The card has been successfully added</div>
          <button className="button" type="button" onClick={this.onShow}>
            Ok
          </button>
        </div>
      </div>
    );
  }
}
