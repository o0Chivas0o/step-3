// 排序 arr = [2341 , 982 , 394 , 124 , 9901]
// 实现 selectSort(arr) // [124, 394 , 982 , 2341 , 9901]

{
  /**
   *
   * @param arr
   * @returns {*}
   */
  const selectionSort = arr => {
	if (arr.length <= 1) return arr
	// 一共选择 length - 1 次，因为最后一次只有一个元素不用选
	for (let i = 0; i < arr.length - 1; i++) {
	  // 假设第一个是最小的
	  let minIndex = i
	  for (let k = i + 1; k < arr.length; k++) {
		if (arr[k] < arr[minIndex]) {
		  // 第 k 个比第一个小，就用 minIndex 记住 k
		  minIndex = k
		}
	  }
	  // 交换 arr[i] 和 arr[minIndex] 的值
	  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
	}
	return arr
  }
}
