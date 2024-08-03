"use client";

import { Calendar } from "@/components/ui/calendar";
import { SERVICES } from "/public/data/services";
import { useState } from "react";
import { APPOINTMENTS } from "/public/data/appointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="h-fit bg-no-repeat bg-cover bg-center bg-[url('/banner.png')]">
        <h1 className="container mx-auto text-4xl text-white py-36">
          Appointment
        </h1>
      </div>
      <div className="container mx-auto mt-[152px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 justify-around">
          <div className="flex justify-end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-max shadow-md"
            />
          </div>
          <div>
            <img src="/public/chair 1.png" alt="" />
          </div>
        </div>
        <div>
          <div className="text-center mt-32 mb-12">
            <p className="text-[#F7A582]">
              Available Services on April 30, 2022
            </p>
            <h3 className="text-[40px] font-bold">Please select a service.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-around gap-4 p-4 border rounded-xl"
              >
                <span className="bg-red-400 rounded-xl">
                  <img className="p-4" src={service.image} alt="" />
                </span>
                <h3 className=" lg:text-2xl font-bold">
                  {service.service_name}
                </h3>
              </div>
            ))}
          </div>
          <div className="my-36">
            <h3 className="text-[40px] text-center font-bold">
              Available slots for Teeth Orthodontics.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {APPOINTMENTS.map((appointment, index) => (
                <div className="mx-auto p-8 border gap-4" key={index}>
                  <img className="mx-auto" src={appointment.image} alt="" />
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">{appointment.name}</h3>
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
