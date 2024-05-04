import { useRoutes, BrowserRouter } from 'react-router-dom'
import CreateAccount from '../CreateAccount'
import Home from '../Home'
import Login from '../Login'
import MyAccount from '../MyAccount'
import RecoverKey from '../RecoverKey'
import NotFound from '../NotFound'
import Dashboard from '../Dashboard'
import '../../App.css'
import { GlobalProvider } from '../../global/GlobalContext'
import { AllRooms } from '../AllRooms'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/create-account', element: <CreateAccount /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFound /> },
    { path: '/recover-key', element: <RecoverKey /> },
    { path: '/dashboard', element: <Dashboard />},
    { path: '/all-rooms', element: <AllRooms />},
    
  ])

  return routes
}

function App() {
        
  return (
    <>
          <BrowserRouter>
            <GlobalProvider>
              <AppRoutes />
            </GlobalProvider>
          </BrowserRouter> 
    </>
  )
}

export default App
