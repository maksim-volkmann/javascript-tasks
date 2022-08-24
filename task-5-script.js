// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

function takeTwoArrays(arr1, arr2) {
  const mergeArr = arr1.concat(arr2).sort()
  const noDubs = [...new Set(mergeArr)]
  return noDubs
}

console.log(takeTwoArrays([3, 2, 9, 'c', 3, 3], ['a', 'r', 'd', 1, 'a']))
