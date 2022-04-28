var hasCycle = function(head) {
  const visitedNodes = new Map()

  let currentNode = head

  while (currentNode && currentNode.next) {
    if (visitedNodes.has(currentNode)) {
      return true
    }

    visitedNodes.set(currentNode, true)
    currentNode = currentNode.next
  }

  return false
};
