import { NGProvider } from "./addGroups/AddGroups";
import { FGProvider } from "./findGroups/FindGroups";

const Providers = ({ children }) => {
  return (
    <NGProvider>
      <FGProvider>{children}</FGProvider>
    </NGProvider>
  );
};
export default Providers;
