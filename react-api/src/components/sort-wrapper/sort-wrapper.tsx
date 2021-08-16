/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FC } from 'react';
import { IInpuntsRadio, ISortWrapperProps } from '../interfaces';
import './sort-wrapper.css';

const SortWrapper: FC<ISortWrapperProps> = ({ onSort }) => {
  const onChangeSortBy = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onSort(e.target.value);
    } else {
      onSort('publishedAt');
    }
  };

  const inputsRadioSort: IInpuntsRadio[] = [
    {
      name: 'newest',
      sortBy: 'publishedAt',
    },
    {
      name: 'more suitable',
      sortBy: 'relevancy',
    },
    {
      name: 'popular',
      sortBy: 'popularity',
    },
  ];

  const inputsRadio = inputsRadioSort.map((radioButton) => {
    return (
      <div key={radioButton.name}>
        <input
          className="radio"
          type="radio"
          id={radioButton.name}
          value={radioButton.sortBy}
          name="sort"
          onChange={onChangeSortBy}
        />
        <label htmlFor={radioButton.name} className="newest_sort">
          {radioButton.name}
        </label>
      </div>
    );
  });

  return (
    <div className="sort__wrapper">
      <div className="title__sort title">Sort by: </div>
      <div className="inputs__wrapper">{inputsRadio}</div>
    </div>
  );
};

export default SortWrapper;
