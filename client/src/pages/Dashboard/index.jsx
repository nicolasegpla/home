import CreateRoom from "../../Components/CreateRoom"
import Layout from "../../Components/Layout"
import NavBarDashboard from "../../Components/NavBarDashboard"
import ButtonCreate from "../../Components/ButtomCreate"
import { useLocalStorage } from "../../custom/useLocalStorage"


function Dashboard() {

    const { jwt, username } = useLocalStorage()

    console.log({jwt, username })

    return(
        <>
            <Layout>
                <NavBarDashboard/>
                <CreateRoom />
                <ButtonCreate />
            </Layout>
        </>
    )
}

export default Dashboard