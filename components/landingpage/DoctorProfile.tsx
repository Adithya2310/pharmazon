import Image from "next/image"
import { Doctor } from "@/lib/types"

const DoctorProfile = ({doctorPhoto,doctorName,clinicName,specialization,experience,nextSlot}:Doctor) => {
  return (
    <div className=' p-4'>
    <Image
      className='rounded-[10px] mb-4'
      src={doctorPhoto}
      alt="doctor-image"
      width={300}
      height={174}/>
      <p className='text-amber-500 text-[13px] font-normal mb-2'>{clinicName}</p>
      <h4 className='text-slate-800 text-xl font-medium mb-2'>{doctorName}</h4>
      <p className='text-slate-800 text-[15px] font-normal mb-2'>{specialization}</p>
      <p className='text-slate-800 text-[15px] font-normal mb-5'>{experience} Years of Experience</p>
      <div className='flex text-slate-500 text-[13px] font-normal gap-2 mb-2'>
        <Image
          src="/icons/calender.svg"
          alt="calender"
          width={14}
          height={14}/>
          <p>Next Slot, {nextSlot.date}, {nextSlot.startTime} - {nextSlot.endTime}</p>
      </div>
      <button className='w-full h-12 rounded text-white bg-amber-500'>Book online</button>
  </div>
  )
}

export default DoctorProfile