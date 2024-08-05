import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const MyAppointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container flex justify-between mx-auto">
      <div className="max-w-[250px] h-screen hidden md:flex bg-slate-100 w-full p-4">
        <h1>My Appointment</h1>
      </div>
      <div className="grid grid-cols-2 w-full justify-between px-7 py-12">
        <h1 className="text-2xl">My Appointment</h1>
        <div className="text-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "col-span-4 justify-start rounded- text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
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
      </div>
    </div>
  );
};

export default MyAppointment;
