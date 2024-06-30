import { IoHome } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidCameraMovie />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoHome />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
