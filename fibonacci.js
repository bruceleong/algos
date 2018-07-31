function fib(n) {
  if (n === 1) return 1
  const lastTwo = [0, 1]
  let counter = 2;
  while ( n >= counter) {
    let currentVal = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = currentVal
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(fib(0))
console.log(fib(1),'did you get it', 1)
console.log(fib(2), 'did you get it', 1)
console.log(fib(3),'did you get it', 2)
console.log(fib(4))
console.log(fib(5))
console.log(fib(11),'did you get it', 89)
console.log(fib(14),'did you get it', 377)
