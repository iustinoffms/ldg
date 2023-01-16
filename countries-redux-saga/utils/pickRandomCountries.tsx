export default function pickRandomCountries(countries: any, n: number) {
  const arr = [];
  const chosen = new Set();
  while (n > 0) {
    const randomNumber = Math.ceil(Math.random() * countries.length);
    if (!chosen.has(randomNumber)) {
      chosen.add(randomNumber);
      arr.push(countries[randomNumber]);
      n--;
    }
  }
  return arr;
}
