const fs = require("fs");
const parseCSV = require("./parser");

describe("parseCSV", () => {
  test("given a data file, should return a readdable format of it's content", async () => {
    const data = await fs.readFileSync("./data.csv", "utf8");
    const parsed = parseCSV(data);
    const result = `Last     First    Salary
------------------------
Ling     Mai      55900 
Johnson  Jim      56500 
Jones    Aaron    46000 
Jones    Chris    34500 
Swift    Geoffrey 14200 
Xiong    Fong     65000 
Zarnecki Sabrina  51500 `;
    expect(result).toBe(parsed);
  });
});
