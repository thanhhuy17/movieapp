import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieoSlide"; // Import slice

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");

      // Dispatch action với dữ liệu
      dispatch(setBannerData(response.data.results));

      // console.log("Response", response.data.results);
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
