import { createContext, useState, useContext } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habitflow: token")) || "";
  const [auth, setAuth] = useState(token);
  const [userID, setUserID] = useState(() => {
    return parseInt(localStorage.getItem("@Habitflow: userID")) || "";
  });

  const signIn = (userData, setError, history) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        localStorage.clear();
        toast.success("Sucesso ao logar");
        const { access } = response.data;
        localStorage.setItem("@Habitflow: token", JSON.stringify(access));
        const objTest = jwt_decode(access);
        setUserID(objTest.user_id);
        localStorage.setItem("@Habitflow: userID", objTest.user_id);
        setAuth(access);
        history.push("/home");
        console.log(objTest.user_id);
      })

      .catch((err) => toast.error("username ou senha inválidos"));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, signIn, userID }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
