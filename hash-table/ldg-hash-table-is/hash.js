export default class HashTable {
  #table;
  constructor(size = 10) {
    this.size = size;
    this.#table = new Array(this.size);
  }
  #hashFunction(key) {
    const getValuesOfChars = key.split("").map((item) => item.charCodeAt(0));
    const hashRule = getValuesOfChars.reduce((p, c) => p + c);
    return hashRule % this.size;
  }
  #checkKey(array = [], key) {
    for (let arr of array) {
      if (arr[0] === key) return true;
    }
    return false;
  }
  add(key, value) {
    const HASH = this.#hashFunction(key);
    const data = [key, value];
    const checkKey = this.#checkKey(this.#table[HASH], key);

    if (!this.#table[HASH]) {
      this.#table[HASH] = [];
    } else {
      if (checkKey) {
        throw new Error("key already exists");
      }
    }
    this.#table[HASH].push(data);
    return this.#table;
  }
  search(key) {
    const HASH = this.#hashFunction(key);

    if (!this.#table[HASH]) return null;

    for (let arr of this.#table[HASH]) {
      if (arr[0] === key) return arr[1];
    }
  }

  replace(key, value) {
    const HASH = this.#hashFunction(key);
    const len = this.#table[HASH].length;
    if (len === 1 && this.#table[HASH][0] === key) this.#table[HASH][0] = value;
    else {
      for (let arr of this.#table[HASH]) {
        if (arr[0] === key) arr[1] = value;
      }
    }
  }
}
