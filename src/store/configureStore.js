import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';
import settingsReducer from '../reducers/settings';

export default () => {
  const store = createStore(
    combineReducers({
      board: boardReducer,
      settings: settingsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
