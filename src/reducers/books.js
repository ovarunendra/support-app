import { combineReducers } from 'redux';

export const createList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_SUCCESS':
        return action.response.result;
      case 'ADD_BOOK_SUCCESS':
        return [...state, action.response.result];
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_REQUEST':
        return true;
      case 'FETCH_BOOKS_SUCCESS':
      case 'FETCH_BOOKS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_FAILURE':
        return action.message;
      case 'FETCH_BOOKS_REQUEST':
      case 'FETCH_BOOKS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    errorMessage,
    ids,
    isFetching,
  });
};

// Return a list of book IDs
export const getIds = state => state.ids || [];

// Return whether a list is currently awaiting response from the server
export const getIsFetching = state => state.isFetching;

// Return the list's current error message
export const getErrorMessage = state => state.errorMessage;
