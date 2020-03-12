function fizzBuzz(length) {
  const array = [];

  for (let i = 1; i <= length; i++) {
    if (!(i % 15)) {
      array[i - 1] = 'FizzBuzz';
    } else if (!(i % 3)) {
      array[i - 1] = 'Fizz';
    } else if (!(i % 5)) {
      array[i - 1] = 'Buzz';
    } else {
      array[i - 1] = i;
    }
  }

  return array;
}

module.exports = fizzBuzz;
