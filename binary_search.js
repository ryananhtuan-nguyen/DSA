function binarySearch(list, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] === key) {
      return mid;
    }
    if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}

function verify(index) {
  console.log(
    index !== null
      ? `Target found at index: ${index}`
      : 'Target not found in list'
  );
}

const numbers = [...Array(1000000).keys()];
const start = Date.now();
const result = binarySearch(numbers, 88888);
const doneIn = Date.now() - start;
verify(result);
console.log(`Done in ${doneIn} ms`);

const start1 = Date.now();
const result1 = binarySearch(numbers, 1000001);
const doneIn1 = Date.now() - start1;
verify(result1);
console.log(`Not found in ${doneIn1}ms`);
