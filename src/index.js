import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(
   //StrictMode evita inyectar JS desde el lado del usuario.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)