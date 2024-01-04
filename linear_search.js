function linearSearch(list, target) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === target) return i;
  }
  return null;
}

function verify(index) {
  console.log(
    index !== null
      ? `Target found at index:${index}`
      : 'Target not found in list'
  );
}

const numbers = [...Array(1000000).keys()];
const start = Date.now();
const result = linearSearch(numbers, 88888);
const doneIn = Date.now() - start;
verify(result);
console.log(`Done in ${doneIn} ms`);

const start1 = Date.now();
const result1 = linearSearch(numbers, 1000001);
const doneIn1 = Date.now() - start1;
verify(result1);
console.log(`Not found in ${doneIn1}ms`);
