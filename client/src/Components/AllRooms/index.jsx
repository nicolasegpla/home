import { NavLink } from 'react-router-dom'
import '../../App.css'

function AllRooms() {

    
    
    return(
        <>
            <NavLink to="/all-rooms">
                <p className="inline-block text-slate-500 text-end text-lg underline underline-offset-2 cursor-pointer">All rooms</p>
            </NavLink>
            
        </>
    )
}

export {AllRooms}