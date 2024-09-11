

let arr = [5, 6, 90, 8, 30];

function largestArr(arr) {
     let max = 0;
     for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
     }
     return max;
}
let largestElement = largestArr(arr);
console.log(largestElement);