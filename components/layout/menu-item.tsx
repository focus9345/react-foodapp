'use client'
import { NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/library/nav";
import { NavItem } from "@/types/types";
export default function MenuItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  return (
    <>
      {isActive ? (
        <NavbarItem isActive>
          <Link color="primary" href={item.path} aria-current="page">
            {item.icon}
            <span className="font-semibold px-2">{item.title}</span>
          </Link>
        </NavbarItem>
      ) : (
        <NavbarItem>
          <Link color="foreground" href={item.path}>
            {item.icon}
            <span className="font-normal px-2">{item.title}</span>
          </Link>
        </NavbarItem>
      )}</>

  )
}