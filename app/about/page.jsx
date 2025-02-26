const About = () => {
    return (
      <div className="font-outfit">
        {/* Fixed Background Image with img tag */}
        <img
          src="services.jpg"
          alt="Background"
          className="fixed inset-0 w-full h-full object-cover object-center"
        />
  
        {/* Transparent Section */}
        <section className="relative z-10 bg-transparent text-white md:pt-16">
          <div className="w-full mx-auto text-center h-1/2 bg-black/20 text-white py-16 md:py-28 px-6 md:px-20">
            <h1 className="text-4xl md:text-5xl font-[300] mb-6">About Us</h1>
          </div>
        </section>
  
        <section className="relative z-10 bg-transparent">
          <div className="w-full mx-auto h-1/2 bg-white text-black py-12 md:py-16 px-6 md:px-20">
            <div className="w-full flex flex-col md:flex-row">
              <div className="py-6 w-full md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-[500] mb-6">Welcome to Media Pitch</h1>
                <p className="text-xl md:text-2xl font-[200]">
                  Your one-stop-shop for comprehensive digital solutions, designed
                  to invigorate your brand and breathe life into your vision.
                </p>
              </div>
  
              <div className="w-full md:w-1/2">
                <img
                  src="hero.png"
                  alt="Background"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>
  
            <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
              <div className="w-full mb-6 md:mb-0">
                <img
                  src="mp2about.jpg"
                  alt="About Media Pitch"
                  className="w-full rounded-s-full rounded-r-lg h-auto object-cover object-center"
                />
              </div>
              <div className="w-full">
                <p className="text-xl md:text-2xl font-[200]">
                  Established on the principles ​of creativity, precision, and
                  unwavering commitment to our clients' goals, Media Pitch is your
                  trusted partner in navigating the dynamic landscape of digital
                  media. Our diverse team of industry veterans comes armed with
                  the know-how and passion required to make your brand shine
                  brightly in an oversaturated market.
                </p>
              </div>
            </div>
  
            <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
              <div className="w-full mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-[500] mb-6">Dynamic Solutions</h1>
                <p className="text-xl md:text-2xl font-[200]">
                  Established on the principles ​of creativity, precision, and
                  unwavering commitment to our clients' goals, Media Pitch is your
                  trusted partner in navigating the dynamic landscape of digital
                  media. Our diverse team of industry veterans comes armed with
                  the know-how and passion required to make your brand shine
                  brightly in an oversaturated market.
                </p>
              </div>
  
              <div className="w-full md:w-1/2">
                <img
                  src="phone.jpg"
                  alt="Phone Image"
                  className="w-full rounded-3xl h-auto object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
  