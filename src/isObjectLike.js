export default function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}