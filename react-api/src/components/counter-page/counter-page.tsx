/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import './counter-page.css';

const CounterPages: FC = () => {
  return (
    <div className="pages_counters">
      <div className="total_page counter">
        <div className="title_total title">Pages Total</div>
        <div className="page_number">23</div>
      </div>
      <div className="total_page counter">
        <label className="title_total title" htmlFor="page_number">
          News per Page
        </label>
        <input type="number" className="page_number" id="page_number" />
      </div>
      <div className="total_page counter">
        <label className="title_total title" htmlFor="current">
          Current Page
        </label>
        <input type="number" className="page_number" id="current" />
      </div>
    </div>
  );
};

export default CounterPages;
