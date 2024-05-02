export {};
// Find Minimum in Rotated Sorted Array

function rotatedAnArray(array: number[]) {
	const lastIndex: number = array[array.length - 1];
	for (let index = array.length - 2; index >= 0; index--) {
		array[index + 1] = array[index];
	}
	array[0] = lastIndex;
	return array;
}

//what i come up with
function findMimumValue(rotatedArray: number[]) {
	const minNumber: number = rotatedArray[0];
	let currentArray = [...rotatedArray];
	let reRotatedArray = rotatedAnArray(rotatedArray);
	let rotatedTime = 1;

	while (currentArray[0] > reRotatedArray[0]) {
		currentArray = [...reRotatedArray];
		reRotatedArray = [...rotatedAnArray(reRotatedArray)];

		rotatedTime++;
	}
	console.log("original array", currentArray, "rotated", rotatedTime);
	return currentArray[0];
}

console.log(binarySearch([3,4,5, 0,1,2]));

//the solution finally done
function binarySearch(rotatedArray: number[]) {
	let firstElement = 0;
	let lastElement: number = rotatedArray.length - 1;
	let middleElement;
    
	while (firstElement < lastElement) {
		middleElement = (firstElement + lastElement) / 2;
        middleElement = Math.trunc(middleElement);
		if (rotatedArray[middleElement] > rotatedArray[lastElement]) {
			firstElement = middleElement + 1;
		} else {
			lastElement = middleElement;
		}
	}
	return rotatedArray[firstElement];
}
