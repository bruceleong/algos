//closure with 'a'

function retirement(retireAge) {
  let a = ' years left until retirement. '
  return (yearOfBirth) => {
    let age = 2016 - yearOfBirth;
    console.log((retireAge - age) + a)
  }
}

const retirementUS = retirement(66)
console.log(retirementUS(1990))
