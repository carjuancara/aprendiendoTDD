import { useState } from 'react'
import { evaluate } from 'mathjs'
import { equalSign, operations, rows } from '../constants/Constants.js'
export default function Calculator () {
  const [value, setValue] = useState('')
  const createHandleOp = op => setValue(value.concat(op))

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, idx) =>
          <div key={idx} role='row'>
            {row.map((number) => (
              <button onClick={() => createHandleOp(number)} key={number}>
                {number}
              </button>)
            )}
          </div>
        )}
        {operations.map(operation => (
          <button onClick={() => createHandleOp(operation)} key={operation}>{operation}</button>
        ))}
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>

    </section>
  )
}
