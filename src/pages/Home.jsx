import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
// import Card from "../components/Card";
import HorizonetalScrollCard from "../components/HorizonetalScrollCard";

const Home = () => {
  const trendingData = useSelector((state) => state.movie.bannerData);
  // const trendingLength = trendingData.length;
  // console.log("trending: ", trendingData);
  return (
    <div>
      <BannerHome />

      <HorizonetalScrollCard data={trendingData} heading={"Top Trending"} />
    </div>
  );
};

export default Home;
