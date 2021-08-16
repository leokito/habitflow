import { createContext, useState, useContext } from "react";
import api from "../../Services/api";

const AddActivity = createContext();

export const AddActivityProvider = ({children}) => {

    const [activities, setActivities] = useState([]);

    const AddNewActivity = (info) => {

        api.post(`/activities/`,
        {
            title: info.name,
            realization_time: info.dataHora /* preciso escolher um horario e uma data para realizar a atividade cadastrada */,
            group: info.id /* preciso pegar o id do grupo que desejo colocar minha activity */ ,
        },
        {
            headers: {
              Authorization: `Bearer `,
            },
          }
        ).then(
            (response) => setActivities([...activities, response.data.results])
        )
        .catch((err) => console.log(err));
    }

    return(
        <AddActivity.Provider value={{ activities, setActivities, AddNewActivity}}>
            {children}
        </AddActivity.Provider>
    )
};

export const ContextAddNewActivity = () => useContext(AddActivity)