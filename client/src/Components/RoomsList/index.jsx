function RoomsList({ children }) {
    return(
        <>
            <div className="w-11/12 max-w-3xl mt-4 flex flex-col justify-start items-start text-left mx-4 overflow-hidden">
                <h2 className="inline-block text-slate-500 mx-6 text-start text-lg ">Rooms</h2> 
                <ul className="w-full px-4 py-4 flex justify-start items-center gap-3 overflow-scroll md:overflow-hidden md:justify-start ">   
                {children}
            </ul>
            </div>
            
            
            
        </>
    )
}

export { RoomsList }