import { setActive } from '../../actions/settings.js';

test('should correctly generate setActive action object', () => {
  const value = 2;
  const action = setActive(value);
  expect(action).toEqual({
    type: 'SET_ACTIVE',
    value
  });
});
