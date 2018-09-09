export default (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.books,
    };
  }

  return state;
};

export const getBook = (state, id) => state.cache[id];
