// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store.js";

// Setup Axios
axios.defaults.baseURL = "https://api.themoviedb.org/3"; // Đường dẫn tương đối của API

axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_ACCESS_TOKEN
}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
