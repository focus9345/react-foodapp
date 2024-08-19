import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { NAV_ITEMS } from "@/library/nav";
import MenuItem from "./menu-item";
import {CompanyLogo} from "./companylogo";

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <CompanyLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:hidden sm:flex gap-4" justify="center">

        {NAV_ITEMS.map((item, index) => {
          const isLastItem = index === NAV_ITEMS.length - 1;
          return (
            <MenuItem key={index} item={item} />
          );
        })}

      </NavbarContent>
    </Navbar>
  );
}
