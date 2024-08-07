import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <Card className="w-[350px] mx-auto my-36">
        <CardHeader>
          <CardTitle className="text-center">
            Sign in to
            <p className="text-5xl">
              Medi<span className="text-red-800">Care</span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex justify-between ">
                  <Label htmlFor="name">Password</Label>
                  <Link className="text-red-300" to="">
                    Forget Password?
                  </Link>
                </div>
                <Input id="password" placeholder="Your Password" />
              </div>
              <div className="text-black space-y-1.5">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-slate-500 hover:text-white hover:border-slate-500 border-zinc-950"
                  >
                    Create Account
                  </Button>
                </Link>
              </div>
              <span className="text-black text-center" to="">
                Please register at first. Go to{" "}
                <Link className="text-red-300">SIGN UP</Link>
              </span>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-around">
          <Button
            variant="outline"
            className=" hover:bg-slate-500 hover:text-white rounded-xl hover:border-slate-500 border-zinc-950"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="hover:bg-slate-500 hover:text-white rounded-xl hover:border-slate-500 border-zinc-950 gap-2"
          >
            <FaGoogle /> Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
