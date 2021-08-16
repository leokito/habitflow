import { NewGroupProvider } from "./addGroups/AddGroups";
import { AddHabitProvider } from "./addHabitos/AddHabitos";
import { AuthProvider } from "./auth/Auth";
import { FindGroupProvider } from "./findGroups/FindGroups";
import { FindHabitsProvider } from "./findHabitos/FindHabitos";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
        <AddHabitProvider>
      <FindHabitsProvider>
        <NewGroupProvider>
          <FindGroupProvider>{children}</FindGroupProvider>
        </NewGroupProvider>
      </FindHabitsProvider>
      </AddHabitProvider>
    </AuthProvider>
  );
};
export default Providers;
