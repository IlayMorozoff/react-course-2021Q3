/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { sortValueAction } from '../../store/action-creators/home-page';
import { IInpuntsRadio } from '../interfaces';
import './sort-wrapper.css';

const SortWrapper: FC = () => {
  const dipatch = useDispatch();
  const onChangeSortBy = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      dipatch(sortValueAction(e.target.value));
    } else {
      dipatch(sortValueAction('publishedAt'));
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
