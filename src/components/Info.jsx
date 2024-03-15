import React, { useState } from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Maps from '../components/Maps'
import { FaChevronDown } from "react-icons/fa";

export default function Info() {
    const [clicked,setClicked] = useState(false)
  return (
    <div id='info' className='bg-neutral-800 p-10 flex justify-center flex-col items-center '>
        <div className='flex p-2 justify-center gap-5'>
            <div className='flex items-center gap-2'>
                <FaPhoneFlip className='text-yellow-500'/>
                <h2 className='text-white'>TELEPHONE</h2>
                <p className='text-neutral-500'>+212 661 63 52 63 <i>Lundi-Samedi| 9am–6pm (GMT +1)</i></p>
            </div>
            <div className='flex items-center gap-2'>
                <FaLocationDot className='text-yellow-500'/>
                <h2 className='text-white'>ADRESSE</h2>
                <p className='text-neutral-500'>Imm N° 22, Appt 12, Rue Jabal Moussa, Agdal-Rabat</p>
            </div>
        </div>
        <div className='bg-neutral-700 h-[1px] w-[60%]'/>
        <h1 className='text-white font-bold hover:text-yellow-500 cursor-pointer transition-all my-5 flex items-center gap-2' onClick={()=>{setClicked(!clicked)}}>TROUVEZ-NOUS <FaChevronDown/></h1>
        {clicked && <Maps/>}
        <div className='bg-neutral-700 h-[1px] w-[60%]'/>
        
    </div>
)
}
