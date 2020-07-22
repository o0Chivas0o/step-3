// 汉诺塔问题

function Hanoi (n, from, cache, to) {
   n === 1 ? `${from}${to}` : Hanoi(n-1, from, to, cache) + ',' + `${from}${to},` + Hanoi(n-1, cache, from, to)
}
