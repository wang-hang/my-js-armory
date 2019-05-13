const MAX_SAFE_INTEGER = 9007199254740991


/**
 * @description 判断传入参数是否是一个合理的长度值
 * @param {*} value 
 * @return {boolean}
 */
export default function isLength(value) {
  return typeof value === 'number'
          && value > -1 // 判断是否非负数
          && value <= MAX_SAFE_INTEGER // 判断是否超出边界
          && value % 1 === 0 // 判断是否是浮点数
}