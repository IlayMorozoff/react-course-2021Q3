import { combineReducers } from 'redux';
import homePageReducer from './home-page-reducer';
import { paginationReducer } from './pagination-reducer';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
