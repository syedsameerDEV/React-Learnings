import React from 'react'
import { useLocation } from 'react-router-dom'

const Landing = () => {
    const location = useLocation()
    console.log(location.state.userName);
  return (
    <div>Hello {location.state.userName}</div>
  )
}

export default Landing