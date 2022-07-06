export function getFreeSpots(array) {
  let newArr = [];
  array.forEach((value, index) => {
    if (!value) {
      newArr.push(index);
    }
  });
  return newArr;
}

export function cpuTurn(array) {
  const spots = getFreeSpots(array);
  if (spots.length) {
    const rand = Math.floor(Math.random() * spots.length);
    return spots[rand];
  }

  return null;
}
