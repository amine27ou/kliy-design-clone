import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoHeartCircle } from "react-icons/io5";
import {motion} from 'framer-motion'


export default function About() {
  return (
      <div className='bg-neutral-800 mt-[-10px] flex items-center justify-center flex-col' id='propos'>
        <motion.div
        initial={{ opacity:0,y: 100 }}
        whileInView={{opacity:1,y:0  }}
        transition={{delay:.1}}
        >
        <div className='flex items-center justify-center flex-col relative'>
            <h1 className='text-neutral-600 text-6xl font-bold'>A PROPOS</h1>
            <h3 className='text-white absolute text-4xl font-bold'>A PROPOS</h3>
        </div>
        <div className='flex justify-center'>
            <p className='text-neutral-600 text-center w-1/2'>KLIY DESIGN EST SPÉCIALISÉ DANS LA CRÉATION DES SITES INTERNET & APPLICATIONS, DIGITAL MARKETING, CONSEIL, ÉVÉNEMENTIEL, RÉALISATION DES VIDÉOS PUBLICITAIRES, GRAPHISME, ANIMATION 3D.</p>
        </div>

        <div className='flex gap-3 justify-center items-center p-10 my-4 about flex-wrap'>
            <div className='w-[300px]'>
                <h1 className='text-white text-2xl flex items-center gap-3'>
                    <IoMdCheckmark className='text-yellow-500 font-bold '/>
                    COMPETENCES
                </h1>
                <p className='text-neutral-600'><strong>Spécialisé en :</strong> Flyers, affiches, plaquettes, magazines, mise en pages, chaine graphique et création d’image de marque, sites internet & applications, Événementiel, offres web, newsletter, wallpaper, etc. Pour résumer, KliyDesign est votre solution face à toutes vos envies graphiques !</p>
            </div>
            <div className='w-[300px]'>
                <h1 className='text-white text-2xl flex items-center gap-3'>
                    <IoIosSettings className='text-yellow-500 font-bold '/>
                    COMPETENCES
                </h1>
                <p className='text-neutral-600'> Vous êtes à la recherche d’une agence de publicité de confiance, <strong> Kliy Design</strong> est là pour vous aider Parce que chacun d’entre vous a des besoins bien particuliers, nous prenons le temps de comprendre vos envies et vos contraintes pour vous proposer la meilleure solution web possible.</p>
            </div>
            <div className='w-[300px]'>
                <h1 className='text-white text-2xl flex items-center gap-3'>
                    <IoHeartCircle className='text-yellow-500 font-bold '/>
                    COMPETENCES
                </h1>
                <p className='text-neutral-600'><strong>Nous sommes des créatifs.</strong> Quelle que soit la complexité de votre projet ou la taille de votre business, l’inventivité de nos équipes saura vous doter de l’outil digital dont vous avez besoin pour vos clients, votre organisation ou votre communauté.</p>
            </div>
        </div>
        </motion.div>
        <motion.div
        initial={{x:-200,rotate:-20}}
        whileInView={{x:0,rotate:0}}
        transition={{delay:.1}}
        >
        <div className='bg-neutral-700 flex flex-row gap-3 video-container about-container'>
            <div className='relative'>
                <video id="video_background" className='w-[3000px] relative' preload="auto" autoplay loop muted playsinline>
                    <source src="https://vegatheme.com/videos/video.webm" type="video/webm"/> 
                    <source src="https://www.youtube.com/watch?v=U6QMlmIeIG8"  type="video/mp4"/> 
                    <source src="https://vegatheme.com/videos/video.ogg" type="video/ogg"/>  
                       

                </video>
                <div className='absolute m-3 video-layer'>
                    <div className='h-[1px] bg-white w-auto'></div>
                    <p className=' text-yellow-500  m-4'>KLIY DESIGN</p>
                    <div className='h-[1px] bg-white w-auto'></div>
                </div>
            </div>
            <div className='flex flex-col gap-3 p-4'>
                <div className='p-2'>
                    <h2 className='font-bold text-white mb-3'>KLIY DESIGN</h2>
                    <p className='text-neutral-400'>Forte de plus de 10 ans d’expérience, Kliy Design est une agence de publicité créative et de conseil en communication, qui a accompagné divers organismes étatiques et semi étatiques dans l’élaboration de leurs outils de communication, de la définition du concept jusqu’au support finalisé, pour contribuer à la réussite de leurs projets.
                    Kliy Design a aussi intégré dans sa structure en plus de la conception graphique, l’élaboration de la stratégie de communication , le développement, la gestion et la création de sites web ainsi que la réalisation de films documentaires et de spots publicitaires.</p>
                </div>
                <div className='mb-3'>
                    <h2 className='font-bold text-white mb-3'>MISSIONS</h2>
                    <p className='text-neutral-400'>Être un partenaire de confiance pour nos différents clients.
                    Gérer et analyser la complexité des besoins en communication de nos clients, et mettre en œuvre des solutions adaptées au présent et à l’avenir.
                    Concrétiser les aspirations et les besoins de nos clients avec créativité.
                    Améliorer l’image de nos clients à l’échelle nationale et internationale – en leur proposant des solutions souples et innovantes, ainsi que des services leaders du marché.</p>
                </div>
                <div className='mb-3'>
                    <h2 className='font-bold text-white mb-3'>VISION</h2>
                    <p className='text-neutral-400'>Notre vision est D'être fidèle et de vous rendre visible sur internet.</p>
                </div>
            </div>
        </div>
        </motion.div>
    </div>
  )
}
