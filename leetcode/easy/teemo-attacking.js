var findPoisonedDuration = function(timeSeries, duration) {
  let result = 0

  for (let i = 1; i < timeSeries.length; i++) {
    result += Math.min(duration, timeSeries[i] - timeSeries[i - 1])
  }

  return result + duration
};
