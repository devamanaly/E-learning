'use client'
import { useState } from "react";
import Link from "next/link";

export default function EnrollNow() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    address: "",
    course: "",
    city: "",
    country: "",
    education: "",
    experience: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // You can add form submission logic here (e.g., sending data to an API or backend)
  };

  const courses = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "Graphic Design" },
    { id: 6, name: "App Development" },
    { id: 7, name: "Cloud Computing" },
    { id: 8, name: "Cyber Security" },
    { id: 9, name: "Blockchain Development" },
    { id: 10, name: "Game Development" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-7xl w-full space-y-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Enroll Now</h2>

        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Thank you for enrolling!</h3>
            <p className="text-gray-600 mb-4">We have received your enrollment details. Check your email for confirmation.</p>
            <Link href="/" className="text-blue-600 font-bold hover:underline">
             Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-lg font-semibold text-gray-700 mb-2">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-lg font-semibold text-gray-700 mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-lg font-semibold text-gray-700 mb-2">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-lg font-semibold text-gray-700 mb-2">Highest Education</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-lg font-semibold text-gray-700 mb-2">Work Experience (in years)</label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Course Selection */}
            <div>
              <label htmlFor="course" className="block text-lg font-semibold text-gray-700 mb-2">Select Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Enrollment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
