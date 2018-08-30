import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { addBook } from '../actions';
import analytics from '../utils/analytics';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
  }
  addBook = data => {
    return this.props
      .addBook(data.name)
      .then(() => {
        analytics.logNewBookAdded();
        this.props.reset();
      })
      .catch(() => {
        throw new SubmissionError({
          name: 'Book already exist',
          _error: 'Adding new book failed!'
        });
      });
  };

  render() {
    const { handleSubmit, error, submitting } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.addBook)}
        id="add-book"
        className="form"
      >
        <Field name="name" label="Book Name:" component={RenderInput} />
        {error && (
          <div className="field">
            <label />
            {error}
          </div>
        )}
        <button type="submit" disabled={submitting}>
          +
        </button>
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
};

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div
    className={[
      'field',
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>{label}</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} />
));

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
