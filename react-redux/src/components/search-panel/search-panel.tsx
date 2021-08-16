import { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, searchValueAction } from '../../store/action-creators/home-page';
import { RootState } from '../../store/reducers';
import { IHomePageState, IPanelSearchProps } from '../interfaces';
import './search-panel.css';

const SearchPanel: FC<IPanelSearchProps> = ({ disableButton }) => {
  const { searchValue, newsPerPage, sortValue } = useSelector<RootState, IHomePageState>(
    (state) => state.homePage,
  );
  const pagePagination = useSelector<RootState, number>((state) => state.pagination.pagePagination);
  const dispatch = useDispatch();

  // const [searchValue, setSearchValue] = useState('');
  // const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  //   onChangeSearchValue(e.target.value);
  // };
  // const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchValueAction(e.target.value));
    // onChangeSearchValue(e.target.value);
  };

  const onChangeSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      // onSend();
      dispatch(
        fetchArticles(
          searchValue || 'science',
          String(pagePagination) || '1',
          newsPerPage || '10',
          sortValue,
        ),
      );
    }
  };

  const onClickSearchButton = () => {
    // onSend();
    dispatch(
      fetchArticles(
        searchValue || 'science',
        String(pagePagination) || '1',
        newsPerPage || '10',
        sortValue,
      ),
    );
  };

  return (
    <div className="search__panel__wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search news"
        disabled={disableButton}
        value={searchValue}
        onChange={onChangeSearch}
        onKeyDown={onChangeSearchEnter}
      />
      <button
        className="button"
        type="button"
        onClick={onClickSearchButton}
        disabled={disableButton}
      >
        Search
      </button>
    </div>
  );
};

export default SearchPanel;
