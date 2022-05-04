var canPlaceFlowers = function(flowerbed, n) {
  let newPlanted = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      newPlanted++
      flowerbed[i] = 1
    }
  }

  return newPlanted >= n
};
