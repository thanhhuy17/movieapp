import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  //Function Add Page ++
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const query = location?.search?.slice(3);
  const fetchData = async () => {
    try {
      const response = await axios.get("search/multi", {
        params: {
          query: query,
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("Error ExplorePage: ", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  // Mỗi khi trang tăng lên 1 thì lấy dữ liệu về
  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pt-16">
      <div className="lg:hidden sticky bg-transparent top-16 z-40">
        <input
          className="bg-neutral-200 border-none py-2 px-3 rounded-full w-full text-black"
          type="text"
          placeholder="Search here ..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query.split("%20").join(" ")}
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl py-3 font-semibold">
          Search Results
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "searchdata" + index}
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
