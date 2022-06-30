function howManyHundreds(bottles) {
  let container = bottles / 100
  return Math.floor(container.toFixed(2))
}

console.log(howManyHundreds(0), "=?", 0);

