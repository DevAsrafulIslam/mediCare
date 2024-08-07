import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaCalendar, FaDollarSign, FaLocationDot } from "react-icons/fa6";

import { DOCTORS } from "/public/data/doctors";

const Doctors = () => {
  return (
    <div>
      <div className="text-center mt-[130px]">
        <h2 className="text-[40px] font-bold">Our Expert Doctors</h2>
        <p className="md:w-9/12 text-justify mt-5 mb-[50px] mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOCTORS.map((doctor, index) => (
          <div key={index} className="border divide-y-2 rounded-xl p-5">
            <div>
              <img className="w-full" src={doctor.image} alt={doctor.name} />
              <h4 className="text-xl py-2 font-bold">{doctor.name}</h4>
              <p>{doctor.designation}</p>
              <Rating
                className="py-4"
                style={{ maxWidth: 110 }}
                value={doctor.rating}
                readOnly
              />
            </div>
            <div>
              <span className="grid gap-2 mt-2">
                <p className="flex items-center gap-2">
                  <FaLocationDot />
                  {doctor.address}
                </p>
                <p className="flex items-center gap-2">
                  <FaCalendar />
                  {doctor.available}
                </p>
                <p className="flex items-center gap-2">
                  <FaDollarSign />
                  {doctor.visit_charge}
                </p>
              </span>
              <Link to={`/profile/${doctor._id}`}>
                <button className="border w-full py-3 mt-5 rounded-xl border-[#F7A582] hover:bg-[#F7A582] hover:text-white text-[#F7A582]">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
