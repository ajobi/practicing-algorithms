var deleteDuplicates = function(head) {
  const existenceFlags = {}

  let node = head
  let prevNode = null

  while (node) {
    if (existenceFlags[node.val]) {
      prevNode.next = node.next
      node = node.next
      continue
    }

    existenceFlags[node.val] = true
    prevNode = node
    node = node.next
  }

  return head
};
