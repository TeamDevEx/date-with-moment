const dateFormatier = require('./index');

test('dateFormatier', () => {
  const result = dateFormatier('2023-08-09 at 01:00:00 EST');
  console.log(result);
  expect(result).toBe('2023-08-09');
});

test('format', () => {
  const result = dateFormatier('2023-08-08 7:30am EST');
  console.log(result);
  expect(result).toBe('2023-08-08');
});
