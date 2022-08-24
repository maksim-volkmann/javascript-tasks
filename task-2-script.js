// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

function myfunc(str) {
  return str.slice(0, -3)
}

console.log(myfunc('Remove these number: 123'))
