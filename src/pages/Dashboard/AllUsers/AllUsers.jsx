import { Button } from "@/components/ui/button";

const AllUsers = () => {
  return (
    <div className="container flex justify-between mx-auto">
      <div className="">
        <h1 className="max-w-[250px] w-full p-4">Deshboard</h1>
        <div className="grid space-y-4 max-w-[250px] bg-slate-100 w-full p-4">
          <Button className="col-span-4 justify-start border-b-2 hover:bg-gray-200 text-left font-normal">
            <h3>All Users</h3>
          </Button>

          <Button className="col-span-4 justify-start border-b-2 hover:bg-gray-200 text-left font-normal">
            <h3>Add a Doctor</h3>
          </Button>
          <Button className="col-span-4 justify-start border-b-2 hover:bg-gray-200 text-left font-normal">
            <h3>Manage Doctors</h3>
          </Button>
          <Button className="col-span-4 justify-start border-b-2 hover:bg-gray-200 text-left font-normal">
            <h3>Home</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
