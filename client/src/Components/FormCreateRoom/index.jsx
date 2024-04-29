import { XMarkIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"

function FormCreateRoom() {

    const { closeModalRoom } = useContext(GlobalContext);

    return(
        <>
            <div className="w-9/12 h-72 flex flex-col justify-center items-center bg-indigo-700 text-slate-200 rounded-md gap-6 mx-auto mt-40 drop-shadow-xl ">
                <h2 className="text-4xl font-semibold text-center">Create a workspace</h2>
                <div className="flex flex-col justify-center items-center text-center w-96 gap-4">
                    <input className="w-56 h-12 rounded-md px-3 cursor-pointer" placeholder="kitchen" type="text" />
                    <button className="w-56 h-12 bg-slate-100 text-indigo-600 font-semibold">Create room</button>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10">
                <button onClick={closeModalRoom} className="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full drop-shadow-lg"><XMarkIcon className="text-black w-10 h-10 opacity-65" /></button>
            </div>
        </>
    )
}

export default FormCreateRoom