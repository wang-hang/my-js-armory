import isArrayLike from '../src/isArrayLike'

test('[1,2,3] is array-like', () => {
  expect(isArrayLike([1,2,3])).toBe(true)
})

test('document.body.children is array-like', () => {
  expect(isArrayLike(document.body.children)).toBe(true)
})

test('abc is array-like', () => {
  expect(isArrayLike('abc')).toBe(true)
})

test('Function is not array-like', () => {
  expect(isArrayLike(new Function())).toBe(false)
})
