function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const mid = Math.round((first + last) / 2);
    if (list[mid] == target) {
      return mid;
    } else if (list[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
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
