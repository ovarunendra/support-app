import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

describe('<App />', () => {
  it('should render <App /> component having <BookList /> and <AddBook />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookList)).toHaveLength(1);
    expect(wrapper.find(AddBook)).toHaveLength(1);
  });
  it('should contain heading as "Reading List"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Reading List');
  });
});
