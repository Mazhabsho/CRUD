import React, { useEffect, useState } from 'react'
import HomePage from '../../components/home/HomePage'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();
 
  const getData = async () =>{
    try{
      const {data} = await axios.get("http://localhost:8000/posts");
      setData(data)
    }catch(e){console.error(e)}
  }
 
  const handleDelete = (id)=>{
    try{
      axios.delete("http://localhost:8000/posts/" + id)
      navigate("/")
    }catch(e){console.error(e)}
   }

  useEffect(() =>{
    getData();
  },[])
 
  return (
    <div className='w-[800px] mx-auto mt-[7rem]'>
        <HomePage data={data} handleDelete={handleDelete}/>
    </div>
  )
}

export default Home