import React from 'react'
import {motion} from 'framer-motion'

export default function Companies() {
    const urls = [
        "https://www.kliydesign.com/wp-content/uploads/2019/06/11111.png",
        "https://kliydesign.com/wp-content/uploads/2019/06/2222222.png",
        "https://kliydesign.com/wp-content/uploads/2019/06/3333.png",
        "https://kliydesign.com/wp-content/uploads/2019/06/444444.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/5555555.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/6666666.png",
        "https://kliydesign.com/wp-content/uploads/2019/06/7777777.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/8888888.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/9999999.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/10000000.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/1313131313.png",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/12121212.png"
    ]
  return (
      <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:.6}}
        >
    <div className='bg-neutral-800 grid grid-cols-6  p-4'>
        {urls.map(url=>(
          <a href='#' className='w-1/2 hover:opacity-30 transition-all'><img src={url} /></a>
          ))}
    </div>
          </motion.div>
  )
}
