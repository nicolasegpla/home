import { useState } from "react";



function usePostUserRegister() {

    const initialUser = { email: "", password: "", username: "" };

    const [user, setUser] = useState(initialUser)

    const url = `http://localhost:1337/api/auth/local/register`;

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
            .then((res) => {console.log("Success", res.user.confirmed), location.href = 'http://localhost:5173/login';})
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