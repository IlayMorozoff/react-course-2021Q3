import CardsNewsContainer from '../card-news-container/card-news-container';
import CounterPages from '../counter-page/counter-page';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import SearchPanel from '../search-panel/search-panel';
import SortWrapper from '../sort-wrapper/sort-wrapper';
import './app.css';

export const App = () => {
  return (
    <section className="wrapper">
      <Header />
      <div className="search_sort">
        <SearchPanel />
        <SortWrapper />
      </div>
      <div className="wrapper_pag_count">
        <Pagination />
        <CounterPages />
      </div>
      <CardsNewsContainer />
    </section>
  );
};

export default App;
