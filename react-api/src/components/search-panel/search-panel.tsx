import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { IPanelSearchProps } from '../interfaces';
import './search-panel.css';

const SearchPanel: FC<IPanelSearchProps> = ({ onChangeSearchValue, onSend, disableButton }) => {
  const [searchValue, setSearchValue] = useState('');
  // ChangeEvent<HTMLInputElement>
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChangeSearchValue(e.target.value);
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
