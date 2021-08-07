import { FC } from 'react';
import { IPaginationProps } from '../interfaces';
import NumberPages from '../number-pages/number-pages';
import './pagination.css';

const Pagination: FC<IPaginationProps> = ({
  allPagesValue,
  onPaginationNext,
  onPaginationPrev,
  pagePagination,
}) => {
  return (
    <div className="pagination">
      <button className="button pagination_btn" type="button" onClick={onPaginationPrev}>
        Prev
      </button>
      <NumberPages allPagesValue={allPagesValue} pagePagination={pagePagination} />
      <button className="button pagination_btn" type="button" onClick={onPaginationNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
