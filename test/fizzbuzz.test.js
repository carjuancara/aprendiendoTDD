import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'
/*
escribir una funcion que al pasarle un numero
    - muestre 'fizz' si es multiplo de 3
    - muestre 'buzz' si es multipolo de 5
    - muestre 'fizzbuzz' si es multiplo de 3 y 5
    - muestre el numero si no es multiplo de los anteriores
*/

/*
NOTA: Una recomendacion es que al escribir un test y este ya esta cubierto
deberia borrar el test, dejando solo los necesarios
*/

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })
  // en este test se crea una arrow function para ejecutar la funcion
  // porque asi puedo testear los errores de la funcion
  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parametred provided must be a number')
  })
  // aqui no esta dentro de la funcion flecha porque debo testear un resultado
  // por lo tanto debo ejecutar la funcion
  it('should return 1 if number is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  it('should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })
  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
