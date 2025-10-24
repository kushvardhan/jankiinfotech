"use client";

import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    findUs: "",
    phone: "",
    email: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.findUs ||
      !formData.projectDetails
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (!phoneValid) {
      alert("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Clear form data
      setFormData({
        fullName: "",
        company: "",
        findUs: "",
        phone: "",
        email: "",
        projectDetails: "",
      });

      // Show thank you popup
      setShowThankYou(true);

      // Auto-hide thank you message after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you! Whether you have questions,
            feedback, or business inquiries, feel free to get in touch with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="findUs"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Where you find us? *
                </label>
                <select
                  id="findUs"
                  name="findUs"
                  value={formData.findUs}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select where you find us?</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  value={formData.phone}
                  onChange={(value, isValid) => {
                    setFormData((prev) => ({ ...prev, phone: value }));
                    setPhoneValid(isValid);
                  }}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-hidden"
                  placeholder="Enter your work email"
                />
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 resize-none  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 font-semibold transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Thank You Popup */}
          {showThankYou && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-green-100 rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received successfully. We appreciate
                    your interest and will get back to you soon!
                  </p>
                  <Button
                    onClick={() => setShowThankYou(false)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 font-semibold"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:jankiinfotech7@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    jankiinfotech7@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <a
                        href="tel:+918228800345"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +91 822‑8800‑345
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:+917632966717"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +91 763‑2966‑717
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h4>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    India
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/918228800345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.117-2.259 3.355-.504 1.238-.75 2.564-.949 4.255-.198 1.691-.198 3.382 0 5.073.198 1.691.445 2.967.949 4.255.503 1.238 1.239 2.335 2.259 3.356 1.021 1.02 2.117 1.756 3.356 2.259 1.238.504 2.564.75 4.255.949 1.691.198 3.382.198 5.073 0 1.691-.198 2.967-.445 4.255-.949 1.238-.503 2.335-1.239 3.356-2.259 1.02-1.021 1.756-2.117 2.259-3.356.504-1.238.75-2.564.949-4.255.198-1.691.198-3.382 0-5.073-.198-1.691-.445-2.967-.949-4.255-.503-1.238-1.239-2.335-2.259-3.356-1.021-1.02-2.117-1.756-3.356-2.259-1.238-.504-2.564-.75-4.255-.949-1.691-.198-3.382-.198-5.073 0z" />
                    </svg>
                    +91 822‑8800‑345
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600 mb-4">
                We have a team of computer science graduates, interns, startup
                founders, led by experienced technology leaders.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Technology Leaders - Founders & Tech Veterans</li>
                <li>• Operations Team - Project Management & Team Leaders</li>
                <li>• Engineering Team - Lead Engineers & Developers</li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-gray-600">Office Location Map</p>
                <p className="text-sm text-gray-500">
                  Interactive map coming soon
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic">
                &ldquo;If anyone envisions the growth of IT and ITES culture,
                JankiInfotech manifests first to bring this vision to
                life&rdquo;
              </blockquote>
              <p className="text-sm text-gray-600 mt-4">
                We benefit from strong technical skills, linguistic diversity,
                educational heritage, and cost-effective solutions. Our goal is
                to create a skilled and customer-success-oriented team while
                contributing to technological growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
