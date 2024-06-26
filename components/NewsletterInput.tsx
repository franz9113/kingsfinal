"use client";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import * as user from "../database/repositories/user";
import React, { FormEvent, useState } from "react";

const NewsletterInput = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    // prevent form reload the page
    e.preventDefault();

    // disable the form input and button
    setIsSubmitting(true);

    // repository function call
    const response = await user.createUser({ email: email });
    console.log("create response", response);

    // show success message
    setShowSuccessMessage(true);

    // clear the email input and reset the form state
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <span className="flex justify-center text-white font-bold">
          <button className="flex items-center justify-between px-2 md:px-4 py-1 md:py-2 bg-transparent border border-[#d8b476] rounded-md">
            <span className="flex items-center">
              <input
                type="email"
                placeholder="Your mail"
                className="bg-transparent border-none outline-none text-white placeholder-white mr-1 md:mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="flex items-center">
              Submit
              <ArrowLongRightIcon className="h-4 md:h-5 w-4 md:w-5 text-white ml-1 md:ml-2" />
            </span>
          </button>
        </span>
      </form>
      {showSuccessMessage && (
        <div className="mt-4 text-center text-green-500">
          Thank you for subscribing to our newsletter!
        </div>
      )}
    </div>
  );
};

export default NewsletterInput;