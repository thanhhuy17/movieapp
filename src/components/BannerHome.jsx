import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);

  console.log("Banner Home", bannerData);
  return <div>BannerHome---</div>;
};

export default BannerHome;
