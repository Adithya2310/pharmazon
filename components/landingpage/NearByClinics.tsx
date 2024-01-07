import Image from "next/image"
import { NearbyClinic } from "@/lib/types";

const NearByClinics = ({image,name,specialisation}:NearbyClinic) => {
  return (<div>
    <Image
      className='rounded-tl-[10px] rounded-tr-[10px] object-cover mb-3 h-[200px]'
      src={image}
      alt="clinic-img"
      width={300}
      height={200}/>
      <h4 className='text-slate-800 text-xl font-bold mb-3 ml-4'>{name}</h4>
      <p className=' text-slate-500 text-base font-normal ml-4'>{specialisation}</p>
  </div>
  )
}

export default NearByClinics