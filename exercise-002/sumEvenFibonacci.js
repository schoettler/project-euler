// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the
// first 10 terms will be:  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...  By considering the terms in the Fibonacci sequence
// whose values do not exceed four million, find the sum of the even-valued terms.

function naiveSumEvenFibonacci (limit) {
  let sum = 2
  let numbers = [1, 2]
  let result = numbers[0] + numbers[1]

  while (result <= limit) {
    if (result % 2 === 0) {
      sum += result
    }
    numbers[0] = numbers[1]
    numbers[1] = result
    result = numbers[0] + numbers[1]
  }
  console.log('002: Naive sum-even fibonacci approach - ', sum)

  return sum
}

// From: https://github.com/miloss/project-euler-javascript/blob/master/002.js
function trampolineSumEvenFibonacci (limit) {
  const fibonacci = (function () {
    const memo = [1, 2]

    return function (n) {
      let result = memo[n]
      if (typeof memo[n] !== 'number') {
        result = fibonacci(n - 1) + fibonacci(n - 2)
        memo[n] = result
      }
      return result
    }
  })()

  let sum = 0
  let i = 0
  let number = fibonacci(i)

  while (number <= limit) {
    if (number % 2 === 0) {
      sum += number
    }
    i++
    number = fibonacci(i)
  }

  console.log('002: Trampoline sum-even fibonacci approach - ', sum)

  return sum
}

export default [naiveSumEvenFibonacci, trampolineSumEvenFibonacci]