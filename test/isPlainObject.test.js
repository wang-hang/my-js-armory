import isPlainObject from '../src/isPlainObject'

test('{} is plain object', () => {
  expect(isPlainObject({})).toBe(true)
})

test('[1, 2, 3] is not plain object', () => {
  expect(isPlainObject([1,2,3])).toBe(false)
})

test('Function is not  plain object', () => {
  const fn = new Function()
  expect(isPlainObject(fn)).toBe(false)
})

test('Object.create(null) is Object', () => {
  expect(isPlainObject(Object.create(null))).toBe(true)
})