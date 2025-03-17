"use client";

const Schedule = () => {
  return (
    <section id="schedule" className="min-h-full">
      <div className="relative bg-[#010002] bg-grid-small-white/[0.3] text-green-400 py-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#010002] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="text-5xl md:text-8xl font-semibold mb-10">
                    <span className="hidden md:block">
                    <span className="block">S</span>
                    <span className="block">C</span>
                    <span className="block">H</span>
                    <span className="block">E</span>
                    <span className="block">D</span>
                    <span className="block">U</span>
                    <span className="block">L</span>
                    <span className="block">E</span>
                    </span>
                    <span className="block md:hidden text-center">SCHEDULE</span>
                </p>
            </div>

          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden h-full">
                <div
                  className="border-2-2 border-green-400 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #48bb78",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-green-400 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #48bb78",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-green-400">12-18 March, 2025</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Choose your desired problem statement and register in that event by filling the required details. <br/>It's that easy :)
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-green-400">12-18 March, 2025</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Idea Submission</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Put on your thinking caps and submit a proposed idea/solution for your problem.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-green-400">18-19 March, 2025</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Shortlisting</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      After evaluating your ideas/solutions, the top teams will be selected for the final Hackathon.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-green-400">20-21 March, 2025</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Hackathon</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The 24 Hour Hackathon begins. Winners will recieve cash prizes and goodies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
