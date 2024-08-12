import { CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

const appPages = {
  "/dashboard": "Dashboard",
  "/allusers": "All Users",
  "/addDoctor": "Add Doctor",
  "/manageDoctor": "Manage Doctor",
};
const DashboardTitle = () => {
  const { pathname } = useLocation();
  return <CardTitle className="text-start">{appPages[pathname]}</CardTitle>;
};

export default DashboardTitle;
