const initialState = [
	{
		id: 1,
		name: 'test'
	},
	{
		id: 2,
		name: 'test2'
	},
];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ];
    default:
      return state
  }
}

export default books;