import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeData from "../HomePics";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


export default function SimpleSlider() {
  const NextArrow = ({ onClick }) => {
    return <IoIosArrowForward className="absolute right-10 top-80 z-2 text-white text-6xl cursor-pointer" onClick={onClick} />;
  };

  const PrevArrow = ({ onClick }) => {
    return <IoIosArrowBack className="absolute left-10 top-80  z-10 text-white text-6xl cursor-pointer" onClick={onClick} />;
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const handleScroll = ()=>{
    window.scrollTo({
      top:1200,
      behavior:'smooth'
    })
  }
  return (
    <Slider className="overflow-hidden" {...settings}>
      {homeData.map((pic, index) => (
        <div key={index} className="relative">
            <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-50"></div>
          <img src={pic.img} alt={pic.alt} className="w-screen h-screen slide-image z-1" />
          <div className="absolute left-[35%] z-20 top-60 items-center  justify-center  font-bold drop-shadow-lg p-2 flex flex-col">
            <p className="text-yellow-500 text-6xl title">{pic.text}</p>
            <div className="flex gap-4 my-10">
              <p className="portfeuille text-white text-4xl text-center cursor-pointer hover:text-yellow-500 transition-all roll">Portfeuille</p>
              <p className="portfeuille text-white text-4xl text-center cursor-pointer hover:text-yellow-500 transition-all roll">Contact</p>
            </div>
              <div className="flex flex-row gap-4 ">
                <FaTwitter className="bg-black opacity-40 text-yellow-500 text-2xl p-1 hover:opacity-80 cursor-pointer" />
                <FaFacebookF className="bg-black opacity-40 text-yellow-500 text-2xl p-1 hover:opacity-80 cursor-pointer" />
                <FaGithub className="bg-black opacity-40 text-yellow-500 text-2xl p-1 hover:opacity-80 cursor-pointer" />
                <FaGooglePlusG className="bg-black opacity-40 text-yellow-500  text-2xl p-1 hover:opacity-80 cursor-pointer" />
              </div>
              <div>
                <IoIosArrowDown onClick={handleScroll} className="text-white text-6xl mt-10 cursor-pointer"/>
              </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
