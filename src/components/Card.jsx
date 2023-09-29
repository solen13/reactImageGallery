import React, { useState ,useEffect} from 'react';

import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Card(props) {

  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    // Ekran genişliği değiştiğinde bu işlev çalışacak
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };
  
    // Pencere boyutu değişikliklerini dinlemek için olay dinleyici ekleyin
    window.addEventListener('resize', handleResize);
  
    // Temizlik işlevi: bileşen çıkış yaparken olay dinleyiciyi kaldırın
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Ekran genişliğine bağlı olarak hesaplanan değeri saklayın
  const calculatedValue = windowWidth < 640 ? props.height / 15 : props.height / 10;
  
    return (
      <div className="w- sm:w-96  max-w-sm relative mt-4" style={{"height":calculatedValue+'px'}}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
          <img  className="w-full h-full" src={props.name.src.large}></img>
          {isHovered && (
            <div>
             <h2 className="text-center pt-5 absolute bottom-0 left-0 text-white p-3 font-bold">{props.name.photographer}</h2>
              <div className="  absolute bottom-0 right-0  text-black  mr-3 mb-3  rounded-lg bg-white p-3"><AiOutlineDownload size="1rem"/> </div>
              <div className=" absolute right-0 top-0   text-black p-3 mr-3 mt-3 rounded-lg  bg-white "><AiOutlineHeart size="1rem"/></div>

              <div className="w-full h-full absolute right-0 top-0 bg-black" style={{ opacity: '0.1' }}></div>
            </div>
       
      )}
      </div>
    );
  }
  
  export default Card;