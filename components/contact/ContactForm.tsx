"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useState, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const initialContactFormState: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState<ContactFormData>(
    initialContactFormState
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm({
      ...contactForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const textAreaChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setContactForm(initialContactFormState);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black w-full">
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center">
          <div className="border-t border-[#cba563] w-16 mr-4"></div>
          <h2 className="text-[#cba563] text-2xl font-bold uppercase">
            Contact us
          </h2>
          <div className="border-t border-[#cba563] w-16 ml-4"></div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-[5rem] py-4"
      >
        <div className="flex flex-col w-full max-w-md">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="bg-transparent border border-[#D8B270] p-2 rounded placeholder-white text-white"
            onChange={changeHandler}
            value={contactForm.name}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-transparent border border-[#D8B270] p-2 rounded mt-4 placeholder-white text-white"
            onChange={changeHandler}
            value={contactForm.email}
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="bg-transparent border border-[#D8B270] p-2 rounded mt-4 placeholder-white text-white"
            onChange={changeHandler}
            value={contactForm.subject}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-transparent border border-[#D8B270] p-2 rounded mt-4 placeholder-white text-white"
            onChange={textAreaChangeHandler}
            value={contactForm.message}
            required
          />
          <button
            type="submit"
            className="border border-[#D8B270] text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            {/* <ArrowRightIcon className="h-6 w-6 ml-2" /> */}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center pb-8">
        {submitStatus === "success" && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 mt-2">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
