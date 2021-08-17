import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const MyGroup = createContext();

export const MyGroupProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NTgzMzIyLCJqdGkiOiIzNTkxMzJmMmJlM2M0NWFiODRhYzI2MjMwZDVkNjQxYiIsInVzZXJfaWQiOjE5NjF9.x5_KZECg5bX3MA4iVB_0B4rUBQ85fLGAR6VWRP_Tk5s`,
        },
      })
      .then((response) => setMyList(response.data))
      .catch((err) => console.log(err));
  }, []);

  return <MyGroup.Provider value={{ myList }}>{children}</MyGroup.Provider>;
};
export const useMyGroup = () => useContext(MyGroup);
