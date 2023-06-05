import playerHealth from '../health';

test.each([
  [{ name: 'Маг', health: 10 }, 'critical'],
  [{ name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Маг', health: 90 }, 'healthy'],
])('testing playerHealth function with %s', (data, expected) => {
  const result = playerHealth(data);
  expect(result).toBe(expected);
});
