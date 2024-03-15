import React from 'react'
import { FiChevronsUp } from "react-icons/fi";

export default function Footer() {
    const handleScroll = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div className='bg-slate-950 relative flex flex-col items-center p-4 justify-between h-[150px]'>
            <FiChevronsUp onClick={handleScroll} className='absolute text-yellow-500 w-[40px] h-[30px] bg-neutral-900 -top-5 cursor-pointer'  />
            <div className='m-4 flex justify-center flex-col'>
                <p className='text-sm'><span className='text-yellow-500 '>COPYRIGHT KLIY DESIGN 2019 / 2023 </span><strong className='text-neutral-500 font-bold'>© TOUS DROIT RÉSERVÉS</strong></p>
                <small className='text-center text-yellow-500'>POWERED & DESIGNED BY : <span className='font-bold'>KLIY DESIGN</span></small>
            </div>
    </div>
  )
}
