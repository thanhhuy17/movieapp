import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
// import axios from "axios";

//Setup Axios
// axios.defaults.baseURL = "https://api.themoviedb.org/3";

// axios.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
