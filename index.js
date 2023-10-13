function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = new Set();
  for (let i = 0; i < array.length; i++){
    if (numbers.has(target - array[i])) {
      return true
    }
    numbers.add(array[i])
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  Since the functions contains one array iteration and the "has" and "add" methods are constants,
  the Big O time complexity is linear, O(n).
*/

/* 
  Add your pseudocode here
  Write a function that takes in an array of numbers and a target integer.
  If the sum of any two numbers in the array equals the target integer, return true.

  function hasTargetSum(array, target)
    if sum of two numbers in array equals target
      return true
*/

/*
-Create a new set to store checked numbers
-iterate through array numbers
-If the set has the number that represents the difference between target and the 
current element, return true.
-Add checked element to the new set
-Return false if there is no matching pair
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
