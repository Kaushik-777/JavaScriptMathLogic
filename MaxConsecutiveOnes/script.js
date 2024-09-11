function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for(let num of nums) {
       if(num == 1) {
        currentCount++;
       }else {
        maxCount = Math.max(maxCount, currentCount);
        currentCount = 0;
       }
    }

    maxCount = Math.max(maxCount, currentCount);
    return maxCount;
}
const nums = [1, 0, 1, 1, 1, 1];
console.log("Max Consecutive Ones: ", findMaxConsecutiveOnes(nums));