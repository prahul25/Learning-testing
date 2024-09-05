'use client'
import React, { useEffect, useState } from 'react'

function Page() {
  let timerId:ReturnType<typeof setTimeout>;
  const [input,setInput] = useState("")

  const handleCasual = () =>{
    console.log("button got clicked")
  }
  const handleDebouncing = () => {
    if (timerId) {
      clearTimeout(timerId); // Clear previous timer if it exists
    }

    timerId = setTimeout(() => {
      console.log("Debounced button clicked");
    }, 2000); // Set a new timeout for 2 seconds
  };

  
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      console.log(input)
    },1000)
    
    return ()=>{
      clearTimeout(timerId)
    }
  } , [input])
  

  return (
    <div className='flex justify-center items-center h-screen gap-2'>
      <button onClick={handleCasual} className='px-4 py-1 border border-slate-400 rounded-md hover:bg-slate-600'>casual</button>
      <button onClick={handleDebouncing} className='px-4 py-1 border border-slate-400 rounded-md hover:bg-slate-600'>debouncing</button>
      <input type="text" onChange={(e) =>setInput(e.target.value)} className='text-black px-2 py-[2px] rounded-md'/>
    </div>
  )
}

export default Page