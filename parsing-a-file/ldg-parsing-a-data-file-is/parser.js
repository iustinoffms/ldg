function parseCSV(data) {
  const rows = getRows(data);
  const firstLineTable = ["Last", "First", "Salary"];
  const allColumns = getColumns(rows);
  allColumns.splice(0, 0, firstLineTable); // introduces firstLineTable on poz 0;

  const maxValues = getMaxLengths(allColumns);
  const sumOfMaxValues = maxValues.reduce((p, c) => p + c);
  const repeatDash = "-".repeat(sumOfMaxValues + 2);
  const formatedColumns = allColumns.map((row) => formatRow(row, maxValues));
  formatedColumns.splice(1, 0, [repeatDash]); // introduces repeated dash on poz 1;

  const finalFormat = formatedData(formatedColumns);
  return finalFormat;
}

function getRows(data) {
  return data.split(/\n/);
}
function getColumns(rows) {
  return rows.map((item) => item.split(","));
}

function getMaxLengths(allRows) {
  const allMaxValues = [];
  for (let i = 0; i < allRows[0].length; i++) {
    const possibleValues = [];
    for (let j = 0; j < allRows.length; j++) {
      possibleValues.push(allRows[j][i]);
    }
    const lengthOfColumns = possibleValues.map((item) => item.length);
    allMaxValues.push(Math.max(...lengthOfColumns));
  }
  return allMaxValues;
}

function formatRow(row, maxValues) {
  return row
    .map((item, index) => {
      return item + " ".repeat(maxValues[index] - item.length);
    })
    .join(" ");
}
function formatedData(formatedColumns) {
  return formatedColumns.join("\n");
}

module.exports = parseCSV;
