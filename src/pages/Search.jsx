
import { useParams } from "react-router-dom";
import React, { useState ,useEffect} from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { AiOutlineClose } from 'react-icons/ai';
function Search(){
const params=useParams()

const [hight, sethight] = useState({
  height:500
});
const {id}=params
const [data, setData] = useState([]);
useEffect(()=>{

    const fetchs= async()=>{
      try {
        const apiKey='563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c'
        const response = await  fetch(`https://api.pexels.com/v1/search?query=${id}`,{method:"GET",
        headers:{
          Accept:"application/json",
          Authorization:apiKey
        }
      })

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.photos); // Örnek olarak, veriyi 'photos' alanından alıyoruz, API yanıtına bağlı olarak bu alanı değiştirebilirsiniz.
        
        } else {
          console.error('API isteği başarısız oldu.');
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }

  
    } 
  
fetchs()

})

const [imgs,setImgs]=useState("")
const [opens, setopens] = useState(false);
const modalsClicked=((val)=>{

  setopens(true)
   setImgs(val.src.large)

})

const close=(()=>{
  setopens(false);
 
})
  return (
    <div className="Abaut">
             {opens  && ( <div className="w-full h-full bg-black/[0.5] fixed z-10 flex justify-center" > 
              <div className="w-5/6 h-[90vh] bg-white mt-10 relative">
                 <button onClick={close} className="absolute right-0  top-0  z-20 p-3 ">
                    <AiOutlineClose size="2rem"/>
                 </button>
                <img className="max-w-full h-[90vh] mx-auto" src={imgs}></img>
              </div>
        </div>
        )}
            <Navbar/>
       <div className='flex justify-center mx-auto gap-4 w-full' >
          <ul className="flex flex-wrap justify-center mx-auto gap-4">
            {data.map((item) => (

              <li key={item.id}   onClick={() => modalsClicked(item)}  className=' flex '>
                 
                <Card name={item} height={4000} />
              </li>
            ))}
          </ul>

       </div> 
    </div>
  );
}
export default Search;
