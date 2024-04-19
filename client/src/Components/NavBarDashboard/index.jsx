import { NavLink } from "react-router-dom"
import { userData  } from "../../custom/helpers"
import { useLogout }  from "../../custom/useLogout"


function NavBarDashboard() {


    const { username } = userData();
    const { logout } = useLogout()

    return(
        <>
            <nav className='flex justify-between items-center w-full h-24 top-0 fixed z-10'>
                    <div className='mx-8'>
                        <span className='text-2xl cursor-pointer font-bold text-gray-700'>{username}</span>
                    </div>
                    <div className='flex justify-between items-center mx-8 gap-6'>
                        <NavLink to='/create-account'>
                            <button onClick={logout} className='flex w-full justify-center rounded-md bg-withe px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 hover:text-slate-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-gray-700 hover:border-0'>Log Out</button>
                        </NavLink>
                        
                    </div>
                
            </nav>
        </>
    )
}

export default NavBarDashboard