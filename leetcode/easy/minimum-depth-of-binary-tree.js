var minDepth = function(root) {
  let minDepth = Number.MAX_SAFE_INTEGER

  const traverse = (node, depth) => {
    if (!node) {
      minDepth = Math.min(minDepth, depth)
      return
    }

    if (node.left) {
      traverse(node.left, depth + 1)
    }

    if (node.right) {
      traverse(node.right, depth + 1)
    }

    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, depth + 1)
    }
  }

  traverse(root, 0)

  return minDepth
};
