import React, { useState } from "react";
import {motion} from 'framer-motion'

export default function Projects() {
    const [type, setType] = useState("TOUT");
    
    const handleClick = (e) => {
        setType(e.target.innerHTML);
    };
    const urls = [
        "https://kliydesign.com/wp-content/uploads/2019/06/webdesign-inspiration-5-475x475.jpg",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/theme-siteweb-design-570x570-475x475.jpg",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/isma-car-475x475.jpg",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/attachment_119146932-e1605731130311-475x475.png",
        "https://kliydesign.com/wp-content/uploads/2019/06/97126976_1094862520866573_6339937586542280704_n-475x475.jpg",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/DC-route-475x475.jpg",
        "https://kliydesign.com/wp-content/uploads/2019/06/creationsiteweb-475x475.jpg",
        "https://kliydesign.com/wp-content/uploads/2019/06/Reddid-475x475.jpg",
        "https://kliydesign.com/wp-content/uploads/2019/06/b811a46ac4d4bad4ba5ec8f7b6c21909-475x475.jpg",
        "https://kliydesign.com/wp-content/uploads/2019/06/Super-fast-475x475.jpg",
        "https://kliydesign.com/wp-content/uploads/2019/06/max-shoes-475x475.jpg",
        "https://www.kliydesign.com/wp-content/uploads/2019/06/104160316_1120701948282630_8982250803232417807_n-475x475.jpg"
      ];
      
      const projects = urls.map(url => {
        const name = url.substring(url.lastIndexOf('/') + 1).replace(/-\d+/, '').replace(/\.[^.]+$/, ''); 
        return { name, url };
      });
      
      
    return (
        
            <motion.div
            initial={{x:-500,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:.5}}
            >
        <div className="bg-neutral-800 flex items-center justify-center flex-col p-4" id='portfeuille'>
            <div className="flex items-center justify-center flex-col relative">
                <h1 className="text-neutral-600 text-6xl font-bold">PORTEFEUILLE</h1>
                <h3 className="text-white absolute text-4xl font-bold">PORTEFEUILLE</h3>
            </div>
            <p className="text-neutral-600 text-center w-1/2">
                NOUS CROYONS QUE NOTRE TRAVAIL PARLE DE LUI-MÊME. PARCOUREZ NOS PROJETS
                LES PLUS RÉCENTS CI-DESSOUS ET CONSTATEZ NOTRE TRAVAIL FAIT À LA MAIN
                AVEC AMOUR ET AVEC UN GRAND SOUCI DU DÉTAIL.
            </p>
            <nav className="flex gap-5 text-yellow-500 justify-center flex-wrap">
                <a href="#" onClick={handleClick} className={`nav-link ${type === "TOUT" ? "active" : ""}`}>TOUT</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "CARTES VISITES" ? "active" : ""}`}>CARTES VISITES</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "FLYERS" ? "active" : ""}`}>FLYERS</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "BROCHURES" ? "active" : ""}`}>BROCHURES</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "LOGOTYPES" ? "active" : ""}`}>LOGOTYPES</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "COUVERTURES" ? "active" : ""}`}>COUVERTURES</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "SITES" ? "active" : ""}`}>SITES</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "ROLL-UP" ? "active" : ""}`}>ROLL-UP</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "NEWSLETTER" ? "active" : ""}`}>NEWSLETTER</a>
                <a href="#" onClick={handleClick} className={`nav-link ${type === "AFFICHES" ? "active" : ""}`}>AFFICHES</a>
            </nav>
            <h1 className="text-white">{type}</h1>
            <div className="grid grid-cols-4 gap-4 my-4 overflow-hidden">
                {projects.map(project=>(
                    <div className="img-container">
                        <img  src={project.url} />
                        <div className="layer">
                            <a href={project.url} className="text-white text-2xl">{project.name}</a>
                        </div>
                    </div>
                ))}
            </div>
                <p className="text-yellow-500 text-center">Afficher Tout</p>
                <h1 className="text-2xl text-white font-bold my-4">PLUS D'INFO SUR KLIY DESIGN</h1>
                <div className="roll-container mb-4 overflow-hidden">
                    <span className="first text-yellow-500">Entrez en contact</span>
                    <span className="second">Contactez nous</span>
                </div>
                <motion.div
                initial={{x:-500,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:.5}}
                >
                <div className="numbers flex-wrap">
                    <div className="box flex items-center justify-center flex-col">
                        <div className=" nbr-container border border-black text-yellow-500 text-center h-[100px] w-[100px] flex  items-center justify-center">
                            <h1 className="text-6xl font-light" >950</h1>
                        </div>
                        <h3 className="text-1xl font-bold text-white">PROJET REUSSI</h3>
                    </div>
                    <div className="box flex items-center justify-center flex-col">
                        <div className=" nbr-container border border-black text-yellow-500 text-center h-[100px] w-[100px] flex  items-center justify-center">
                            <h1 className="text-6xl font-light">10</h1>
                        </div>
                        <h3 className="text-1xl font-bold text-white">PROJET EN ATTENTE</h3>
                    </div>
                    <div className="box flex items-center justify-center flex-col">
                        <div className=" nbr-container border border-black text-yellow-500 text-center h-[100px] w-[100px] flex  items-center justify-center">
                            <h1 className="text-6xl font-light">7</h1>
                        </div>
                        <h3 className="text-1xl font-bold text-white">EMPLOYÉES</h3>
                    </div>
                    <div className="box flex items-center justify-center flex-col">
                        <div className=" nbr-container border border-black text-yellow-500 text-center h-[100px] w-[100px] flex  items-center justify-center">
                            <h1 className="text-6xl font-light">10</h1>
                        </div>
                        <h3 className="text-1xl font-bold text-white">ANNÉE D'EXPÉRIENCE</h3>
                    </div>
                </div>
            </motion.div>
        </div>
            </motion.div>
    );
}
