// 斐波那契数列
// 0 , n = 0
// 1 , n = 1
// f(n-1) + f(b-2), n > 2

// 计算次数过多
function fibonacci_base (n) {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci_base(n - 1) + fibonacci_base(n - 2)
}

// 优化代码 容易栈溢出
function fibonacci_opt (n) {
  const array = [0, 1]
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}

