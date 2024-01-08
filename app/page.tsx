'use client'
import Image from 'next/image'
import {specialties,doctors,nearByClinics} from "@/lib/data/index";
import DoctorProfile from '@/components/landingpage/DoctorProfile';
import NearByClinics from '@/components/landingpage/NearByClinics';
import Searchbar from '@/components/Searchbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className='h-[39rem] bg-yellow-50  '>
        <div className='w-[85%]  mx-auto flex gap-16'>
        <Image
          className=' absolute right-36 top-14'
          src="/images/rhombus-full.svg"
          alt="rhombus"
          width={450}
          height={450}/>
        <Image
          className=' absolute right-0 top-6 '
          src="/images/rhombus.svg"
          alt="rhombus"
          width={450}
          height={450}/>
        <div className='relative mt-16'>
          <h1 className='w-full text-slate-800 text-6xl font-bold'>Stay at Home. <br />Consult Online</h1>
          <p className='w-full text-slate-800 text-xl font-normal leading-10'>Schedule Your Next Medical Visit Online Today</p>
          <Searchbar></Searchbar>
        </div>
        <Image
        className=' right-[9%] absolute'
         src="/hero.png"
         alt="hero images"
         width="780"
         height="625"
         ></Image>
        </div>
      </section>
      <div className='flex justify-center'>
      <div className="w-[75rem] h-[20rem] absolute  top-[36rem]  flex items-center justify-center bg-[rgba(255,255,255,0.3)] rounded-[10px] mx-auto mt-14">
        <div className=' w-[70rem] h-[16rem] flex justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-[10px] mx-auto my-auto'>
          <div className=' w-[65rem] h-[12rem] flex justify-center items-center bg-[#F9FDFF] rounded-[10px] opacity-100'>
            <div className=' border-r-2 border-white  flex items-center flex-col'>
              <div className=" w-[30rem] h-20 text-center text-blue-400 text-xl font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
              <Link href="https://www.youtube.com/@pharmazon457">
              <button className='w-[27rem] h-16 bg-slate-800 rounded-[10px] text-center text-white text-2xl font-bold hover:bg-slate-900 transition-colors duration-300'>Book an Follow Up</button>
              </Link>
            </div>
            <div className='border-r-2 border-white  flex items-center flex-col'>
              <div className="w-[30rem] h-20 text-center text-blue-400 text-xl font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
              <Link href="https://www.youtube.com/@pharmazon457">
              <button className='w-[27rem] h-16 bg-slate-800 rounded-[10px]  text-center text-white text-2xl font-bold hover:bg-slate-900 transition-colors duration-300'>Book an Follow Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Specialties section */}
      <section className='w-[85%] mx-auto mt-64'>
        <h3 className='w-full text-center text-slate-800 text-4xl font-bold mb-12'>Specialties</h3>
        <div className='flex items-center justify-between'>
          {
            specialties.map((specialty)=>{
              return (
                <div className='px-10 bg-slate-50 w-48 py-5' key={specialty.name}>
                  <Image
                    className=' pb-4'
                    src={specialty.src}
                    alt={specialty.name}
                    height={118}
                    width={118}/>
                  <p className='w-full text-center text-slate-800 text-lg font-normal'>{specialty.name}</p>
                </div>
              )
            })
          }
        </div>
      </section>
      {/* book an appointment*/}
      <section className=' bg-sky-50'>
        <div className='w-[85%] mx-auto mt-12 py-12 flex gap-16 items-center'>
        <div className=' flex gap-7'>
          {doctors.map((doctor)=>{
            return (
              <DoctorProfile
                key={doctor.doctorName}
                {...doctor}/>
            )
          })}
        </div>
        <div>
          <h2 className=' text-4xl font-bold mb-6 leading-[3rem]'>Book Your Next Medical <br />Visit Online Today!</h2>
          <p className='text-slate-800 text-lg font-normal mb-6 leading-[2rem]'>Explore their expertise, credentials, and specialties to <br /> find the right doctor for your healthcare needs.</p>
          <Link href="prescribers">
            <button className='rounded-[5px] border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300 w-56 h-12'>See more Prescribers</button>
          </Link>
        </div>
        </div>

      </section>
      {/* clinics section */}
      <section className='bg-slate-50'>
        <div className='w-[85%] mx-auto py-12 '>
        <div className='flex justify-between items-center mb-7 '>
          <div>
          <h3 className='text-slate-800  text-3xl font-bold mb-2'>Explore Nearby Clinics</h3>
          <p className='text-slate-500 text-lg font-normal'>Your Gateway to Comprehensive Online Consultations</p>
          </div>
          <Link href="clinics">
          <button className='rounded-[5px] border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300 w-36 h-9'>See All Clinics</button>
          </Link>
        </div>
        <div className='flex gap-5 justify-between'>
          {nearByClinics.map((clinic)=>{
            return (
              <NearByClinics
                key={clinic.name}
                {...clinic}/>
            )
          })}
        </div>
        </div>
      </section>
      {/* tutorial */}
      <section className='bg-yellow-50'>
        <div className='relative  pt-12 w-[85%] mx-auto'> 
        <Image
        className='absolute right-[26rem] top-[15rem] z-20'
          src="/images/dots.svg"
          alt="dots"
          width={128}
          height={128}/>
          <Image
          className=' absolute -right-9 bottom-28 leading-[3rem] '
            src="/icons/green-mark.svg"
            alt="green mark"
            width={98}
            height={47}/>
        <div className='flex justify-between items-center'>
        <h3 className='text-slate-800 text-4xl font-extrabold'>Simplified Online Healthcare Access</h3>
        <Link href="https://youtube.com">
          <button className='bg-amber-500 opacity-90 hover:opacity-100 transition-opacity duration-300 text-white rounded-[10px] w-52 h-14'>Book an Appointment </button>
        </Link>
        </div>
        <div className='flex justify-between'>
        <div className='mt-24 flex flex-col gap-7'>
            <div className='flex items-center'>
              <h5 className='text-slate-800 w-24 h-24 flex justify-center items-center text-5xl font-bold bg-orange-100 rounded-full p-4'>1</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2 '>Step 1 text goes here</p>
                <p className='text-slate-800 text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='flex items-center'>
              <h5 className='text-slate-800 h-24 w-24 flex justify-center items-center text-5xl font-bold bg-orange-100 rounded-full p-4'>2</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2 '>Step 1 text goes here</p>
                <p className='text-slate-800 text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='flex items-center'>
              <h5 className='text-slate-800 h-24 w-24 flex justify-center items-center text-5xl font-bold bg-orange-100 rounded-full p-4'>3</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2'>Step 2 text goes here</p>
                <p className='text-slate-800  text-lg font-medium leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          <div>
          </div>
        </div>
        {/* tutorial image */}
        <div className='flex h-[40rem] items-center justify-center'>
        <Image
          className=' w-[32rem] h-[19rem] z-10'
          src="/images/tutorial.jpeg"
          alt="tutorial"
          width={570}
          height={330}/>
        <Image
        className='absolute'
          src="/icons/play.svg"
          alt="play"
          width={80}
          height={80}/>
        </div>
        </div>
        </div>
      </section>
      {/* online consultation */}
      <section className=' bg-slate-50'>
        <div className='w-[85%] mx-auto pt-12 pb-12'>
        <h3 className='text-center text-slate-800 text-4xl font-bold mb-8'>Benefits of Online Consultation</h3>
        <div className=' grid grid-cols-3 gap-8'>
        <div className='py-6 px-8 bg-white h-[95%]  shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Accessibility</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8 bg-white h-[95%]  shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Convenience & Time Savings</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8 bg-white h-[95%]  shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Increased Availability</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8 bg-white h-[95%]  shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Cost-Effectiveness</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8 bg-white h-[95%] shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Continuity of Care</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8 bg-white h-[95%] shadow-md rounded-[5px]'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className='text-slate-800 text-xl font-bold mt-6 mb-3'>Enhanced Privacy</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        </div>
        </div>
      </section>
      {/* final section */}
      <section className=' w-[85%] mx-auto mt-12 flex justify-between items-center mb-4'>
        <div>
          <p className='text-amber-500 text-sm font-bold mb-3'>JOIN WITH OUR COMMUNITY</p>
          <h4 className='text-slate-800 text-5xl font-bold font mb-3'>Hassle-Free Booking <br /> at Your Fingertips</h4>
          <p className='w-[31rem] mt-3 text-slate-800 text-lg font-normal mb-3'>Explore our extensive network of skilled and accredited doctors from various hospitals. Find the perfect healthcare provider who matches your specific needs and preferences.</p>
          <Link href="https://youtube.com">
            <button className='bg-amber-500 opacity-90 hover:opacity-100 transition-opacity duration-300 text-white rounded-[10px] h-12 w-80'>Book an Appointment </button>
          </Link>
        </div>
        <Image
          src="/images/ending.svg"
          alt='ending'
          width={600}
          height={400}/>
      </section>
    </>
  )
}
