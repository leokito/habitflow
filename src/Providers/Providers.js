import { NewGroupProvider } from "./addGroups/AddGroups";
import { AddHabitProvider } from "./addHabitos/AddHabitos";
import { AuthProvider } from "./auth/Auth";
import { EditionProvider } from "./editGroup/EditGroup";
import { FindGroupProvider } from "./findGroups/FindGroups";
import { FindHabitsProvider } from "./findHabitos/FindHabitos";
import { MyGroupProvider } from "./myGroups/MyGroups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AddHabitProvider>
        <FindHabitsProvider>
          <NewGroupProvider>
            <FindGroupProvider>
              <MyGroupProvider>
                <EditionProvider>{children}</EditionProvider>
              </MyGroupProvider>
            </FindGroupProvider>
          </NewGroupProvider>
        </FindHabitsProvider>
      </AddHabitProvider>
    </AuthProvider>
  );
};
export default Providers;
