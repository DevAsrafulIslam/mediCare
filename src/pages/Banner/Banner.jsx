import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div>
      <div className="h-screen bg-no-repeat py-28 bg-slate-100 opacity-60 bg-cover bg-center bg-[url('/heart.jpg')]">
        <div className="container mx-auto space-y-4">
          <h3 className=" md:text-3xl text-center md:text-start">
            INSPIRING BETTER HEALTH
          </h3>
          <h1 className="text-4xl md:text-7xl text-center md:text-start space-y-4 text-slate-900">
            <span className="text-[#e10f28] font-bold">Healthy heart,</span>{" "}
            <br />
            healthy family
          </h1>
          <p className="text-black md:text-start text-justify text-lg pt-4 w-full md:w-6/12">
            harness multimedia based collaboration and idea-sharing with backend
            products. Continually whiteboard superior opportunities via covalent
            scenarios.
          </p>
          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <Button className="bg-[#e10f28] hover:bg-black text-white rounded-full py-6">
              DISCOVER MORE
            </Button>
            <Button className="bg-black hover:bg-[#e10f28] text-white rounded-full py-6">
              VIEW OUR SERVICES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
