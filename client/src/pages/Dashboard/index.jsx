import Layout from "../../Components/Layout"
import NavBarDashboard from "../../Components/NavBarDashboard"
import ButtonCreate from "../../Components/ButtomCreate"
import FormCreateRoom from "../../Components/FormCreateRoom"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { ModalCreateRoom } from "../../Components/ModalCreateRoom"
import { RoomsList } from "../../Components/RoomsList"
import { Rooms } from "../../Components/Rooms"


function Dashboard() {

    
    const { modalCreateRoom, rooms} = useContext(GlobalContext)

    return(
        <>
            <Layout>
                <NavBarDashboard/>
                <RoomsList>
                    {
                        rooms.data ? rooms.data.map((room) => (
                            <li key={room.id}><Rooms title={room.attributes.name} /></li>
                        )) : null
                    }
                </RoomsList>
                <ButtonCreate />
                <ModalCreateRoom>
                    { modalCreateRoom && <FormCreateRoom/> }
                </ModalCreateRoom>

                
            </Layout>
        </>
    )
}

export default Dashboard