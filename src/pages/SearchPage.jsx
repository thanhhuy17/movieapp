import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  console.log("location", location);
  return <div>SearchPage</div>;
};

export default SearchPage;
