import { useNavigate } from "react-router-dom";


//Con este customHook vamos a cerra sesion y a borrar la informacion almacenada en nuestro localStorage para proteger la informacion.
function useLogout() {

  const navigate = useNavigate();

  const logout = () => {
      localStorage.setItem("userSesion", "");
      navigate("/login");
      window.location.reload();
  };
  return {
    logout,
  }
}


export { useLogout }
