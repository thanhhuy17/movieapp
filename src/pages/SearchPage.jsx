import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  

  const[data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("search/collection", {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("Error ExplorePage: ", error);
    }
  };
  // console.log("location:", location.search.slice(3));
  useEffect(()=>{
    fetchData()
  },[location?.search])
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl py-3 font-semibold">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "searchdata"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
