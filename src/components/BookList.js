import React, { Component } from 'react';
import { connect } from 'react-redux'
import BookDetails from './BookDetails';
import { showBook } from '../actions'

class BookList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks = () => {
      const { books } = this.props;
      if (!books.length) {
        return (
          <div>No book found</div>
        );
      }
      return books.map(book => {
        return (
          <li key={book.id} onClick={(e) => this.setState({selected: book.id})}>{book.name}</li>
        );
      });
  };

  getBookDetails = () => {
    if (!this.state.selected) return ;
    const {books} = this.props;
    const book = books.find(o => o.id === this.state.selected);
    return book;
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails book={this.getBookDetails()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(
  mapStateToProps,
  null
)(BookList);
