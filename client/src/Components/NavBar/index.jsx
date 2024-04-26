import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <>
            <nav className='flex justify-between items-center w-full h-24 top-0 fixed z-10'>
                    <div className='mx-8'>
                        <span className='text-2xl cursor-pointer font-medium text-gray-700'>HOME</span>
                    </div>
                    <div className='flex justify-between items-center mx-8 gap-6'>
                        <NavLink to='/login'>
                            <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Login</button>
                        </NavLink>
                        <NavLink to='/create-account'>
                            <button className='flex w-full justify-center rounded-md bg-withe px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 hover:text-slate-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-gray-700 hover:border-0'>Create account</button>
                        </NavLink>
                        
                    </div>
                
            </nav>
        </>
    )
}

export default NavBar