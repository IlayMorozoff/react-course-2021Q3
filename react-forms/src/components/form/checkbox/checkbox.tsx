/* eslint-disable jsx-a11y/label-has-associated-control */
import { PureComponent } from 'react';
import { IPropsCheckbox } from '../../interfaces';

interface IStateCheckbox {
  isChekedCheckboxs: string[];
}

export default class Checkbox extends PureComponent<IPropsCheckbox, IStateCheckbox> {
  constructor(props: IPropsCheckbox) {
    super(props);
    this.state = {
      isChekedCheckboxs: [],
    };
  }

  onChangeWhatLiked = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(({ isChekedCheckboxs }) => {
      const newIsChekedCheckboxs = isChekedCheckboxs.slice();
      const isElement = newIsChekedCheckboxs.includes(e.target.value);
      newIsChekedCheckboxs.push(e.target.value);
      const { onAddWhatLikedFromWrap, onCheckValidCheckboxBtn } = this.props;
      if (isElement) {
        const newArr = newIsChekedCheckboxs.filter((item) => e.target.value !== item);
        onAddWhatLikedFromWrap(newArr);
        if (newArr.length) {
          onCheckValidCheckboxBtn(true);
        } else {
          onCheckValidCheckboxBtn(false);
        }
        return {
          isChekedCheckboxs: newArr,
        };
      }
      onAddWhatLikedFromWrap(newIsChekedCheckboxs);
      onCheckValidCheckboxBtn(true);
      return {
        isChekedCheckboxs: newIsChekedCheckboxs,
      };
    });
  };

  render() {
    const { checkboxsData } = this.props;
    const checkboxs = checkboxsData.map((checkbox) => {
      return (
        <div key={checkbox}>
          <input
            className="checkbox"
            type="checkbox"
            id={checkbox}
            value={checkbox}
            onChange={this.onChangeWhatLiked}
          />
          <label className="label__checkbox" htmlFor={checkbox}>
            {checkbox}
          </label>
        </div>
      );
    });
    return <div className="wrap__check">{checkboxs}</div>;
  }
}
