import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AddIcon from "@mui/icons-material/Add";
import { Link} from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const HomePage = ({ data, handleDelete }) => {
  const [search, setSearch] = useState(" ");
  const [currentPage, setCurentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
const  firstIndex = lastIndex - recordsPerPage;
const records = data.slice(firstIndex, lastIndex);
const nPage = Math.ceil(data.length / recordsPerPage);
const numbers = [... Array(nPage + 1).keys()].slice(1)

 function nextPage(){
  if(currentPage !== nPage){
    setCurentPage(currentPage + 1);
  }
 }
 function prePage(){
  if(currentPage !== firstIndex){
    setCurentPage(currentPage - 1);
  }
 }
 function changeCurrentPage(id){setCurentPage(id)}
  const sortOption = ["id", "name","email", "phone"];

  return (
    <>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center mb-5 px-8">
        <h1 className="text-xl uppercase tracking-normal  font-bold">
          Crud Oparations
        </h1>
         
       <div>
       <input type="text" onChange={(e) => setSearch(e.target.value)} className="py-2 tracking-wide px-5 my-2 border mr-5 font-[Roboto] text-sm  rounded bg-slate-50" placeholder="search ..." />
        <Link to="create">
          <AddIcon />
        </Link>
       </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3 pl-[3rem]">
              email
            </th>
            <th scope="col" className="px-6 py-3 pl-[3rem]">
              phone
            </th>

            <th scope="col" className="px-6 py-3 pl-[3rem]">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            <>
              {records.filter((elem) =>{
                return search.toLocaleLowerCase() === " " ? elem : elem.name.toLocaleLowerCase().includes(search)
              }).map((elem) => {
                return (
                  <tr
                    key={elem.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      {elem.id}
                    </th>
                    <td className="px-6  py-4">{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    <td className="space-x-4">
                      <Link to={`detail/${elem.id}`} >
                        <VisibilityIcon style={{cursor:"pointer"}}/>
                      </Link>
                      <Link onClick={(e) => handleDelete(elem.id)}>
                        <DeleteIcon style={{ color: "#eb0808b3" }} />
                      </Link>
                      <Link to={`edit/${elem.id}`}>
                        <ModeEditOutlineIcon style={{ color: "#1c0689" }} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : null}
        </tbody>
      </table>
      <div>
          <ul className="flex">
            <li className="text-base border bg-slate-100 px-5 py-1 my-3 rounded hover:bg-slate-400 hover:text-white transition ease-linear duration-300 cursor-pointer">
              <a href="#" onClick={prePage}> <KeyboardArrowLeftIcon/></a>
            </li>
            {
              numbers.map((elem,id) =>{
                return(
                
                   <span key={id} className={`px-3 mt-4 text-base font-[Roboto] ${currentPage === elem ? 'active' : "   "}`}>
                  <a href="#" onClick={()=>changeCurrentPage(elem)}>{elem}</a>
                </span>
                  
                )
              })
            }
           <li className="text-base border bg-slate-100 px-5 py-1 my-3 rounded hover:bg-slate-400 hover:text-white transition ease-linear duration-300 cursor-pointer">
              <a href="#" onClick={nextPage}> <KeyboardArrowRightIcon/></a>
            </li>

          </ul>
         </div>
    </div>
    </>
  );
};

export default HomePage;
