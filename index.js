// create a function that returns true or false
function hasTargetSum(array, target) {
  // // will get each element of the Array  
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     // combine it with the other elements 
  //     if (array[i] + array[j] === target) {
  //       return true
  //     }
  //   }
  // }
  // return false

  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

// // O(n) runtime
// function findSock(array) {
//   for (const item of array) {
//     if (item === "sock") return "sock";
//   }
// }

// // O(1) runtime
// function findSock(object) {
//   if (object.sock) return "sock";
// }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  we need to create a function that returns true if any pair of numbers in the array adds up to the target number.

  We will get each element of the Array and combine it with the other elements 
  and check if this add is equal to the target will return true 
  or will return false if not equal
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
