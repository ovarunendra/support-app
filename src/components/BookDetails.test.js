import React from 'react';
import BookDetails from './BookDetails';
import { shallow } from 'enzyme';

describe('<BookDetails />', () => {
  it('should render <BookDetails /> ', () => {
    const wrapper = shallow(<BookDetails />);
    expect(wrapper.find('#book-details')).toHaveLength(1);
  });
  it('should show "No Book Selected"', () => {
    const wrapper = shallow(<BookDetails book={undefined} />);
    expect(wrapper.find('.no-book')).toHaveLength(1);
    expect(wrapper.find('.no-book').text()).toEqual('No Book Selected');
  });
  it('should show book name', () => {
    const wrapper = shallow(
      <BookDetails book={{ name: 'hey', genre: 'test' }} />,
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('hey');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test');
  });
});
