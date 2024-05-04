import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import Layout from "../../Components/Layout"
import NavBarDashboard from "../../Components/NavBarDashboard"
import { Rooms } from "../../Components/Rooms"
import { AllRoomsList } from "../../Components/AllRoomsList"


function AllRooms() {

    const { allRooms } = useContext(GlobalContext)

    console.log(allRooms)
    return(
        <>
            <Layout>
                <NavBarDashboard/>
                <div>
                    <AllRoomsList>
                        {
                            allRooms.data ? allRooms.data.map((room) => (
                                <li key={room.id}>
                                    <Rooms title={room.attributes.name}/>
                                </li>
                            )) : null
                        }

                    </AllRoomsList>

                </div>
            </Layout>
        </>
    )
}

export { AllRooms }