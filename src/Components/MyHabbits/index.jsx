import { toast } from "react-toastify";
import { useFindHabits } from "../../Providers/findHabitos/FindHabitos";
import api from "../../Services/api";
import { useAuth } from "../../Providers/auth/Auth";

export const MyHabbitCard = () => {
    const {findHabits} = useFindHabits();
    const {token} = useAuth();

    const handlerDelete = (habitId) => {
        api.delete(
            `/habits/${habitId}`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                },
            }
        ).then(()=> {
            setTimeout(()=> 300);
            toast.success("Hábito Removido");
        });
    }

    return (
        <div>
            {findHabits.map((elem) =>(
                <div>
                    <p>title: {elem.title}</p>
                    <p>category: {elem.category}</p>
                    <p>difficulty: {elem.difficulty}</p>
                    <p>frequency: {elem.frequency}</p>
                    <button onCLick={() => handlerDelete}>Excluir Hábito</button>
                </div>
               
            ))}
        </div>
    )
}