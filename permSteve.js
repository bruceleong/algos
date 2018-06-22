const getPermutations = (arr, memoizedArr = [], memoizedCollection = []) => {

  //console.log('memoizedArr is', memoizedArr)
//  if (memoizedArr.length){
//   memoizedArr = memoizedArr.slice(0)
//  }


  if (arr.length) {
    let numOfPermutations = factorialize(arr.length)

    for (let i = 0; i < numOfPermutations; i++){

      let idx = i % arr.length
      memoizedArr.push(arr[idx])
      getPermutations(arr.filter(char => char !== arr[idx]), Object.assign({}, memoizedArr), memoizedCollection)

    }

  } else {
    memoizedCollection.push(memoizedArr)
  }

  return memoizedCollection

}

const factorialize = num => {

  if (num === 1 || num === 0) return 1
  else if (num > 1) return num * factorialize(num - 1)
  else throw error

}


console.log(getPermutations(['a', 'b']))
