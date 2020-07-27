// 满二叉树 array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
// 请写出函数 traverse(array, (item)=>console.log(item))，它能中根序遍历 array
// 遍历顺序为 H D I B J EA F C G。

{
  const completeBinTree = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const cbt = completeBinTree
  /**
   * 中根序遍历完全二叉树
   * 中根序遍历 : 左节点--> 根节点 -->右节点
   * @param tree
   * @param fn
   */
  const traverse = (tree, fn) => {
	const t = (tree, i, fn) => { // i 为子树的根的索引
	  if (tree[i] === undefined) return
	  t(tree, 2 * i + 1, fn) // 调用栈来考虑
	  fn(tree[i])
	  t(tree, 2 * i + 2, fn)
	}
	
	t(tree, 0, fn)
  }
  
  const result = []
  traverse(cbt, (value) => {
	result.push(value)
  })
  console.log(result)
}
