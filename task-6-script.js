// Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const myObj = {
  a: 'keyA',
  // b: 'keyB',
  c: 'keyC',
}

const myStr = 'b'

function testMyProperty(myObj, myStr) {
  if (myObj.hasOwnProperty(myStr)) {
    // console.log('true')
    return true
  } else {
    // console.log('false')
    return false
  }
}

testMyProperty(myObj, myStr)
