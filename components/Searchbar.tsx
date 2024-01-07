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
    <div className="relative z-10">
    <div className='flex bg-white justify-around items-center mt-32 w-[48rem] h-24  bg-transparent bg-opacity-60 rounded-md border-2 border-white backdrop-blur-[2rem] '>
    <div className='flex gap-5'>
      <Image
        src="/icons/search.svg"
        alt="search"
        height={26}
        width={26}/>
      <label htmlFor="clinicSelect" className="relative cursor-pointer">
        <select
          id="clinicSelect"
          className="appearance-none w-[6rem] bg-transparent border-none leading-tight h-6 opacity-80 cursor-pointer text-slate-500 text-xl font-normal focus:outline-none"
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
          width={21}
          className="absolute -right-1 -z-10 top-1/2  -translate-y-1/2"
        />
      </label>
    </div>
    <form className="flex" onSubmit={handleFormSubmit}>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className=" bg-transparent outline-none placeholder:text-xl" placeholder="Search by Clinic name"/>
    </form>
    <button onClick={handleFormSubmit} type="submit" className='px-9 py-2 bg-amber-500 opacity-90 hover:opacity-100 transition-opacity duration-300 text-white rounded-md justify-center items-center gap-2'>
          Find & Book
    </button>
  </div>
    </div>
  )
}

export default Searchbar

