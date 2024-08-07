const Introduction = () => {
  return (
    <div className=" mx-auto mb-32">
      <div className="grid md:flex md:my-[130px] justify-between gap-6 ">
        <img className="text-center" src="/doctor/doctor.png" alt="" />
        <div className="space-y-4 divide-y-2">
          <div>
            <div>
              <h3 className="text-xl md:text-3xl text-center md:text-start">
                INSPIRING BETTER HEALTH
              </h3>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-7xl text-center md:text-start space-y-4 text-slate-900">
                <span className="text-[#e10f28] font-bold">Great passion</span>{" "}
                <br />
                for healing
              </h1>
            </div>
            <p className="text-black md:text-start text-justify text-lg pt-4 w-full">
              Some up and coming trends are healthcare consolidation for
              independent healthcare centers that see a cut in unforeseen
              payouts. High deductible health plans are also expected to
              transpire along with a growth of independent practices.
            </p>

            <div className="mt-4">
              <h1 className="text-2xl text-center md:text-end space-y-4 text-slate-900">
                <span className="text-[#e10f28] font-bold">CHASE FRANKLIN</span>
                <br />
                Fonder & CEO
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 justify-between pt-4">
            <div>
              <div>
                <h3 className="font-bold">PROFESSIONAL TEAM</h3>
              </div>
              <p>
                Globally harness multimedia based collaboration and idea-sharing
                with backend products. Continually whiteboard superior
                opportunities.
              </p>
            </div>

            <div className="">
              <div>
                <img src="" alt="" defaultValue="image" />
              </div>
              <div>
                <h3 className="font-bold">SERVICES AND TECHNOLOGY</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
