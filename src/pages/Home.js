import videoBg from "../img/video-bg.mp4";

const Home = () => {
  return (
    <div className="w-5/5 h-screen relative">
      {/* OVERLAY */}
      <div className="overlay absolute top-0 left-0 w-screen h-screen bg-black opacity-80"></div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        infinite="true"
        className="w-screen h-screen object-cover"
      ></video>

      {/*  CONTENT */}
      <div className="absolute mt-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-[80rem]  items-center mx-auto ">
        {/* MAIN INFO */}
        <div className=" pl-20 w-50 text-white ">
          <h1 className="text-8xl">
            Buma <span className="text-blue-800">AS</span>
          </h1>
          <p className="text-4xl mt-5">
            Vi <span className="text-blue-800">realiserer</span> ditt prosjekt
            til pris og tid.
          </p>
          <p className="mt-1 text-2xl">Velg oss og vi far jobben gjort</p>
          <button className="px-14 py-4 mt-10 bg-blue-800 rounded-lg">
            Explore
          </button>
        </div>

        {/* CARDS */}
        <div className="cards   flex-1 w-14  bg-transparent grid grid-cols-2 grid-rows-2  gap-8 m-10 h-[42rem] ">
          <div className="card rounded-3xl bg-white"></div>
          <div className="card rounded-3xl bg-yellow-100"></div>
          <div className="card rounded-3xl bg-green-100"></div>
          <div className="card rounded-3xl bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
