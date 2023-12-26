export function fizzbuzz (number) {
  if (typeof number !== 'number') throw new Error('parametred provided must be a number')
  if (Number.isNaN(number)) throw new Error('parametred provided must be a number')
  /* if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'
  return number
  */
  const multiple = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object.entries(multiple).forEach(([multiple, word]) => {
    if (number % multiple === 0) output += word
  })

  return output === '' ? number : output
}
