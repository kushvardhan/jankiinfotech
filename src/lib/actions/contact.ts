// Frontend-only contact form validation
// No backend submission - form data is cleared and thank you message is shown

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
};

export async function submitContactForm(formData: ContactFormData) {
  try {
    console.log("📝 Contact form submitted (frontend only):", {
      name: formData.name,
      email: formData.email,
      service: formData.service || "other",
    });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      contactId: "frontend-submission",
    };
  } catch (error) {
    console.error("❌ Error submitting contact form:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
