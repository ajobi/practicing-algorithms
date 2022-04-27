var reverseBits = function(n) {
  let bitArray = n.toString(2).split('')

  bitArray = [...new Array(32 - bitArray.length).fill('0'), ...bitArray].reverse()

  return parseInt(bitArray.join(''), 2)
};
