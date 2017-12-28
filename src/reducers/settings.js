const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        ...state,
        activeValue: action.value
      };
    default:
      return state;
  }
};
