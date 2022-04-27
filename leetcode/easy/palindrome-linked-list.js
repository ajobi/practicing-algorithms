var isPalindrome = function(head) {
  let current = head

  const values = []

  while (current) {
    values.push(current.val)
    current = current.next
  }

  const reversedValues = [...values].reverse()

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversedValues[i]) {
      return false
    }
  }

  return true
};
