var pathSum = function(root, targetSum) {
  const hasPath = (node, sum) => {
    if (node.left && node.right) {
      return hasPath(node.left, sum + node.val) || hasPath(node.right, sum + node.val)
    }

    if (node.left) {
      return hasPath(node.left, sum + node.val)
    }

    if (node.right) {
      return hasPath(node.right, sum + node.val)
    }

    return sum + node.val === targetSum
  }


  return root ? hasPath(root, 0) : false
};
