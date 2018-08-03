import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => (
    <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
    </div>
)

export default App;
