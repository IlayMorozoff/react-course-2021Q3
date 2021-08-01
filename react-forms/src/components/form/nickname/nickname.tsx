import { PureComponent } from 'react';
import './nickname.scss';

export default class Nickname extends PureComponent {
  render() {
    return (
      <div className="nickname">
        <label className="label__text label" htmlFor="name">
          Nickname:
          <input
            className="input_nickname"
            type="text"
            id="name"
            placeholder="Enter your nickname"
          />
        </label>
      </div>
    );
  }
}
