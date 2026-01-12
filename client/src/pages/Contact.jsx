import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MainLayout from "../layouts/mainLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the highlighted errors");
      return;
    }

    setLoading(true);

    try {
      console.log(formData,"its client datas. like send for backend.")
      await axios.post("http://localhost:5000/api/contact", formData);

      toast.success("Thank you! We’ll contact you shortly.");

      setFormData({
        name: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="relative pt-24 pb-24 bg-white overflow-hidden">
        {/* Rose ambient glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[420px] h-[420px] bg-rose-100/30 blur-3xl rounded-full" />

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6 text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-rose-500 mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Let’s design your space together
          </h1>
          <p className="mt-5 text-gray-600">
            Speak with our interior experts for transparent pricing, clear
            timelines, and thoughtful design guidance.
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* LEFT */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-700">+91 7909101024</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-gray-700">
                  Fast responses for quick discussions
                </p>
              </div>
              <div className="mt-12 pt-8 border-t">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What happens next?
                </h4>

                <ul className="space-y-3 text-gray-700">
                  <li>• We review your requirement</li>
                  <li>• Our designer contacts you</li>
                  <li>• Free design consultation</li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-[-16px] bg-rose-100/40 blur-2xl rounded-3xl" />

              <div className="relative bg-white rounded-2xl border p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border rounded-lg px-4 py-3"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full border rounded-lg px-4 py-3"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-3"
                    >
                      <option value="">Select Project Type</option>
                      <option>Full Home Interior</option>
                      <option>Modular Kitchen</option>
                      <option>Bedroom</option>
                      <option>Living Room</option>
                      <option>Commercial Interior</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your requirement"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Request Consultation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;
