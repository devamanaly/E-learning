"use client";
// pages/courses.js
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { courseData } from "@/components/coursesData";
export default function Courses() {
  const [subject, setSubject] = useState(1);
  const router = useRouter();

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Learn how to build modern websites with HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Analyze data and build machine learning models with Python.",
    },
    {
      id: 3,
      title: "Graphic Design",
      description:
        "Master the art of design with tools like Photoshop and Illustrator.",
    },
  ];
  

  if (!courseData[subject]) {
    return <h2>there is no such a data</h2>;
  }
  const data = courseData[subject];

  localStorage.setItem("data", JSON.stringify(data));
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Explore Our Courses
            {<p>{data.title}</p>}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{course.description}</p>
                  <div className="mt-6">
                    <Link
                      href={{ pathname: `/courses/${course.id}` }}
                      onClick={() => setSubject(course.id)}
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
                    >
                      View Details →{console.log(data)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

