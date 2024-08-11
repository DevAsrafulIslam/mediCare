import { Button } from "@/components/ui/button";
import {
  FaChartBar,
  FaHouse,
  FaUserDoctor,
  FaUserGear,
  FaUsersLine,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="space-y-4 max-w-[250px] bg-slate-100 md:w-full py-4">
      <Link to="/dashboard">
        <Button className="flex justify-start w-full gap-4 text-3xl md:text-xl text-red-500 hover:bg-gray-200 text-left font-normal">
          <FaChartBar />
          <h3 className="hidden md:flex">Dashboard</h3>
        </Button>
      </Link>
      <Link to="/allusers">
        <Button className="flex justify-start w-full gap-4 text-3xl md:text-xl hover:bg-gray-200 text-left font-normal">
          <FaUsersLine />
          <h3 className="hidden md:flex">All Users</h3>
        </Button>
      </Link>
      <Link to="/addDoctor">
        <Button className="flex justify-start w-full gap-4 text-3xl md:text-xl hover:bg-gray-200 text-left font-normal">
          <FaUserDoctor />
          <h3 className="hidden md:flex">Add a Doctor</h3>
        </Button>
      </Link>
      <Link to="/manageDoctor">
        <Button className="flex gap-4 justify-start text-3xl md:text-xl hover:bg-gray-200 text-left font-normal">
          <FaUserGear />
          <h3 className="hidden md:flex">Manage Doctors</h3>
        </Button>
      </Link>
      <Link to="/">
        <Button className="flex w-full justify-start gap-4 text-3xl md:text-xl hover:bg-gray-200 text-left font-normal">
          <FaHouse />
          <h3 className="hidden md:flex">Home</h3>
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
