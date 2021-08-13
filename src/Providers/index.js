import { NewGroupProvider } from "./addGroups/AddGroups";
import { FindGroupProvider } from "./findGroups/FindGroups";
import { FindHabitsProvider } from "./findHabitos/FindHabitos";

const Providers = ({ children }) => {
  return (
    <FindHabitsProvider>
      <NewGroupProvider>
        <FindGroupProvider>{children}</FindGroupProvider>
      </NewGroupProvider>
    </FindHabitsProvider>
  );
};
export default Providers;
