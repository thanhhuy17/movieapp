import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
// Sắp xếp đường dẫn
// Tất cả các đường dẫn trong routes này đc sử dụng ở App.jsx thông qua <Outlet/>
const router = createBrowserRouter([
  {
    path: "/",
    //file gốc luôn chứa Header -Nội dung - Footer (ở đây có thêm MobileNavagation)
    element: <App />,
    // Tiếp đến là các thành phần con
    children: [
      {
        //Đường dẫn mặc định mà có thêm ký tự rỗng hoặc / thì về trang Home. Trang Home = Trang App.
        path: "",
        element: <Home />,
      },
      {
        // Đường dẫn có mở rộng thêm (chữ cái, số) đằng sau sẽ nhảy qua trang ExplorePage
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        // Đường dẫn có thêm chữ cái, số đằng sau và id sẽ nhảy qua trang DetailsPage
        element: <DetailsPage />,
      },
      {
        // Đường dẫn có thêm chữ search sẽ nhảy qua trang SearchPage

        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
export default router; // Trỏ ra cho main.jsx sử dụng
