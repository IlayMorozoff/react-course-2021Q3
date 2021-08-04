import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="search__panel__wrapper">
      <input className="search" type="text" placeholder="Search news" />
      <button type="button">Search</button>
    </div>
  );
};

export default SearchPanel;
