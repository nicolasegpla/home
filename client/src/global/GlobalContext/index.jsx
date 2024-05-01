/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import { useLogout }  from "../../custom/useLogout"
import { useDoLogin }  from "../../custom/useDoLogin"
import { useLocalStorage } from "../../custom/useLocalStorage";
import qs from 'qs'
import { usePostUserRegister } from "../../custom/usePostUserRegister";
import { usePostData } from "../../custom/usePostData";



//vamos a crear un contexto en react para gestionar mi estado global//
const GlobalContext = React.createContext();
//vamos a crear un contexto en react para gestionar mi estado global//

function GlobalProvider({children}) {

    const base_url = 'http://localhost:1337/api/';
    const urlPlus = 'rooms';

    
    const [ userId, setUserId ] = useState(null);
    const [modalCreateRoom, setModalCreateRoom] = useState(false); // este es el estado para abrir o cerra el modal que crea un "room nuevo"//
    const [rooms, setRooms] = useState({});

    
    const { username, jwt } = useLocalStorage();
    

    const { handleDataChange, createElement, data } = usePostData(base_url, urlPlus, jwt, userId)
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
            .then((response) => response)
        },[jwt, query, userId])

        useEffect(() => {
            fetch(`http://localhost:1337/api/rooms?populate=*&filters[userRoom][$eq]=${userId}`, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            .then((res) => res.json())
            .then((response) => {
                setRooms(response)
            })
        },[jwt, query, userId, data])


        function closeModalRoom () {
            setModalCreateRoom(estado => !estado)
        }

        console.log(rooms)

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
                base_url,
                handleDataChange,
                createElement,
                data,
                rooms,
               
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider}