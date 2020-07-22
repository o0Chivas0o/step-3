// 找到一组数中最大的数 JS

const array = [23, 99, 17, 28, 84]

// 一般代码
function max_s1 (arr) {
  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i]
    }
  }
  return result
}

max_s1(array) // 99

// 数学公式代入
function max_s2 (arr) {
  if (arr.length === 1) {return arr[0]}
  const otherMax = max_s2(arr.slice(1))
  return arr[0] > otherMax ? arr[0] : otherMax
}

// 优化max_s2 递归算法
  const maxOfTwo = (a, b) => a > b ? a : b
  const max_s2_opt = ([first, ...others]) => others.length < 1 ? first : maxOfTwo(first, max_s2_opt(others))

max_s2(array) // 99

