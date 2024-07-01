import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { setBannerData } from "./store/movieoSlide";

import { movieoSlide } from "./store/movieoSlide";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");

      // Dispatch action với dữ liệu
      // console.log("Response", response.data.results); // đúng ra kết quả

      // console.log("Check setBannerData", setBannerData);

      dispatch(movieoSlide.actions.setBannerData(response.data.results)); // để setBannerData là lỗi
    } catch (error) {
      console.log("error HUY", error);
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
