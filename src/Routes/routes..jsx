import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import Login from "@/pages/Login/Login";
import DoctorProfile from "@/pages/DoctorProfile/DoctorProfile";
import MyAppointment from "@/pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "@/pages/Dashboard/AllUsers/AllUsers";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile/:id",
        element: <DoctorProfile />,
      },
      {
        path: "/my-appointment",
        element: <MyAppointment />,
      },
      {
        path: "/allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
