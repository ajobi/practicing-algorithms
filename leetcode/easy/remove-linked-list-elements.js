var removeElements = function(head, val) {
  let result = head

  let node = head
  let prev = null
  while (node && node.next) {
    if (node.val !== val) {
      prev = node
      node = node.next
      continue
    }

    node.val = node.next.val
    node.next = node.next.next
  }

  if (node && node.val === val) {
    if (prev) {
      prev.next = null
    } else {
      result = null
    }
  }

  return result
};
