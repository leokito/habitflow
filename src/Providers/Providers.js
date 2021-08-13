import { NewGroupProvider } from "./addGroups/AddGroups";
import { AuthProvider } from "./auth/Auth";
import { FindGroupProvider } from "./findGroups/FindGroups";
import { FindHabitsProvider } from "./findHabitos/FindHabitos";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <FindHabitsProvider>
        <NewGroupProvider>
          <FindGroupProvider>{children}</FindGroupProvider>
        </NewGroupProvider>
      </FindHabitsProvider>
    </AuthProvider>
  );
};
export default Providers;
