import { useState } from "react"


function usePostData(base_url, urlPlus, jwt, id) {

    const initialData = { name: "", userRoom: ""}

    const [data, setData] = useState(initialData)

    function createElement(e) {
        e.preventDefault()
            

            fetch(`${base_url}${urlPlus}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Authorization: `bearer ${jwt}`,
                    "Content-Type": "application/json",
                }
            })
            .then((res) => res.json())
            .then((response) => response)
            
           
            
            setData({ name: "", userRoom: ""})
    }

    

    

    const handleDataChange = (e) => {
        const info = e.target.value
        setData({data: {name: info, userRoom: id}})
    }

   

    return {
        handleDataChange,
        createElement,
        data,
        
    }
}

export { usePostData }