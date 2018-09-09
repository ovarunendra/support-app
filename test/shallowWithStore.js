import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const shallowWithStore = (component, testState = {}) => {
  const defaultState = {
    bookList: { ids: ['test-id'] },
    cache: {
      'test-id': {
        id: 'test-id',
        name: 'hey',
      },
    },
  };
  const store = mockStore({ ...defaultState, ...testState });
  const context = {
    store,
  };
  return shallow(component, { context });
};

export default shallowWithStore;
