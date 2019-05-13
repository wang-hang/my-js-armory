
/**
 *
 * @description 固定频率执行传入的函数
 * @export
 * @param {*} fn
 * @param {number} [interval=1000]
 * @returns {Function}
 */
export default function throttle(fn, interval = 1000) {
  let timer = null
  return function() {
    let arg = arguments
    if(timer !== null) return
    timer = setInterval(function() {
      fn.apply(this, arg)
      clearTimeout(timer)
      timer = null
    }, interval)
  }
}