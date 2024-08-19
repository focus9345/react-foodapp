import { NavItem } from "@/types/types";
import {
    FaUserGroup,
    FaShop,
    FaBowlFood,
    FaHouse,
  } from "react-icons/fa6";

export const NAV_ITEMS: NavItem[] = [
    {
        title: "Home",
        path: "/",
        color: "foreground",
        icon: <FaHouse className="text-2xl" />,
    },
    {
        title: "About",
        path: "/about",
        color: "foreground",
        icon: <FaShop className="text-2xl" />,
    },
    {
        title: "Menu",
        path: "/menu",
        color: "foreground",
        icon: <FaBowlFood className="text-2xl" />,
    },
    {
        title: "Community",
        path: "/community",
        color: "foreground",
        icon: <FaUserGroup className="text-2xl" />,
    },
]