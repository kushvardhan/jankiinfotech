"use client";

import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phone-input";
import { submitContactForm } from "@/lib/actions/contact";
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
  const [phoneValid, setPhoneValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log("📝 Submitting contact form:", formData);

      const result = await submitContactForm({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.projectDetails,
        service: "other",
      });

      if (result.success) {
        console.log("✅ Form submitted successfully:", result.contactId);
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          fullName: "",
          company: "",
          findUs: "",
          phone: "",

          email: "",
          projectDetails: "",
        });

        // 🕐 Clear the success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage("");
        }, 5000);
      } else {
        console.error("❌ Form submission failed:", result.message);
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or
            business inquiries, feel free to get in touch with us.
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

              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.includes("successfully")
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 font-semibold transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

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
                  <a
                    href="tel:+918228800345"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    +91 822‑8800‑345
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h4>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    India
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
                "                &ldquo;If anyone envisions the growth of IT and ITES culture,
                JankiInfotech manifests first to bring this vision to
                life&rdquo;"
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
