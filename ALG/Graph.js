const arr = [
  { from: 'A', to: 'A' },
  { from: 'A', to: 'B' },
  { from: 'A', to: 'C' },
  { from: 'A', to: 'D' },
  { from: 'A', to: 'E' },
  { from: 'B', to: 'A' },
  { from: 'B', to: 'C' }
]

const groupBy = (objArr, property) => {
  let result = {}
  for (let i = 0; i < objArr.length; i++) {
    if (!result[objArr[i][property]]) result[objArr[i][property]] = []
    result[objArr[i][property]].push(objArr[i])
  }
  return result
}
console.time('groupBy')
groupBy(arr, 'from')
console.timeEnd('groupBy')

const result = (objArr, property) => {
  return objArr.reduce((acc, obj) => {
    let key = obj[property]
    if (!acc[key]) acc[key] = []
    acc[key].push(obj)
    return acc
  }, {})
}

console.time('result')
result(arr, 'from')
console.timeEnd('result')

const tables = (objArr) => {
  let result = {}
  for (let i = 0; i < objArr.length; i++) {
    for (let [key, value] of Object.entries(objArr[i])) {
      if (!result[value]) result[value] = []
      if (!result[value].includes(objArr[i])) result[value].push(objArr[i])
    }
  }
  return result
}

console.time('tables')
tables(arr)
console.timeEnd('tables')
