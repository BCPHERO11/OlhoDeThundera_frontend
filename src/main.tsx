import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

if (window.location.pathname === "/") {
    window.history.replaceState({}, "", "/home");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
