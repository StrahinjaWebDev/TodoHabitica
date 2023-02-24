import React from 'react'
import {AiFillTags} from  'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'

function Search() {
  return (
    <div className='w-screen h-[5rem] flex justify-center items-center'>
      <div className='w-[95%] h-[100%] flex justify-start items-center gap-1  md:justify-center'>
        
        <input type="text" name="search"  className=' border-black border-[1px] w-[85%] md:w-[28%]  h-[2.4rem]' placeholder='   Search'/>
        <button className='border-[1px] border-black md:flex gap-2 items-center  justify-center w-[6rem] h-[2.4rem] font-bold hidden'><AiFillTags size={'1.5rem'}/>Tags <AiFillCaretDown size={'1.2rem'}/></button>
        
        
        <button className='text-white text-sm  bg-primary-purple   flex  justify-center items-center w-[6rem] h-[2.4rem] font-bold  md:absolute md:right-10'>+ Add Task</button>
      
      </div>

    </div>
  )
}

export default Search