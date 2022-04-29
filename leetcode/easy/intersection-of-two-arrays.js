var intersection = function(nums1, nums2) {
  const valueMap1 = {}

  for (let i = 0; i < nums1.length; i++) {
    valueMap1[nums1[i]] = true
  }

  nums2.sort((a, b) => a - b)

  let result = []

  let i = 0
  while (i < nums2.length) {
    if (valueMap1[nums2[i]]) {
      result.push(nums2[i])
    }

    i++
  }

  return [...new Set(result)]
};
