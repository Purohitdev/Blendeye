

import Nav from '../Nav';

function Hero() {
  return (
    <div className="relative">
      <Nav />

      <div className="h-screen max-h-[83vh] px-0 sm:px-6 md:px-8 py-4 md:py-10">
      {/* Main heading section */}
      <div className="h-[40%] md:h-[60vh] flex items-center ">
      <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] w-full lg:w-[60%] leading-tight font-semibold">
            Design subscriptions <span className="text-[#a3a3a3]">to grow your</span> brand <span className="text-[#a3a3a3]">&</span> marketing
          </h1>
        </div>

        {/* Subtext & button section */}
        <div className="h-[40%] flex items-center justify-end ">
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-end items-end px-0 lg:px-4">
        <div className="text-left">
          <p className="text-base sm:text-lg font-light">
                Access unlimited top-notch design services that will take care of your design needs seamlessly and efficiently at one fixed monthly fee
              </p>
              <button className="border border-[#2a2a2a] text-[#2a2a2a] font-semibold rounded-full px-6 py-2 hover:bg-gray-800 hover:text-white transition-colors mt-5">
                See plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

