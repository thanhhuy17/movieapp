import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; // dùng để gửi các Action lên Redux
import { setBannerData, setImageURL } from "./reducers/movie";
import {
  fetchConfiguration,
  fetchTrendingData,
} from "./reducers/movie/actions";

// App này là các thành phần mặc định của 1 trang web
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrendingData().then((res) =>
      // console.log("ResponseHuy: ",res)
      dispatch(setBannerData(res.data.results))
    );
    fetchConfiguration().then((res) =>
      dispatch(setImageURL(res.data.images.secure_base_url + "original"))
    );
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />

      <div className="min-h-[90vh]">
        {/* Include element in Router Dom => index.jsx  (Outlet hiển thị theo React)*/}
        <Outlet />
      </div>
      <Footer />

      <MobileNavigation />
    </main>
  );
}

export default App;
