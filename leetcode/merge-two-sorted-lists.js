var mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  let head = null

  if (list1.val < list2.val) {
    head = list1
    list1 = list1.next
  } else {
    head = list2
    list2 = list2.next
  }

  let tail = head

  while (list1 || list2) {
    if (!list2) {
      tail.next = list1
      tail = list1
      list1 = list1.next
      continue
    }

    if (!list1) {
      tail.next = list2
      tail = list2
      list2 = list2.next
      continue
    }

    if (list1.val < list2.val) {
      tail.next = list1
      tail = list1
      list1 = list1.next
      continue
    }

    if (list1.val >= list2.val) {
      tail.next = list2
      tail = list2
      list2 = list2.next
    }
  }

  return head
};
