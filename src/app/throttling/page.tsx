'use client'
import React, { useEffect, useState } from 'react'

function Page() {
    const [input , setInput] = useState("")
    const [throttledValue, setThrottledValue] = useState('');

    useEffect(() => {
     

        const throttleTimer = setTimeout(() => {
            
            
            console.log('Clearing throttle timer');
        }, 1000); // Throttle time: 1000 milliseconds

        return () => {
            clearTimeout(throttleTimer);
        };
    }, [input]);
  return (
    <div className='flex justify-center items-center h-screen gap-2'>
<input type="text" onChange={(e) =>setInput(e.target.value)} className='text-black px-2 py-[2px] rounded-md'/>
</div>
  )
}

export default Page