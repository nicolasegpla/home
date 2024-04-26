import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { URL_BASE } from "./helpers"





function useDoLogin() {

  const { saveUserSesion } = useLocalStorage();
  

  const initialValue = ({ identifier: "", password: ""})
  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState(initialValue)
 

  function doLogin(e) {
    e.preventDefault()

    fetch(`${URL_BASE}auth/local`, {
      method: 'POST',
      body: JSON.stringify(userLogin),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.jwt) {
            saveUserSesion(data);
            navigate("/dashboard")
        }
    })
    .catch((error) => {console.error(error)})


        setUserLogin({
            identifier: "",
            password: "",
        })

        
  }


    const handleUserLogin = ({ target }) => {
        const { name, value } = target;
        setUserLogin((currentUser) => ({
        ...currentUser,
        [name]: value,
        }));
    };

    return{
        doLogin,
        handleUserLogin,
        userLogin,
    }
}

export { useDoLogin }