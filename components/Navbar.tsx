import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-yellow-50">
    <nav className='flex justify-between items-center w-[85%] pt-11 mx-auto'>
      <Link href="/">
        <h1 className='text-slate-800 text-3xl font-bold leading-loose cursor-pointer'>Pharmazon</h1>
      </Link>
        <ul className='flex gap-10'>
          <Link href="/">
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal hover:text-slate-900 transition-colors duration-300'>Home</li>
          </Link>
          <Link href="/about">
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal hover:text-slate-900 transition-colors duration-300'>About Us</li>
          </Link>
          <Link href="/clinics">
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal hover:text-slate-900 transition-colors duration-300'>Clinics</li>
          </Link>
          <Link href="/prescribers">
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal hover:text-slate-900 transition-colors duration-300'>Prescribers</li>
          </Link>
          <Link href="/contact">
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal hover:text-slate-900 transition-colors duration-300'>Contact Us</li>
          </Link>
        </ul>
        <div className='flex gap-5'>
            <button className='text-center text-slate-800 text-lg hover:text-slate-900 transition-colors duration-300 font-medium'>Sign In</button>
            <button className='w-32 h-12 bg-slate-800 rounded-[5px] text-white z-10 hover:bg-slate-900 transition-colors duration-300'>Register</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;

