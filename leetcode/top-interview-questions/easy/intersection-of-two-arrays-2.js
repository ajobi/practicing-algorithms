var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0

  const result = []

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      i++
      j++
      continue
    }

    if (nums1[i] < nums2[j]) {
      i++
      continue
    }

    if (nums1[i] > nums2[j]) {
      j++
    }
  }

  return result
};
