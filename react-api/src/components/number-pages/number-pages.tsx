import { FC } from 'react';
import { INumberPagesProps } from '../interfaces';

const NumberPages: FC<INumberPagesProps> = ({ allPagesValue, pagePagination }) => {
  return (
    <div className="number_pages">
      <div className="current">Current page: {pagePagination}</div>
      <div className="all_pages">All pages: {allPagesValue}</div>
    </div>
  );
};

export default NumberPages;
