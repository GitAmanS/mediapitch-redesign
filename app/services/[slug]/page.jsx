"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import data from "../../../utils/data.json";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug && data[slug]) {
      setService(data[slug]);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  const handleGetQuote = () => {
    router.push(`/contact-us?service=${slug}`);
  };

  return (
    <div className="min-h-screen w-full font-outfit bg-gray-50">
      <section className="relative h-[50vh] bg-gray-900 text-white overflow-hidden">
        <img
          src={service.pageImage}
          alt={service.editingTitle}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 h-full flex items-center justify-center bg-black/50">
          <h1 className="text-5xl md:text-6xl font-light text-center">
            {service.editingTitle}
          </h1>
        </div>
      </section>

      <main className="w-full md:px-32 mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
        <p className="text-lg text-gray-600">{service.editingDescription}</p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            {service.circleCenterText}
          </h2>

          {service.circleArray.map((item, index) => (
            <div
              key={index}
              className="p-6 mb-6 rounded-xl shadow-lg bg-white flex flex-col items-center text-center border-l-4 border-gray-300"
              style={{ borderColor: item.color ? item.color : "#ccc" }}
            >
              <img
                src={`https://mediapitch.in/${item.image}`}
                alt={item.text}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{item.text}</h3>
              <p className="text-gray-600 text-md mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="text-lg text-gray-800"
            dangerouslySetInnerHTML={{ __html: service.finalText }}
          />
        </div>

        {/* "Get a Quote" Button */}
        <div className="mt-10 text-center">
          <button
            onClick={handleGetQuote}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
