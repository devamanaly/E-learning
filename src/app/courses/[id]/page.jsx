"use client";
// import { useRouter } from "next/navigation";
// import { Router } from "next/router";
// import { Router } from "next/router";
// import { useEffect, useState } from "react";
// import { useEffect } from "react";
const CourseDetail = () => {
  // const router = useRouter();
  // const [course, setCourse] = useState(null);

  // const { data } = router.query;

  // Styled Course Details Page
  const data = JSON.parse(localStorage.getItem("data"));
  if (data === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* <p>{subject}</p> */}
        {/* Course Header */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600">{data.description}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold text-blue-600">
              Duration: {data.duration}
            </span>
            <span className="text-lg font-semibold text-gray-800">
              Price: {data.price}
            </span>
          </div>
        </div>

        {/* Course Content Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Curriculum</h2>
          <ul className="list-disc list-inside text-gray-700">
            {data.content?.map((topic, index) => (
              <li key={index} className="mb-2">
                {topic}
              </li>
            ))}
          </ul>
        </div>
        {/* Instructor Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Instructor</h2>
          <p className="text-lg text-gray-700">
            Learn from{" "}
            <span className="font-semibold text-gray-800">
              {data.instructor}
            </span>
            , an expert in the field with years of teaching experience.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-4 text-center"
              >
                <p className="text-gray-700 italic">{testimonial.feedback}</p>
                <h4 className="mt-4 text-blue-600 font-bold">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <a
            href={`/enrol`}
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
