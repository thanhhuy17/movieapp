/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../Hooks/useFetchDetail";
const PlayVideo = ({ data, close, media_type }) => {
  //tv/{series_id}/videos
  const { data: videoData } = useFetchDetails(`/${media_type}/${data}/videos`);
  console.log("video Data: ", videoData);
  console.log("Key Data: ", videoData?.results[0]?.key);
  const linkVideo = videoData?.results[0]?.key;

  return (
    <div className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center overflow-hidden">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className="absolute right-0 -top-5 text-2xl font-bold hover:scale-125 transition-all z-50"
        >
          <IoClose />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${linkVideo}`}
          width={"100%"}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PlayVideo;
