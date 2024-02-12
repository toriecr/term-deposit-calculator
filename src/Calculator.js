import {useState} from 'react'
import SimpleCalculator from './SimpleCalculator'

const Calculator = () => {
  const [calculatorType, setCalculatorType] = useState('simple')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{padding: '25px'}}>
        <button
          style={{
            backgroundColor: calculatorType === 'simple' ? 'green' : 'white',
            border: calculatorType === 'simple' ? '2px solid black' : '1px solid grey'
          }}
          onClick={() => setCalculatorType('simple')}
        >
          Simple Compound Periods
        </button>
        <button
          style={{
            backgroundColor: calculatorType === 'complicated' ? 'green' : 'white',
            border: calculatorType === 'complicated' ? '2px solid black' : '1px solid grey'
          }}
          onClick={() => setCalculatorType('complicated')}
        >
          Varying Compound Periods
        </button>
      </div>
      {calculatorType === 'simple' ?
        <SimpleCalculator />
        : 
        <div>Check back soon!</div>
      }
    </div>
      
  )
}

export default Calculator