// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      console.log("Response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        {/* Include element in Router Dom => index.jsx */}
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
