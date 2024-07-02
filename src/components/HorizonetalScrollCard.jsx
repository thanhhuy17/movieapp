import { useRef } from "react";
import Card from "./Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const HorizonetalScrollCard = ({ data = [], heading }) => {
  const trendingLength = data.length;
  const containerRef = useRef();

  //Next Card =>>
  const handleNext = () => {
    containerRef.current.scrollLeft += 254 * 4;
  };
  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 254 * 4;
  };
  return (
    <div>
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">
          {heading}
        </h2>

        <div className="overflow-hidden relative">
          {/* <div className="grid grid-cols-[repeat(auto-fit,230px)]  grid-flow-col gap-6 overflow-x-scroll"> */}
          <div
            ref={containerRef}
            className={`relative grid grid-cols-[repeat(${trendingLength},230px)] gap-6 grid-flow-col overflow-x-scroll z-10 scroll-smooth transition-all`}
          >
            {data.map((data, index) => {
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

          <div className="absolute top-0 flex justify-between w-full h-full items-center text-3xl font-bold">
            <button
              onClick={handlePrevious}
              className="bg-white p-1 rounded-full z-10 text-black transition-colors duration-300"
            >
              <RiArrowLeftSLine />
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-1  rounded-full z-10 text-black transition-colors duration-300"
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonetalScrollCard;
