// 排序 arr = [2341 , 982 , 394 , 124 , 9901]
// 实现 quickSort(arr) // [124, 394 , 982 , 2341 , 9901]

// s1
{
  /**
   * 数学思维 快速排序
   * 太简单,是对的
   * 至少遍历了 4 次 filter * 2 , ... * 2
   * 至少复制了 6 次 rest * 2 , filter * 2 , ... * 2
   * 既耗CPU , 又耗内存
   * @param arr
   * @returns {*}
   */
  let quickSort = (arr) => {
	const [pivot, ...rest] = arr
	return arr.length <= 1 ? arr :
		[...quickSort(rest.filter(n => n < pivot)), pivot, ...quickSort(rest.filter(n => n >= pivot))]
  }
}

// s2
{
  /**
   * smallEnd 小数组 结束的位置 1
   * bigStart 大数组 开始的位置 arr.length
   * @param arr [2341 , 982 , 394 , 124 , 9901]
   * @param start 0
   * @param end arr.length 5
   * @returns {number|*}
   */
  const handlePivot = (arr, start, end) => {
	if (end - start <= 1) return end - start - 1
	let pivot = arr[start]
	let smallEnd = start
	let bigStart = end
	let i = start + 1
	while (bigStart - smallEnd > 1) {
	  if (arr[i] < pivot) {
		smallEnd += 1
		swap(arr, i, smallEnd)
		i += 1
	  } else if (arr[i] < pivot) {
		bigStart -= 1
		swap(arr, i, bigStart)
	  }
	}
	swap(arr, start, smallEnd)
	return smallEnd
  }
  
  /**
   * 交换数组中元素的位置 [1 , 2] => [2 , 1]
   * @param arr
   * @param a 起始位置
   * @param b 结束位置
   */
  const swap = (arr, a, b) => {
	[arr[a], arr[b]] = [arr[b], arr[a]]
  }
}

// s3
{
  /**
   *
   * @param arr
   * @returns {*}
   */
  const quickSort = arr => _quickSort(arr, 0, arr.length)
  
  /**
   *
   * @param arr
   * @param start 0
   * @param end arr.length
   * @returns {*}
   * @private
   */
  const _quickSort = (arr, start, end) => {
	// start end
	if (end - start <= 1) {return arr}
	const pivotIndex = handlePivot(arr, start, end)
	_quickSort(arr, start, pivotIndex)
	_quickSort(arr, pivotIndex + 1, end)
	return arr
  }
}
