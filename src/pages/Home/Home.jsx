import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import PatientsReview from "../PatientsReview/PatientsReview";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="container mx-auto">
        <Services />
        <PatientsReview />
        <Doctors />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
