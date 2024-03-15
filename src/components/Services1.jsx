import React, { useState } from 'react';
import {motion} from 'framer-motion'

const servicesData = [
  {
    id: 0,
    title: 'CRÉATION DES SITES INTERNET',
    description: 'Création de site Web HTML5 / CSS3 /Responsive Design (pour le mobile) / Nom de domaine / Hébergement et mise en ligne / Adresses Emails Professionnel / Site Multi langues / Google Analytics / Création d’infolettre / Signature courriel / Gestion Facebook',
    imageUrls: [
      'https://www.kliydesign.com/wp-content/uploads/2014/11/Creation-de-site-internet.jpg',
      'https://www.kliydesign.com/wp-content/uploads/2014/11/Site-internet.jpg'
    ]
  },
  {
    id: 1,
    title: 'SERVICES DE GRAPHISME',
    description: 'SERVICES DE GRAPHISME Création ou refonte de logo / Carte d’affaire / Dépliant / Brochure / Flyer / Accroche-porte / Bannière / Menu / Carte en tente Papeterie d’entreprise / Pochette corporative Carton d’invitation / Carte de souhait / Étiquette / Emballage / Signet funéraire / Calendrier personnalisé / Images pour réseaux sociaux / Restauration de photos / Affiche / Carte de visite …',
    imageUrls: [
      'https://www.kliydesign.com/wp-content/uploads/2014/11/Graphic-design.jpg',
      'https://www.kliydesign.com/wp-content/uploads/2014/11/Graphisme.jpg'
    ]
  }
];

export default function Services1() {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
    initial={{scaleX:0,scaleY:0}}
    whileInView={{scaleX:1,scaleY:1}}
    transition={{delay:.8}}
    >

    <div className='overflow-hidden'>
      <div key={index} className='background h-[70vh]'>
        <div className='flex items-center serve1 justify-center h-[80vh] p-10 '>
          <div>
            <h1 className='text-white text-2xl font-bold'>{servicesData[index].title}</h1>
            <div className='flex gap-4'>
              <div className='bg-yellow-500 h-[100px] w-[5px]'></div>
              <i className='text-yellow-500 w-[400px]'>{servicesData[index].description}</i>
            </div>
          </div>
          <div className='flex translate-x-40 gap-10'>
            {servicesData[index].imageUrls.map((imageUrl, index) => (
              <a key={index} href="#" className='w-1/4 outline-none'><img className='example' src={imageUrl} /></a>
              ))}
          </div>
        </div>
        <div className='flex gap-1 justify-center p-4'>
          {servicesData.map(service => (
            <div key={service.id} className={`${index === service.id ? 'bg-yellow-500' : ''} h-[10px] w-[70px] border border-white cursor-pointer`} onClick={() => { setIndex(service.id) }}></div>
            ))}
        </div>
      </div>
    </div>
  </motion.div>
  );
}
