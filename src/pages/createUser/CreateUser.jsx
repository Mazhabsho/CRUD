import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import ButtonBack from '../../components/button/ButtonBack';
import ButtonSave from '../../components/button/ButtonSave';

const CreateUser = () => {
  const [formValue, setFormValue] = useState({name:"", email:" ", phone:" "})
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

   const handleInput = (e) =>{
    const {name,value} =  e.target;
    setFormValue({...formValue, [name]:value})
   }
  const handlesubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/posts", formValue)
    .then(res => {
      setFormValue(res.data)
      navigate("/")
    })
    .catch(e =>console.error(e))
  }

  return (
    <form onSubmit={handlesubmit} className='form-group w-[500px] mx-auto shadow-lg mt-[10%] border-[0.1px] rounded px-5 py-5'>
       <h2 className='text-2xl font-[Roboto] text-center font-medium text-[#333]'>Create a new User</h2>
      <div className=' my-3 '>
      <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>name</label>
      <input name='name' value={formValue.name} onMouseDown={(e) =>setValidation(true)} onChange={handleInput} required type="text" className='w-full border text-[#333] py-2 rounded pl-3 outline-none font-[Roboto] font-sm' placeholder='Inter your name'  />
      {formValue.name.length == 0 && validation && <span className='text-sm text-yellow-300'>Enter the name</span>}
      </div>

      <div className='my-3'>
      <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>email</label>
      <input name='email' value={formValue.email} onChange={handleInput} type="email"  className='w-full border py-2 rounded pl-3 text-[#333] outline-none font-[Roboto] font-sm' placeholder='Inter your email' />
      {formValue.email.length == 0 && validation && <span className='text-sm text-yellow-300'>Enter the email</span>}
      </div>
      
        <div className='my-3'>
        <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>phone</label>
        <input name='phone' value={formValue.phone} onChange={handleInput} type="text"  className='w-full border py-2 rounded text-[#333] pl-3 outline-none font-[Roboto] font-sm' placeholder='Inter your phone' />
        {formValue.phone.length == 0 && validation && <span className='text-sm text-yellow-300'>Enter the phone</span>}
        </div>

      <div className='mt-5 flex justify-center gap-10 items-center'>
        <ButtonSave/>

      <Link to="/"> <ButtonBack/></Link>
      </div> 
    </form>
  )
}

export default CreateUser