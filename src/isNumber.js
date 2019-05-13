import { getTag } from './_utils'

export default function isNumber(_){
  return typeof _ === 'number' || getTag(_) === '[object Number]'
}