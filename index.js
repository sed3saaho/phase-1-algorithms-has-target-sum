function hasTargetSum(array, target) {
  const seen = {};

  
  for (let num of array) {
    
    const difference = target - num;
    
    
    if (seen[difference]) {
      return true;
    }
    
    
    seen[num] = true;
  }
  
  
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/
/*The Big O time complexity of the hasTargetSum 
function is O(n), where n is the number of elements in 
the input array. This is because the function iterates through 
each element of the array once to check if a corresponding pair
 exists to reach the target sum.

!




/* 
  Add your pseudocode here
*/

/*/*
  Function: hasTargetSum
  Input: array (array of numbers), target (number)
  Output: boolean
  
  1. Create an empty object called 'seen' to store seen numbers
  2. Loop through each number 'num' in the input array
  3. Calculate the difference 'difference' between the target and 'num'
  4. Check if 'difference' exists in the 'seen' object
  5. If 'difference' exists, return true as a pair is found
  6. If 'difference' does not exist, store the current 'num' in the 'seen' object
  7. Continue looping until all numbers in the array are checked
  8. If no pair is found, return false
*/

/*
  Add written explanation of your solution here
*/

/* /*
  My Approach:
  - Initialize an empty object 'seen' to store seen numbers.
  - Iterate through the input array.
  - For each number in the array:
    - Calculate the difference between the target and the current number.
    - Check if this difference exists in the 'seen' object.
    - If the difference is found, return true as a pair is found.
    - If the difference is not found, store the current number in the 'seen' object.
  - If no pair is found after iterating through all numbers, return false.
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("");

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
