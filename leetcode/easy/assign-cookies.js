var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let child = 0
  let cookie = 0

  let result = 0

  while (cookie < s.length) {
    if (s[cookie] >= g[child]) {
      result++
      child++
    }

    cookie++
  }

  return result
};
