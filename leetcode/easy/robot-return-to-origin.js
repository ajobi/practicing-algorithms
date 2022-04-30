var judgeCircle = function(moves) {
  return (moves.match(/U/g)?.length || 0) === (moves.match(/D/g)?.length || 0) &&
    (moves.match(/L/g)?.length || 0) === (moves.match(/R/g)?.length || 0)
};
