import { useSelector } from "react-redux";

const BannerHome = () => {
  // const bannerData = useSelector((state) => state.movie.bannerData); // Sử dụng "movieoSlide" thay vì "movieoData" .movieoSlide.bannerData
  const bannerData = useSelector((state) => state.movie.bannerData);
  const imageURL = useSelector((state) => state.movie.imageURL);
  console.log("Banner Home Log", bannerData);
  console.log("Image Home Log", imageURL);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          console.log("Data", data);
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative">
              <div className="w-full h-full">
                <img
                  className="h-full object-cover w-full"
                  src={imageURL + data.backdrop_path}
                  alt=""
                />
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto ">
                <div className="w-full absolute bottom-0 max-w-md px-4">
                  <h2 className="font-bold text-2xl">{data.title}</h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View: {Number(data.popularity).toFixed(0)}</p>
                  </div>

                  <button className="bg-white px-4 py-2 text-black font-bold rounded-lg mt-4 transition-colors hover:bg-gradient-to-r from-orange-700 to-orange-300 hover:scale-110 ">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
