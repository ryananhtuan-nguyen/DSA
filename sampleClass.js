class Store {
  constructor(...values) {
    this.data = values;
  }

  remove(value) {
    this.data = this.data.filter((v) => v !== value);
  }

  insert(...values) {
    const noDup = [...new Set(values)];
    this.data = [...this.data, ...noDup];
  }

  getRandom() {
    return this.data[Math.floor(Math.random() * this.data.length)];
  }
}

const a = new Store(2, 3, 4, 5);

console.log(a);

a.insert(6, 7, 8, 9, 9, 8, 7, 6);

console.log(a);

a.remove(7);
console.log(a);

console.log(a.getRandom());
