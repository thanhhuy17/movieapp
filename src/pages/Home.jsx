import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";

import HorizonetalScrollCard from "../components/HorizonetalScrollCard";
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
  const { data: popularMovie } = useFetch("tv/popular");
  const { data: onTheAir } = useFetch("tv/on_the_air");

  return (
    <div>
      <BannerHome />

      <HorizonetalScrollCard
        data={trendingData}
        heading={"Top Trending"}
        trending={true}
      />

      <HorizonetalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>

      <HorizonetalScrollCard data={topRatesData} heading={"Top Rated"} media_type={"movie"}/>

      <HorizonetalScrollCard data={popularMovie} heading={"Popular"} media_type={"tv"}/>

      <HorizonetalScrollCard data={onTheAir} heading={"The next 7 days"} media_type={"tv"}/>
    </div>
  );
};

export default Home;
