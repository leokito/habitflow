import { createContext, useState, useEffect, useContext } from "react";

import api from "../../Services/api";

const FindGroup = createContext();

export const FindGroupProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState();

  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get(`/groups/?page=2`, "", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroupsList(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const Subscribe = (data) => {
    api
      .post(`/groups/${data}/subscribe/`, "", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <FindGroup.Provider value={{ groupsList, Subscribe }}>
      {children}
    </FindGroup.Provider>
  );
};

export const useGroupList = () => useContext(FindGroup);
