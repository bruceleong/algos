function longestPal(str) {
  let currentLongest = [0, 1]
  for (let i = 1; i < str.length; i++) {
    const odd = getPal(str, i - 1, i + 1);
    const even = getPal(str, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  return str.slice(currentLongest[0], currentLongest[1]);

}

function getPal(str, left, right) {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;
    left--
    right++
  }
  return [left + 1, right]
}

console.log(longestPal('abaxyzzyxf'))
