import React,{useState,useEffect} from 'react'
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [scrolled,setScrolled] = useState(false);
  const [opened,setOpened] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const handleOpen = ()=>{
    setOpened(prevState=>!prevState)
    console.log(opened)
  }
  return (
    <div className='fixed left-0 z-10 right-0' id='#'>
    <div className={`${scrolled ? 'h-[70px]': ''} navbar bg-slate-950 h-[90px] flex items-center justify-center transition-all z-10`}>
        <img className={`${scrolled ? 'w-[170px] mt-[5%]':'mt-[30px]'} logo w-[140px] z-10 transition-all`} src='logo.png' />
        <ul className={`navlinks ${opened && 'active'} flex `}>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4 cursor-pointer'>
    <div className='flex items-center gap-4'>
      <a href='#'>Accueil</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4  cursor-pointer'>
    <div className='flex items-center gap-4'>
      <a href='#propos'>A propos</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4 cursor-pointer'>
    <div className='flex items-center gap-4'>
      <a href='#pack'>Nos Pack</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4 cursor-pointer'>
    <div className='flex items-center gap-4'>
      <a href='#portfeuille'>Portfeuille</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4'>
    <div className='flex items-center gap-4'>
      <a href='#services'>Nos services</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4'>
    <div className='flex items-center gap-4'>
      <a href='#team'>Notre équipe</a>
      <IoIosMenu/>
    </div>
  </li>
  <li className='text-amber-200 text-md uppercase text-xs font-bold mx-4'>
    <div className='flex items-center gap-4'>
      <a href='#contact'>Contact</a>
      <IoIosMenu/>
    </div>
  </li>
</ul>
    <div className={`hamburger ${opened && 'active'}`} onClick={handleOpen}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    </div>
    </div>
  )
}
