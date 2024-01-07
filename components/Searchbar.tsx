import { FormEvent, useState } from "react";
import {search} from "@/lib/action/search";
import Image from "next/image";

const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState('');
    //on submission of the form
    const handleFormSubmit=(e:FormEvent)=>{
        e.preventDefault();
        console.log("form submission");
        search(searchTerm);
    }
  return (
    <div className=' flex justify-around items-center mt-32 w-[777.29px] h-[102.38px] bg-transparent bg-opacity-60 rounded-md border-2 border-white backdrop-blur-[35.52px]'>
    <div className='flex gap-5'>
      <Image
        src="/icons/search.svg"
        alt="search"
        height={26}
        width={26}/>
        <select
          className="appearance-none bg-transparent border-none leading-tight h-6 opacity-80 text-slate-500 text-xl font-normal focus:outline-none"
          value="Clinic"
          defaultValue="Clinic"
        >
          <option value="Clinic">Clinic</option>
          {/* <option value="clinic2">Clinic 2</option> */}
          {/* <option value="clinic3">Clinic 3</option> */}
        </select>
        <Image
          src="/icons/down-arrow.svg"
          alt="drop-down"
          height={18}
          width={21}/>
    </div>
    <form className="flex" onSubmit={handleFormSubmit}>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className=" bg-transparent outline-none placeholder:text-xl" placeholder="Search by Clinic name"/>
    </form>
    <button onClick={handleFormSubmit} type="submit" className='px-[36.57px] py-[9.40px] bg-amber-500 text-white rounded-md justify-center items-center gap-[10.45px] inline-flex'>
          Find & Book
    </button>
  </div>
  )
}

export default Searchbar