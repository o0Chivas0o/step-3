// 排序

// arr = [2341 , 982 , 394 , 124 , 9901]

// 实现 merge 函数

// s1
{
  function merge_base(a, b) {
	let c = [], i = 0, k = 0
	while (i < a.length || k < b.length) {
	  if (k >= b.length) {
		c.push(a[i])
		i += 1
	  } else if (i >= a.length) {
		c.push(b[k])
		k += 1
	  } else if (a[i] < b[k]) {
		c.push(a[i])
		i += 1
	  } else {
		c.push(b[k])
		k += 1
	  }
	}
	return c
  }
  
  // 优化后的 merge
  function merge_opt(a, b) {
	return a.length === 0 ? b :
		b.length === 0 ? a :
			a[0] > b[0] ?
				[b[0]].concat(merge_opt(a, b.slice(1))) :
				[a[0]].concat(merge_opt(a.slice(1), b))
  }
  
  // sort
  function sort_base(arr) {
	let k = arr.length
	if (k === 1) {return arr}
	let left = arr.slice(0, Math.floor(k / 2))
	let right = arr.slice(Math.floor(k / 2))
	console.log(left, right)
	return merge_opt(sort_base(left), sort_base(right))
  }
}

// s2
{
  let merge = (a, start, middle, end) => {
	// [start..middle)
	// [middle..end)
	let i = start, k = middle
	while (i < middle && k < end) {
	  let w = 0
	  while (a[i] <= a[k] && i < middle) {i += 1}
	  while (a[i] >= a[k] && k < end) {
		k += 1
		w += 1
	  }
	  let part = a.splice(k - w, w)
	  a.splice(i, 0, ...part)
	  i += w
	  middle += w
	}
	return a
  }
  
  let sort = arr => inplace_sort(arr, 0, arr.length)
  
  let inplace_sort = (arr, start, end) => {
	if (end - start <= 1) return arr
	let middle = Math.floor((start + end) / 2)
	inplace_sort(arr, start, middle)
	inplace_sort(arr, middle, end)
	return merge(arr, start, middle, end)
  }
}

// s3
{
  let merge = (a, start, middle, end) => {
	if (start > a.length) {start = a.length - 1}
	if (middle > a.length) {middle = a.length}
	if (end > a.length) {end = a.length}
	let i = start, k = middle
	while (i < middle && k < end) {
	  let w = 0
	  while (a[i] <= a[k] && i < middle) {i += 1}
	  while (a[i] >= a[k] && k < end) {
		k += 1
		w += 1
	  }
	  let part = a.splice(k - w, w)
	  a.splice(i, 0, ...part)
	  i += w
	  middle += w
	}
	return a
  }
  
  let sort = arr => {
	for (let size = 1; size < arr.length; size *= 2) {
	  console.log(`size:${size}`)
	  for (let w = 0; w < arr.length; w += size * 2) {
		console.log(`w:${w}`)
		console.log(`arr:${arr}`)
		merge(arr, w, w + size, w + size * 2)
		console.log(`arr:${arr}`)
	  }
	}
	return arr
  }
}
