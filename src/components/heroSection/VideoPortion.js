import React from "react";
import video from '../assest/donationvideo.mp4'
function VideoPortion() {
  return (
    <>
      <div className="mx-auto ml-9 container">
        <div className="grid grid-cols-1 mx-auto gap-5 lg:grid-cols-2 lg:gap-14 mt-9 xl:gap-x-[399px] ml-10">
          {/* card 1 */}
          <div className=" flex justify-center items-center rounded-2xl w-[330px] h-[300px] sm:w-[490px] sm:ml-16 md:w-[540px] md:ml-28 lg:w-[550px] lg:h-[500px] lg:mt-14 lg:ml-2 xl:mr-24 xl:w-[829px]">
            <video className="w-full h-[600] rounded-2xl border-none" controls>
              <source
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* card 2 */}
          <div className="bg-slate-200 rounded-md w-[330px] h-[430px] sm:w-[490px] sm:ml-16 md:w-[540px] md:ml-28 lg:w-[380px] lg:h-[460px] lg:mt-14 xl:w-[420px] xl:h-[460px] xl:mt-20">
            <div className="ml-5">
              <h1 className="text-2xl md:text-3xl font-bold mt-6">Card 2</h1>
              <p className="text-gray-700 mb-4 text-base md:text-lg tracking-wide font-sans mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam a cum ea ab. Itaque, est ut omnis harum voluptatum quas
                quos facilis ipsum porro perferendis? Earum unde sed sint
                deserunt natus nemo quos quisquam est!jkcum ea ab. Itaque, est
                ut omnis harum voluptatum quas quos facilis ipsum porro
                perferendis? Earum unde sed sint deserunt natus nemo quos
                quisquam est!jk
              </p>
              <button className="bg-black text-white hover:text-black py-2 px-8 rounded-full hover:bg-yellow-500 mt-4 font-bold font-sans">
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPortion;
