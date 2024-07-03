/* eslint-disable react/prop-types */
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movie.imageURL);
  // console.log("Huy Check Release Date: ", data);
  //   console.log("Huy Check True: ", trending && <div>#{index} Trending</div>);
  return (
    <Link
      to={"/" + data.media_type + "/" + data.id}
      className="w-full max-w-[230px] h-80 rounded relative overflow-hidden"
    >
      <img src={imageURL + data?.poster_path} alt="" />

      <div className="absolute top-4 ">
        {trending && (
          // chỗ này bỏ overflow
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/20 w-auto">
            #{index} Trending
          </div>
        )}
      </div>

      <div className="absolute bottom-0 h-14 w-full  bg-black/60 px-2 py-1 backdrop-blur-3xl">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>

        <div className="flex justify-between text-neutral-400  items-center">
          <p>{moment(data?.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-black px-2 py-1 rounded-full text-xs">
            Rating:{Number(data?.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
