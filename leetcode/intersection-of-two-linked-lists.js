var getIntersectionNode = function(headA, headB) {
  const nodeMap = new Map()

  let current = headA

  while (current) {
    nodeMap.set(current, true)

    current = current.next
  }

  current = headB

  while (current) {
    if (nodeMap.has(current)) {
      return current
    }

    current = current.next
  }

  return null
};
