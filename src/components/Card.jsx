import { useSelector } from "react-redux";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movie.imageURL);
  //   console.log("Huy Check Index: ", index);
  console.log("Huy Check True: ", trending && <div>#{index} Trending</div>);
  return (
    <div className="w-full max-w-[230px]  h-80 overflow-hidden rounded">
      <img src={imageURL + data?.poster_path} alt="" />

      <div className="absolute top-5">
        {trending && <div>#{index} Trending</div>}
      </div>
    </div>
  );
};

export default Card;
