var merge = function(nums1, m, nums2, n) {
  let j = 0;
  for (let i = 0; i < nums2.length; i++) {
    while (nums2[i] > nums1[j] && j < m + i) {
      j++
    }

    nums1.splice(j, 0, nums2[i])
    nums1.pop()
  }
};
