import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you - whether it’s for catering, special events, or feedback!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-pink-700 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      211 NORTH STREET LS7 2AA LEEDS
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+44 075260 37950</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">scoopsandsipsdesserts@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <div className="text-gray-600">
                      <p>Mon - Sun: 12:00 PM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-md h-64 border border-pink-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357.65861013000534!2d-1.535088887585818!3d53.807389251478405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795d36ee2943cd%3A0xf00323bd94480286!2sScoops%20and%20Sips%20Desserts!5e1!3m2!1sen!2sin!4v1763084853336!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-pink-100">
              <h2 className="text-3xl font-bold text-pink-700 mb-6">Send us a Message</h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-pink-50 border border-pink-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2" />
                  <span className="text-pink-700">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form
                action="https://formsubmit.co/naniranjith720@gmail.com"
                method="POST"
                className="space-y-6"
                onSubmit={() => setIsSubmitted(true)}
              >
                {/* Hidden fields for autoresponder & subject */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Customer Inquiry - Scoops and Sips Desserts"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value={`Thank you for contacting Scoops and Sips Desserts! 🍨\n\nWe’ve received your message and will get back to you soon.\n\nBest wishes,\nThe Scoops and Sips Desserts Team`}
                />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-400 focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-400 focus:border-pink-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-400 focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-400 focus:border-pink-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Catering">Catering Request</option>
                      <option value="Order Issue">Order Issue</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-400 focus:border-pink-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
