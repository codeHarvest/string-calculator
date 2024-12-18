export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = "[,\n]";
  let sequence = numbers;

  if (numbers.startsWith("//")) {
    const [firstLine, rest] = numbers.split("\n");
    const customDelim = firstLine.slice(2);
    delimiter = `[${customDelim}\n]`;
    sequence = rest;
  }

  const regex = new RegExp(delimiter);
  const numberArr = sequence.split(regex).map(Number);

  const negatives = numberArr.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(", "));
  }

  return numberArr.reduce((acc, val) => acc + val, 0);
}