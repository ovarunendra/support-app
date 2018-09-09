import { combineReducers } from 'redux';
import cache, { getBook } from './cache';
import { reducer as reduxFormReducer } from 'redux-form';

import {
  createList as createBookList,
  getIds,
  getIsFetching as listIsFetching,
  getErrorMessage as getErrorMessageForFilter,
} from './books';

// const bookList = combineReducers({
//   bookList: createBookList()
// })

export default combineReducers({
  form: reduxFormReducer,
  cache,
  bookList: createBookList(),
});

export const getBooks = state =>
  getIds(state.bookList).map(id => getBook(state, id));

export const getIsFetching = state => listIsFetching(state.bookList);

export const getErrorMessage = state =>
  getErrorMessageForFilter(state.bookList);
