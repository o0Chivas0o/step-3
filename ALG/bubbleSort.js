// 排序 arr = [2341 , 982 , 394 , 124 , 9901]
// 实现 bubbleSort(arr) // [124, 394 , 982 , 2341 , 9901]

{
  /**
   *
   * @param arr
   * @returns {*}
   */
  const bubbleSort = arr => {
    const { length } = arr
    for (let r = 0; r < length - 1; r++) {
      for (let i = 0; i < length - r - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
      }
    }
    return arr
  }
}
