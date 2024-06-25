import { useState } from 'react'
import Button from './Button'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
        setCounter(prevCount => prevCount - 1)
    }
    const handleIncrement = () => {
        setCounter(PrevCount => PrevCount + 1)
    }
  return (
    <>
        <Button color='danger' handleClick={handleDecrement}>Decrement</Button>
        <span className='m-5'>{counter}</span>
        <Button color='success' handleClick={handleIncrement}>Increment</Button>
        
    </>
  )
}

export default Counter
