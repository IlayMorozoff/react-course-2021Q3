import ReactDOM from 'react-dom';
import { App } from './components/app/app';
import store from './components/store';
import './styles.scss';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
