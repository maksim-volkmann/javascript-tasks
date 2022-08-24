// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

function takeTwoArrays(arr1, arr2) {
  const mergeArr = arr1.concat(arr2).sort()
  const noDubs = [...new Set(mergeArr)]
  // console.log(noDubs)
  return noDubs
}

takeTwoArrays([3, 2, 1, 3, 3], ['a', 'r', 'd', 'a'])
