
import Layout from "../Layout"

function CreateRoom() {

    

        
    
    return(
        <>
            <Layout>
                <form className="flex flex-col gap-3" action="">
                    <input className="border-2" type="text" />
                    <textarea className="border-2" type="textarea" />
                    <button className="bg-lime-500	" type="submit">enviar</button>
                </form>
            </Layout>
        </>
    )
}

export default CreateRoom