var maximumTime = function(time) {
  const maxTime = []

  if (time[0] === '?') {
    if (parseInt(time[1]) > 3) {
      maxTime.push('1')
    } else {
      maxTime.push('2')
    }
  } else {
    maxTime.push(time[0])
  }

  if (time[1] === '?') {
    if (maxTime[0] === '2') {
      maxTime.push('3')
    } else {
      maxTime.push('9')
    }
  } else {
    maxTime.push(time[1])
  }

  maxTime.push(':')

  if (time[3] === '?') {
    maxTime.push('5')
  } else {
    maxTime.push(time[3])
  }

  if (time[4] === '?') {
    maxTime.push('9')
  } else {
    maxTime.push(time[4])
  }

  return maxTime.join('')
};
