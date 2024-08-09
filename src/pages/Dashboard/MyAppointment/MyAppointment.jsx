import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
import { APPOINTMENT_TABLE } from "@/data/my-appointmentTable";

const MyAppointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-between mx-auto">
      <div className="max-w-[250px] h-screen hidden md:flex bg-slate-100 w-full p-8">
        <h1>My Appointment</h1>
      </div>

      <div className="grid w-full px-7 py-12">
        <div className="grid grid-cols-2 w-full justify-between ">
          <div>
            <h1 className="text-2xl text-orange-600">My Appointment</h1>
          </div>
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

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <div className="flex">
            {APPOINTMENT_TABLE.tableHead.map((tableHead, index) => (
              <TableHeader key={index}>
                <TableRow>
                  <TableHead className="w-[100px]">{tableHead}</TableHead>
                </TableRow>
              </TableHeader>
            ))}
          </div>
          {APPOINTMENT_TABLE.items.map((item, index) => (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Status}</TableCell>
                <TableCell>{item.Method}</TableCell>
                <TableCell className="text-right">{item.Amount}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyAppointment;
