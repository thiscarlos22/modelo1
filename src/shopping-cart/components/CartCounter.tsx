"use client"
import React, { useState } from 'react'

export const CartCounter = () => {
    const [count, setCount] = useState(5)
  return (
    <>
         <span className="text-9xl text-slate-900" > {count}</span>

<div className="flex">
  <button 
  onClick={() => setCount(count + 1)}
  className="flex items-center justify-center p-2 rounded-xl bg-gray-900
   text-white hover:bg-gray-600
  transition-all w-[100px] mr-2">
      +1
  </button>

  <button 
  onClick={() => setCount(count-1)}
  className="flex items-center justify-center p-2 rounded-xl bg-red-900
   text-white hover:bg-gray-600
  transition-all w-[100px] mr-2">
      -1
  </button>
</div>
    </>
  )
}
