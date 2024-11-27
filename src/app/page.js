// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Learn Anytime, Anywhere
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Explore top-quality courses designed for your success!
          </p>
          <Link href={`/courses`} className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
  
              Browse Courses
            
          </Link>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="browse-courses" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Example Static Data */}
            {["Web devopment" ,"Data Science" , "Grapic Desining"].map((course) => (
              <div
                key={course}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                {/* <img
                  src="https://via.placeholder.com/400"
                  alt="Course Thumbnail"
                  className="w-full h-56 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-blue-600 mb-2">{course}</h3>
                  <p className="text-gray-600 text-base mb-4">
                    A short description of the course.
                  </p>
                  <Link href="#course-detail" className="text-blue-600 font-semibold hover:underline transition duration-300 ease-in-out" >
                     
                      View Details →
                    
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <p className="text-gray-700 text-base mb-4">
                  This platform has changed the way I learn. Highly recommend it to everyone!
                </p>
                <h4 className="font-semibold text-blue-600">Student Name</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-24 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to start learning?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of students who are learning new skills and advancing
          their careers.
        </p>
        <Link className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"  href="#get-started">
       
            Get Started
          
        </Link>
      </section>
    </div>
  );
}
