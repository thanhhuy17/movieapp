import axios from "axios";

// Get Trending , async () =>: dùng để xử lý cá TH bất đồng bộ (Xử lý các yêu cầu API: Fetch data từ server, API external.)
export const fetchTrendingData = async () => {
  try {
    return await axios.get("/trending/all/week"); // dùng hàm axios để chờ lấy API và gán cho response
    // console.log(
    //   "Xem dữ liệu setBannerData: ",
    //   setBannerData(response.data.results)
    // );
  } catch (error) {
    console.log("Error Get Trending", error);
  }
};
//Get Configuration
export const fetchConfiguration = async () => {
  try {
    return await axios.get("/configuration");
  } catch (error) {
    console.log("error Get Configuration", error);
  }
};


