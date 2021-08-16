import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const NumberPages: FC = () => {
  const allPagesValue = useSelector<RootState, number>((state) => state.homePage.allPagesValue);
  const pagePagination = useSelector<RootState, number>((state) => state.pagination.pagePagination);
  return (
    <div className="number_pages">
      <div className="current">Current page: {pagePagination}</div>
      <div className="all_pages">All pages: {allPagesValue}</div>
    </div>
  );
};

export default NumberPages;
