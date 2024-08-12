import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProviders";

const navigation = [
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
    name: "Review",
    href: "/review",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      LogOut(); // If user is logged in, sign out
    } else {
      navigate("/login");
    }
  };

  const { pathname } = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-[#07332F] text-white w-full">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4 py-4">
          <img className="hidden md:flex" src="/Group 1.png" alt="" />
          <h1 className="text-2xl">
            Medi<span className="text-orange-600">Care</span>
          </h1>
        </div>
        <div>{user?.displayName}</div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((nav) => (
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
              <NavigationMenuItem>
                <Button className="hover:bg-teal-800 transition duration-300">
                  <Popover>
                    <PopoverTrigger>User</PopoverTrigger>

                    <PopoverContent className="grid w-fit bg-white">
                      <Link to="dashboard">
                        <Button className="hover:bg-teal-800">Profile</Button>
                      </Link>
                      <Link to="dashboard">
                        <Button className="hover:bg-teal-800">Settings</Button>
                      </Link>

                      <Button
                        onClick={() => {
                          handleAuthAction();
                          setIsClicked(false);
                        }}
                        className="hover:bg-teal-800 transition duration-300"
                      >
                        {user ? "Logout" : "Login"}
                      </Button>
                    </PopoverContent>
                  </Popover>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isClicked} onOpenChange={setIsClicked}>
          <SheetTrigger className="md:hidden" asChild>
            <Button onClick={handleClick} variant="outline">
              {isClicked ? <FaXmark /> : <FaBarsStaggered />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-300">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center text-center gap-4">
                {navigation.map((dNav) => {
                  return (
                    <div key={dNav.href} onClick={() => setIsClicked(false)}>
                      <Link to={dNav.href}>
                        <Button
                          onClick={handleAuthAction}
                          className={`hover:text-white w-full hover:bg-teal-800 transition duration-300${
                            dNav.href === pathname ? " bg-teal-800" : ""
                          }`}
                        >
                          {dNav.name}
                        </Button>
                      </Link>
                    </div>
                  );
                })}
                <Button
                  onClick={() => {
                    handleAuthAction();
                    setIsClicked(false);
                  }}
                  className="hover:bg-teal-800 transition duration-300"
                >
                  {user ? "Logout" : "Login"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
