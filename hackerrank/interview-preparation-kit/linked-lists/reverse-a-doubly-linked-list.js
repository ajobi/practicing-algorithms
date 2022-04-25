// SCORE: 5/5
function reverse(llist) {
  if (!llist) {
    return null
  }

  let currentNode = llist

  while (currentNode.next) {
    const nextNode = currentNode.next
    const prevNode = currentNode.prev

    if (prevNode) {
      prevNode.prev = currentNode
      currentNode.next = prevNode
    } else {
      currentNode.next = null
    }

    currentNode = nextNode
  }

  const nextNode = currentNode.next
  const prevNode = currentNode.prev

  if (prevNode) {
    prevNode.prev = currentNode
    currentNode.next = prevNode
  }

  return currentNode
}
