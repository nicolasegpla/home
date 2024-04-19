import { useNavigate } from "react-router-dom";


function useLogout() {

  const navigate = useNavigate();

  const logout = () => {
      localStorage.setItem("user", "");
      navigate("/login");
      window.location.reload();
  };


  return {
    logout,
  }
}


export { useLogout }
