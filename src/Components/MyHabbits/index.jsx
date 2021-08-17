import { useFindHabits } from "../../Providers/findHabitos/FindHabitos";

export const MyHabbitCard = () => {
    const {findHabits} = useFindHabits();

    return (
        <div>
            {findHabits.map((elem) =>(
                <div>
                    <p>title: {elem.title}</p>
                    <p>category: {elem.category}</p>
                    <p>difficulty: {elem.difficulty}</p>
                    <p>frequency: {elem.frequency}</p>
                </div>
            ))}
        </div>
    )
}