"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import data from "../../utils/data.json";
import ScrollReveal from "@/components/ScrollReveal";

const ServiceDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceKey = searchParams.get("service") || "";
  const [service, setService] = useState(null);

  useEffect(() => {
    if (serviceKey && data[serviceKey]) {
      setService(data[serviceKey]);
    }
  }, [serviceKey]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  const handleGetQuote = () => {
    router.push(`/contact-us?service=${serviceKey}`);
  };

  return (
    <div className="min-h-screen w-full font-outfit bg-gray-50">
 
      <section className="relative h-[60vh] bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.pageImage}
            alt={service.editingTitle}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/40" />
        </div>
        
        
        <div className="relative h-full container max-w-6xl mx-auto px-4 flex items-end pb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            {service.editingTitle}
          </h1>
        </div>
      </section>

      <main className="container max-w-6xl mx-auto px-4 py-12">

        <p className="text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl">
          {service.editingDescription}
        </p>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {service.circleCenterText}
          </h2>
          <ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.circleArray.map((item, index) => (
              
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-100 p-4 shadow-inner">
                  <img
                    src={`https://mediapitch.in/${item.image}`}
                    alt={item.text}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {item.text}
                </h3>
                <p className="text-gray-500 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>

        <div className="text-center space-y-8">
          <div
            className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: service.finalText }}
          />
          <button
            onClick={handleGetQuote}
            className="px-10 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Quote
          </button>
        </div>
        </ScrollReveal>
      </main>
    </div>
  );
};

const Service = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading service details...</div>
      </div>
    }>
      <ServiceDetailPage />
    </Suspense>
  );
};

export default Service;