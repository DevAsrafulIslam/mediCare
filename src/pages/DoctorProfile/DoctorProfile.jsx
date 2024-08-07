import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import { DOCTORS } from "/public/data/doctors";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = DOCTORS.find((d) => d._id === id);

  return (
    <div>
      <div className="h-fit bg-no-repeat bg-cover bg-center bg-[url('/banner.png')]">
        <h1 className="container mx-auto text-4xl text-white py-36">
          Doctor Profile
        </h1>
      </div>
      <div className="container grid gap-8 mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-4 bg-slate-100  rounded-xl p-5">
          <img width={450} src={doctor.image} alt={doctor.name} />
          <div className="grid">
            <h4 className="text-[40px] py-2 font-bold">{doctor.name}</h4>
            <p>{doctor.designation}</p>
            <Rating
              className="py-4"
              style={{ maxWidth: 110 }}
              value={doctor.rating}
              readOnly
            />
            <span className="grid gap-2 mt-2">
              <p className="flex items-center gap-2">
                <FaLocationDot />
                {doctor.address}
              </p>
              <p className="flex items-center gap-2">
                <FaCalendar />
                {doctor.available}
              </p>
              <p className="flex items-center gap-2"></p>
            </span>
          </div>
        </div>

        {/* about profile */}

        <div className="grid gap-4 bg-slate-100 rounded-xl md:p-5">
          <div className="flex justify-around w-full border-y-2 border-t-0 mx-auto gap-3 md:gap-6 rounded-xl">
            {/* tabs */}

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card className="">
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.s
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="px-6">
                      <div className="grid md:grid-cols-2 mt-6">
                        <div>
                          <div>
                            <h3 className="text-xl font-bold">Education</h3>
                            <li className="mt-6 font-bold">
                              American Dental Medical University
                            </li>
                            <p className="pl-5">BDS</p>
                            <p className="pl-5">1998 - 2003</p>
                            <li className="mt-6 font-bold">
                              American Dental Medical University
                            </li>
                            <p className="pl-5"> MDS</p>
                            <p className="pl-5">2003 - 2005</p>
                            <h3 className="text-xl font-bold">
                              Work & Experience
                            </h3>
                            <li className="mt-6 font-bold">
                              Glowing Smiles Family Dental Clinic
                            </li>
                            <p className="pl-5"> 2010 - Present (5 years)</p>
                            <li className="mt-6 font-bold">
                              Comfort Care Dental Clinic
                            </li>
                            <p className="pl-5"> 2007 - 2010 (3 years)</p>
                            <li className="mt-6 font-bold">
                              Dream Smile Dental Practice
                            </li>
                            <p className="pl-5"> 2005 - 2007 (2 years)</p>
                          </div>
                          <div>
                            <h3 className="text-xl my-6 font-bold">
                              {" "}
                              Services{" "}
                            </h3>
                            <li> Tooth cleaning</li>
                            <li> Root Canal Therapy</li>
                            <li> Implants</li>
                            <li>Composite Bonding</li>
                            <li> Fissure Sealants</li>
                            <li>Surgical Extractions</li>
                          </div>
                        </div>
                        <div>
                          <div className="grid gap-6 mt-8">
                            <h3 className="text-xl font-bold">Awards</h3>
                            <span>
                              <p className="pl-5 mt-6"> July 2019</p>
                              <li className="font-bold">Humanitarian Award</li>
                              <p className="pl-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </span>
                            <span>
                              <p className="pl-5"> March 2011</p>
                              <li className="font-bold">
                                Certificate for International Volunteer Service
                              </li>
                              <p className="pl-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </span>
                            <span>
                              <p className="pl-5"> May 2008</p>
                              <li className="font-bold">
                                The Dental Professional of The Year Award
                              </li>
                              <p className="pl-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </span>
                            <h3 className="text-xl my-6 font-bold">
                              Specializations
                            </h3>
                          </div>
                          <div>
                            <li> Children Care </li>
                            <li> Dental Care</li>
                            <li> Oral and Maxillofacial Surgery</li>
                            <li> Orthodontist</li>
                            <li>Periodontist</li>
                            <li> Prosthodontics</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="locations">
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993085984!2d90.25487720921492!3d23.781067235456177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1723014722522!5m2!1sen!2sbd"
                      width="600"
                      height="450"
                      className="w-full"
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Review</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h1>Review</h1>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="business">
                <Card>
                  <CardHeader>
                    <CardTitle>Business</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h1>Business</h1>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
