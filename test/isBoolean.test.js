import isBoolean from '../src/isBoolean.js'

test('false is boolean', () => {
  expect(isBoolean(false)).toBe(true)
})

test('false is boolean', () => {
  expect(isBoolean(null)).toBe(false)
})