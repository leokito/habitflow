import { createContext, useContext, useState } from "react";
import api from "../../Services/api";

const RemoveActivity = createContext();

export const RemoveActivityProvider = ({children}) => {


    const RemoveFromActivity = (info) => {
        api.delete(`/activities/${info.id}`,
        {
            headers: {
                Authorization: `Bearer `,
            }
        }
        )
    }

    return(
        <RemoveActivity.Provider value={{ RemoveFromActivity}}>
            {children}
        </RemoveActivity.Provider>
    );
}

export const RemoveActivityContext = () => useContext(RemoveActivity);