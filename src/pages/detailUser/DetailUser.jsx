import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ButtonBack from '../../components/button/ButtonBack';

const DetailUser = () => {
  const [data, setData] = useState([]);
   const {id} = useParams();
  const getInfo = async() =>{
    try{
      const {data} = await axios.get("http://localhost:8000/posts/" + id);
      setData([data]);
    }catch(e){console.error(e)}
  }
   useEffect(()=>{
    getInfo()
   },[])
  
  return (
    <div>
      
      {data.map((elem, id) =>{
        return(
          <div className='flex justify-center '>
           <div className='w-[600px] mx-auto shadow-lg mt-[15%] border-[0.1px] rounded px-5 py-5'>
             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">id</th>
                  <th scope="col" className="px-6 py-3">name</th>
                  <th scope="col" className="px-6 py-3">email</th>
                  <th scope="col" className="px-6 py-3">phone</th>
                </tr>
               </thead>
               <tbody>
                <tr key={id}>
                  <td className="px-6  py-4">{elem.id}</td>
                  <td className="px-6  py-4">{elem.name}</td>
                  <td className="px-6  py-4">{elem.email}</td>
                  <td className="px-6  py-4">{elem.phone}</td>
                </tr>
               </tbody>
             </table>
           
           <div className='mt-3'>
            <Link to="/"><ButtonBack/></Link>
           </div>
           </div>
          </div>
        )
      })}
    </div>
  )
}

export default DetailUser