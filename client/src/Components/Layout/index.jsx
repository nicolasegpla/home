// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return(
        <>
            <div className='flex flex-col mt-24 items-center'>
                {children}
            </div>
        </>
    )
}

export default Layout