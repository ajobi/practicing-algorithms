// SCORE: 15/15
function viralAdvertising(n) {
  let likedTogether = 0;
  let likedToday = null;
  let receivedToday = 5;

  for (let day = 1; day <= n; day++) {
    likedToday = Math.floor(receivedToday / 2)
    likedTogether += likedToday
    receivedToday = likedToday * 3
  }

  return likedTogether
}
