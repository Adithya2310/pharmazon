import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className='w-[85%] mx-auto flex gap-16'>
        <div className='relative mt-16'>
          <h1 className='w-full text-slate-800 text-6xl font-bold leading-[72px] '>Stay at Home. <br />Consult Online</h1>
          <p className='w-full text-slate-800 text-xl font-normal'>Schedule Your Next Medical Visit Online Today</p>
          <div className=' flex justify-around items-center mt-32 w-[777.29px] h-[102.38px] bg-transparent bg-opacity-60 rounded-md border-2 border-white backdrop-blur-[35.52px]'>
            <div className='flex gap-5'>
              <Image
                src="/icons/search.svg"
                alt="search"
                height={26}
                width={26}/>
                <select
                  className="appearance-none bg-transparent border-none leading-tight h-6 opacity-80 text-slate-500 text-xl font-normal focus:outline-none"
                >
                  <option className='h-6 opacity-80 text-slate-500 text-xl font-normal' value="" disabled selected>Clinics</option>
                  {/* <option value="clinic1">Clinic 1</option> */}
                  {/* <option value="clinic2">Clinic 2</option> */}
                  {/* <option value="clinic3">Clinic 3</option> */}
                  {/* Add more options as needed */}
                </select>
                <Image
                  src="/icons/down-arrow.svg"
                  alt="drop-down"
                  height={18}
                  width={21}/>
            </div>
              <input type="text" className=" bg-transparent outline-none placeholder:text-xl" placeholder="Search by Clinic name"/>
              <button className='px-[36.57px] py-[9.40px] bg-amber-500 rounded-md justify-center items-center gap-[10.45px] inline-flex'>
                Find & Book
              </button>
          </div>
        </div>
        <Image
        className=' -z-10 right-20 absolute'
         src="/hero.png"
         alt="hero images"
         width="780"
         height="625"
         ></Image>
      </section>
    </main>
  )
}
