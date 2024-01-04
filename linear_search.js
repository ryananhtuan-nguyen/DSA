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
