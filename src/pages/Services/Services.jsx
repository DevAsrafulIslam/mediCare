import { useState } from "react";

const Services = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="container mx-auto mb-32">
      <div className="grid md:grid-cols-2 my-[130px] justify-between gap-6 ">
        <img src="/Rectangle 20078.png" alt="" />
        <div className="">
          <h2 className="text-center md:text-start text-[40px] font-bold">
            Our Services
          </h2>
          <p className="my-[20px] w-2/2 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="my-[50px] border flex w-fit gap-6 rounded-xl">
            <button className="px-5 py-5 hover:bg-[#F7A582] rounded-xl">
              Cavity Protection
            </button>
            <button className="px-5 py-5 hover:bg-[#F7A582] rounded-xl">
              Cosmetic Dentisty
            </button>
            <button className="px-5 py-5 hover:bg-[#F7A582] rounded-xl">
              Oral Surgeryn
            </button>
          </div>
          <img className="w-full" src="/public/Rectangle 10.png" alt="" />
          <div className="mt-[30px]">
            <h2 className="text-3xl font-bold">Electro Gastrology Therapy</h2>
            <div className="my-[20px] gap-3 grid w-2/2 ">
              <p className="text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error{" "}
              </p>
              <p className="text-justify">
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            {isClicked && (
              <div className="mb-4">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus nihil delectus sed vel perspiciatis consequatur
                  reprehenderit tempora laborum aliquid. Harum, dolore iste
                  consequuntur eius obcaecati ratione vitae eveniet corrupti
                  quidem. Enim laboriosam minima deserunt cupiditate, natus
                  iusto dicta iste ducimus!
                </h1>
              </div>
            )}
            <button
              onClick={handleClick}
              className=" text-[#F7A582] border border-[#F7A582] px-5 py-3 rounded-[10px]"
            >
              {isClicked ? "See Less!" : "See More"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="flex gap-5 items-center text-white rounded-xl bg-[#07332F] px-8 py-14">
          <>
            <img src="/logo.png" alt="" />
          </>
          <span>
            <h2 className="text-2xl">Opening Hours</h2>
            <p>
              Open 9.00 am to 5.00pm <br /> Everyday
            </p>
          </span>
        </div>
        <div className="flex gap-5 items-center text-white rounded-xl bg-[#F7A582] px-8 py-14">
          <>
            <img src="/logo.png" alt="" />
          </>
          <span>
            <h2 className="text-2xl">Our Locations</h2>
            <p>
              Dhanmondi 17, Dhaka <br /> -1200, Bangladesh
            </p>
          </span>
        </div>
        <div className="flex gap-5 items-center text-white rounded-xl bg-[#07332F] px-8 py-14">
          <>
            <img src="/logo.png" alt="" />
          </>
          <span>
            <h2 className="text-2xl">Contact Us</h2>
            <p>
              +88 01750 00 00 00 <br /> +88 01750 00 00 00
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
