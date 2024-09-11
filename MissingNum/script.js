function findMissingNumber(n, arr) {
    // Calculate the sum of the first n natural numbers
    let totalSum = (n * (n + 1)) / 2;
    // Calculate the sum of the elements in the array
    let arrSum = arr.reduce((a, b) => a + b, 0);
    console.log(arrSum);
    // The missing number is the difference between totalSum and arrSum
    let missingNumber = totalSum - arrSum;
    return missingNumber;
}

// Example usage
let n = 5;
let arr = [1, 2, 3, 5];
let missingNumber = findMissingNumber(n, arr);
console.log(missingNumber); // Output: 4
