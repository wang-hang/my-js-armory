import isObject from '../src/isObject'

test('{} is Object', () => {
  expect(isObject({})).toBe(true)
})

test('[1, 2, 3] is not Object', () => {
  expect(isObject([1,2,3])).toBe(true)
})

test('Function is Object', () => {
  const fn = new Function()
  expect(isObject(fn)).toBe(true)
})

test('null is Object', () => {
  expect(isObject(null)).toBe(false)
})
