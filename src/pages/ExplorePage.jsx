/* eslint-disable no-unreachable */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const useParam = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  // console.log("UserParam: ", useParam.explore);
  const fetchData = async () => {
    try {
      const response = await axios.get(`discover/${useParam.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
      // console.log("UserParam: ", response.data.results);
    } catch (error) {
      console.log("Error ExplorePage: ", error);
    }
  };

  //Function Add Page ++
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };
  // Mỗi khi trang tăng lên 1 thì lấy dữ liệu về
  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    //Mỗi khi nhấn qua tab khác
    setPageNo(1); // Set về trang đầu
    fetchData(); // Lấy dữ liệu lại
    setData([]); // Truyền dữ liệu lại cho trang
  }, [useParam.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl py-3 font-semibold">
          Popular {useParam.explore} show
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                key={exploreData.id + "exploreSection" + index}
                media_type={useParam.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
