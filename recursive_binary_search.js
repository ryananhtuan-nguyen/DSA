function recursiveBinarySeach(list, target) {
  //empty list
  if (list.length == 0) return false;

  let left = 0;
  let right = list.length - 1;

  let mid = left + Math.floor((right - left) / 2);

  if (list[mid] == target) return true;

  if (list[mid] < target) {
    return recursiveBinarySeach(list.slice(mid + 1), target);
  }

  return recursiveBinarySeach(list.slice(0, mid + 1), target);
}

function verify(result) {
  console.log(result ? 'Target found' : 'Target not found');
}

const numbers = [...Array(1000000).keys()];
const start = Date.now();
const result = recursiveBinarySeach(numbers, 88888);
const doneIn = Date.now() - start;
verify(result);
console.log(`Done in ${doneIn} ms`);
