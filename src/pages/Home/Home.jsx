import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import PatientsReview from "../PatientsReview/PatientsReview";
import Services from "../Introduction/Introduction";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="container mx-auto">
        <Services />
        <PatientsReview />
        <Doctors />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
