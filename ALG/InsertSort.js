// 排序 arr = [2341 , 982 , 394 , 124 , 9901]
// 实现 insertSort(arr) // [124, 394 , 982 , 2341 , 9901]

{
  /**
   * 可用二分优化
   * @param arr
   * @returns {*}
   */
  const insertSort = arr => {
	if (arr.length <= 1) return arr
	for (let s = 1; s < arr.length; s++) {
	  const n = arr[s] // 记住n
	  let i // i要在for循环之后使用
	  for (i = s - 1; i >= 0; i--) {
		//比 n 大的数字往后挪了一位
		if (arr[i] > n) arr[i + 1] = arr[i]
		// 遇到比 n 小的就中断循环
		else if (arr[i] <= n) break
	  }
	  arr[i + 1] = n
	}
	return arr
  }
}
