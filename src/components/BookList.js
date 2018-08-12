import React, { Component } from 'react';
import { connect } from 'react-redux'
import BookDetails from './BookDetails';
import { getBooks, getErrorMessage, getIsFetching } from '../reducers';
import * as actions from '../actions';

class BookList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData () {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  displayBooks = () => {
      const { books, isFetching } = this.props;
      if (isFetching) {
        return (
          <div>Loading</div>
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

const mapStateToProps = (state) => {
  return {
    errorMessage: getErrorMessage(state),
    isFetching: getIsFetching(state),
    books: getBooks(state)
  }
}

export default connect(
  mapStateToProps,
  actions
)(BookList);
