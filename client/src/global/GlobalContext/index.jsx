/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import { useLogout }  from "../../custom/useLogout"
import { useDoLogin }  from "../../custom/useDoLogin"
import { useLocalStorage } from "../../custom/useLocalStorage";
import qs from 'qs'
import { usePostUserRegister } from "../../custom/usePostUserRegister";



//vamos a crear un contexto en react para gestionar mi estado global//
const GlobalContext = React.createContext();
//vamos a crear un contexto en react para gestionar mi estado global//

function GlobalProvider({children}) {


    
    const [ userId, setUserId ] = useState(null);
    const [modalCreateRoom, setModalCreateRoom] = useState(false); // este es el estado para abrir o cerra el modal que crea un "room nuevo"//

    
    const { username, jwt } = useLocalStorage();
    
    
    const { logout } = useLogout()
    const { doLogin, handleUserLogin, userLogin,} = useDoLogin()
    const { registration, handleUserChange, user, } = usePostUserRegister()

    const query = qs.stringify({
        populate: {
            users_permissions_user:{
                populate:"*"
            }
        }
    })

   
        useEffect(() => {
            fetch(`http://localhost:1337/api/users?filters[username][$eq]=${username}`, {
                method: "GET",
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            .then((res) => res.json())
            .then((data) => { setUserId(data[0].id)})
        }, [jwt, username])
    
        

    

    
        useEffect(() => {
            fetch(`http://localhost:1337/api/cervezas?populate=*&filters[user][$eq]=${userId}`, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
            })
        },[jwt, query, userId])


        function closeModalRoom () {
            setModalCreateRoom(estado => !estado)
        }

    return(
        <GlobalContext.Provider 
            value={{
                username,
                logout,
                doLogin,
                handleUserLogin,
                userLogin,
                registration,
                handleUserChange,
                user,
                modalCreateRoom,
                setModalCreateRoom,
                closeModalRoom,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider}