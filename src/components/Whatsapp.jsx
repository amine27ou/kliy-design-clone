import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

export default function Whatsapp() {
    const [opened,setOpened] = useState(false)
    const [message,setMessage] = useState('')
    const sendMessage = ()=>{
        const phoneNumber =  '+212 661 63 52 63'
        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl)
    }
  return (
    <div className='fixed bottom-10 left-10'>
    {opened && 
                <div className='flex items-center justify-center gap-5'>
                    <div>
                        <img src='logo.png' className='w-[40px] bg-white rounded-full'/>
                    </div>
                    <div className='w-[200px]'>
                        <IoIosCloseCircle className='text-3xl text-yellow-500' onClick={()=>{setOpened(false)}}/>
                        <div>
                            <div className=''>
                                <div className='bg-yellow-500 text-white p-2 rounded-t-md'>
                                    <p style={{fontSize:"12px"}}>Notre équipe de support client est là pour répondre à vos questions. Demandez-nous n importe quoi ! </p>
                                </div>
                                <div className='bg-white text-gray-400 mb-4 p-2 rounded-top-sm rounded-b-md'>
                                    <p >Besoin d'aide?</p>
                                </div>
                            </div>
                            <div className='bg-white flex justify-between rounded-md p-1 items-center mb-4'>
                                <input type='text' onChange={(e)=>{setMessage(e.target.value)}} className=' outline-none text-gray-400' placeholder='Ecrivez un message'/>
                                <IoMdSend onClick={sendMessage} className='text-yellow-500 cursor-pointer'  />
                            </div>
                        </div>
                    </div>
                </div>
            }
    <div className='bg-yellow-500  rounded-3xl text-white p-2 cursor-pointer flex items-center gap-5'
        onClick={()=>{setOpened(!opened)}}
    >
          <FaWhatsapp/>
        <p>chattez avec nous sur whatsapp</p>
        </div> 
    </div>
         )
}
