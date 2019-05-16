import { getTag } from './_utils.js'

export default function isBoolean(value) {
  return value === true || value === false || getTag(value) === '[object Boolean]'
}