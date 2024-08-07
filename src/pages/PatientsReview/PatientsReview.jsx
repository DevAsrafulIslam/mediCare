const Patients = [
  {
    _id: "p123a456-b789-c012-d345-efgh6789ijkl",
    name: "Awlad Hossain",
    designation: "Product Designer",
    image: "/Ellipse 2.png",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
  {
    _id: "q987z654-y321-x098-w765-vuts4321mnop",
    name: "Farhana Hossain",
    designation: "Brand Designer",
    image: "/Ellipse 2 (1).png",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.",
  },
];
const PatientsReview = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-[40px] font-bold">What Our Patients Says</h2>
        <p className="md:w-9/12 mt-5 mb-[50px] text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {Patients.map((parent, index) => (
          <div key={index} className="">
            <div className="border px-6 py-8 text-start rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-5">
                  <img src={parent.image} alt="" />
                  <span>
                    <h4 className="text-xl font-bold">{parent.name}</h4>
                    <p>{parent.designation}</p>
                  </span>
                </div>
              </div>
              <p className="text-justify">{parent.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsReview;
