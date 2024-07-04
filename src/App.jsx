import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios"; //Use Call URL API
import { useEffect } from "react";
import { useDispatch } from "react-redux"; // dùng để gửi các Action lên Redux
import { setBannerData, setImageURL } from "./store/movieoSlide";
// App này là các thành phần mặc định của 1 trang web
function App() {
  const dispatch = useDispatch();
  // Get Trending , async () =>: dùng để xử lý cá TH bất đồng bộ (Xử lý các yêu cầu API: Fetch data từ server, API external.)
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week"); // dùng hàm axios để chờ lấy API và gán cho response
      // console.log(
      //   "Xem dữ liệu setBannerData: ",
      //   setBannerData(response.data.results)
      // );
      dispatch(setBannerData(response.data.results)); //đưa dữ liệu vào cho redux cho các trang khác sử dụng
    } catch (error) {
      console.log("Error Get Trending", error);
    }
  };
  //Get Configuration
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");

      dispatch(setImageURL(response.data.images.secure_base_url + "original")); //đưa dữ liệu vào cho redux cho các trang khác sử dụng
    } catch (error) {
      console.log("error Get Configuration", error);
    }
  };
  // chỉ cho lấy data 1 lần khi render page.
  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
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
