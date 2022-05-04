var isBoomerang = function(points) {
  const diff1X = points[0][0] - points[1][0]
  const diff1Y = points[0][1] - points[1][1]
  const diff2X = points[1][0] - points[2][0]
  const diff2Y = points[1][1] - points[2][1]

  return diff1X * diff2Y !== diff1Y * diff2X
};
