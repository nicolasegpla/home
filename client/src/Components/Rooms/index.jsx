import '../../App.css'

// eslint-disable-next-line react/prop-types
function Rooms({ title }) {
    return(
        <>
            <div className="flex justify-between items-center w-40 h-24 rounded bg-indigo-300">
                <h3 className='w-20 h-auto mx-4 text-base'>{title}</h3>
                <div className='mr-4 flex flex-col justify-center items-center gap-1'>
                    <p className='text-xs'>Tasks</p>
                    <div className='w-6 h-6 flex justify-center items-center bg-slate-100 rounded-full'>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Rooms }