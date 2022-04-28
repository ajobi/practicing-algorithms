var addTwoNumbers = function(l1, l2) {
  let value1 = [];

  while (l1) {
    value1.push(l1.val)
    l1 = l1.next

  }

  let value2 = [];
  while (l2) {
    value2.push(l2.val)
    l2 = l2.next
  }

  const result = []

  let i = 0

  let remainder = 0
  while (i < value1.length || i < value2.length) {
    const sum = remainder + (value1[i] || 0) + (value2[i] || 0)
    remainder = sum <= 9 ? 0 : 1
    result.push(remainder? sum - 10 : sum)
    i++
  }

  if (remainder) {
    result.push(remainder)
  }


  let head = null
  let currentNode = null

  for (let i = 0; i < result.length; i++) {
    const newNode = { val: result[i], next: null }

    if (currentNode) {
      currentNode.next = newNode
    }

    if (!head) {
      head = newNode
    }

    currentNode = newNode
  }

  return head
};
