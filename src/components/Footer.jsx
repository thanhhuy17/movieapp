import { Link } from "react-router-dom";

/* eslint-disable no-unreachable */
const Footer = () => {
  return (
    <footer className="w-full h-12 bg-neutral-600">
      <div className="flex items-center justify-center gap-4">
        <Link to={"/"} className=" hover:text-orange-500">
          About
        </Link>
        <Link to={"/"} className=" hover:text-orange-500">
          Contact
        </Link>
      </div>
      <p className="text-center">
        © Created by
        <Link
          className=" hover:text-orange-500"
          target="_blank"
          to="https://www.facebook.com/profile.php?id=100069410599370"
        >
          {" "}
          HuyNguyen
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
