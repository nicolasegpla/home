import { NavLink } from 'react-router-dom'


function ButtonBack() {

    
    
    return(
        <>
            <NavLink to="/dashboard">
                <p className="inline-block text-slate-500 text-end text-lg underline underline-offset-2 cursor-pointer mr-10">Go back</p>
            </NavLink>
            
        </>
    )
}

export {ButtonBack}