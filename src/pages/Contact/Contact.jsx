import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#262626] mt-28">
      <div className="grid gap-8 py-12 md:grid-cols-2 text-white container">
        <div className="container p-0 grid gap-4">
          <h2 className="text-[40px] text-center md:text-start font-bold">
            Contact With Us
          </h2>
          <p className="text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <span className="grid gap-5">
            <p className="flex items-center gap-4">
              <FaPhone />
              +88 01750 14 14 14
            </p>
            <p className="flex items-center gap-4">
              <FaLocationDot /> Dhanmondi, Dhaka, Bangladesh
            </p>
          </span>
        </div>
        <div className="grid gap-6">
          <CardContent className="p-0">
            <form>
              <div className="grid md:grid-cols-2 w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <div className="flex justify-between "></div>
                  <Input id="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="number" placeholder="Mobile Number" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="dname" placeholder="Doctor Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input type="date" id="date" placeholder="Date" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input type="time" id="time" placeholder="Time" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-0">
            <div className="w-full text-white">
              <Button
                variant="outline"
                className="w-full hover:bg-slate-500 hover:text-white hover:border-slate-500 border-white"
              >
                Book Now
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </div>
  );
};

export default Contact;
