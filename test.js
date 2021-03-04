// const chunk = (array, size) => {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         console.log('res', res);
//         const item = array[i];
//         const last = res[res.length - 1];
//         if(!last || last.length == size) {
//             res.push([item])  // res = [['a']]
//         } else {
//             last.push(item) // res = [['a', 'b']]
//         }
//     }
//     return res;
// }

// console.log(chunk(["a", "b", "c", "d"], 2));

// const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const binarySearch = (sortedArr, value) => {
//     let leftIndex = 0;
//     let rightIndex = sortedArr.length - 1;

//     while (leftIndex <= rightIndex) {
//         const middleIndex = Math.floor(leftIndex + rightIndex / 2);
//         const middleValue = sortedArr[middleIndex];
//         if (middleValue === value) {
//             return middleIndex;
//         }
//         else if (middleValue < value) {
//             leftIndex = middleIndex + 1;
//         } else {
//             rightIndex = middleIndex - 1;
//         }
//     }
//     return -1;
// };

// binarySearch(sortedNumsArray, 4);

// function sockMerchant(n, array) {

//     let count = 0;
//     let hash = {};
//     for (let i = 0; i < n; i++) {
//         hash[array[i]] = hash[array[i]] + 1 || 1;
//     }
//     for (let key in hash) {
//         let pair = Math.floor(hash[key] / 2);
//         if (pair > 0) {
//             count += pair;
//         }
//     }
//     console.log('count', count);
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// function countingValleys(steps, path) {
//     // Write your code here
//     let hike = 0;
//     let count = 0;

//     for(let i = 0; i < steps; i++) {
//         const p = path[i];
//         if(p === 'D' && hike === 0) {
//             console.log('count,,,,,,,', count);
//             count++; // 1, 2
//             hike--; // -1 
//         }
//         else if(p === 'D' && hike !== 0) {
//             console.log('hike,,,,,,,', hike);

//             hike--;     // -1, 0,
//         }
//         else if(p === 'U') {
//             hike++;  // 0,
//         }
//         console.log('Count:::', count);
//     }
// }

// countingValleys(5, ['D', 'U', 'D', 'D', 'D']);

// function jumpingOnClouds(c) {
//     let jump = 0;
//     for (let i = 0; i < c.length -1 ; i++) {
//         if (c[i + 2] === 1) {
//             jump++;
//         } else if (c[i + 2] !== 1) {
//             i = i + 1;
//             jump++;
//         }
//     }
//     console.log('jump', jump);
// }

// jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);

// aba aba aba aba

// function repeatedString (s, n) {
//     let length = Math.floor(n /s.length);
//     let count = (s.split('a').length -1) * length;
//     let rem = n % s.length; 
//     for(let i = 0 ; i< rem ; i++){
//         if(s.charAt(i) == "a"){
//             count++
//         }
//     }
//     console.log('count', count);
// }

// repeatedString('aba', 10);

// function getMoneySpent(keyboards, drives, b) {

//     let maxCount = -1;

//     for (let i = 0; i < keyboards.length; i++) { 
//         for (let j = 0; j < drives.length; j++) { 
//             const value = drives[j];
//             const sum = value + keyboards[i];
//             if (sum > maxCount && sum <= b) {
//                 console.log('sum', sum);
//                 maxCount = sum;
//             }
//         }
//     }
//     console.log(maxCount);

// }

// const b = 60;
// const keyboards = [40, 50, 60];
// const drives = [5, 8, 12];
// getMoneySpent([4], [5], 5);

// function stairCase(n) {
//     let filledArray = [];
//     while(n > 0) { 
//         filledArray.push(' ');
//         n--;
//     }
//     while (filledArray.indexOf(' ') !== -1) {
//         filledArray.shift();
//         filledArray.push('#');
//         console.log(filledArray.join(""));
//         n--;
//     }

// }

// stairCase(6);

// function miniMaxSum(arr) {
//     let minCount = 0;
//     let maxCount = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let slicedArray = [...arr];
//         slicedArray.splice(i, 1);
//         for(let j = 0; j < slicedArray.length; j++) {
//            minCount += slicedArray[j];
//         }
//     }    
//     console.log('minCount', minCount);
// }

// miniMaxSum([1,2,3,4,5]);

const prices = [2,5,1,4];
const prices2 = [4,9,2,3];
const prices3 = [1,2,3,4];


// function minCount(arr) {
//     let price = arr[0];
//     let priceArr = [];
//     priceArr.push(price);
//     let count = 0;
//     for(let i = 1; i < arr.length; i++) {
//         const item = arr[i]; // 2, 3
//         let min = item; // 2, 3
//         for( let k = 0; k < i; k++) {
//             if(arr[k] < min ) {
//                 min = arr[k]; // 1
//             }
//         }
//        if(item > min) { // 2 > 1
//            priceArr.push(item - min);
//        } else {
//            priceArr.push(0);
//        };

//     }
//     for(let j = 0; j < priceArr.length; j++) {
//         count += priceArr[j];
//     }   
     
// console.log('price', priceArr);

// }

// minCount(prices3);


function maxMin(operations, x) {
    // Write your code here
    let elements = {};
    let min, max;
    let products = [];
    for (let i = 0; i < operations.length; i++) {
        for (let j = i; j < x.length; j++) {
            elements[x[i]] = x[i];
            if (operations[i] === 'pop') {
                delete elements[x[i]];
            }
            if(i === 0){
            min=x[i];
            max=x[i];
            }
            else{
                let count =1 ;
            for (let ele in elements) {
            if(count === 1){min=  elements[ele] }
                 max = elements[ele] > max ?elements[ele]:max;
                 min= elements[ele] < min ?elements[ele]:min;
             count++;
            }
        }
        products.push(min * max);
            break;
        }
    }
    return products;

}
