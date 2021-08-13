import { createContext, useState, useContext } from "react";
import api from "../Services/api";
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

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
        setUserId(jwt_decode(token.id))
        history.push( "/home");
      })
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);