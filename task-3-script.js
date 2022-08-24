// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function splitNumberToArr(numb) {
  const myArr = []
  const numberSplit = numb.toString().split('')
  myArr.push(...numberSplit)
  return myArr
}

console.log(splitNumberToArr(123456789))
