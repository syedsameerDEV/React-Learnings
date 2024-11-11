import React, { useContext } from 'react'
import { NameContext } from './App'

const Father = () => {
    const data = useContext(NameContext)
    console.log(data);
    
  return (
    <div>Father: My Son name is {data.name}</div>
  )
}

export default Father