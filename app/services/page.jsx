import React from 'react'

const ServicePage = () => {
  return (
    <div className="min-h-screen w-full font-outfit bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 text-white overflow-hidden">
        <img
          src="storytelling.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 h-full flex items-center justify-center bg-black/40">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 animate-slide-up">
              Crafting words that resonate and inspire action
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 -mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">
                Editing, Writing & Rewriting
              </h2>
            </div>
            <div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our team of skilled editors, writers, and rewriters is here to
                elevate your content and make it shine. Whether you need precise
                editing, captivating writing, or refreshing rewriting, we've got
                the expertise to bring your words to life.
              </p>
            </div>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection
            key={service.title}
            {...service}
            reverse={index % 2 !== 0}
          />
        ))}
      </main>
    </div>
  )
}

const ServiceSection = ({ title, text, image, reverse }) => (
  <section className={`mb-16 grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={`relative group ${reverse ? 'md:order-2' : ''}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-3xl transform transition-all duration-500 group-hover:scale-105 shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
    </div>
    
    <div className={`p-6 ${reverse ? 'md:pr-12' : 'md:pl-12'}`}>
      <h3 className="text-3xl font-medium mb-6 text-gray-900">
        {title}
      </h3>
      <p className="text-lg text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  </section>
)

const services = [
  {
    title: 'Timely Delivery',
    text: 'We prioritize your deadlines while maintaining exceptional quality standards. Your content will always arrive polished and ready for deployment.',
    image: 'time.jpg'
  },
  {
    title: 'Fresh Perspectives',
    text: 'Our creative team revitalizes existing content with innovative approaches, ensuring your message stays relevant and engaging.',
    image: 'fresh.jpg',
  },
  {
    title: 'Industry Expertise',
    text: 'Benefit from our specialized knowledge across multiple sectors, guaranteeing content that resonates with your target audience.',
    image: 'expertise.jpg'
  },
  {
    title: 'Secure Collaboration',
    text: 'Your intellectual property remains protected through our strict confidentiality protocols and professional handling.',
    image: 'confidentiality.jpg'
  },
  {
    title: 'Strategic Storytelling',
    text: 'We craft narratives that connect emotionally while driving measurable business results.',
    image: 'storytelling.jpg'
  },
  {
    title: 'Custom Solutions',
    text: 'Receive fully customized content strategies tailored to your specific business objectives and brand voice.',
    image: 'services.jpg'
  }
]

export default ServicePage