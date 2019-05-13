
/**
 *
 * @description 在停止输入后 执行传入的函数
 * @export
 * @param {*} fn
 * @param {number} [delay=500] 默认500ms
 * @returns {Function}
 */
export default function debounce(fn, delay = 500) {
  let timer = null;

  return function(){
    let arg = arguments
    if(timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fn.apply(this, arg)
    }, delay)
  }
}
