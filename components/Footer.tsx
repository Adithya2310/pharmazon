import Image from "next/image"

const Footer = () => {
  return (
          <footer className=' px-[6%] mx-auto pt-10 pb-14 bg-[#1D2939]'>
          <h6 className='text-center text-white text-xl font-medium'>This is not for URGENT OR Emergency Treatment – Call 999 and ask for medical assistance</h6>
          <div className='flex justify-between items-center mt-14 mb-10'>
            <h3 className='text-white text-3xl font-semibold'>Pharmazon</h3>
            <ul className='flex justify-between text-white text-base font-medium gap-12'>
              <li className="cursor-pointer">
              About Us
              </li>
              <li className="cursor-pointer">
              Careers
              </li>
              <li className="cursor-pointer">
              24/7 Support
              </li>
            </ul>
            <ul className='flex justify-between gap-6'>
              <li>
                <Image
                className=" cursor-pointer"
                src="/icons/placeholder.svg"
                alt="placholder"
                width={24}
                height={24}/>
              </li>
              <li>
                <Image
                className=" cursor-pointer"
                src="/icons/placeholder.svg"
                alt="placholder"
                width={24}
                height={24}/>
              </li>
              <li>
                <Image
                className=" cursor-pointer"
                src="/icons/placeholder.svg"
                alt="placholder"
                width={24}
                height={24}/>
              </li>
              <li>
                <Image
                className="cursor-pointer"
                src="/icons/placeholder.svg"
                alt="placholder"
                width={24}
                height={24}/>
              </li>
            </ul>
          </div>
          <div className='bg-amber-500'>
  
          </div>
          <p className='text-center text-white text-xl font-normal border-t border-amber-500 pt-8'>© 2023 Pharmazon. All Rights Reserved.</p>
        </footer>
  )
}

export default Footer