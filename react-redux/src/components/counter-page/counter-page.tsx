/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageAction, newsPerPageAction } from '../../store/action-creators/home-page';
import { RootState } from '../../store/reducers';
import './counter-page.css';

const CounterPages: FC = () => {
  const newsPerPage = useSelector<RootState, string>((state) => state.homePage.newsPerPage);
  const currentPage = useSelector<RootState, string>((state) => state.homePage.currentPage);
  const allPagesValue = useSelector<RootState, number>((state) => state.homePage.allPagesValue);
  const dispatch = useDispatch();

  const onChangeNewsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 100 && e.target.value && e.target.value !== '0') {
      dispatch(newsPerPageAction(e.target.value));
    } else {
      dispatch(newsPerPageAction(''));
    }
  };

  const onChangeCurrentPage = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length >= 1 &&
      e.target.value !== '0' &&
      Number(e.target.value) <= allPagesValue
    ) {
      dispatch(currentPageAction(e.target.value));
    } else {
      dispatch(currentPageAction(''));
    }
  };

  return (
    <div className="pages_counters">
      <div className="total_page counter">
        <label className="title_total title" htmlFor="page_number">
          News per Page
        </label>
        <input
          type="number"
          className="page_number"
          id="page_number"
          placeholder="10"
          value={newsPerPage}
          onChange={onChangeNewsPerPage}
        />
      </div>
      <div className="total_page counter">
        <label className="title_total title" htmlFor="current">
          Go to the page:
        </label>
        <input
          type="number"
          className="page_number"
          id="current"
          placeholder="1"
          value={currentPage}
          onChange={onChangeCurrentPage}
        />
      </div>
    </div>
  );
};

export default CounterPages;
