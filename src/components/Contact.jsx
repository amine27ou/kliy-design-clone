import React from 'react'
import {motion} from 'framer-motion'

export default function Contact() {
  return (
      <div className="bg-neutral-700 flex items-center justify-center flex-col p-4" id='contact'>
    <div className="flex items-center justify-center flex-col relative">
        <h1 className="text-neutral-500 text-6xl font-bold">CONTACTEZ-NOUS</h1>
        <h3 className="text-white absolute text-4xl font-bold">CONTACTEZ-NOUS</h3>
    </div>
        <p className='text-neutral-500'>BESOIN D'AIDE ? VOUS AVEZ UNE QUESTION ?? !!</p>
          
          <motion.div
              initial={{opacity:0,x:-100}}
              whileInView={{opacity:1,x:0}}
              transition={{delay:.6}}
              >
        <div>
            <form className='flex gap-4 flex-wrap my-4'>
                <div>
                    <label className='text-white'>Votre nom Complet:*</label><br/>
                    <input type='text' className='bg-neutral-800 p-3 outline-none text-neutral-400'/>
                </div>
                <div>
                    <label className='text-white'>Email:*</label><br/>
                    <input type='text' className='bg-neutral-800 p-3 outline-none text-neutral-400'/>
                </div>
                <div>
                    <label className='text-white'>Telephone:*</label><br/>
                    <input type='text' className='bg-neutral-800 p-3 outline-none text-neutral-400'/>
                </div>
                <div>
                    <label className='text-white'>Question Ou Choix de pack : *</label><br/>
                    <textarea className='bg-neutral-800 p-3 outline-none text-neutral-400' ></textarea> 
                </div>
            </form>
            <a href='mailto:example@example.com' className='bg-neutral-800 text-yellow-500 p-3'>Envoye</a>
        </div>
        </motion.div>
        
    </div>
  )
}
