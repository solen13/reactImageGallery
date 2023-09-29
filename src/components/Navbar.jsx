
import { BsCardImage } from "react-icons/bs";
import React, { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Navbar() { 
   const navigate = useNavigate();
   const [searchIn, setSearchIn] = useState("");
   const searchBtn=()=>{
      navigate('/search/'+searchIn);
   }
   const logoClick=()=>{
      navigate("/")
   }
    return (
      <div className="flex justify-between  items-center bg-white border-b-2 border-slate-300  w-full h-20" >
         <div style={{"cursor":"pointer"}} onClick={logoClick} className="ml-44 hidden md:block lg:block mr-3"> Logo</div>
         <div className="flex w-full bg-neutral-100  items-center rounded-sm">
         <div className=" sm:hidden block ">menu</div>
          
                 <div className="flex px-3 text-gray-600 font-bold border-r-[0.5px] border-gray-400"> <BsCardImage className="mr-2" size="1.5rem" color="gray"/>Fotoğraf  </div>
                <input value={searchIn}  onChange={(e) => setSearchIn(e.target.value)} type="text"   placeholder="Fotoğraf Arayın.."className="p-1 w-full outline-none bg-neutral-100 font-bold " />
                <button onClick={searchBtn} className="p-2 bg-slate-700 text-white">Ara</button>
        
         </div>
         <div className=" w-full sm:w-1/2"> 
            <ul className="flex  font-bold text-gray-400">
           
                <li className="p-2 px-4 hidden sm:block">Ana Sayfa</li>
                
                <li className="p-2 px-4 hidden sm:block ">Hakkımızda</li>
                <li className="p-2 px-6 hidden bg-green-600 rounded-lg text-white sm:block ">Katıl</li>
            </ul>
         </div>
      </div>
    );
  }
  
  export default Navbar;