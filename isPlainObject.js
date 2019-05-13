import { getTag } from './_utils'

export default function isPlainObject(value) {
  return getTag(value) === '[object Object]'
}