import { PlusIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

function ButtonCreate() {

    const { closeModalRoom } = useContext(GlobalContext);

    return(
        <>
            
            <button onClick={closeModalRoom} className="flex justify-center items-center absolute bottom-8 right-8 w-14 h-14 rounded-full bg-indigo-600 "><PlusIcon className="text-white w-10 h-10" /></button>
            
        </>
    )
}

export default ButtonCreate;