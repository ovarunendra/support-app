let nextBook = 99
export const addBook = name => ({
  type: 'ADD_BOOK',
  id: nextBook++,
  name
})