import { ButtonBack } from "../ButtonBack"


// eslint-disable-next-line react/prop-types
function AllRoomsList( {children}) {
    return(
        <>
            <div className="w-full max-w-3xl mt-4 flex flex-col justify-center items-center text-left">
                
                <ul 
                    className="w-full px-4 py-4 flex justify-center items-center gap-3 flex-wrap">   
                    <div className=" w-full flex justify-between">
                        <h2 className="inline-block text-slate-500 mx-10 text-start text-lg ">All rooms</h2>
                        <ButtonBack/>
                    </div>
                    {children}
                </ul>                
            </div>  
        </>
    )
}

export {AllRoomsList}