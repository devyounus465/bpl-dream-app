import dreamBanner from "../../src/assets/banner-main.png";

const Hero = () => {
  return (
    <div>
      <div className=" bg-[#131313] py-24">
        <div className="text-center flex flex-col gap-2 items-center">
          <img src={dreamBanner} alt="" />
          <h1 className="text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="py-6">Beyond Boundaries Beyond Limits</p>
          <button className="btn bg-yellow-300 text-black rounded-sm">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
