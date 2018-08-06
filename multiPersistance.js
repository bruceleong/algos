function MultiplicativePersistence(num) {
  let strNum = num.toString();
  if (strNum.length > 1) {
    console.log(strNum, ' current string num')
    let newNum = 1;
    for (let i = 0; i < strNum.length; i++) {
      // console.log(strNum[i])
      newNum *= Number(strNum[i]);
      console.log(newNum, 'line 8', i, '---- current i', strNum[i])
    }
    console.log(newNum, 'current new num read for recursive')
    return 1 + MultiplicativePersistence(newNum);
  }
  else {
    return 0;
  }
}

console.log("\nMULT PERSISTANCE!!!!!!!!!!!")
// console.log(MultiplicativePersistence(4)); //should be 0
// console.log(MultiplicativePersistence(25))//should be 2
MultiplicativePersistence(39);//should be 3
