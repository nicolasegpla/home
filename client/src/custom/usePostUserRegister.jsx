import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "./helpers"




function usePostUserRegister() {

    const initialUser = { email: "", password: "", username: "" };
    

    const [user, setUser] = useState(initialUser)

    const url = `${URL_BASE}auth/local/register`;

    const navigate = useNavigate();

    function registration(e) {
        e.preventDefault()
        
        
        if(user.username && user.email && user.password) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((res) => {console.log("Success", res.user.confirmed), navigate("/login");})
            .catch((error) => {console.error("Error", error)})
        }else {
            console.log('no se pudo crear el usuario')
        }

        setUser({
            email: "",
            password: "",
            username: "",
        })

        
        

    }

    const handleUserChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
          ...currentUser,
          [name]: value,
        }));
      };

    return {
        registration,
        handleUserChange,
        user,
    }
}

export { usePostUserRegister }