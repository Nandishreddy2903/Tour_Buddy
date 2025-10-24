import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted!");
  };

  return (
    <section className="md:min-h-screen bg-gray-50 py-8">
      <div className="px-4 py-8 md:py-16 m-auto max-w-screen-md bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          Contact Us
        </h2>
        <p className="mb-8 text-lg font-light text-center text-gray-600">
          Got any issue? Want to reach us? Let us know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@tmail.com"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let us know how we can help you."
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Leave a message..."
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
