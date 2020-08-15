// SCORE: 10/10
function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log([...(new Array(n - i - 1).fill(' ')), ... (new Array(i + 1).fill('#'))].join(''))
  }
}
