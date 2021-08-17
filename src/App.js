import GlobalStyle from "./Style/GlobalStyle";
import Routes from "./Router/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GroupsPage } from "./Pages/groups/Index";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GroupsPage />
      <ToastContainer />
    </div>
  );
}

export default App;
