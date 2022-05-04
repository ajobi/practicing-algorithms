var checkPerfectNumber = function(num) {
  let dividsorsSum = 0

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      dividsorsSum += i
    }
  }

  return dividsorsSum === num
};
