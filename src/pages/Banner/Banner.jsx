const Banner = () => {
  return (
    <div>
      <div className="h-screen bg-no-repeat bg-cover bg-center bg-[url('/home.png')]">
        <div>
          <h1 className="text-white text-5xl font-bold text-center pt-32">
            Welcome to Best Medicare Help Center
          </h1>
          <p className="text-white text-center text-lg pt-4">
            Your health is our priority
          </p>
          <div className="flex justify-center pt-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded">
              All Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
