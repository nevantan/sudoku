import settingsReducer from '../../reducers/settings';

test('should return default state on init', () => {
  const state = settingsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should update active cell value', () => {
  const value = 3;
  const action = {
    type: 'SET_ACTIVE',
    value
  };
  const state = settingsReducer({ activeValue: 0 }, action);
  expect(state).toEqual({
    activeValue: value
  });
});
