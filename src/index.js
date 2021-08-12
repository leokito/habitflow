import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css"
import { ConfigProvider } from "antd";
import ptBr from 'antd/lib/locale/pt_BR'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
