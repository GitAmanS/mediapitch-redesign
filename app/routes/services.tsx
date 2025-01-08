import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen w-full font-outfit  ">
      <img
        src="storytelling.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover object-center"
      />
      <section className="relative z-10 bg-transparent  text-white md:pt-16">
        <div className="w-full mx-auto text-center  h-1/2 bg-black/50 text-white py-28 px-20">
          <h1 className="text-5xl font-[300] mb-6 ">Services</h1>
        </div>
      </section>

      <section className="relative z-10 bg-transparent  h-full">
        <div className="w-full mx-auto   h-full  bg-white text-black py-16 px-20">
          <div className="w-full flex">
            <div className="w-full">
              <h1 className="text-5xl font-[500] mb-6 ">
                Editing Writing & Rewriting{" "}
              </h1>
            </div>

            <div className="w-full">
              <p className="text-2xl font-[200]">
                Our team of skilled editors, writers, and rewriters is here to
                elevate your content and make it shine. Whether you need precise
                editing, captivating writing, or refreshing rewriting, we've got
                the expertise to bring your words to life.
              </p>
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <img
                src="time.jpg"
                alt="Background"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-fit object-cover object-center"
              />
            </div>

            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6 ">Timely delivery </h1>
              <p className="text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full text-end">
              <h1 className="text-2xl font-[500] mb-6 ">Fresh </h1>
              <p className="text-2xl font-[200]">
                Sometimes, all you need is a fresh perspective. Our rewriters
                will take your existing content and transform it into something
                new and exciting. We'll breathe new life into your words,
                enhancing their effectiveness and appeal.
              </p>
            </div>
            <div className="w-full">
              <img
                src="fresh.jpg"
                alt="Background"
                className="w-full rounded-tr-[200px] rounded-bl-[200px] h-fit object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6 ">
                Expertise that makes a difference{" "}
              </h1>
              <p className="text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="expertise.jpg"
                alt="Background"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-fit object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6 ">
                Confidentiality and professionalism
              </h1>
              <p className="text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="confidentiality.jpg"
                alt="Background"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-fit object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6 ">
                Captivating storytelling
              </h1>
              <p className="text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="storytelling.jpg"
                alt="Background"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-fit object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full flex md:space-x-4 my-20">
            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6 ">
                Tailored to perfection
              </h1>
              <p className="text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="services.jpg"
                alt="Background"
                className="w-full mx-h rounded-tl-[200px] rounded-br-[200px] h-fit object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
