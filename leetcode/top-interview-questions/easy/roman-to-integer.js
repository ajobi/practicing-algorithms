var romanToInt = function(s) {
  let result = 0;

  const romanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const subtractions = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M']
  }

  for (let i = 0; i < s.length; i++) {
    if (subtractions[s[i]] && subtractions[s[i]].includes(s[i + 1])) {
      result += romanToInteger[s[i + 1]] - romanToInteger[s[i]]
      i++
      continue;
    }

    result += romanToInteger[s[i]]
  }

  return result
};
