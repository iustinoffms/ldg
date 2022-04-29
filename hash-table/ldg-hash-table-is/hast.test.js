import HashTable from "./hash";
describe("HashTable", () => {
  test("instanceOf HashTable class", () => {
    const hashTable = new HashTable();

    expect(hashTable).toBeInstanceOf(HashTable);
  });
  test("add method should add a key and a value in the table", () => {
    const hashTable = new HashTable();

    expect(() => hashTable.add("gina", 11)).not.toThrow();
  });
  test("add the same key twice, should throw and error", () => {
    const hashTable = new HashTable();

    hashTable.add("mama", 11);

    expect(() => hashTable.add("mama", 11)).toThrow(/key/);
  });
  test("searching a value by it's key should return the value", () => {
    const hashTable = new HashTable();

    hashTable.add("mama", 11);
    const result = hashTable.search("mama");

    expect(result).toBe(11);
  });
  test("searching a value by a non existing key should return null", () => {
    const hashTable = new HashTable();

    hashTable.add("mama", 11);
    const result = hashTable.search("alex");

    expect(result).toBe(null);
  });
  test("replace method should replace the value of an existing key", () => {
    const hashTable = new HashTable();

    hashTable.add("mama", 11);
    hashTable.add("diana", 31);
    hashTable.add("adina", 21);
    hashTable.replace("mama", 44);
    const result = hashTable.search("mama");

    expect(result).toBe(44);
  });
  test("replace method should throw an error if the replacing key does not exist in the table", () => {
    const hashTable = new HashTable();

    hashTable.add("mama", 11);
    hashTable.add("diana", 31);
    hashTable.add("adina", 21);

    expect(() => hashTable.replace("adrian", 55)).toThrow(/key/);
  });
});
