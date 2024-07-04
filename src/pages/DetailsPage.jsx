/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import useFetchDetails from "../Hooks/useFetchDetail";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizonetalScrollCard from "../components/HorizonetalScrollCard";
import useFetch from "../Hooks/useFetch";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movie.imageURL);

  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  // console.log("Data Detail Page: ", data);

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");

  const { data: castDetail } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  const { data: similorData } = useFetch(
    `/${params.explore}/${params.id}/similar`
  );

  const { data: recommendationData } = useFetch(
    `/${params.explore}/${params.id}/recommendations`
  );

  // console.log("Data Cast: ", castDetail);
  const writer = castDetail?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    .join(", ");
  // console.log("writer", writer);

  // console.log("check scroll: ", wayBackInitial);

  return (
    <div>
      <div className="w-full h-[300px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={imageURL + data?.backdrop_path}
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto pt-16 lg:py-1 lg:flex gap-5">
        <div className=" mx-auto relative lg:-mt-28 lg:mx-0 w-fit min-w-60 ">
          <img
            className="w-60 h-80 rounded object-cover" //lg:w-[800px]
            src={imageURL + data?.poster_path}
          />
        </div>

        <div>
          <div className="mx-7 lg:text-left">
            <h2 className="text-4xl font-bold text-white">
              {data?.title || data?.name}
            </h2>
            <p className="text-neutral-400">{data?.tagline}</p>
            <Divider />
            <div className="flex items-center gap-3 mt-2 mb-2">
              <div>Rating: {Number(data?.vote_average).toFixed(1)}</div>
              <span>|</span>
              <div>View: {Number(data?.vote_count)}</div>
              <span>|</span>
              <div>
                Duration: {duration[0]}h {duration[1]}m
              </div>
            </div>
            <Divider />
            <div className=" mt-2 mb-2">
              <h3 className="text-white text-4xs lg:text-3xl">Overview</h3>
              <p className="text-neutral-500 text-2xs lg:text-xl">
                {data?.overview}
              </p>
            </div>
            <Divider />
            <div className="pt-2 mb-2 flex gap-2 text-center">
              <p>Status: {data?.status}</p>
              <span> | </span>
              <p>
                Release: {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span> | </span>
              <p>Revenue: {Number(data?.revenue)}</p>
            </div>
            <Divider />
            <div>
              <p className="pt-2 mb-2">
                <span className="text-white">Director</span>:{" "}
                {castDetail?.crew[0]?.name}
              </p>
              <Divider />
              <p className="pt-2 mb-2">
                <span>Writer: {writer}</span>
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <h2 className="text-2xl font-bold mt-2 mb-2">Cast: </h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-4">
              {castDetail?.cast?.map((startCast, index) => {
                return (
                  <div key={index + "startCart"}>
                    <div className="flex flex-col gap-2">
                      <img
                        className="w-24 h-24 object-cover rounded-full"
                        src={imageURL + startCast?.profile_path}
                        alt=""
                      />
                    </div>
                    <p className="font-semibold text-center text-sx">
                      {startCast?.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <HorizonetalScrollCard
          data={similorData}
          heading={"Similor " + params?.explore}
          media_type={params?.explore}
        />
        <HorizonetalScrollCard
          data={recommendationData}
          heading={"Recommend " + params?.explore}
          media_type={params?.explore}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
