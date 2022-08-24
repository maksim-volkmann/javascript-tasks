// Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const myObj = {
  a: 'keyA',
  b: 'keyB',
  c: 'keyC',
}

const myStr = 'b'

function testMyProperty(myObj, myStr) {
  if (myObj.hasOwnProperty(myStr)) {
    return true
  } else {
    return false
  }
}

console.log(testMyProperty(myObj, myStr))
