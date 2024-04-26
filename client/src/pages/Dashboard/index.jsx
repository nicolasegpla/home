import CreateRoom from "../../Components/CreateRoom"
import Layout from "../../Components/Layout"
import NavBarDashboard from "../../Components/NavBarDashboard"
import { useLocalStorage } from "../../custom/useLocalStorage"


function Dashboard() {

    const { jwt, username } = useLocalStorage()

    console.log({jwt, username })

    return(
        <>
            <Layout>
                <NavBarDashboard/>
                <CreateRoom />
            </Layout>
        </>
    )
}

export default Dashboard