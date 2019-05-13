import isObjectLike from '../src/isObjectLike'

test('{} is object-like', () => {
  expect(isObjectLike({})).toBe(true)
})

test('[1,2,3] is object-like', () => {
  expect(isObjectLike([1,2,3])).toBe(true)
})

test('Function is not object-like', () => {
  expect(isObjectLike(new Function)).toBe(false)
})

test('null is not object-like', () => {
  expect(isObjectLike(null)).toBe(false)
})
