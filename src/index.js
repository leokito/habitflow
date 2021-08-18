import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ptBr from "antd/lib/locale/pt_BR";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers/Providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBr}>
        <Providers>
        <App />
        </Providers>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
