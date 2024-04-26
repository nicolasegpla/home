import { PlusIcon } from "@heroicons/react/16/solid";

function ButtonCreate() {
    return(
        <>
            
            <button className="flex justify-center items-center absolute bottom-12 right-12 w-14 h-14 rounded-full bg-indigo-600 "><PlusIcon className="text-white w-10 h-10" /></button>
            
        </>
    )
}

export default ButtonCreate;