import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
// import Card from "../components/Card";
import HorizonetalScrollCard from "../components/HorizonetalScrollCard";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movie.bannerData);

  // Get NowPlayingData
  // const [nowPlayingData, setNowPlayingData] = useState([]);
  // const fetchNowPlayingData = async () => {
  //   try {
  //     const response = await axios.get("movie/now_playing");
  //     setNowPlayingData(response.data.results);
  //   } catch (error) {
  //     console.log("Error Get NowPlayingData", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchNowPlayingData();
  // }, []);

  const { data: nowPlayingData } = useFetch("movie/now_playing");
  const { data: topRatesData } = useFetch("movie/top_rated");
  const { data: popularMovie } = useFetch("movie/popular");

  return (
    <div>
      <BannerHome />

      <HorizonetalScrollCard
        data={trendingData}
        heading={"Top Trending"}
        trending={true}
      />

      <HorizonetalScrollCard data={nowPlayingData} heading={"Now Playing"} />

      <HorizonetalScrollCard data={topRatesData} heading={"Top Rated"} />

      <HorizonetalScrollCard data={popularMovie} heading={"Popular"} />
    </div>
  );
};

export default Home;
