import React from 'react'
import { useState } from 'react'




const Nav = () => {
  const [nav, setNav] = useState('');
  const handleInv = () => {
    setNav(!nav) 
  }



  return (
    <div className='grid grid-cols w-screen h-[50vw] bg-primary-purple justify-center'>
      <span className='text-sm font-bold text-white flex'>Tasks <button className=' '>aa</button></span>
      <span className='text-sm font-bold text-white'>Inventory</span>
      <span className='text-sm font-bold text-white'>Shops</span>
      <span className='text-sm font-bold text-white'>Party</span>
      <span className='text-sm font-bold text-white'>Guilds</span>
      <span className='text-sm font-bold text-white'>Group</span>
      <span className='text-sm font-bold text-white'>Challenges</span>
      <span className='text-sm font-bold text-white'>Help</span>
    </div>
  )
}

export default Nav