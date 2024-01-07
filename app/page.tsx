'use client'
import Image from 'next/image'
import {specialties,doctors,nearByClinics} from "@/lib/data/index";
import DoctorProfile from '@/components/landingpage/DoctorProfile';
import NearByClinics from '@/components/landingpage/NearByClinics';
import Searchbar from '@/components/Searchbar';

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className='w-[85%] mx-auto flex gap-16'>
        <Image
          className=' absolute right-36 top-14 -z-20'
          src="/images/rhombus-full.svg"
          alt="rhombus"
          width={450}
          height={450}/>
        <Image
          className=' absolute right-0 top-6 -z-20'
          src="/images/rhombus.svg"
          alt="rhombus"
          width={450}
          height={450}/>
        <div className='relative mt-16'>
          <h1 className='w-full text-slate-800 text-6xl font-bold leading-[72px] '>Stay at Home. <br />Consult Online</h1>
          <p className='w-full text-slate-800 text-xl font-normal'>Schedule Your Next Medical Visit Online Today</p>
          <Searchbar></Searchbar>
        </div>
        <Image
        className=' -z-10 right-28 absolute'
         src="/hero.png"
         alt="hero images"
         width="780"
         height="625"
         ></Image>
      </section>
      <div className="w-[1216.91px] h-[313.06px] flex items-center justify-center bg-[rgba(255,255,255,0.3)] rounded-[10px] mx-auto mt-14">
        <div className='w-[1168.47px] h-[267.09px] flex justify-center items-center bg-[rgba(255,255,255,0.6)] rounded-[10px] mx-auto my-auto'>
          <div className='w-[1117.01px] h-[216.47px] flex justify-center items-center bg-white rounded-[10px] opacity-100'>
            <div className=' flex items-center flex-col'>
              <div className="w-[468.98px] h-[75.85px] text-center text-slate-400 text-xl font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
              <button className='w-[438px] h-[70px] bg-slate-800 rounded-[10px] text-center text-white text-2xl font-bold'>Book an Follow Up</button>
            </div>
            <div className=' flex items-center flex-col'>
              <div className="w-[468.98px] h-[75.85px] text-center text-slate-400 text-xl font-normal leading-loose mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
              <button className='w-[438px] h-[70px] bg-slate-800 rounded-[10px]  text-center text-white text-2xl font-bold'>Book an Follow Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* Specialties section */}
      <section className='w-[85%] mx-auto mt-20'>
        <h3 className='w-full text-center text-slate-800 text-4xl font-bold mb-12'>Specialties</h3>
        <div className='flex items-center justify-between'>
          {
            specialties.map((specialty)=>{
              return (
                <div className='px-10' key={specialty.name}>
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
      <section className='w-[85%] mx-auto mt-24 flex max-xl:flex-wrap gap-16 items-center'>
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
          <h2 className='text-[40px] font-bold mb-6'>Book Your Next Medical <br />Visit Online Today!</h2>
          <p className='text-slate-800 text-lg font-normal mb-6'>Explore their expertise, credentials, and specialties to <br /> find the right doctor for your healthcare needs.</p>
          <button className='rounded-[5px] border border-slate-800 w-56 h-12'>See more Prescribers</button>
        </div>
      </section>
      {/* clinics section */}
      <section className='w-[85%] mx-auto mt-24'>
        <div className='flex justify-between items-center mb-7 '>
          <div>
          <h3 className='text-slate-800 text-3xl font-bold mb-5'>Explore Nearby Clinics</h3>
          <p className='text-slate-500 text-lg font-normal'>Your Gateway to Comprehensive Online Consultations</p>
          </div>
          <button className='rounded-[5px] border border-slate-800 w-36 h-9'>See All Clinics</button>
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
      </section>
      {/* tutorial */}
      <section className='relative mt-24 w-[85%] mx-auto'>
        <Image
        className='absolute right-[410px] top-36 z-10'
          src="/images/dots.svg"
          alt="dots"
          width={128}
          height={128}/>
          <Image
          className=' absolute -right-9 bottom-16 -z-10'
            src="/icons/green-mark.svg"
            alt="green mark"
            width={98}
            height={47}/>
        <div className='flex justify-between'>
        <h3 className='text-slate-800 text-4xl font-extrabold'>Simplified Online Healthcare Access</h3>
        <button className='bg-amber-500 text-white rounded-[10px] w-52 h-14'>Book an Appointment </button>
        </div>
        <div className='flex justify-between'>
        <div className='mt-24 flex flex-col gap-7'>
            <div className='flex items-center'>
              <h5 className='text-slate-800 h-12 w-12 flex justify-center items-center text-[46px] font-bold'>1</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2'>Step 1 text goes here</p>
                <p className='text-slate-800 text-[18.90px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='flex items-center'>
              <h5 className='text-slate-800 h-12 w-12 flex justify-center items-center text-[46px] font-bold'>2</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2'>Step 1 text goes here</p>
                <p className='text-slate-800 text-[18.90px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='flex items-center'>
              <h5 className='text-slate-800 h-12 w-12 flex justify-center items-center text-[46px] font-bold'>3</h5>
            <div className='ml-12'>
                <p className='text-slate-800 text-2xl font-bold mb-2'>Step 2 text goes here</p>
                <p className='text-slate-800 text-[18.90px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          <div>
          </div>
        </div>
        {/* tutorial image */}
        <div className='flex h-[550px] items-center justify-center'>
        <Image
          className=' w-[500px] h-[300px]'
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
      </section>
      {/* online consultation */}
      <section className='w-[85%] mx-auto mt-24 '>
        <h3 className='text-center text-slate-800 text-4xl font-bold mb-8'>Benefits of Online Consultation</h3>
        <div className=' grid grid-cols-3 gap-8'>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Accessibility</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Convenience & Time Savings</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Increased Availability</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Cost-Effectiveness</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">Continuity of Care</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        <div className='py-6 px-8'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className='text-slate-800 text-xl font-bold mt-6 mb-3'>Enhanced Privacy</h5>
            <p className='text-slate-800 text-base font-normal'>Lorem ipsum dolor sit , consectetur <br /> adipiscing elit.</p>
        </div>
        </div>
      </section>
      {/* final section */}
      <section className=' w-[85%] mx-auto mt-24 flex justify-between items-center'>
        <div>
          <p className='text-amber-500 text-[15px] font-bold mb-3'>Join with our Community</p>
          <h4 className='text-slate-800 text-5xl font-bold font mb-3'>Hassle-Free Booking <br /> at Your Fingertips</h4>
          <p className=' w-[500px] mt-3 text-slate-800 text-lg font-normal mb-3'>Explore our extensive network of skilled and accredited doctors from various hospitals. Find the perfect healthcare provider who matches your specific needs and preferences.</p>
          <button className='bg-amber-500 text-white rounded-[10px] h-12 w-80'>Book an Appointment </button>
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
