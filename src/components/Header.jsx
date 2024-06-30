import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../contants/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Link input on Search
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  //Don't ReLoad Page
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>

        <nav className="hidden lg:flex items-center ml-5 gap-5">
          {navigation.map((nav, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={nav.label}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-orange-400 transition-colors duration-400 ${
                      isActive && "text-orange-400" // isActive change Orange Color
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here ..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />

            <button className="text-2xl text-white hover:text-orange-400 transition-colors duration-400">
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={user} alt="user" width="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
