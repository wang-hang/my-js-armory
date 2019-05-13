import isArrayLike from './isArrayLike'
import isObject from './isObject'
import isPlainObject from './isPlainObject'


export default function isEmpty(value) {
  if(value === null) {
    return true
  }
  if(Array.isArray(value) || isArrayLike(value)) {
    return value.length === 0
  }

  if(isPlainObject(value)) {
    return Object.keys(value).length === 0
  }

  return true
}