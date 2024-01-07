
const Navbar = () => {
  return (
    <div className="bg-yellow-50">
    <nav className='flex justify-between items-center w-[85%] pt-11 mx-auto'>
        <h1 className='text-slate-800 text-3xl font-bold leading-loose cursor-pointer'>Pharmazon</h1>
        <ul className='flex gap-5'>
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal'>Home</li>
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal'>About Us</li>
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal'>Clinics</li>
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal'>Prescribers</li>
            <li className='text-center cursor-pointer text-slate-800 text-base font-normal'>Contact Us</li>
        </ul>
        <div className='flex gap-5'>
            <button className='text-center text-slate-800 text-lg font-medium'>Sign In</button>
            <button className='w-32 h-12 bg-slate-800 rounded-[5px] text-white z-10'>Register</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;

