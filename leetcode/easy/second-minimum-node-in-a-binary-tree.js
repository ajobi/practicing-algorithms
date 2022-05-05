var findSecondMinimumValue = function(root) {
  let leafs = []

  let findLeafs = (node) => {
    if (!node.left) {
      leafs.push(node.val)
      return
    }

    findLeafs(node.right)
    findLeafs(node.left)
  }

  findLeafs(root)

  leafs = [...new Set(leafs)].sort((a, b) => a - b)

  return leafs[1] ?? - 1
};
