import { v4 } from 'node-uuid';

const fakeDatabase = {
  books: [
    {
      id: v4(),
      name: 'hey'
    },
    {
      id: v4(),
      name: 'ho'
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchBooks = () =>
  delay(500).then(() => {
    //   if (Math.random() > 0.95) throw new Error('NOPE!')
    return fakeDatabase.books;
  });

export const addBook = name =>
  delay(500).then(() => {
    if (fakeDatabase.books.some(book => book.name === name)) {
      throw new Error({ message: 'Book already exist' });
    }
    const book = {
      id: v4(),
      name
    };

    fakeDatabase.books.push(book);
    return book;
  });
