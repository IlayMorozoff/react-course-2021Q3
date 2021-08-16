import { combineReducers } from 'redux';
import homePageReducer from './home-page-reducer';
import newsReducer from './news-reducer';
import { paginationReducer } from './pagination-reducer';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
  fetchArticles: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
