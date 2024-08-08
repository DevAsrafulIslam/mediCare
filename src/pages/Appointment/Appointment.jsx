"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { SERVICES } from "/public/data/services";
import { useState } from "react";
import { APPOINTMENTS } from "/public/data/appointments";
import TimePicker from "react-time-picker";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);

  return (
    <div>
      <div className="h-fit bg-no-repeat bg-cover bg-center bg-[url('/banner.png')]">
        <h1 className="container mx-auto text-4xl text-white py-20 md:py-36">
          Appointment
        </h1>
      </div>
      <div className="container mx-auto mt-[152px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32 justify-around">
          <div className="flex justify-center md:justify-around">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-max shadow-md"
            />
          </div>
          <div>
            <img className="" src="/chair 1.png" alt="" />
          </div>
        </div>
        <div>
          {/* Services */}

          <div className="text-center mt-32 mb-12">
            <p className="text-[#F7A582]">
              Available Services on April 30, 2022
            </p>
            <h3 className="text-2xl md:text-[40px] font-bold">
              Please select a service.
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button>
                    <div className="flex items-center  gap-4 p-4 border rounded-xl">
                      <span className="bg-red-400 items-start rounded-xl">
                        <img className="p-4" src={service.image} alt="" />
                      </span>
                      <h3 className="text-2xl text-center font-bold">
                        {service.service_name}
                      </h3>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white !rounded-xl sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{service.service_name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "col-span-4 justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid items-center gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "col-span-4 justify-start text-left font-normal",
                              !time && "text-muted-foreground"
                            )}
                          >
                            <span className="mr-2 h-4 w-4">🕒</span>{" "}
                            {/* Using a clock emoji as an icon */}
                            {time ? time : <span>Pick a time</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white">
                          <TimePicker
                            className="w-5"
                            onChange={setTime}
                            value={time}
                            disableClock={true} // Optionally, disable the built-in clock UI
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        className="col-span-4"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="col-span-4"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="number"
                        type="number"
                        placeholder="Phone Number"
                        className="col-span-4"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      className="uppercase w-full bg-[#07332F] text-white hover:bg-[#F7A582]"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* book appointment */}

          <div className="my-36">
            <h3 className="text-2xl md:text-[40px] text-center font-bold">
              Available slots for Teeth Orthodontics.
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {APPOINTMENTS.map((appointment, index) => (
                <div className="w-full mx-auto p-8 border gap-4" key={index}>
                  <img className="mx-auto" src={appointment.image} alt="" />
                  <div className="text-center space-y-4">
                    <h3 className="md:text-2xl font-bold">
                      {appointment.name}
                    </h3>
                    <p>{appointment.time}</p>
                    <button className="bg-orange-300 hover:bg-[#F7A582] px-4 py-2">
                      {appointment.buttonName}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
