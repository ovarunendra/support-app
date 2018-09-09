import React from 'react';
import BookList from './BookList';
import BookDetails from './BookDetails';

import shallowWithStore from '../../test/shallowWithStore';

describe('<BookList />', () => {
  it('should render <BookList /> component', () => {
    const wrapper = shallowWithStore(<BookList />).dive();
    expect(wrapper.find(BookDetails)).toHaveLength(1);
  });

  it('should map state correctly', () => {
    const wrapper = shallowWithStore(<BookList />).dive();
    expect(wrapper.state('selected')).toEqual(null);
  });

  it('should display "Loading"', () => {
    const state = {
      bookList: {
        isFetching: true,
      },
    };
    const wrapper = shallowWithStore(<BookList />, state).dive();
    expect(wrapper.find('.loading')).toHaveLength(1);
    expect(wrapper.find('.loading').text()).toEqual('Loading');
    expect(wrapper.find('li')).toHaveLength(0);
  });

  it('should display one book', () => {
    const wrapper = shallowWithStore(<BookList />).dive();
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').text()).toEqual('hey');
  });

  it('should update selected book', () => {
    const wrapper = shallowWithStore(<BookList />).dive();
    expect(wrapper.state('selected')).toEqual(null);
    wrapper
      .find('li')
      .props()
      .onClick();
    expect(wrapper.state('selected')).toEqual('test-id');
  });

  it('should update props of BookDetails component', () => {
    const wrapper = shallowWithStore(<BookList />).dive();
    expect(wrapper.find(BookDetails).props()).toEqual({ book: undefined });
    wrapper
      .find('li')
      .props()
      .onClick();
    expect(wrapper.find(BookDetails).props()).toEqual({
      book: { id: 'test-id', name: 'hey' },
    });
  });
});
