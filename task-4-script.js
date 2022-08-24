// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numb = 4

function lastElements(arr, numb) {
  return arr.slice(-numb)
}

console.log(lastElements(myArr, numb))
