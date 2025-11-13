import React, { useState, useRef } from "react";
import { CheckCircle, IceCream, Coffee, CakeSlice } from "lucide-react";

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    eventType: "",
    menuPreference: "",
    dietaryRequirements: "",
    venue: "",
    additionalInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your catering request has been submitted successfully. We'll contact you within 24 hours
            to discuss your event details and provide a customized dessert experience.
          </p>
          <p className="text-md text-gray-500">
            You will also receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-pink-60 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dessert Catering Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make your celebration sweeter with Scoops and Sips Desserts premium catering experience.
          </p>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            Why Choose Scoops and Sips Desserts?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 rounded-full p-5 mb-4">
                <IceCream className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gourmet Desserts</h3>
              <p className="text-gray-600">
                Indulge in handcrafted ice creams, waffles, and sundaes made fresh for your event.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 rounded-full p-5 mb-4">
                <CakeSlice className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Menus</h3>
              <p className="text-gray-600">
                Tailor your dessert bar with a selection of our signature scoops, toppings, and treats.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 rounded-full p-5 mb-4">
                <Coffee className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Full-Service Setup</h3>
              <p className="text-gray-600">
                From setup to serving, our team ensures your guests enjoy a delightful dessert experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Request Form */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Request a Dessert Bar</h2>
            <p className="text-lg text-gray-600">
              Tell us about your event, and we’ll create a customized dessert experience for you
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Phone & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-25">10-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Time *
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    required
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Venue *
                </label>
                <input
                  type="text"
                  name="venue"
                  required
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Full address of your event"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, theme, or dessert preferences..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                Submit Catering Request
              </button>
            </form>

            {/* Hidden FormSubmit form */}
            <form
              ref={hiddenFormRef}
              action="https://formsubmit.co/naniranjith720@gmail.com"
              method="POST"
              style={{ display: "none" }}
            >
              {Object.keys(formData).map((key) => (
                <input
                  key={key}
                  type="hidden"
                  name={key}
                  value={formData[key as keyof typeof formData]}
                />
              ))}
              <input
                type="hidden"
                name="_subject"
                value="New Catering Request - Scoops and Sips Desserts"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value={`Hello Sweet Friend 🍨,

Thank you for reaching out to Scoops and Sips Desserts Catering! We’ve received your request and will be in touch within 24 hours to plan your perfect dessert experience.

Warm regards,
The Scoops and Sips Desserts Team 🍰`}
              />
              <input type="hidden" name="_template" value="table" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;
