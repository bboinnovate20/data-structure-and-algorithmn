"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Find Minimum in Rotated Sorted Array 
function rotatedAnArray(array) {
    var lastIndex = array[array.length - 1];
    for (var index = array.length - 2; index >= 0; index--) {
        array[index - 1] = array[index];
    }
    array[0] = lastIndex;
    return array;
}
// console.log(rotatedAnArray([1,2,3,4,5]), 'hhh');
console.log('hello');
