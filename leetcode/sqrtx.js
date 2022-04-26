var mySqrt = function(x) {
  const precision = 0.5

  let guess = x

  while(Math.abs(x - (guess * guess)) > precision) {
    guess = (guess + x / guess) / 2
  }

  return parseInt(guess)
};
