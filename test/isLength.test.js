import isLength from '../src/isLength'

test('1 is valid length', () => {
  expect(isLength(1)).toBe(true)
})

test('Number.MIN_VALUE is invalid length', () => {
  expect(isLength(Number.MIN_VALUE)).toBe(false)
})

test('Infinity is invalid length', () => {
  expect(isLength(Infinity)).toBe(false)
})

test(' "1" is invalid length', () => {
  expect(isLength("1")).toBe(false)
})



