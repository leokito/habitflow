import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const MyGroup = createContext();

export const MyGroupProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitflow: token") || "";
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
  }, []);

  return <MyGroup.Provider value={{ myList }}>{children}</MyGroup.Provider>;
};
export const useMyGroup = () => useContext(MyGroup);
