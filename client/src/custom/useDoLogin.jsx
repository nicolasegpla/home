import { useState } from "react";
import { storeUser } from "./helpers";
import { useNavigate } from "react-router-dom";


function useDoLogin() {

  const initialValue = ({ identifier: "", password: ""})
  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState(initialValue)
  



  function doLogin(e) {
    e.preventDefault()

    const url = 'http://localhost:1337/api/auth/local';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(userLogin),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.jwt) {
            storeUser(data);
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
        console.log(target.value)
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