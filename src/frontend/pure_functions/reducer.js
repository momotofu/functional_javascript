const valuesArray = [11, 18, 16, 4, 14.5, 18.5, 19, 18.9, 20, 1]
const targetValue = 18.6

const reducer = (array, transform) => {
  let accumulator = array[0]

  for (let i = 1; i < array.length; i++) {
    const current = array[i]
    accumulator = transform(accumulator, current)
  }

  return accumulator
}

const findNearest = (targetValue) => {
  return (accumulator, current) => {
    return Math.abs(accumulator - targetValue) < Math.abs(current - targetValue) ? accumulator : current
  }
}

const transform = findNearest(targetValue)
const result = reducer(valuesArray, transform)

// TEST
console.assert(result === 18.5, 'Test failed')
