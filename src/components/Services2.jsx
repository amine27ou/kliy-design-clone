import React from 'react'
import { IoBrushSharp } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import {motion} from 'framer-motion'

export default function Services2() {
  return (
    <motion.div
    initial={{scaleX:0,scaleY:0,opacity:0}}
    whileInView={{scaleX:1,scaleY:1,opacity:1}}
    transition={{delay:.5}}
    >
    <div className="bg-neutral-800 flex items-center justify-center flex-col p-4" id='services'>
    <div className="flex items-center justify-center flex-col relative">
        <h1 className="text-neutral-600 text-6xl font-bold">SERVICES</h1>
        <h3 className="text-white absolute text-4xl font-bold">SERVICES</h3>
    </div>
        <p className='text-neutral-600 text-center w-1/2'>VENEZ DE CONSULTER TOUTES LES LISTES DE SERVICES CI-DESSOUS POUR OBTENIR UNE IDÉE GÉNÉRALE DE CE QUE NOUS POUVONS FOURNIR.
        (CRÉATION DES SITES & APPLICATIONS, DIGITAL MARKETING, CONSEIL, ÉVÉNEMENTIEL, GRAPHISME, RÉALISATIONS DES VIDÉOS PUBLICITAIRE, ANIMATION 3D)</p>
        <div className='services grid grid-cols-3 my-10'>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <IoBrushSharp className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>ÉQUIPE CRÉATIVE</p>
            </div>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <MdOutlinePhoneAndroid className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>DESIGN RESPONSIVE</p>
            </div>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <BsChatTextFill className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>SUPPORT EXCELLENT</p>
            </div>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <BsClockFill className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>SUPPORT RAPIDE</p>
            </div>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <GrMail className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>DEVIS RAPIDE</p>
            </div>
            <div className="service bg-neutral-700 p-2 m-2 flex items-center justify-center flex-col p-8 rounded-md">
                <FaHeart className='bg-neutral-800 rounded-full p-4 text-6xl text-yellow-500 hover:text-blue-500 cursor-pointer transition-all '/>
                <p className='text-white'>REALISATION AVEC AMOUR</p>
            </div>
        </div>
    </div>
    </motion.div>

  )
}
