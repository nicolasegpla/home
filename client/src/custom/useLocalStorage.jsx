function useLocalStorage() {



    //saveUserSesion con esta funcion lo que estamos haciendo es guardar los datos de inicio de sesion en LocalStorage//
    //Esta funcion la estamos usando en el customHook useDoLogin//
    const saveUserSesion = (data) => {
        localStorage.setItem("userSesion", JSON.stringify({
            username: data.user.username,
            jwt: data.jwt,
        }) || "''")
    }
    //saveUserSesion end //

    // getUserDataSesion con esta funcion traemos los datos que se guardaron a la hora de hacer login en el localStorage, los parseamos con JSON.stringify y los desestructuramos//
    //lo que se guardo en el localStorage es unicamente el jwt y el username//
    const getUserDataSesion = () => {
        const dataStringify = localStorage.getItem("userSesion") || '""';
        const dataParse = JSON.parse(dataStringify)
        return dataParse;
    }
    const { jwt, username } = getUserDataSesion()
    //getUserDataSesion end//

    

    
    


    return {
        saveUserSesion,
        getUserDataSesion,
        jwt,
        username,
    }
}

export { useLocalStorage }