/*
function 2 parameters
  ## goal - determine what intervals still need to be collected

  parameters:
  -collectedIntervals === array of times that have been collected, no overlaps
    tuple or array with 2 elements

    example === [[10,15], [3,4], [7,9]]
  -desireIntervals = [1, 12]
  -output ===
  [[1,3], [4,7], [9,10]]

*/

const remainingIntervals = (collectedIntervals, desiredInterval) => {

  if (!collectedIntervals.length) {
    //no collectedIntervals, short circuit and return desired intervals
    return desiredInterval;
  }
  //intialize array to store missing intervals
  let neededIntervalsForCompletion = [];
  //handling edge case where collected intervals are not sorted
  let sortedCollectedIntervals = collectedIntervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
  //where we start building a missing interval
  let intervalStartTime = null;
  //initialize start of check and end variables
  let startIntervalCheck = desiredInterval[0];
  let endIntervalCheck = desiredInterval[1];

  //loop through 'desired interval' - start of checking if all intervals are accounted for
  for (let currentTime = startIntervalCheck; currentTime < endIntervalCheck; currentTime++) {
    //use helper to check intervals
    const currentInterval = intervalChecker(currentTime, sortedCollectedIntervals);

    //if a collected interval is not at the end, add it
    if (currentInterval === false) {
      neededIntervalsForCompletion.push([currentTime, desiredInterval[1]]);
      //break because we've added the remaining intervals, we may not get there, therefore cannot return from this block
      break;
    }
    if (intervalStartTime) { //find an interval
      if (currentTime  === currentInterval[0]) {
        neededIntervalsForCompletion.push([intervalStartTime, currentTime])
        intervalStartTime = null
      }
      //check to begin building an interval
    } else if (currentTime < currentInterval[0]) {
      intervalStartTime = currentTime
    }
  }
  return neededIntervalsForCompletion
}

function intervalChecker(current, sortedCollectedIntervals) {
  for (let i = 0; i < sortedCollectedIntervals.length; i++) {
    //checking each interval
    if (current < sortedCollectedIntervals[i][1]) {
      return sortedCollectedIntervals[i]
    }
  }
  //return false if we break out
  return false
}

console.log(remainingIntervals([[10,15], [3,4], [7,9]], [1, 12]), '[[1,3], [4,7], [9,10]]')

