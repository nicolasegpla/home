import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";


export const Protector = ({ Component }) => {
  const navigate = useNavigate();
  const { jwt } = useLocalStorage()

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return Component;
};

//esta es la url base para hacer peticiones a nuestra api//
export const URL_BASE = 'http://localhost:1337/api/'
//end//