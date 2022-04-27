var hammingWeight = function(n) {
  const binary = n.toString(2)

  return binary.split('').filter(item => item === '1').length
};
