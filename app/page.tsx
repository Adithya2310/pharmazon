'use client'
import Image from 'next/image'
import {specialties,doctors,nearByClinics} from "@/data";

export default function Home() {
  return (
    <>
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
              <div className=' p-4'>
                <Image
                  className='rounded-[10px] mb-4'
                  src={doctor.doctorPhoto}
                  alt="doctor-image"
                  width={300}
                  height={174}/>
                  <p className='text-amber-500 text-[13px] font-normal mb-2'>{doctor.clinicName}</p>
                  <h4 className='text-slate-800 text-xl font-medium mb-2'>{doctor.doctorName}</h4>
                  <p className='text-slate-800 text-[15px] font-normal mb-2'>{doctor.sepcialization}</p>
                  <p className='text-slate-800 text-[15px] font-normal mb-5'>{doctor.experience} Years of Experience</p>
                  <div className='flex text-slate-500 text-[13px] font-normal gap-2 mb-2'>
                    <Image
                      src="/icons/calender.svg"
                      alt="calender"
                      width={14}
                      height={14}/>
                      <p>Next Slot, {doctor.nextSlot.date}, {doctor.nextSlot.startTime} - {doctor.nextSlot.endTime}</p>
                  </div>
                  <button className='w-full h-12 rounded bg-amber-500'>Book online</button>
              </div>
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
              <div>
                <Image
                  className='rounded-tl-[10px] rounded-tr-[10px] object-cover mb-3 h-[200px]'
                  src={clinic.image}
                  alt="clinic-img"
                  width={300}
                  height={200}/>
                  <h4 className='text-slate-800 text-xl font-bold mb-3 ml-4'>{clinic.name}</h4>
                  <p className=' text-slate-500 text-base font-normal ml-4'>{clinic.specialisation}</p>
              </div>
            )
          })}
        </div>
      </section>
      {/* tutorial */}
      <section className=' mt-24 w-[85%] mx-auto'>
        <div className='flex justify-between'>
        <h3 className='text-slate-800 text-4xl font-extrabold'>Simplified Online Healthcare Access</h3>
        <button className='bg-amber-500 rounded-[10px] w-52 h-14'>Book an Appointment </button>
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
          <button className='bg-amber-500 rounded-[10px] h-12 w-80'>Book an Appointment </button>
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
