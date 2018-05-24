function adder(num1, num2) {
  let num1ToAdd = num1.toString().split('').reverse()
  let num2ToAdd = num2.toString().split('').reverse()
  let carry = 0

  let bigNum, smallNum, sum
  if (num1ToAdd.length > num2ToAdd) {
    bigNum = num1ToAdd
    smallNum = num2ToAdd
  } else {
    bigNum = num2ToAdd
    smallNum = num1ToAdd
  }

  sum = new Array(bigNum.length + 1)

  for (let i = 0; i < bigNum.length; i++) {
    let totalToAdd = +(bigNum[i]) + +(i < smallNum.length ? smallNum[i] : 0) + carry
    console.log(totalToAdd)
    if (totalToAdd > 9) {
      carry = Math.floor(totalToAdd / 10)
      console.log(carry)
    } else {
      carry = 0
    }
    sum[i] = totalToAdd % 10
  }

  // console.log(carry)

  if (carry !== 0) {
    sum[bigNum.length] = carry
  }

  return sum.reverse().join('')
}
// console.log(adder(1111, 2222))
console.log(adder(2, 199))
