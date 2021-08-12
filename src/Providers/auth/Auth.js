import { createContext, useState } from "react";
import api from "../Services/api";

const authContext = createContext()

export const AuthProvider = ({children}) => {
    const token = localStorage.getItem('token') || "";

    const [auth, setAuth] = useState(token)
    const [userId, setUserId] = useState("")

    const logIn = (userData, setError, history) => {
        api
        .post("/sessions/", userData)
        .then((response) => {
        localStorage.setItem("token", response.data.access);
        setAuth(response.data.access);
        setUserId(response.data.id)
        history.push( "/home");
      })
      .catch((error) => setError(true));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);