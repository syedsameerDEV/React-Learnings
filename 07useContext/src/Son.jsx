import React, { useContext } from 'react'
import { NameContext } from './App'

const Son = () => {
    const data = useContext(NameContext)
  return (
    <div>Son : My name is {data.name}</div>
  )
}

export default Son