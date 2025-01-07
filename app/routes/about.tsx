import React from "react";

const About = () => {
  return (
    <div className=" font-outfit">
      {/* Fixed Background Image with img tag */}
      <img
        src="services.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover object-center"
      />

      {/* Transparent Section */}
      <section className="relative z-10 bg-transparent  text-white md:pt-16">
        <div className="w-full mx-auto text-center  h-1/2 bg-black/20 text-white py-28 px-20">
          <h1 className="text-5xl font-[300] mb-6 ">About Us</h1>
        </div>
      </section>

      <section className="relative z-10 bg-transparent  ">
        <div className="w-full mx-auto   h-1/2  bg-white text-black py-16 px-20">
          <div className="w-full flex">
            <div className="py-12 w-full">
              <h1 className="text-5xl font-[500] mb-6 ">
                Welcome to Media Pitch{" "}
              </h1>
              <p className="text-2xl font-[200]">
                Your one-stop-shop for comprehensive digital solutions, designed
                to invigorate your brand and breathe life into your vision.
              </p>
            </div>

            <div className="w-full">
              <img
                src="hero.png"
                alt="Background"
                className="w-full h-fit object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <img
                src="mp2about.jpg"
                alt="Background"
                className="w-full rounded-s-full rounded-r-lg h-fit object-cover object-center"
              />
            </div>
            <div className="w-full">
              <p className="text-2xl font-[200]">
                Established on the principles ​of creativity, precision, and
                unwavering commitment to our clients' goals, Media Pitch is your
                trusted partner in navigating the dynamic landscape of digital
                med​ia. Our diverse team of industry veterans come armed with
                the know-how and passion required to make your brand shine
                brightly in an oversaturated market.
              </p>
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-28">
            <div className=" w-full">
              <h1 className="text-5xl font-[500] mb-6 ">Dynamic Solutions </h1>
              <p className="text-2xl font-[200]">
                Established on the principles ​of creativity, precision, and
                unwavering commitment to our clients' goals, Media Pitch is your
                trusted partner in navigating the dynamic landscape of digital
                med​ia. Our diverse team of industry veterans come armed with
                the know-how and passion required to make your brand shine
                brightly in an oversaturated market.
              </p>
            </div>

            <div className="w-fit h-full">
              <img
                src="phone.jpg"
                alt="Background"
                className="w-fit rounded-3xl h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
