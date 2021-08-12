import { PureComponent } from 'react';
import './nickname.scss';

interface IStateNickname {
  nicknameValue: string;
}

interface IPropsNickname {
  onAddNickname: (nickname: string) => void;
  onCheckValidNickname: (isValidNickname: boolean) => void;
}

export default class Nickname extends PureComponent<IPropsNickname, IStateNickname> {
  constructor(props: IPropsNickname) {
    super(props);
    this.state = {
      nicknameValue: '',
    };
  }

  onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nicknameValue = e.target.value;
    const regExp = /[a-zA-Z]/;
    const isValid = regExp.test(nicknameValue);
    const { onAddNickname, onCheckValidNickname } = this.props;
    if (isValid) {
      this.setState({
        nicknameValue,
      });
      onAddNickname(nicknameValue);
      onCheckValidNickname(isValid);
    } else {
      this.setState({
        nicknameValue,
      });
      onCheckValidNickname(isValid);
    }
  };

  render() {
    const { nicknameValue } = this.state;
    return (
      <div className="nickname">
        <label className="label__text label" htmlFor="name">
          Nickname:
          <input
            className="input_nickname"
            type="text"
            id="name"
            placeholder="Enter your nickname"
            onChange={this.onChangeNickname}
            value={nicknameValue}
          />
        </label>
      </div>
    );
  }
}
