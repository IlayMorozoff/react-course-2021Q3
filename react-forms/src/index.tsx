import ReactDOM from 'react-dom';
import App from './components/app/app';
import countries, { checkboxsData } from './components/data';
import './styles.scss';

ReactDOM.render(
  <App countries={countries} checkboxsData={checkboxsData} />,
  document.getElementById('root'),
);
