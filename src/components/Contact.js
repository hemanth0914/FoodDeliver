import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Contact = () => {
  const data = useContext(UserContext)
  return (
    <div>
        <h1 className='text-3xl font-bold p-4 m-4'>Contact Us Page</h1>
        <form className='flex flex-col p-4 m-4 w-full'>
          <input type="text" placeholder='Name' className='border border-black p-2 m-2'/>
          <input type="text" placeholder='Message' className='border border-black p-2 m-2'/>
          <button className='border border-black p-2 m-2 bg-black text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Contact