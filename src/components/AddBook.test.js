import React from 'react';
import { AddBookForm } from './AddBook';
import { shallow } from 'enzyme';

describe('<AddBookForm />', () => {
  it.only('should render <AddBookForm /> component', () => {
    const props = {
      handleSubmit: () => {},
      error: {},
      submitting: false,
    };
    const wrapper = shallow(<AddBookForm {...props} />);
    expect(wrapper.find('form')).toHaveLength(1);
  });
});
