import {useState} from 'react'

const SimpleCalculator = () => {
  const [principal, setPrincipal] = useState('')
  const [interest, setInterest] = useState('')
  const [compoundPeriods, setCompoundPeriods] = useState('')
  const [time, setTime] = useState('')
  const [finalBalance, setFinalBalance] = useState('')

  const handleInputChange = (e, setter) => {
    const input = e.target.value
    setter(input.replace(/[^0-9.]/g, ''))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const decimalInterest = interest * 0.01
    const calculatedBalance = principal * ((1 + (decimalInterest/compoundPeriods))**(compoundPeriods * time))
    setFinalBalance(Math.floor(calculatedBalance))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Principal:</label>
          <input 
            required
            type='number' 
            value={principal}
            onChange={(e) => handleInputChange(e, setPrincipal)}
          />
        </div>
        <div className='form-group'>
          <label>Interest:</label>
          <input 
            required
            max='100'
            type='number' 
            value={interest}
            onChange={(e) => handleInputChange(e, setInterest)}
          />
          %
        </div>
        <div className='form-group'>
          <label>Compound Interest:</label>
          <select
            required
            value={compoundPeriods}
            onChange={(e) => setCompoundPeriods(e.target.value)}
          >
            <option value='' disabled>Select term...</option>
            <option value='12'>Monthly</option>
            <option value='4'>Quarterly</option>
            <option value='1'>Annually</option>
            <option value='1'>At Maturity</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Investment Term (years):</label>
          <input 
            required
            type='number' 
            value={time}
            onChange={(e) => handleInputChange(e, setTime)}
          />
        </div>
        <button type='submit'>Calculate</button>
      </form>
      {finalBalance &&
        <div style={{paddingTop: '15px'}}>
          <strong>Final Balance:</strong> ${finalBalance}
        </div>
      }
    </div>
  )
}

export default SimpleCalculator