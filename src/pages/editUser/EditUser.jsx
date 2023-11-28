import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonSave from "../../components/button/ButtonSave";

const EditUser = () => {
  const { id } = useParams();
  const [value, setValue] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/posts/" + id, value)
      .then((res) => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts/" + id)
      .then((res) => setValue(res.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="w-[500px] mx-auto shadow-lg mt-[10%] border-[0.1px] rounded px-5 py-5">
      <h2 className='text-2xl font-[Roboto] text-center font-medium text-[#333]'>
        Update User
      </h2>
      <form
        onSubmit={handleUpdate}
      >
        <div className=" my-3 ">
          <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>
            name
          </label>
          <input
            name="name"
            value={value.name}
            required
            type="text"
            className='w-full border py-2 rounded pl-3 text-[#333] outline-none font-[Roboto] font-sm'
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>

        <div className="my-3">
          <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>
            email
          </label>
          <input
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            value={value.email}
            name="email"
            type="email"
            className='w-full border py-2 rounded pl-3 outline-none text-[#333] font-[Roboto] font-sm'
          />
        </div>

        <div className="my-3">
          <label className='uppercase font-[Roboto] text-[#333] text-sm font-medium pl-3'>phone</label>
          <input
            onChange={(e) => setValue({ ...value, phone: e.target.value })}
            value={value.phone}
            name="phone"
            type="text"
            className='w-full border py-2 rounded pl-3 outline-none text-[#333] font-[Roboto] font-sm'
          />
        </div>

        <div className="mt-5 flex justify-center items-center gap-10">
           <ButtonSave/>
          <Link to="/"><ButtonBack/></Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
