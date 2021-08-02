import { PureComponent } from 'react';
import './date.scss';

interface IPropsDateBirth {
  onAddDate: (date: string) => void;
  onCheckValidDate: (isValidDate: boolean) => void;
}

interface IStateDateBirth {
  dateBirth: string;
}

export default class DateBirth extends PureComponent<IPropsDateBirth, IStateDateBirth> {
  constructor(props: IPropsDateBirth) {
    super(props);
    this.state = {
      dateBirth: '',
    };
  }

  onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateBirth = e.target.value;
    const dateOfNumber = e.target.valueAsNumber;
    const { onAddDate, onCheckValidDate } = this.props;
    if (dateOfNumber >= 631152000000) {
      this.setState({
        dateBirth,
      });
      onAddDate(dateBirth);
      onCheckValidDate(true);
    } else {
      this.setState({
        dateBirth,
      });
      onCheckValidDate(false);
    }
  };

  render() {
    const { dateBirth } = this.state;

    return (
      <label className="label__text label date__wrapper" htmlFor="date">
        <div className="date__title">Date of Birth:</div>
        <input
          className="input_date"
          type="date"
          id="date"
          onChange={this.onChangeDate}
          value={dateBirth}
        />
      </label>
    );
  }
}
