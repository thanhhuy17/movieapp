import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";

const Home = () => {
  const trendingData = useSelector((state) => state.movie.bannerData);
  return (
    <div>
      <BannerHome />
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-3">Trending Show</h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {trendingData.map((data, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Card
                key={data.id}
                data={data}
                index={index + 1}
                trending={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
