import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";

const MyGroup = createContext();

export const MyGroupProvider = ({ children }) => {
  const { token } = useAuth();

  const [myList, setMyList] = useState([]);
  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMyList(response.data))
      .catch((err) => console.log(err));
  }, [token]);
  console.log(myList);
  return <MyGroup.Provider value={{ myList }}>{children}</MyGroup.Provider>;
};
export const useMyGroup = () => useContext(MyGroup);
