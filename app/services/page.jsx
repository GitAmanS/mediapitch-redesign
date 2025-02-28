import React from 'react'

const ServicePage = () => {
  return (
    <div className="min-h-screen w-full font-outfit">
      <img
        src="storytelling.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover object-center"
      />
      <section className="relative z-10 bg-transparent text-white ">
        <div className="w-full mx-auto text-center h-1/2 bg-black/50 text-white py-16 md:py-28 px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-[300] mb-6">Services</h1>
        </div>
      </section>

      <section className="relative z-10 bg-transparent h-full">
        <div className="w-full mx-auto h-full bg-white text-black py-12 md:py-16 px-6 md:px-20">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-[500] mb-6">
                Editing Writing & Rewriting
              </h1>
            </div>
            <div className="w-full">
              <p className="text-lg md:text-2xl font-[200]">
                Our team of skilled editors, writers, and rewriters is here to
                elevate your content and make it shine. Whether you need precise
                editing, captivating writing, or refreshing rewriting, we've got
                the expertise to bring your words to life.
              </p>
            </div>
          </div>

          {/* Timely Delivery Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full mb-6 md:mb-0">
              <img
                src="time.jpg"
                alt="Timely Delivery"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-auto object-cover object-center"
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-[500] mb-6">Timely Delivery</h1>
              <p className="text-xl md:text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
          </div>

          {/* Fresh Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full text-end mb-6 md:mb-0">
              <h1 className="text-2xl font-[500] mb-6">Fresh</h1>
              <p className="text-xl md:text-2xl font-[200]">
                Sometimes, all you need is a fresh perspective. Our rewriters
                will take your existing content and transform it into something
                new and exciting. We'll breathe new life into your words,
                enhancing their effectiveness and appeal.
              </p>
            </div>
            <div className="w-full">
              <img
                src="fresh.jpg"
                alt="Fresh Content"
                className="w-full rounded-tr-[200px] rounded-bl-[200px] h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* Expertise Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-2xl font-[500] mb-6">Expertise that makes a difference</h1>
              <p className="text-xl md:text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="expertise.jpg"
                alt="Expertise"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* Confidentiality Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-2xl font-[500] mb-6">Confidentiality and Professionalism</h1>
              <p className="text-xl md:text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="confidentiality.jpg"
                alt="Confidentiality"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* Captivating Storytelling Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-2xl font-[500] mb-6">Captivating Storytelling</h1>
              <p className="text-xl md:text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="storytelling.jpg"
                alt="Storytelling"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-auto object-cover object-center"
              />
            </div>
          </div>

          {/* Tailored to Perfection Section */}
          <div className="w-full flex flex-col md:flex-row md:space-x-4 my-12">
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-2xl font-[500] mb-6">Tailored to Perfection</h1>
              <p className="text-xl md:text-2xl font-[200]">
                We understand the importance of deadlines. When you work with
                Media Pitch, you can expect timely delivery without compromising
                on quality. We'll ensure your content is ready when you need it.
              </p>
            </div>
            <div className="w-full">
              <img
                src="services.jpg"
                alt="Tailored Services"
                className="w-full rounded-tl-[200px] rounded-br-[200px] h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
