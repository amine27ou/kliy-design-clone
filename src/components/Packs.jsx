import React from 'react'
import {motion} from 'framer-motion'

export default function Packs() {
  return (
    <div className="bg-neutral-700 flex items-center justify-center flex-col p-4" id='pack'>
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:.6}}
        >
    <div className="flex items-center justify-center flex-col relative">
        <h1 className="text-neutral-500 text-6xl font-bold">NOS PACKS</h1>
        <h3 className="text-white absolute text-4xl font-bold">NOS PACKS</h3>
    </div>
        </motion.div>  
    <p className='text-neutral-500 my-5'>KLIY DESIGN VOUS PROPOSE DIFFÉRENTS PACKS PUBLICITAIRES</p>
    <motion.div
    initial={{opacity:0,y:-100}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:.6}}
    >
    <div className='flex items-center justify-center flex-wrap gap-5' >
        <div className='pack text-center bg-neutral-800 text-white'>
            <h1 className='text-yellow-500 font-bold'>PACK STANDARD</h1>
            <h3 className='text-yellow-500 font-bold'>STANDARD</h3>
            <p>CRÉATION D’UN LOGO</p>
            <p>UN SITE INTERNET PROFESSIONNEL</p>
            <p>HÉBÉRGEMENT & DOMAINE INCLUS</p>
            <p> ADRESSES EMAILS PROFESSIONNE</p>
            <p>SITE MULTI LANGUE</p>
            <p>FORMATION GRATUIT</p>
            <p>NEWSLETTER EN HTML</p>
            <p>UNE PAGE FB</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <div className='roll-container items-center justify-center flex'>
                <a href='#' className='first text-yellow-500'>Commander</a>
                <a href='#' className='second'>Commander</a>
            </div>        </div>
        <div className='pack text-center bg-neutral-800 text-white'>
            <h1 className='text-yellow-500 font-bold'>PACK GOLD</h1>
            <h3 className='text-yellow-500 font-bold'>GOLD</h3>
            <p>CRÉATION D’UN LOGO</p>
            <p>FLYER</p>
            <p>HÉBÉRGEMENT & DOMAINE INCLUS</p>
            <p> ADRESSES EMAILS PROFESSIONNE</p>
            <p>SITE MULTI LANGUE</p>
            <p>FORMATION GRATUIT</p>
            <p>PAPIER À EN-TÊTE</p>
            <p>UNE PAGE FB</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <p>RÉFÉRENCEMENT NATUREL</p>
            <div className='roll-container items-center justify-center flex'>
                <a href='#' className='first text-yellow-500'>Commander</a>
                <a href='#' className='second'>Commander</a>
            </div>
        </div>
        <div className='pack text-center bg-neutral-800 text-white'>
            <h1 className='text-yellow-500 font-bold'>PACK PREMIUM</h1>
            <h3 className='text-yellow-500 font-bold'>PREMIUM</h3>
            <p>CRÉATION D’UN LOGO</p>
            <p>UN SITE INTERNET PROFESSIONNEL</p>
            <p>HÉBÉRGEMENT & DOMAINE INCLUS</p>
            <p> ADRESSES EMAILS PROFESSIONNE</p>
            <p>SITE MULTI LANGUE</p>
            <p>FORMATION GRATUIT</p>
            <p>NEWSLETTER EN HTML</p>
            <p>UNE PAGE FB</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <p>GÉOLOCALISATION SUR GOOGLE</p>
            <div className='roll-container items-center justify-center flex'>
                <a href='#' className='first text-yellow-500'>Commander</a>
                <a href='#' className='second'>Commander</a>
            </div>        
            </div>
    </div>
    </motion.div>
    </div>
  )
}
