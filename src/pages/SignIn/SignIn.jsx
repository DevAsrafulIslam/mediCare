"use client";
import { Button } from "@/components/ui/button";

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
import SocialLogin from "@/pages/SocialLogin/SocialLogin";

import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProviders";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);

    // Pass email and password to createUser
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div className="container">
      <Card className="w-[350px] mx-auto my-36">
        {/* {user && <div>{user.displayName}</div>} */}
        <CardHeader>
          <CardTitle className="text-center">
            Sign Up to
            <p className="text-5xl">
              Medi<span className="text-red-800">Care</span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input type="email" id="email" placeholder="Email" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex justify-between ">
                  <Label htmlFor="name">Password</Label>
                  <Link className="text-red-300" to="">
                    Forget Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              {error}
              {success}
              <div className="text-black space-y-1.5">
                <Button
                  variant="outline"
                  className="w-full hover:bg-slate-500 hover:text-white hover:border-slate-500 border-zinc-950"
                >
                  Create Account
                </Button>
              </div>
              <span className="text-black text-center" to="">
                Already have an account. Go to{" "}
                <Link to="/login" className="text-red-300">
                  SIGN IN
                </Link>
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
          <SocialLogin />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
