// 堆排序
// array = [35,26,48,10,59,64,17,23,45,31]
// heapify([64, 59, 48, 45, 31, 35, 17, 23, 10, 26])

{
  const array = [35, 26, 48, 10, 59, 64, 17, 23, 45, 31]
  
  const heapify = (array) => {
	for (let i = parseInt((array.length - 1) / 2); i >= 0; i--) {
	  siftDown(array, i, array.length)
	}
	return array
  }
  
  const siftDown = (heap, i, length) => {
	const left = 2 * i + 1, right = 2 * i + 2
	let bigger = left
	if (bigger >= length) return
	if (right < length && heap[right] > heap[bigger]) {
	  bigger = right
	}
	if (heap[bigger] > heap[i]) {
	  console.log(`交换 ${heap[bigger]} ${heap[i]}`);
	  [heap[bigger], heap[i]] = [heap[i], heap[bigger]]
	  siftDown(heap, bigger, length)
	}
  }
  
  const insert = (heap, item) => {
	heap.push(item)
	siftUp(heap, heap.length - 1)
  }
  
  const siftUp = (heap, i) => {
	if (i === 0) return
	const parent = parseInt((i - 1) / 2)
	if (heap[i] > heap[parent]) {
	  console.log(`换 ${heap[i]} ${heap[parent]}`);
	  [heap[i], heap[parent]] = [heap[parent], heap[i]]
	  siftUp(heap, parent)
	} else {
	  console.log(`${heap[parent]} 比 ${heap[i]} 大`)
	}
  }
  
  const extractMax = (heap, start, end) => {
	[heap[start], heap[end - 1]] = [heap[end - 1], heap[start]]
	const max = heap[end - 1]
	siftDown(heap, start, end - 1)
	return max
  }
  
  const heapSort = arr => {
	const heap = heapify(arr)
	for (let i = 0; i < heap.length - 1; i++) {
	  extractMax(heap, 0, heap.length - i)
	}
	return heap
  }
  
  const array2 = [9, 5, 1, 4, 7, 8, 3, 2, 6]
  
  console.log(heapSort(array2))
  console.log(extractMax(array, 0, array.length))
  console.log(heapify(array))
  console.log(insert(array, 80))
}
