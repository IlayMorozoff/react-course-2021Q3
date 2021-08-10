import CardContainer from '../card-container/card-container';
import { IPropsApp } from '../interfaces';
import SearchPanel from '../search-panel/search-panel';
import './app.scss';

export const App = ({ store }: IPropsApp) => {
  return (
    <div className="wrapper">
      <SearchPanel />
      <CardContainer store={store} />
    </div>
  );
};

export default App;
