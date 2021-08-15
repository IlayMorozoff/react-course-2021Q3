import { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchValueAction } from '../../store/action-creators/home-page';
import { RootState } from '../../store/reducers';
import { IPanelSearchProps } from '../interfaces';
import './search-panel.css';

const SearchPanel: FC<IPanelSearchProps> = ({ onSend, disableButton }) => {
  const searchValue = useSelector<RootState, string>((state) => state.homePage.searchValue);
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
      onSend();
    }
  };

  const onClickSearchButton = () => {
    onSend();
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
