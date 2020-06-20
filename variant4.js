const filterArray = array => array.filter(item => item <= 1000)

const isMultiple14 = number => number % 14 === 0

const getMultNumbers = array => {
  let result = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      const number1 = array[i]
      const number2 = array[j]

      if (number1 === number2) break

      const mult = number1 * number2

      result.push(mult)
    }
  }

  return result
}

const findNumber = (...sequenceNumbers) => {
  const filteredArr = filterArray(sequenceNumbers)

  if (filteredArr.length === 1 || filteredArr.length === 2) {
    const [number1, number2 = 1] = filteredArr

    const mult = number1 * number2

    return isMultiple14(mult) ? mult : 0
  }

  let arrayNumber14 = getMultNumbers(filteredArr).filter(item => isMultiple14(item))

  return arrayNumber14.length ? Math.max(...arrayNumber14) : 0
}
