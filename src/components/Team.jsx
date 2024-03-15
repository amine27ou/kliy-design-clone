import React from 'react';
import { FaTwitter, FaFacebookF, FaGithub, FaGooglePlusG } from "react-icons/fa";
import {motion} from "framer-motion"

const team = [
  {
    name:'BADR KLIY',
    poste:'DIRECTEUR ARTISTIQUE',
    phone:'+212 661-635263',
    mail:'B.Kliy@kliydesign.com',
    picture:'https://www.kliydesign.com/wp-content/uploads/2024/01/Design-sans-titre-29.png'
  },
  {
    name:'FAICAL AFFAF',
    poste:'DIRECTEUR COMMERCIAL',
    phone:'+212 670-448194',
    mail:'A.Faical@kliydesign.com',
    picture:'https://www.kliydesign.com/wp-content/uploads/2024/01/2.png'
  },
  {
    name:'ICHRAQ',
    poste:'AGENT COMMERCIAL',
    phone:'xxxxx-xxxxxx',
    mail:'I.Chakir@kliydesign.com',
    picture:'https://www.kliydesign.com/wp-content/uploads/2019/07/Ichrak.jpg'
  },
  {
    name:'CAMÉLIA',
    poste:'GRAPHIC & WEB DESIGNER',
    phone:'xxxxx-xxxxxx',
    mail:'C.Frammbie@Kliydesign.com',
    picture:'https://www.kliydesign.com/wp-content/uploads/2019/05/camelia.jpg'
  }
];

export default function Team() {
  return (
    <div>
      <div className='bg-neutral-800 flex items-center justify-content flex-col' id='team'>
        <div className='flex items-center justify-center flex-col relative p-5'>
          <h1 className='text-neutral-600 text-6xl font-bold'>NOTRE EQUIPE</h1>
          <h3 className='text-white absolute text-4xl font-bold'>NOTRE EQUIPE</h3>
        </div>
        <p className='text-neutral-400'>NOUS SOMMES UNE PETITE ÉQUIPE CRÉATIVE ET TALENTUEUSE</p>
      </div>

      <div className='bg-neutral-800'>
      <motion.div
      initial={{x:-100 ,opacity:0}}
      whileInView={{x:0,opacity:1}}
        transition={{delay:.6}}
      >
      <div className='flex flex-row gap-4 justify-center items-center p-4  flex-wrap'>
        {team.map((member, index) => (
          <div key={index} className='bg-neutral-700 flex items-center flex-col justify-center'>
            <img className='w-[200px]' src={member.picture} alt={member.name} />
            <div className='p-2 flex items-center justify-center flex-col'>
                <h1 className='text-white font-bold'>{member.name}</h1>
                <h3 className='text-neutral-400'>{member.poste}</h3>
                <div className='h-[1px] w-[80px] my-5 bg-yellow-500'></div>
                <p className='text-neutral-400'>{member.phone}</p>
                <p className='text-neutral-400 my-2'>{member.mail}</p>
                <div className='flex text-white gap-3'>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaGithub /></a>
                    <a href='#'><FaGooglePlusG /></a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
      </div>
    </div>
  );
}
