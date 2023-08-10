const dateFormatier = require('./index');

test('dateFormatier', () => {
  const result = dateFormatier('2014-06-01T12:00:00Z');

  expect(result).toBe('2014-06-01');
});

test('format', () => {
  const result = dateFormatier('2023-08-11T01:25:50+08:00');

  expect(result).toBe('2023-08-11');
});
