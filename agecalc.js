function ageCalculator(name, yearOfBirth, currentYear) {
  let age= currentYear - yearOfBirth
  let quote= name + ' is ' + age + ' years old.'
return quote
}

console.log(ageCalculator("Ferdinand", 1988, 2015));

