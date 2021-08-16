import { FC } from 'react';
import { IPaginationProps } from '../interfaces';
import NumberPages from '../number-pages/number-pages';
import './pagination.css';

const Pagination: FC<IPaginationProps> = ({
  allPagesValue,
  onPaginationNext,
  onPaginationPrev,
  pagePagination,
  newsPerPage,
}) => {
  const disabledBtnNext = Number(newsPerPage) * pagePagination >= 100;
  const disabledBtnPrev = pagePagination <= 1;
  return (
    <div className="pagination">
      <button
        className="button pagination_btn"
        type="button"
        disabled={disabledBtnPrev}
        onClick={onPaginationPrev}
      >
        Prev
      </button>
      <NumberPages allPagesValue={allPagesValue} pagePagination={pagePagination} />
      <button
        className="button pagination_btn"
        type="button"
        disabled={disabledBtnNext}
        onClick={onPaginationNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
