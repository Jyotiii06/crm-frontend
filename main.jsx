import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/navbar.css";
import "./styles/table.css";
import "./components/login.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);