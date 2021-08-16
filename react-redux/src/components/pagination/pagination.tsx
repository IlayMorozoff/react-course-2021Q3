import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  pagePaginatioNextAction,
  pagePaginatioPrevAction,
} from '../../store/action-creators/pagination';
import { RootState } from '../../store/reducers';
import { IHomePageState } from '../interfaces';
import NumberPages from '../number-pages/number-pages';
import './pagination.css';

const Pagination: FC = () => {
  const { newsPerPage } = useSelector<RootState, IHomePageState>((state) => state.homePage);
  const pagePagination = useSelector<RootState, number>((state) => state.pagination.pagePagination);
  const dispatch = useDispatch();
  const disabledBtnNext = Number(newsPerPage) * pagePagination >= 100;
  const disabledBtnPrev = pagePagination <= 1;
  return (
    <div className="pagination">
      <button
        className="button pagination_btn"
        type="button"
        disabled={disabledBtnPrev}
        onClick={() => dispatch(pagePaginatioPrevAction())}
      >
        Prev
      </button>
      <NumberPages />
      <button
        className="button pagination_btn"
        type="button"
        disabled={disabledBtnNext}
        onClick={() => dispatch(pagePaginatioNextAction())}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
