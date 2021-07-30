import './search-panel.scss';

const SearchPanel = () => {
  return (
    <div className="search_panel">
      <input className="search_input" type="text" placeholder="Enter the phone brand" />
      <div className="wrapper__button">
        <div className="icon__search" />
        <button className="search searchBtn" type="button" />
      </div>
    </div>
  );
};

export default SearchPanel;
