"use client";

import { useState, FormEvent } from "react";
import { User, Mail, Edit3, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
    captcha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type } = target;
    const value = type === "checkbox" ? target.checked : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Simple captcha check
    if (formData.captcha !== "5") {
      alert("Wrong captcha!");
      return;
    }

    if (!formData.consent) {
      alert("You must accept the privacy policy.");
      return;
    }

    try {
      const res = await fetch("/api/contactapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: false,
          captcha: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="font-inter w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto bg-gray-50 pb-8 px-4 shadow p-4 py-10 ">
        <form className="space-y-2 md:space-y-6" onSubmit={handleSubmit} id="contact-booking">
          <div className="flex items-center gap-3 bg-gray-100 p-3">
            <User className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Namn"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3">
            <Mail className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3">
            <Edit3 className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              name="subject"
              placeholder="Ämne"
              value={formData.subject}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-3">
            <MessageCircle className="w-5 h-5 text-gray-500 dark:text-gray-300 mt-1" />
            <textarea
              name="message"
              placeholder="Meddelande"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white resize-none"
              required
            />
          </div>

          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-[10px] ">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            Jag godkänner webbplatsens integritetspolicy.
          </label>

          <div className="flex items-center gap-3">
            <span className="text-gray-700 dark:text-gray-300 text-xs">
              4 + 1 =
            </span>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="flex-1 bg-gray-100 dark:bg-gray-800 p-3 outline-none text-gray-900 dark:text-white text-xs"
              required
            />
          </div>

          <button
            type="submit"
           className="w-full px-8 py-3 bg-linear-to-r from-black to-[#00bfff] text-white border border-transparent text-sm uppercase tracking-wide rounded-full 
  hover:from-[#1c86ee] hover:to-black transition duration-300" >
            Skicka
          </button>
        </form>
      </div>
    </section>
  );
}
