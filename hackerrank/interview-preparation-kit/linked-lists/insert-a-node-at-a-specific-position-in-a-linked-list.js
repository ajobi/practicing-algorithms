// SCORE: 5/5
function insertNodeAtPosition(llist, data, position) {
  const headNode = llist
  const insertedNode = new SinglyLinkedListNode(data)

  let currentNode = headNode
  let currentPosition = 0

  while (currentPosition < position - 1) {
    currentPosition++
    currentNode = currentNode.next
  }

  const followingNode = currentNode.next
  currentNode.next = insertedNode

  if (followingNode) {
    insertedNode.next = followingNode
  }

  return headNode
}
