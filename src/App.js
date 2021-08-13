import GlobalStyle from "./Style/GlobalStyle";
import Routes from "./Router/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
