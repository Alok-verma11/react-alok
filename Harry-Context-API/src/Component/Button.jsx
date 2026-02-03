import React, { useContext } from 'react'
import Component1 from './Component1'
import counterContext from "../Context/Context";



function Button() {
    const value = useContext(counterContext);
    
  return (
    <div>
        <button onClick={() => value.setCount((count) => count + 1)}>Counter is {value.count}</button>
    </div>
  )
}

export default Button
