// 汉诺塔问题

/**
 *
 * @param n
 * @param from
 * @param cache
 * @param to
 * @returns {string}
 * @constructor
 */
function Hanoi(n, from, cache, to) {
  return n === 1 ? `${from}${to}` : Hanoi(n - 1, from, to, cache) + ',' + `${from}${to},` + Hanoi(n - 1, cache, from, to)
}
