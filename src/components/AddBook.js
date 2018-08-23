import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addBook } from '../actions';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
  }
  addBook = (data) => {
    this.props.addBook(data.name);
    this.props.reset();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.addBook)} id="add-book" className="form">
        <Field name="name" label="Book Name:" component={RenderInput} />
        <button type="submit">+</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
}

const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      "field",
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label} />
)

const AddBookReduxForm = reduxForm({
  form: 'addbook',
  destroyOnUnmount: true,
  validate
})(AddBookForm);

const mapDispatchToProps = dispatch => ({
  addBook: name => dispatch(addBook(name))
});

export default connect(
  null,
  mapDispatchToProps
)(AddBookReduxForm);