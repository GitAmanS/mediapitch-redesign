const About = () => {
  return (
    <div className="font-outfit bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 text-white overflow-hidden">
        <img
          src="services.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 h-full flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 animate-fade-in">
              About Media Pitch
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Crafting digital excellence since 2023
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
              Welcome to Media Pitch
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your strategic partner in comprehensive digital solutions, combining
              innovation with execution to transform your brand vision into reality.
            </p>
          </div>
          <div className="relative group">
            <img
              src="hero.png"
              alt="Media Pitch Team"
              className="w-full h-96 object-cover rounded-3xl shadow-xl transform transition-all duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/20 rounded-3xl" />
          </div>
        </section>

        {/* Values Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group order-last md:order-first">
            <img
              src="mp2about.jpg"
              alt="Our Values"
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-medium text-gray-900">
              Our Foundation
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded on principles of creative innovation, technical precision,
              and client success, we navigate the digital landscape with expertise
              honed through years of industry experience. Our diverse team combines
              strategic thinking with cutting-edge execution to elevate brands in
              competitive markets.
            </p>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-4xl font-medium text-gray-900">
              Dynamic Solutions Engine
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver agile, data-driven strategies powered by:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Market intelligence & trend analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Cross-platform content ecosystems
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Performance-driven campaign architecture
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Brand experience optimization
              </li>
            </ul>
          </div>
          <div className="relative group">
            <img
              src="phone.jpg"
              alt="Digital Solutions"
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent rounded-3xl" />
          </div>
        </section>

        {/* Team CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-12 text-center mb-24">
          <h3 className="text-4xl font-light mb-8">
            Ready to Amplify Your Digital Presence?
          </h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Connect With Our Experts
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;