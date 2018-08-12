import { normalize } from 'normalizr';
import { Book, Books } from '../schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchBooks = () => (dispatch, getState) => {
  if (getIsFetching(getState())) return Promise.resolve();

  dispatch({
    type: 'FETCH_BOOKS_REQUEST',
  })

  return api
    .fetchBooks()
    .then(
      response => {
        dispatch({
          type: 'FETCH_BOOKS_SUCCESS',
          response: normalize(response, Books)
        })
      },
      error => {
        dispatch({
          type: 'FETCH_BOOKS_FAILURE',
          message: error.message || 'Something went wrong'
        })
      }
    )
}

export const addBook = name => (dispatch) =>
  api.addBook(name).then(response => {
    dispatch({
      type: 'ADD_BOOK_SUCCESS',
      response: normalize(response, Book)
    })
  })
