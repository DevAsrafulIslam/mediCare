import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useLocation } from "react-router-dom";

const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Appointment",
    href: "/appointment",
  },
  {
    name: "Login",
    href: "/login",
  },
];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#07332F] text-white w-full">
      <div className="container flex justify-between">
        <div className="flex items-center gap-4">
          <img src="/public/Group 1.png" alt="" />
          <h1 className="text-2xl">
            Medi<span className="text-orange-600">Care</span>
          </h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {NAVIGATION.map((nav) => (
              <NavigationMenuItem key={nav.href}>
                <Link to={nav.href}>
                  <Button
                    className={`hover:bg-teal-800 transition duration-300${
                      nav.href === pathname ? " bg-teal-800" : ""
                    }`}
                  >
                    {nav.name}
                  </Button>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
