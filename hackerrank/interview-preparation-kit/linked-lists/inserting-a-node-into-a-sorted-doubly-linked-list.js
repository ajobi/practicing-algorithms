// SCORE: 5/5
function sortedInsert(llist, data) {
  const headNode = llist
  const insertedNode = new DoublyLinkedListNode(data)
  let currentNode = llist

  if (currentNode.data >= data) {
    insertedNode.next = headNode
    headNode.prev = insertedNode
    return insertedNode
  }

  while (currentNode.data < data) {
    if (!currentNode.next) {
      currentNode.next = new DoublyLinkedListNode(data)
      return headNode
    }

    if (currentNode.next.data >= data) {
      const followingNode = currentNode.next
      currentNode.next = insertedNode
      insertedNode.prev = currentNode
      insertedNode.next = followingNode
      followingNode.prev = insertedNode
    }

    currentNode = currentNode.next
  }

  return headNode
}
