import { PureComponent } from 'react';
import './nickname.scss';

interface IStateNickname {
  nicknameValue: string;
}

interface IPropsNickname {
  onAddNickname: (nickname: string) => void;
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
    this.setState({
      nicknameValue,
    });
    const { onAddNickname } = this.props;
    onAddNickname(nicknameValue);
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
            onInput={this.onChangeNickname}
            value={nicknameValue}
          />
        </label>
      </div>
    );
  }
}
