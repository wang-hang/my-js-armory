import isNum from '../src/isNumber'

test(' "1" is not number', () => {
  expect(isNum("1")).toBe(false)
})

test(' 1 is number', function(){
  expect(isNum(1)).toBe(true)
})

test(' {} is not number', function() {
  expect(isNum({})).toBe(false)
})

test(' Number.MIN_VALUE is number', function() {
  expect(isNum(Number.MIN_VALUE)).toBe(true)
})

test(' Infinity is number', function(){
  expect(isNum(Infinity)).toBe(true)
})