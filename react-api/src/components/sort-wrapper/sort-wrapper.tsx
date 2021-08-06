/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import './sort-wrapper.css';

const SortWrapper: FC = () => {
  return (
    <div className="sort__wrapper">
      <div className="title__sort title">Sort by: </div>
      <div className="inputs__wrapper">
        <input className="radio" type="radio" id="newest" value="publishedAt" name="sort" />
        <label htmlFor="newest" className="newest_sort">
          newest
        </label>
        <input className="radio" type="radio" id="relevancy" value="relevancy" name="sort" />
        <label htmlFor="relevancy" className="newest_sort">
          more suitable
        </label>
        <input className="radio" type="radio" id="popularity" value="popularity" name="sort" />
        <label htmlFor="popularity" className="newest_sort">
          popular
        </label>
      </div>
    </div>
  );
};

export default SortWrapper;
