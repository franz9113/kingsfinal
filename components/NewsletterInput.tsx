"use client";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NewsletterInput = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-transparent border border-[#d8b476] rounded-md">
        <span className="flex items-center">
          <input
            type="email"
            placeholder="Your mail"
            className="bg-transparent border-none outline-none sm:max-w-36 mr-2 text-white"
            disabled={isSubmitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <button
          type="submit"
          className="flex items-center text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              SUBMITTING...
            </div>
          ) : (
            <>
            <p className="regular-14">SUBMIT</p>
              
              <ArrowLongRightIcon className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsletterInput;
