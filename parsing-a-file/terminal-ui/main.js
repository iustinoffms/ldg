const parseCSV = require("ldg-parsing-a-data-file-is");

const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What file?", async (name) => {
  const allData = await fs.readFileSync(name, "utf8");
  const parsed = parseCSV(allData);
  console.log(parsed);
  readline.close();
});
