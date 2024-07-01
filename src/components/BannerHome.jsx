import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoSlide.bannerData); // Sử dụng "movieoSlide" thay vì "movieoData" .movieoSlide.bannerData

  console.log("Banner Home Log", bannerData);
  return <div>BannerHome---</div>;
};

export default BannerHome;
