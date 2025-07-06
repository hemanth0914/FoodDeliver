import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Contact = () => {
  const data = useContext(UserContext)
  return (
    <div>
        <h1>Contact Us Page</h1>
        <h2>Mail us at {data.useremail}</h2>
    </div>
  )
}

export default Contact