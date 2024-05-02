import { NavLink } from "react-router-dom"
import Layout from "../../Components/Layout"
import { HomeIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"





function Login() {

    const { userLogin, handleUserLogin, doLogin } = useContext(GlobalContext)

 

    return(
        <>
            <Layout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <HomeIcon className='mx-auto h-10 w-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email / Username
              </label>
              <div className="mt-2">
                <input
                  onChange={handleUserLogin}
                  value={userLogin.identifier}
                  id="identifier"
                  name="identifier"
                  type="identifier"
                  autoComplete="identifier"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleUserLogin}
                  value={userLogin.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={doLogin}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <NavLink to='/'>
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-center my-5 underline">Go back</p>
        </NavLink>
        <div>
          <p className="text-center mt-16">Do you need an account?</p>
          <NavLink to='/create-account'>
            <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-center my-1 underline cursor-pointer">Create account</p>
          </NavLink>
          
        </div>

        
        </div>
      </div>
            </Layout>
        </>
    )
}

export default Login