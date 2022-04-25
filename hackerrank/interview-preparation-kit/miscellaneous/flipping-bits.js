// SCORE: 40/40
function flippingBits(n) {
  const binary = n.toString(2).split('')
  const flippedBinary = new Array(32).fill('1')

  for (let i = flippedBinary.length - 1; i >= 0; i--) {
    const binaryDigit = binary[i - (flippedBinary.length - binary.length)]

    if (!binaryDigit) {
      break;
    }

    flippedBinary[i] = binaryDigit === '1' ? '0' : '1'
  }

  return parseInt(flippedBinary.join(''), 2)
}
