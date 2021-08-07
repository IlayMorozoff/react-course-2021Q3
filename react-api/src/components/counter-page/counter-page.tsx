/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FC, useState } from 'react';
import { ICounterPagesProps } from '../interfaces';
import './counter-page.css';

const CounterPages: FC<ICounterPagesProps> = ({
  onChangeNewsPerPageApp,
  onChangeCurrentPageApp,
  allPagesValue,
}) => {
  const [newsPerPage, setNewsPerPage] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  const onChangeNewsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 100 && e.target.value && e.target.value !== '0') {
      setNewsPerPage(e.target.value);
      onChangeNewsPerPageApp(e.target.value);
    } else {
      setNewsPerPage('1');
      onChangeNewsPerPageApp('1');
    }
  };

  const onChangeCurrentPage = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length >= 1 &&
      e.target.value !== '0' &&
      Number(e.target.value) <= allPagesValue
    ) {
      setCurrentPage(e.target.value);
      onChangeCurrentPageApp(e.target.value);
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
          Current Page
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
