/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import CardsNewsContainer from '../card-news-container/card-news-container';
import CounterPages from '../counter-page/counter-page';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import SortWrapper from '../sort-wrapper/sort-wrapper';
import './app.css';

export const App = () => {
  return (
    <section className="wrapper">
      <div className="search_sort">
        <SearchPanel />
        <SortWrapper />
      </div>
      <CounterPages />
      <Pagination />
      <CardsNewsContainer />
    </section>
  );
};

export default App;
