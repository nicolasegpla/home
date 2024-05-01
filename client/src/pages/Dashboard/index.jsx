import CreateRoom from "../../Components/CreateRoom"
import Layout from "../../Components/Layout"
import NavBarDashboard from "../../Components/NavBarDashboard"
import ButtonCreate from "../../Components/ButtomCreate"
import FormCreateRoom from "../../Components/FormCreateRoom"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { ModalCreateRoom } from "../../Components/ModalCreateRoom"


function Dashboard() {

    
    const { modalCreateRoom} = useContext(GlobalContext)


    return(
        <>
            <Layout>
                <NavBarDashboard/>
                
                <CreateRoom />
               
                <ButtonCreate />
                <ModalCreateRoom>
                    { modalCreateRoom && <FormCreateRoom/> }
                </ModalCreateRoom>

                
            </Layout>
        </>
    )
}

export default Dashboard