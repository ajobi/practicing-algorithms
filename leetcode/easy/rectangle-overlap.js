var isRectangleOverlap = function(rec1, rec2) {
  let [rec1x1, rec1y1, rec1x2, rec1y2] = rec1
  let [rec2x1, rec2y1, rec2x2, rec2y2] = rec2

  const rec1topRight = [rec1x2, rec1y2]
  const rec1bottomLeft = [rec1x1, rec1y1]

  const rec2topRight = [rec2x2, rec2y2]
  const rec2bottomLeft = [rec2x1, rec2y1]

  return !(
    rec2bottomLeft[0] >= rec1topRight[0] ||
    rec2bottomLeft[1] >= rec1topRight[1] ||
    rec2topRight[0] <= rec1bottomLeft[0] ||
    rec2topRight[1] <= rec1bottomLeft[1])
};
