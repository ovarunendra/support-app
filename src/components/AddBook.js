import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBook } from '../actions'

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      genre: '',
    };
  }
  addBook = () => {
    const { name } = this.state;
  	name && this.props.addBook(name);
  }
  render() {
    return (
      <div id="add-book" className="form">
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => this.setState({genre: e.target.value})}/>
        </div>

        <button onClick={() => this.addBook()}>+</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: name => dispatch(addBook(name))
});

export default connect(
  null,
  mapDispatchToProps
)(AddBook);