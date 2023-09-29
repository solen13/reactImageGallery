import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

const apiKey = '563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c';


function UrunListele() {


   const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/curated?page=1&per_page=40', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: apiKey,
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.photos); // Örnek olarak, veriyi 'photos' alanından alıyoruz, API yanıtına bağlı olarak bu alanı değiştirebilirsiniz.
        } else {
          console.error('API isteği başarısız oldu.');
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
      
    };

    const fetchData2 = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: apiKey,
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setData2(jsonData.photos); // Örnek olarak, veriyi 'photos' alanından alıyoruz, API yanıtına bağlı olarak bu alanı değiştirebilirsiniz.
        } else {
          console.error('API isteği başarısız oldu.');
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
      
    };
     
    const fetchData3 = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/curated?page=4&per_page=40', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: apiKey,
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setData3(jsonData.photos); // Örnek olarak, veriyi 'photos' alanından alıyoruz, API yanıtına bağlı olarak bu alanı değiştirebilirsiniz.
        } else {
          console.error('API isteği başarısız oldu.');
        }
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
   
    };

    fetchData();
    fetchData2();

    fetchData3();
 
 
  }, []); // Bu etkileşim sadece bileşen yüklendiğinde çalışsın istiyoruz, bu yüzden bağımlılık dizisi boş.
 
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
       <div className='w-full relative'> 
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
          <ul>
            {data.map((item) => (
              <li key={item.id}  onClick={() => modalsClicked(item)} className='bg-black'>
                
                <Card name={item} height={item.height} />
              </li>
            ))}
          </ul>
          <ul>
            {data2.map((item3) => (
              <li key={item3.id} onClick={() => modalsClicked(item3)} className='bg-black'>
                
                <Card name={item3} />
              </li>
            ))}
          </ul>
          <ul className='hidden sm:block '>
            {data3.map((item3) => (
              <li key={item3.id} onClick={() => modalsClicked(item3)}>
                <Card name={item3} />
              </li>
            ))}
          </ul>
        </div>
     </div>
    )
}

export default UrunListele;