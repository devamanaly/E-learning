'use client'
import { useState } from "react";

export default function SubmitNotificationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Here you can add your form submission logic, such as sending data to a server
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Submit Your Details</h2>

        {showNotification && (
          <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-lg text-center">
            <span className="font-semibold">Form Submitted Successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
