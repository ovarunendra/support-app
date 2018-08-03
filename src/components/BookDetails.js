import React, { Component } from 'react';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props;
    if(!book){
      return <div>No Book Selected</div>
    }
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
      </div>
    );
  }
  render() {
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default BookDetails;
