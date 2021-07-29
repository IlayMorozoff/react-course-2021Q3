import './search-panel.scss';

const SearchPanel = () => {
  return (
    <div className="search_panel">
      <input className="search_input" type="text" placeholder="enter the something" />
      <button className="search" type="button">
        search button
      </button>
    </div>
  );
};

export default SearchPanel;
